import { heroAreas } from '../data/site'

function HeroDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="bg-brand-100/60 absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-brand-50 absolute bottom-0 left-1/4 h-48 w-48 rounded-full blur-2xl" />
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="via-brand-50/40 section-padding relative overflow-hidden bg-gradient-to-b from-white to-white"
    >
      <HeroDecoration />
      <div className="container-main relative">
        <div className="max-w-3xl">
          <p className="text-brand-700 mb-4 text-sm font-semibold tracking-wide">
            Webシステム開発・技術支援
          </p>
          <h1 className="font-display text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Webシステム開発で、
            <br />
            事業の課題を解決します。
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            React・TypeScriptを中心としたWebシステム開発、
            既存システムの改修、クラウド環境の構築・運用を支援しています。
            要件整理から設計、実装、テスト、運用改善まで対応します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="btn-primary">
              サービス内容を見る
            </a>
            <a href="#contact" className="btn-secondary">
              お問い合わせ
            </a>
          </div>
        </div>

        <div className="border-brand-100 mt-12 border-t pt-8">
          <p className="mb-4 text-sm font-semibold text-slate-900">対応領域</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                <span
                  className="bg-brand-500 h-2 w-2 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
