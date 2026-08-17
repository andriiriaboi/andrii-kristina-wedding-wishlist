export const weddingConfig = {
  couple: {
    uk: { name1: 'Андрій', name2: 'Крістіна' },
    en: { name1: 'Andrii', name2: 'Kristina' },
    ru: { name1: 'Андрей', name2: 'Кристина' },
  },
  initials: { first: 'А', second: 'К' },
  weddingDate: {
    uk: '16.09.2026',
    en: '16.09.2026',
    ru: '16.09.2026',
  },
  telegram: { username: '@Andrii_Ryab', url: 'https://t.me/Andrii_Ryab' },
  whatsapp: {
    label: '+380 63 144 67 45',
    phone: '380631446745',
    url: 'https://wa.me/380631446745',
  },
  images: { hero: '/images/couple-hero.jpeg', og: '' },
  defaultLanguage: 'uk' as const,
} as const;
