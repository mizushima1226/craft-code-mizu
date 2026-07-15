import { faqItems } from '../data/faq'
import { SectionHeading } from './SectionHeading'

export function Faq() {
  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="container-main">
        <SectionHeading
          id="faq-heading"
          title="よくあるご質問"
          description="ご依頼前によくいただく質問への回答です。"
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqItems.map((item) => (
            <details key={item.id} className="group px-6 py-1">
              <summary className="cursor-pointer list-none py-4 text-base font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="text-brand-600 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
