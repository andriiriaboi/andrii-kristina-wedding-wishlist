import { useEffect, useRef } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { GiftId } from '../data/gifts';
import { Translation } from '../i18n/translations';

export function GiftModal({ giftId, t, onClose, returnFocus }: { giftId: GiftId | null; t: Translation; onClose: () => void; returnFocus: HTMLElement | null }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!giftId) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    const focusables = () => Array.from(dialog?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])') ?? []);
    window.setTimeout(() => focusables()[0]?.focus(), 30);
    const keydown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const items = focusables(); if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', keydown); returnFocus?.focus(); };
  }, [giftId, onClose, returnFocus]);

  if (!giftId) return null;
  const content = (() => {
    if (giftId === 'eur' || giftId === 'usd') return { title: t.modal[giftId], copy: t.modal.money };
    if (giftId === 'usdt' || giftId === 'usdc') return { title: t.modal.cryptoTitle, copy: t.modal.crypto };
    if (giftId === 'car') return { title: t.modal.carTitle, copy: t.modal.car };
    return { title: t.modal.villaTitle, copy: t.modal.villa };
  })();
  return <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="gift-modal-title">
      <button className="modal-close" onClick={onClose} aria-label={t.a11y.close}>×</button>
      <p className="eyebrow">{t.gifts[giftId].title}</p><h2 id="gift-modal-title">{content.title}</h2><p>{content.copy}</p>
      <div className="modal-actions">
        <a className="contact-button" href={weddingConfig.telegram.url} target="_blank" rel="noopener noreferrer">{t.modal.telegram}<span>↗</span></a>
        <a className="contact-button contact-button--light" href={weddingConfig.whatsapp.url} target="_blank" rel="noopener noreferrer">{t.modal.whatsapp}<span>↗</span></a>
      </div>
    </div>
  </div>;
}
