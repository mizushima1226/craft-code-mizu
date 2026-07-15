export type WorkItem = {
  id: string
  title: string
  summary: string
  scope: string[]
  technologies: string[]
}

export const worksDisclaimer =
  '掲載内容には、会社員として参画した開発経験を含みます。個人事業として直接受託した案件のみを示すものではありません。守秘義務のため、企業名・サービス名・顧客名を伏せ、業種・対応内容を抽象化しています。'

export const works: WorkItem[] = [
  {
    id: 'security',
    title: 'セキュリティ関連Webシステム',
    summary:
      'ネットワーク・セキュリティ情報を表示するWebシステムのフロントエンド開発に参画。React、TypeScript、Next.js、OpenAPI、AWS Cognitoなどを使用。',
    scope: [
      'フロントエンド開発',
      'API連携',
      '認証機能の実装',
      '画面設計・実装',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'OpenAPI', 'AWS Cognito'],
  },
  {
    id: 'ec',
    title: 'EC・販売管理システム',
    summary:
      'ECサイトおよび受発注・商品管理に関する機能開発に参画。外部API、決済、CSVデータ連携などを含むシステムの設計・実装を支援。',
    scope: ['機能設計・実装', '外部API連携', '決済連携', 'CSVデータ連携'],
    technologies: ['React', 'TypeScript', 'REST API', 'PostgreSQL'],
  },
  {
    id: 'data-reconciliation',
    title: 'データ照合・分析システム',
    summary:
      '新旧システムから出力された売上データを照合し、差分を確認するWebシステムの開発に参画。大量データの処理、検索、グルーピング、差分表示に対応。',
    scope: [
      'データ照合機能の設計・開発',
      '大量データの検索・表示',
      '差分表示機能',
    ],
    technologies: ['React', 'TypeScript', 'Go', 'PostgreSQL'],
  },
  {
    id: 'admin',
    title: '業務システム・管理画面',
    summary:
      '顧客管理、ユーザー管理、権限管理、ファイル取込、検索、一覧表示などを備えた業務システム・管理画面の開発に参画。',
    scope: [
      '管理画面の設計・開発',
      'ユーザー・権限管理',
      'ファイル取込・検索機能',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'project-management',
    title: 'プロジェクトマネジメント',
    summary:
      '本業・副業を通じて、開発案件の進行管理を担当。お客さまや関係者との要件確認、タスク管理、スケジュール調整などを行い、開発メンバーと連携しながら案件を推進。',
    scope: [
      '顧客折衝・要件確認',
      'タスク管理・進捗管理',
      'スケジュール管理',
      '関係者調整・開発チーム連携',
    ],
    technologies: [],
  },
]
