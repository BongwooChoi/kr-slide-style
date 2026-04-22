// NotebookLM 슬라이드 스타일 자동 입력 Content Script
// BananaNL처럼 슬라이드 설정 다이얼로그 내부에 버튼을 직접 삽입

// ─── 팝업에서 메시지 수신 ───
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'applyStyle') {
    injectPromptIntoSlideField(message.prompt);
    sendResponse({ success: true });
  }
  return true;
});

// ─── 슬라이드 지침 textarea 찾기 ───
function findSlideTextarea() {
  // 1순위: aria-label로 정확히 매칭 (실제 DOM에서 확인된 값)
  const byLabel = document.querySelector(
    'textarea[aria-label*="슬라이드 자료"], textarea[aria-label*="slide deck"], textarea[aria-label*="Slide deck"]'
  );
  if (byLabel && isVisible(byLabel)) return byLabel;

  // 2순위: placeholder 키워드로 매칭
  const byPlaceholder = document.querySelector(
    'textarea[placeholder*="청중"], textarea[placeholder*="스타일"], textarea[placeholder*="audience"], textarea[placeholder*="style"]'
  );
  if (byPlaceholder && isVisible(byPlaceholder)) return byPlaceholder;

  // 3순위: 슬라이드 다이얼로그 안의 textarea (mat-dialog-actions가 있는 다이얼로그)
  const dialog = document.querySelector('mat-dialog-container, [role="dialog"]');
  if (dialog) {
    const textareas = dialog.querySelectorAll('textarea');
    for (const ta of textareas) {
      if (isVisible(ta)) return ta;
    }
  }

  return null;
}

// ─── textarea에 텍스트 삽입 (Angular 호환) ───
function injectPromptIntoSlideField(text) {
  const textarea = findSlideTextarea();
  if (!textarea) {
    copyToClipboardFallback(text);
    return;
  }

  textarea.focus();

  // Angular의 native value setter를 사용해야 프레임워크가 변경을 감지함
  const nativeSetter = Object.getOwnPropertyDescriptor(
    HTMLTextAreaElement.prototype, 'value'
  )?.set;

  if (nativeSetter) {
    nativeSetter.call(textarea, text);
  } else {
    textarea.value = text;
  }

  // Angular/React 이벤트 디스패치
  textarea.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  textarea.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  textarea.dispatchEvent(new Event('keyup', { bubbles: true }));
  textarea.dispatchEvent(new Event('blur', { bubbles: true }));
  textarea.focus();

  showNotification('스타일 지침이 입력되었습니다!', 'success');
}

// ─── 슬라이드 다이얼로그 감지 & 버튼 삽입 ───
function tryInjectDialogButton() {
  // mat-dialog-actions 찾기 (슬라이드 생성 다이얼로그의 하단 액션 바)
  const dialogActions = document.querySelector('mat-dialog-actions.mat-mdc-dialog-actions');
  if (!dialogActions) return;

  // 이미 삽입되어 있으면 무시
  if (dialogActions.querySelector('[data-krstyle-ui]')) return;

  // 슬라이드 다이얼로그인지 확인 (textarea가 있는 다이얼로그)
  const dialog = dialogActions.closest('mat-dialog-container, [role="dialog"]')
    || dialogActions.parentElement;
  if (!dialog) return;
  const textarea = dialog.querySelector('textarea');
  if (!textarea) return;

  // ─── 버튼 컨테이너 생성 (BananaNL과 같은 위치) ───
  const container = document.createElement('div');
  container.setAttribute('data-krstyle-ui', '1');
  container.style.cssText = 'position:relative; display:inline-block; max-width:520px;';

  // 메인 버튼 — 흰 배경 + KB Yellow 테두리 (KB 콘텐츠 프레임 스타일)
  const mainBtn = document.createElement('button');
  mainBtn.type = 'button';
  mainBtn.style.cssText = `
    height: 40px; width: 100%; border-radius: 20px; padding: 0 16px;
    background-color: #FFFFFF; border: 2px solid #FFBC00;
    cursor: pointer; font-family: 'Malgun Gothic', "Google Sans", Roboto, sans-serif;
    font-size: 14px; font-weight: 700; color: #000000;
    display: flex; align-items: center; justify-content: center;
    transition: 0.2s; user-select: none; box-sizing: border-box; gap: 6px;
  `;
  mainBtn.innerHTML = '<span style="font-size:16px;">🎨</span><span style="font-weight:700; white-space:nowrap;">한국 기업 스타일</span>';
  mainBtn.addEventListener('mouseenter', () => { mainBtn.style.backgroundColor = '#FFF2CC'; });
  mainBtn.addEventListener('mouseleave', () => { mainBtn.style.backgroundColor = '#FFFFFF'; });

  // 드롭다운 패널
  const dropdown = document.createElement('div');
  dropdown.style.cssText = `
    display: none; position: absolute; bottom: 100%; left: 0;
    min-width: 200px; padding-bottom: 10px; z-index: 1000;
  `;
  dropdown.innerHTML = buildDropdownHTML();

  container.appendChild(mainBtn);
  container.appendChild(dropdown);

  // ─── 삽입 위치: dialog-actions 내 왼쪽 영역 ───
  // BananaNL처럼 margin-right:auto인 div가 있으면 그 안에, 없으면 새로 만들기
  let leftArea = dialogActions.querySelector('div[style*="margin-right: auto"], div[style*="margin-right:auto"]');
  if (!leftArea) {
    leftArea = document.createElement('div');
    leftArea.style.cssText = 'display:flex; align-items:center; gap:8px; margin-right:auto;';
    dialogActions.prepend(leftArea);
  }
  leftArea.appendChild(container);

  // ─── 이벤트 바인딩 ───
  // 메인 버튼 토글
  mainBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.style.display !== 'none';
    dropdown.style.display = isOpen ? 'none' : 'block';
  });

  // 스타일 항목 클릭 → 즉시 입력
  dropdown.querySelectorAll('.krstyle-item').forEach(item => {
    item.addEventListener('click', () => {
      const key = item.dataset.style;
      const style = CORPORATE_STYLES[key];
      injectPromptIntoSlideField(style.prompt);
      dropdown.style.display = 'none';
      // 버튼 텍스트를 선택된 스타일로 변경
      mainBtn.innerHTML = `<span style="font-size:16px;">🎨</span><span style="font-weight:700; white-space:nowrap;">${style.name}</span>`;
    });
  });

  // 바깥 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

