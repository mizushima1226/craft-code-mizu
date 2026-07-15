import { contractNote, pricingItems, pricingNote } from '../data/pricing'
import { SectionHeading } from './SectionHeading'

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="pricing-heading"
          title="料金・契約形態"
          description="ご依頼内容に応じた契約形態です。料金はヒアリング後に個別にご案内します。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricingItems.map((item) => (
            <article key={item.id} className="card text-center">
              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-brand-700 mt-3 text-sm font-semibold">
                {item.billingUnit}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-600">
          <p>{pricingNote}</p>
          <p>{contractNote}</p>
        </div>
      </div>
    </section>
  )
}
