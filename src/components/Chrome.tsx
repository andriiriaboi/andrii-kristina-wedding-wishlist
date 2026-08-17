import { useEffect, useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { Language, Translation } from '../i18n/translations';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />;
}

export function Header({ language, setLanguage, t }: { language: Language; setLanguage: (l: Language) => void; t: Translation }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
    <a className="monogram" href="#top" aria-label={`${weddingConfig.initials.first} & ${weddingConfig.initials.second}`}>{weddingConfig.initials.first} <i>&</i> {weddingConfig.initials.second}</a>
    <nav className="languages" aria-label={t.a11y.menu}>
      {(['uk', 'en', 'ru'] as Language[]).map((lang, index) => <span key={lang}>
        <button className={language === lang ? 'active' : ''} aria-current={language === lang ? 'true' : undefined} onClick={() => setLanguage(lang)}>{lang === 'uk' ? 'UA' : lang.toUpperCase()}</button>
        {index < 2 && <b aria-hidden="true">·</b>}
      </span>)}
    </nav>
  </header>;
}

export function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;
    let x = 0, y = 0, rx = 0, ry = 0, frame = 0;
    const move = (event: MouseEvent) => { x = event.clientX; y = event.clientY; dot.style.transform = `translate3d(${x}px,${y}px,0)`; };
    const tick = () => { rx += (x - rx) * .16; ry += (y - ry) * .16; ring.style.transform = `translate3d(${rx}px,${ry}px,0)`; frame = requestAnimationFrame(tick); };
    window.addEventListener('mousemove', move); frame = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame); };
  }, []);
  return <><span className="cursor-dot" aria-hidden="true" /><span className="cursor-ring" aria-hidden="true" /></>;
}
