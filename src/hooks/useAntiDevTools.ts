import { useEffect } from 'react';

const PRINT_STYLE_ID = 'anti-devtools-print-style';

export function useAntiDevTools() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isBlockedDevToolsKey = event.key === 'F12';
      const isBlockedPrintShortcut = (event.ctrlKey || event.metaKey) && key === 'p';

      if (!isBlockedDevToolsKey && !isBlockedPrintShortcut) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    let ownsPrintStyle = false;
    let printStyle = document.getElementById(PRINT_STYLE_ID) as HTMLStyleElement | null;

    if (!printStyle) {
      printStyle = document.createElement('style');
      printStyle.id = PRINT_STYLE_ID;
      printStyle.textContent = `
        @media print {
          html, body {
            background: #fff !important;
          }

          body {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(printStyle);
      ownsPrintStyle = true;
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });

      if (ownsPrintStyle) {
        printStyle?.remove();
      }
    };
  }, []);
}
