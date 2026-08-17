export type GiftId = 'eur' | 'usd' | 'usdt' | 'usdc' | 'car' | 'villa';

export const gifts: { id: GiftId; symbol: string; className: string }[] = [
  { id: 'eur', symbol: '€', className: 'gift--eur' },
  { id: 'usd', symbol: '$', className: 'gift--usd' },
  { id: 'usdt', symbol: '₮', className: 'gift--usdt' },
  { id: 'usdc', symbol: '◉', className: 'gift--usdc' },
  { id: 'car', symbol: '—◉—', className: 'gift--car' },
  { id: 'villa', symbol: '⌂', className: 'gift--villa' },
];
