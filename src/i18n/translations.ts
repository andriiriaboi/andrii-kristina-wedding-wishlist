export type Language = 'uk' | 'en' | 'ru';

const uk = {
  a11y: { menu: 'Вибір мови', close: 'Закрити діалог', scroll: 'Перейти до подарунків' },
  hero: { eyebrow: 'НАШ ВЕСІЛЬНИЙ WISHLIST', lead: 'Найкращий подарунок для нас — ваша присутність 🤍', sub: 'Але якщо ви хочете зробити нам подарунок, ми підготували декілька ідей.', scroll: 'ГОРТАЙТЕ ДАЛІ' },
  giftsIntro: { eyebrow: 'ДЛЯ НАШИХ НАЙРІДНІШИХ', title: 'ЩО НАМ ПОДАРУВАТИ?', copy: 'Декілька ідей, якщо ви хочете зробити наш день ще особливішим.' },
  gifts: {
    eur: { title: 'ЄВРО', copy: 'Наш пріоритетний варіант. Просто, красиво та завжди доречно.', cta: 'ПОДАРУВАТИ EUR', badge: 'НАШ ФАВОРИТ', label: 'MOST WANTED' },
    usd: { title: 'ДОЛАРИ', copy: 'Класика, яка ніколи не підводить.', cta: 'ПОДАРУВАТИ USD' },
    usdt: { title: 'USDT', copy: 'Для наших crypto-friendly гостей.', cta: 'ПОДАРУВАТИ USDT' },
    usdc: { title: 'USDC', copy: 'Стабільно, цифрово та схвалено молодятами.', cta: 'ПОДАРУВАТИ USDC' },
    car: { title: 'АВТОМОБІЛЬ', copy: 'Кажуть, головне — не розмір подарунка, а увага. Але ми готові перевірити цю теорію.', cta: 'ПОДАРУВАТИ АВТО', badge: 'ПРИЄМНИЙ БОНУС' },
    villa: { title: 'ВІЛЛА В ІСПАНІЇ', copy: 'Якщо ви раптом не могли вирішити, що нам справді потрібно.', cta: 'ПОДАРУВАТИ ВІЛЛУ', badge: 'МРІЯТИ НЕ ШКІДЛИВО' },
  },
  modal: { eur: 'ХОЧЕТЕ ПОДАРУВАТИ НАМ ЄВРО?', usd: 'ХОЧЕТЕ ПОДАРУВАТИ НАМ ДОЛАРИ?', money: 'Напишіть нам — ми надішлемо всі необхідні реквізити.', cryptoTitle: 'ПОТРІБНА АДРЕСА ГАМАНЦЯ?', crypto: 'Напишіть нам, щоб отримати адресу гаманця та обрати потрібну мережу.', carTitle: 'СЕРЙОЗНО? МИ ВЖЕ ВАС ЛЮБИМО.', car: 'Напишіть нам — обговоримо деталі 😏', villaTitle: 'ІСПАНІЯ ЧЕКАЄ 🇪🇸', villa: 'Якщо це не жарт — терміново напишіть нам.', telegram: 'НАПИСАТИ В TELEGRAM', whatsapp: 'НАПИСАТИ У WHATSAPP' },
  ranking: { eyebrow: 'БЕЗ ЖОДНОЇ УПЕРЕДЖЕНОСТІ', title: 'НАШ ОСОБИСТИЙ РЕЙТИНГ', items: ['EUR — однозначно так', 'USD', 'USDT / USDC', 'АВТО — ми не проти', 'ВІЛЛА В ІСПАНІЇ — ідеальний сценарій'], note: '«Цей рейтинг абсолютно неупереджений. Особливо перше місце.»' },
  story: { title: 'Найкращі речі не можна загорнути.', copy: 'Нам пощастило знайти одне одного. Тепер ми хочемо розділити цей день з людьми, які зробили нашу історію особливою.', sign: 'З любовʼю,' },
  contact: { eyebrow: 'ЗАЛИШИЛИСЯ ПИТАННЯ?', title: 'Напишіть нам.', copy: 'Ми з радістю підкажемо всі деталі — і будемо дуже чекати на зустріч.', telegram: 'TELEGRAM', whatsapp: 'WHATSAPP' },
  footer: { line: 'ЗРОБЛЕНО З ЛЮБОВʼЮ — ДО ЗУСТРІЧІ 16.09.2026', top: 'ДО ПОЧАТКУ' },
  egg1: '«Ми просто залишимо це тут 😏»', egg2: '«Так, ви правильно зрозуміли. EUR 😌»',
};

