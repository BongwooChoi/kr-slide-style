let selectedStyle = null;

// 스타일 카드 렌더링
function renderStyleCards() {
  const grid = document.getElementById('styleGrid');
  grid.innerHTML = '';

  for (const key of STYLE_KEYS) {
    const style = CORPORATE_STYLES[key];
    const card = document.createElement('div');
    card.className = 'style-card';
    card.dataset.style = key;
    card.style.setProperty('--card-color', style.colors.primary);
    card.style.setProperty('--card-bg', style.colors.primary + '12');

    const initials = style.nameEn.substring(0, 2).toUpperCase();

    card.innerHTML = `
      <div class="color-dot" style="background: ${style.colors.primary};">${initials}</div>
      <div class="card-info">
        <span class="card-name">${style.name}</span>
        <span class="card-name-en">${style.nameEn}</span>
      </div>
      <span class="check-icon">✓</span>
    `;

    card.addEventListener('click', () => selectStyle(key));
    grid.appendChild(card);
  }
}

// 스타일 선택
function selectStyle(key) {
  selectedStyle = key;
  const style = CORPORATE_STYLES[key];

  // 카드 선택 상태 업데이트
  document.querySelectorAll('.style-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.style === key);
  });

  // 버튼 활성화
  document.getElementById('btnApply').disabled = false;
  document.getElementById('btnCopy').disabled = false;

  // 미리보기 표시
  showPreview(style);

  // 선택 저장
  chrome.storage.local.set({ lastSelectedStyle: key });
}

// 미리보기 표시
function showPreview(style) {
  const section = document.getElementById('previewSection');
  section.classList.remove('hidden');

  // 색상 칩 렌더링
  const colorsDiv = document.getElementById('previewColors');
  const colorEntries = [
    { label: '주', color: style.colors.primary },
    { label: '보조', color: style.colors.secondary },
    { label: '강조', color: style.colors.accent },
    { label: '배경', color: style.colors.background },
    { label: '텍스트', color: style.colors.text }
  ];

  colorsDiv.innerHTML = colorEntries.map(c => {
    const isLight = isLightColor(c.color);
    return `<div class="color-chip" style="background:${c.color}; ${isLight ? 'color:#333; text-shadow:none; border: 1px solid #ddd;' : ''}">${c.label}</div>`;
  }).join('');

  // 프롬프트 미리보기 (앞부분만)
  const previewText = document.getElementById('previewText');
  const lines = style.prompt.split('\n').slice(0, 8).join('\n');
  previewText.textContent = lines + '\n...';
}

// 밝은 색인지 판단
function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 186;
}

// 스타일 적용 (NotebookLM에 입력)
document.getElementById('btnApply').addEventListener('click', async () => {
  if (!selectedStyle) return;

  const style = CORPORATE_STYLES[selectedStyle];

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    const isNotebookPage = tab.url && (
      tab.url.includes('notebooklm.google.com') ||
      tab.url.includes('notebook.google.com')
    );
    if (!isNotebookPage) {
      showStatus('NotebookLM(Gemini Notebook) 페이지에서 사용해주세요.', 'error');
      return;
    }

    // content script가 로드되어 있는지 확인하고, 없으면 주입
    try {
      await chrome.tabs.sendMessage(tab.id, {
        action: 'applyStyle',
        styleKey: selectedStyle,
        prompt: style.prompt
      });
    } catch (injectionErr) {
      // content script가 아직 로드되지 않은 경우 수동 주입
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['styles.js', 'content.js']
      });
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['content.css']
      });
      // 주입 후 다시 메시지 전송
      await chrome.tabs.sendMessage(tab.id, {
        action: 'applyStyle',
        styleKey: selectedStyle,
        prompt: style.prompt
      });
    }

    showStatus(`${style.name} 스타일 적용 완료!`, 'success');
  } catch (err) {
    // 자동 입력 실패 시 클립보드에 복사
    try {
      await navigator.clipboard.writeText(style.prompt);
      showStatus('자동 입력 실패 — 지침이 클립보드에 복사됨. 붙여넣기(Ctrl+V)하세요.', 'info');
    } catch {
      showStatus('적용 실패 — 페이지 새로고침 후 다시 시도하세요.', 'error');
    }
    console.error(err);
  }
});

// 클립보드 복사
document.getElementById('btnCopy').addEventListener('click', async () => {
  if (!selectedStyle) return;

  const style = CORPORATE_STYLES[selectedStyle];

  try {
    await navigator.clipboard.writeText(style.prompt);
    showStatus('지침이 클립보드에 복사되었습니다!', 'success');
  } catch (err) {
    // Fallback: textarea 방식
    const textarea = document.createElement('textarea');
    textarea.value = style.prompt;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showStatus('지침이 클립보드에 복사되었습니다!', 'success');
  }
});

// 상태 표시
function showStatus(message, type) {
  const bar = document.getElementById('status-bar');
  const text = document.getElementById('status-text');
  bar.className = `status-bar ${type}`;
  text.textContent = message;

  setTimeout(() => {
    bar.className = 'status-bar hidden';
  }, 3000);
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  renderStyleCards();

  // 이전 선택 복원
  chrome.storage.local.get('lastSelectedStyle', (data) => {
    if (data.lastSelectedStyle && CORPORATE_STYLES[data.lastSelectedStyle]) {
      selectStyle(data.lastSelectedStyle);
    }
  });
});
