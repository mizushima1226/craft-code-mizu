import { processSteps } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section
      id="process"
      className="section-padding border-t border-slate-100 bg-slate-50/50"
      aria-labelledby="process-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="process-heading"
          title="ご依頼の流れ"
          description="お問い合わせから業務開始まで、内容確認と契約締結を経て進めます。"
        />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.step} className="card">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="bg-brand-600 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
