'use client';

import { useEffect, useRef, useState } from 'react';

/** A single provider-issued native placement, after the homepage content. */
export default function AdsterraNative() {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const placement = element.querySelector('[id^="container-"]');
    const hasCreative = () => Boolean(placement?.querySelector('iframe, img, video, a[href]'));
    let expired = false;
    const update = () => { if (hasCreative()) setVisible(true); else if (expired) setVisible(false); };
    const observer = new MutationObserver(update);
    if (placement) observer.observe(placement, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => { expired = true; update(); }, 12000);
    const script = document.createElement('script');
    script.src = 'https://pl31805566.profitableratecpmnetwork.com/efd23f82624d0d540b21447082785a9d/invoke.js';
    script.async = true;
    script.dataset.cfasync = 'false';
    element.appendChild(script);
    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
      script.remove();
    };
  }, []);

  return (
    <aside aria-label="Advertisement" data-adsterra-native style={{
      display: visible ? 'block' : 'none',
      boxSizing: 'border-box', width: '100%', maxWidth: '1120px',
      margin: '40px auto', padding: '24px 16px', overflow: 'hidden',
      borderTop: '1px solid rgba(128,128,128,0.2)',
      borderBottom: '1px solid rgba(128,128,128,0.2)',
    }}>
      <p style={{ margin: '0 0 16px', textAlign: 'center', fontSize: '11px',
        lineHeight: 1.5, letterSpacing: '0.08em', opacity: 0.7 }}>Advertisement</p>
      <div ref={host} style={{ width: '100%', minWidth: 0, maxWidth: '100%', minHeight: '180px' }}>
        <div id="container-efd23f82624d0d540b21447082785a9d" style={{ maxWidth: '100%' }} />
      </div>
    </aside>
  );
}
