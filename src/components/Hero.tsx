import { weddingConfig } from '../config/weddingConfig';
import { Language, Translation } from '../i18n/translations';

export function Hero({ language, t }: { language: Language; t: Translation }) {
  const names = weddingConfig.couple[language];
  const image = weddingConfig.images.hero;
  return <section className="hero" id="top">
    <div className={`hero-visual ${image ? '' : 'image-fallback'}`} aria-hidden={!image}>
      {image && <img src={image} alt={`${names.name1} & ${names.name2}`} width="854" height="1280" fetchPriority="high" decoding="async" />}
      {!image && <div className="fallback-mark"><span>{weddingConfig.initials.first}</span><i>&</i><span>{weddingConfig.initials.second}</span></div>}
    </div>
    <div className="hero-content">
      <p className="eyebrow hero-a1">{t.hero.eyebrow}</p>
      <h1 className="hero-names hero-a2"><span>{names.name1}</span><i>&</i><span>{names.name2}</span></h1>
      <p className="hero-date hero-a3">{weddingConfig.weddingDate[language]}</p>
      <div className="hero-rule hero-a4" />
      <p className="hero-lead hero-a5">{t.hero.lead}</p>
      <p className="hero-sub hero-a6">{t.hero.sub}</p>
    </div>
    <a className="scroll-indicator hero-a7" href="#gifts" aria-label={t.a11y.scroll}><span>{t.hero.scroll}</span><i>↓</i></a>
  </section>;
}

export function Marquee() {
  const content = 'EUR · USD · USDT · USDC · CAR · VILLA IN SPAIN · ';
  return <div className="marquee" aria-label="EUR, USD, USDT, USDC, CAR, VILLA IN SPAIN"><div>{content.repeat(3)}</div></div>;
}
