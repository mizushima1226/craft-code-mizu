export const navItems = [
  { label: 'サービス', href: '#services' },
  { label: '強み', href: '#strengths' },
  { label: '経験', href: '#works' },
  { label: '料金', href: '#pricing' },
  { label: 'ご依頼の流れ', href: '#process' },
  { label: '事業者情報', href: '#profile' },
  { label: 'お問い合わせ', href: '#contact' },
] as const

export const heroAreas = [
  'Webアプリケーション開発',
  '業務システム開発',
  '既存システム改修',
  'プロジェクトマネジメント',
] as const

export const technologyCategories = [
  {
    name: 'フロントエンド',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Vite',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    name: 'バックエンド・API',
    items: ['Go', 'Node.js', 'REST API', 'OpenAPI', 'GraphQL'],
  },
  {
    name: 'データベース',
    items: ['PostgreSQL', 'MySQL', 'Amazon DynamoDB'],
  },
  {
    name: 'クラウド',
    items: ['AWS', 'Cloudflare', 'Docker', 'GitHub Actions', 'GitHub'],
  },
] as const

export const strengths = [
  {
    title: '要件整理から開発推進まで一貫して対応',
    description:
      'ヒアリングや顧客折衝で課題を整理し、タスク・スケジュール管理を含め、設計から実装、テストまで案件を推進します。',
  },
  {
    title: 'フロントエンドを中心とした実践的な開発力',
    description:
      'React・TypeScriptを中心に、実務で培った開発経験を活かして、使いやすく保守しやすい画面・機能を実装します。',
  },
  {
    title: '既存環境を尊重した段階的な改善',
    description:
      '稼働中のシステムを無理に作り替えず、現状の設計や運用を踏まえて、リスクを抑えた段階的な改善を提案します。',
  },
  {
    title: 'テスト・セキュリティ・運用を考慮した設計',
    description:
      '開発時点からテストやセキュリティ、運用のしやすさを意識し、長く使えるシステムづくりを心がけています。',
  },
] as const

export const processSteps = [
  {
    step: 1,
    title: 'お問い合わせ',
    description:
      'メールにてご相談内容をお送りください。対応可否の確認から始めます。',
  },
  {
    step: 2,
    title: 'ヒアリング',
    description:
      '課題、ご要望、スケジュール、予算感などをオンラインでお伺いします。',
  },
  {
    step: 3,
    title: '対応範囲・契約条件の確認',
    description:
      '作業内容と料金の目安を整理し、ご確認いただきます。内容にご納得いただいてから次のステップへ進みます。',
  },
  {
    step: 4,
    title: '契約締結',
    description:
      '準委任契約など、案件に適した契約形態で合意のうえ契約を締結します。',
  },
  {
    step: 5,
    title: '開発・技術支援',
    description: '合意した範囲に基づき、開発・改修・調査などの作業を進めます。',
  },
  {
    step: 6,
    title: '作業報告・納品または継続支援',
    description:
      '作業内容を報告し、納品または継続支援へ移行します。必要に応じて運用改善も支援します。',
  },
] as const

export const contactTopics = [
  'Webシステムの新規開発',
  '既存システムの機能改修',
  'React・TypeScript開発支援',
  'フロントエンド領域の技術顧問',
  '開発案件の進行管理・PM支援',
  '技術調査・不具合調査',
] as const
