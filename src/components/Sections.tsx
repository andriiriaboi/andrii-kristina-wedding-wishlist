import { weddingConfig } from '../config/weddingConfig';
import { Language, Translation } from '../i18n/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Ranking({ t }: { t: Translation }) {
  const ref = useScrollReveal<HTMLElement>();
  const marks = ['🥇', '🥈', '🥉', '🚗', '🏡'];
  return <section className="ranking reveal" ref={ref}>
    <div className="ranking-heading"><p className="eyebrow">{t.ranking.eyebrow}</p><h2>{t.ranking.title}</h2><p>{t.ranking.note}</p></div>
    <ol>{t.ranking.items.map((item, index) => <li key={item} className={index === 0 ? 'ranking-first' : ''}><span>{marks[index]}</span><b>{item}</b></li>)}</ol>
  </section>;
}

export function Story({ t, language }: { t: Translation; language: Language }) {
  const ref = useScrollReveal<HTMLElement>();
  const names = weddingConfig.couple[language];
  return <section className="story reveal" ref={ref}>
    <div className="story-mark" aria-hidden="true"><span>{weddingConfig.initials.first}</span><i>&</i><span>{weddingConfig.initials.second}</span></div>
    <div><p className="eyebrow">{t.story.eyebrow}</p><h2>{t.story.title}</h2><p>{t.story.copy}</p><span className="story-signature">{t.story.sign} {names.name1}<i>&</i>{names.name2}</span></div>
  </section>;
}

export function ContactCTA({ t }: { t: Translation }) {
  return <section className="contact">
    <p className="eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.copy}</p>
    <div><a className="contact-button magnetic" href={weddingConfig.telegram.url} target="_blank" rel="noopener noreferrer">{t.contact.telegram}<small>{weddingConfig.telegram.username}</small><span>↗</span></a><a className="contact-button contact-button--light magnetic" href={weddingConfig.whatsapp.url} target="_blank" rel="noopener noreferrer">{t.contact.whatsapp}<small>{weddingConfig.whatsapp.label}</small><span>↗</span></a></div>
  </section>;
}

export function Footer({ t }: { t: Translation }) {
  return <footer><div className="footer-mark">{weddingConfig.initials.first} <i>&</i> {weddingConfig.initials.second}</div><p>{t.footer.line}</p><a href="#top">{t.footer.top} ↑</a></footer>;
}
