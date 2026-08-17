import { useCallback, useEffect, useState } from 'react';
import { CustomCursor, Header, ScrollProgress } from './components/Chrome';
import { GiftModal } from './components/GiftModal';
import { GiftSection } from './components/Gifts';
import { Hero, Marquee } from './components/Hero';
import { ContactCTA, Footer, Ranking, Story } from './components/Sections';
import { GiftId } from './data/gifts';
import { useLanguage } from './i18n/useLanguage';

export default function App() {
  const { language, setLanguage, t, transitioning } = useLanguage();
  const [modalGift, setModalGift] = useState<GiftId | null>(null);
  const [modalTrigger, setModalTrigger] = useState<HTMLElement | null>(null);
  const closeModal = useCallback(() => setModalGift(null), []);
  const openModal = useCallback((gift: GiftId, trigger: HTMLElement) => { setModalTrigger(trigger); setModalGift(gift); }, []);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const target = (event.target as HTMLElement).closest<HTMLElement>('.magnetic');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${(event.clientX - rect.left - rect.width / 2) * .08}px`);
      target.style.setProperty('--my', `${(event.clientY - rect.top - rect.height / 2) * .08}px`);
    };
    const reset = (event: MouseEvent) => { const target = (event.target as HTMLElement).closest<HTMLElement>('.magnetic'); if (target) { target.style.setProperty('--mx', '0px'); target.style.setProperty('--my', '0px'); } };
    document.addEventListener('mousemove', move); document.addEventListener('mouseout', reset);
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseout', reset); };
  }, []);

  return <>
    <ScrollProgress /><Header language={language} setLanguage={setLanguage} t={t} /><CustomCursor />
    <main className={transitioning ? 'language-fade' : ''}>
      <Hero language={language} t={t} /><Marquee /><GiftSection t={t} onOpen={openModal} /><Ranking t={t} /><Story t={t} language={language} /><ContactCTA t={t} />
    </main>
    <Footer t={t} /><GiftModal giftId={modalGift} t={t} onClose={closeModal} returnFocus={modalTrigger} />
  </>;
}