const en: typeof uk = {
  a11y: { menu: 'Language selection', close: 'Close dialog', scroll: 'Skip to gifts' },
  hero: { eyebrow: 'OUR WEDDING WISHLIST', lead: 'Your presence is already the best gift. 🤍', sub: 'But if you would like to give us something, we prepared a few ideas.', scroll: 'SCROLL TO DISCOVER' },
  giftsIntro: { eyebrow: 'FOR OUR FAVORITE PEOPLE', title: 'HOW TO SPOIL US', copy: 'A few ideas if you would like to make our day even more special.' },
  gifts: {
    eur: { title: 'EURO', copy: 'Our preferred option. Simple, beautiful and always useful.', cta: 'GIFT EUR', badge: 'OUR FAVORITE', label: 'MOST WANTED' },
    usd: { title: 'USD', copy: 'A classic that never disappoints.', cta: 'GIFT USD' },
    usdt: { title: 'USDT', copy: 'For our crypto-friendly guests.', cta: 'GIFT USDT' },
    usdc: { title: 'USDC', copy: 'Stable, digital and wedding-approved.', cta: 'GIFT USDC' },
    car: { title: 'A CAR', copy: 'They say it’s the thought that counts. We’re willing to test that theory.', cta: 'GIFT A CAR', badge: 'NICE TO HAVE' },
    villa: { title: 'A VILLA IN SPAIN', copy: 'In case you were wondering what we really need.', cta: 'GIFT A VILLA', badge: 'DREAM BIG' },
  },
  modal: { eur: 'WANT TO GIFT US EURO?', usd: 'WANT TO GIFT US USD?', money: 'Contact us and we’ll send you all the payment details.', cryptoTitle: 'NEED THE WALLET ADDRESS?', crypto: 'Contact us to receive the wallet address and choose the preferred network.', carTitle: 'SERIOUSLY? WE ALREADY LOVE YOU.', car: 'Message us — let’s discuss the details 😏', villaTitle: 'SPAIN IS CALLING 🇪🇸', villa: 'If this isn’t a joke, message us immediately.', telegram: 'CONTACT ON TELEGRAM', whatsapp: 'CONTACT ON WHATSAPP' },
  ranking: { eyebrow: 'COMPLETELY UNBIASED', title: 'OUR PERSONAL RANKING', items: ['EUR — definitely yes', 'USD', 'USDT / USDC', 'CAR — we wouldn’t complain', 'VILLA IN SPAIN — dream scenario'], note: '“This ranking is completely unbiased. Especially the first place.”' },
  story: { title: 'The best things can’t be wrapped.', copy: 'We were lucky enough to find each other. Now we want to share this day with the people who made our story special.', sign: 'With love,' },
  contact: { eyebrow: 'STILL HAVE A QUESTION?', title: 'Let’s talk.', copy: 'We’ll happily share every detail — and we cannot wait to celebrate together.', telegram: 'TELEGRAM', whatsapp: 'WHATSAPP' },
  footer: { line: 'MADE WITH LOVE — SEE YOU ON 16.09.2026', top: 'BACK TO TOP' },
  egg1: '“We’re just going to leave this here 😏”', egg2: '“Yes, you got the hint. EUR 😌”',
};

