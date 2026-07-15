export type PricingItem = {
  id: string
  title: string
  billingUnit: string
  description: string
}

export const pricingItems: PricingItem[] = [
  {
    id: 'hourly',
    title: '開発・技術支援',
    billingUnit: '時間単位',
    description: '機能開発、改修、技術調査など、時間単位での開発支援',
  },
  {
    id: 'monthly',
    title: '月単位の開発支援',
    billingUnit: '月単位',
    description: '継続的な開発支援や保守改修を月単位でご依頼いただく場合',
  },
  {
    id: 'spot',
    title: 'スポット調査・改修',
    billingUnit: '作業単位',
    description: '限定的な技術調査や小規模な改修・不具合調査',
  },
]

export const pricingNote =
  '料金は、ご依頼内容、必要な作業時間、技術的な難易度、契約期間などにより異なります。ヒアリング後に作業範囲と料金をご案内します。'

export const contractNote =
  '準委任契約を基本とし、作業時間または月単位での技術支援を提供しています。案件内容に応じて、個別に契約条件をご相談します。'
