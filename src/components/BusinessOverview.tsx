import { SectionHeading } from './SectionHeading'

export function BusinessOverview() {
  return (
    <section
      id="overview"
      className="section-padding border-t border-slate-100 bg-slate-50/50"
      aria-labelledby="overview-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="overview-heading"
          title="事業概要"
          description="法人・個人事業者のお客さまを対象に、Webシステムの設計・開発・改修・運用支援を提供しています。"
        />
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            お客さまから課題や要望をヒアリングし、要件整理、技術選定、設計、実装、テスト、リリース、保守運用まで、案件の状況に応じて支援します。
          </p>
          <p>
            主に準委任契約による開発支援を行い、必要に応じて機能単位の改修や技術調査にも対応します。
          </p>
          <p className="border-brand-200 bg-brand-50 text-brand-800 rounded-lg border px-4 py-3 text-sm font-medium">
            準委任契約を基本とする開発支援事業です。
          </p>
        </div>
      </div>
    </section>
  )
}
