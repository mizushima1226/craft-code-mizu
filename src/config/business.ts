export const businessConfig = {
  tradeName: 'Craft Code Mizu',
  representativeName: '水島 優輝',
  /** TODO: 公開前に都道府県を確認してください（詳細住所は記載しない） */
  location: '静岡県',
  businessType: '個人事業主',
  businessDescription: 'Webシステムの設計・開発・改修・運用支援',
  contractType: '準委任契約',
  email: 'y.mizu4ma.work@gmail.com',
  socialLinks: [
    {
      id: 'x',
      label: 'X',
      account: '@mzsm235',
      url: 'https://x.com/mzsm235',
    },
    {
      id: 'zenn',
      label: 'Zenn',
      account: 'mizu4ma',
      url: 'https://zenn.dev/mizu4ma',
    },
    {
      id: 'github',
      label: 'GitHub',
      account: 'mizushima1226',
      url: 'https://github.com/mizushima1226',
    },
  ],
  assets: {
    horizontalLogo: 'assets/craft-code-mizu-horizontal.svg',
    symbolLogo: 'assets/craft-code-mizu-symbol.svg',
  },
} as const

export function getDisplayName(): string {
  return businessConfig.tradeName ?? businessConfig.representativeName
}