const ru: typeof uk = {
  a11y: { menu: 'Выбор языка', close: 'Закрыть диалог', scroll: 'Перейти к подаркам' },
  hero: { eyebrow: 'НАШ СВАДЕБНЫЙ WISHLIST', lead: 'Лучший подарок для нас — ваше присутствие 🤍', sub: 'Но если вы хотите сделать нам подарок, мы подготовили несколько идей.', scroll: 'ЛИСТАЙТЕ ДАЛЬШЕ' },
  giftsIntro: { eyebrow: 'ДЛЯ НАШИХ САМЫХ БЛИЗКИХ', title: 'ЧТО НАМ ПОДАРИТЬ?', copy: 'Несколько идей, если вы хотите сделать наш день ещё особенным.' },
  gifts: {
    eur: { title: 'ЕВРО', copy: 'Наш приоритетный вариант. Просто, красиво и всегда пригодится.', cta: 'ПОДАРИТЬ EUR', badge: 'НАШ ФАВОРИТ', label: 'MOST WANTED' },
    usd: { title: 'ДОЛЛАРЫ', copy: 'Классика, которая никогда не подводит.', cta: 'ПОДАРИТЬ USD' },
    usdt: { title: 'USDT', copy: 'Для наших crypto-friendly гостей.', cta: 'ПОДАРИТЬ USDT' },
    usdc: { title: 'USDC', copy: 'Стабильно, цифрово и одобрено молодожёнами.', cta: 'ПОДАРИТЬ USDC' },
    car: { title: 'АВТОМОБИЛЬ', copy: 'Говорят, главное — не размер подарка, а внимание. Но мы готовы проверить эту теорию.', cta: 'ПОДАРИТЬ АВТО', badge: 'ПРИЯТНЫЙ БОНУС' },
    villa: { title: 'ВИЛЛА В ИСПАНИИ', copy: 'Если вы вдруг не могли решить, что нам действительно нужно.', cta: 'ПОДАРИТЬ ВИЛЛУ', badge: 'МЕЧТАТЬ НЕ ВРЕДНО' },
  },
  modal: { eur: 'ХОТИТЕ ПОДАРИТЬ НАМ ЕВРО?', usd: 'ХОТИТЕ ПОДАРИТЬ НАМ ДОЛЛАРЫ?', money: 'Напишите нам — мы отправим все необходимые реквизиты.', cryptoTitle: 'НУЖЕН АДРЕС КОШЕЛЬКА?', crypto: 'Напишите нам, чтобы получить адрес кошелька и выбрать подходящую сеть.', carTitle: 'СЕРЬЁЗНО? МЫ УЖЕ ВАС ЛЮБИМ.', car: 'Напишите нам — обсудим детали 😏', villaTitle: 'ИСПАНИЯ ЖДЁТ 🇪🇸', villa: 'Если это не шутка — срочно напишите нам.', telegram: 'НАПИСАТЬ В TELEGRAM', whatsapp: 'НАПИСАТЬ В WHATSAPP' },
  ranking: { eyebrow: 'АБСОЛЮТНО БЕСПРИСТРАСТНО', title: 'НАШ ЛИЧНЫЙ РЕЙТИНГ', items: ['EUR — однозначно да', 'USD', 'USDT / USDC', 'АВТОМОБИЛЬ — мы не против', 'ВИЛЛА В ИСПАНИИ — идеальный сценарий'], note: '«Этот рейтинг абсолютно непредвзятый. Особенно первое место.»' },
  story: { title: 'Лучшие вещи нельзя завернуть.', copy: 'Нам повезло найти друг друга. Теперь мы хотим разделить этот день с людьми, которые сделали нашу историю особенной.', sign: 'С любовью,' },
  contact: { eyebrow: 'ОСТАЛИСЬ ВОПРОСЫ?', title: 'Напишите нам.', copy: 'Мы с радостью подскажем все детали — и будем очень ждать нашей встречи.', telegram: 'TELEGRAM', whatsapp: 'WHATSAPP' },
  footer: { line: 'СДЕЛАНО С ЛЮБОВЬЮ — ДО ВСТРЕЧИ 16.09.2026', top: 'В НАЧАЛО' },
  egg1: '«Мы просто оставим это здесь 😏»', egg2: '«Да, вы всё правильно поняли. EUR 😌»',
};

export const translations = { uk, en, ru };
export type Translation = typeof uk;
