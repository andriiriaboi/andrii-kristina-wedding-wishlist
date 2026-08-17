import { KeyboardEvent, MouseEvent, useState } from 'react';
import { GiftId, gifts } from '../data/gifts';
import { Translation } from '../i18n/translations';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ChampagneBurst() {
  return <div className="burst" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} style={{ '--i': index } as React.CSSProperties} />)}</div>;
}

export function GiftSection({ t, onOpen }: { t: Translation; onOpen: (id: GiftId, trigger: HTMLElement) => void }) {
  const ref = useScrollReveal<HTMLElement>();
  const reduced = useReducedMotion();
  const [badgeClicks, setBadgeClicks] = useState(0);
  const [toast, setToast] = useState('');
  const [burst, setBurst] = useState(false);

  const clickBadge = () => {
    const next = badgeClicks + 1; setBadgeClicks(next);
    if (next === 4 || next === 8) {
      setToast(next === 4 ? t.egg1 : t.egg2);
      window.setTimeout(() => setToast(''), 2500);
    }
  };
  const badgeKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); clickBadge(); }
  };
  const open = (event: MouseEvent<HTMLButtonElement>, id: GiftId) => {
    if (id === 'eur' && !reduced) { setBurst(true); window.setTimeout(() => setBurst(false), 900); }
    onOpen(id, event.currentTarget);
  };

  return <section className="gift-section reveal" id="gifts" ref={ref}>
    <header className="section-intro"><p className="eyebrow">{t.giftsIntro.eyebrow}</p><h2>{t.giftsIntro.title}</h2><p>{t.giftsIntro.copy}</p></header>
    <div className="gift-layout">
      {gifts.slice(0, 4).map((gift, index) => {
        const text = t.gifts[gift.id];
        return <article className={`gift-card ${gift.className}`} key={gift.id} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
          <div className="gift-top">
            {'badge' in text && gift.id === 'eur' && <span className="favorite-badge" role="button" tabIndex={0} onClick={clickBadge} onKeyDown={badgeKey}>{text.badge}</span>}
            {'badge' in text && gift.id === 'villa' && <span className="dream-badge">{text.badge}</span>}
            {'label' in text && <span className="most-wanted">{text.label}</span>}
          </div>
          <div className="gift-symbol" aria-hidden="true">{gift.symbol}</div>
          <div className="gift-copy"><h3>{text.title}</h3><p>“{text.copy}”</p></div>
          <button className="gift-cta magnetic" onClick={(event) => open(event, gift.id)}><span>{text.cta}</span><i aria-hidden="true">→</i></button>
          {gift.id === 'eur' && burst && <ChampagneBurst />}
        </article>;
      })}
    </div>
    <div className="dream-list" aria-label={`${t.gifts.car.title}, ${t.gifts.villa.title}`}>
      {gifts.slice(4).map((gift) => {
        const text = t.gifts[gift.id];
        return <button className="dream-row" key={gift.id} onClick={(event) => onOpen(gift.id, event.currentTarget)}>
          <span className="dream-row-symbol" aria-hidden="true">{gift.symbol}</span>
          <span className="dream-row-copy"><small>{'badge' in text ? text.badge : ''}</small><strong>{text.title}</strong><em>“{text.copy}”</em></span>
          <span className="dream-row-action">{text.cta} <i aria-hidden="true">→</i></span>
        </button>;
      })}
    </div>
    <div className={`toast ${toast ? 'toast--show' : ''}`} role="status" aria-live="polite">{toast}</div>
  </section>;
}