// ─── 드롭다운 HTML 생성 ───
function buildDropdownHTML() {
  const items = STYLE_KEYS.map(key => {
    const s = CORPORATE_STYLES[key];
    return `
      <div class="krstyle-item" data-style="${key}" style="
        padding: 9px 14px; cursor: pointer; font-size: 13px; color: #000000;
        display: flex; align-items: center; gap: 10px;
        transition: 0.15s cubic-bezier(0.4,0,0.2,1);
        border-radius: 6px; margin: 2px 6px;
        font-family: 'Malgun Gothic', 'Google Sans', sans-serif;
      ">
        <div style="
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: ${s.colors.primary};
        "></div>
        <div style="display:flex; flex-direction:column; min-width:0; align-items:flex-start;">
          <span style="font-weight:700; font-size:12px; color:#000000; text-align:left;">${s.name}</span>
          <span style="font-size:9px; color:#545045; text-align:left;">${s.nameEn}</span>
        </div>
      </div>`;
  }).join('');

  return `
    <div style="
      display: flex; flex-direction: column; background: white;
      border-radius: 10px;
      border: 1.5px solid #FFBC00;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
      overflow: hidden; width: 260px;
    ">
      <div style="
        padding: 10px 16px; background: #FFFFFF;
        border-bottom: 2px solid #FFBC00;
        font-size: 14px; font-weight: 700; color: #000000;
        display: flex; align-items: center; gap: 6px;
        font-family: 'Malgun Gothic', 'Google Sans', sans-serif;
      ">
        🎨 한국 기업 스타일
      </div>
      <div style="
        display: flex; flex-direction: column; max-height: 340px;
        overflow-y: auto; padding: 4px 0;
      ">
        ${items}
      </div>
    </div>`;
}

// ─── 유틸리티 ───
function isVisible(el) {
  if (!el) return false;
  if (el.offsetParent === null) {
    const style = getComputedStyle(el);
    if (style.position !== 'fixed') return false;
  }
  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function copyToClipboardFallback(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(
      '슬라이드 지침 필드를 찾지 못했습니다.\n클립보드에 복사되었습니다. Ctrl+V로 붙여넣기 하세요.',
      'warning'
    );
  }).catch(() => {
    showNotification('자동 입력에 실패했습니다.', 'error');
  });
}

function showNotification(message, type = 'success') {
  const existing = document.getElementById('krstyle-notification');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.id = 'krstyle-notification';
  el.className = `krstyle-notify krstyle-notify-${type}`;
  el.textContent = message;
  document.body.appendChild(el);

  requestAnimationFrame(() => el.classList.add('krstyle-notify-show'));
  setTimeout(() => {
    el.classList.remove('krstyle-notify-show');
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ─── DOM 변화 감지 → 다이얼로그가 열릴 때마다 버튼 삽입 시도 ───
const observer = new MutationObserver(() => {
  tryInjectDialogButton();
});

observer.observe(document.body, { childList: true, subtree: true });

// 초기 실행
tryInjectDialogButton();
