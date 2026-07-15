import { strengths } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Strengths() {
  return (
    <section
      id="strengths"
      className="section-padding"
      aria-labelledby="strengths-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="strengths-heading"
          title="強み"
          description="お客さまの事業に寄り添い、実務に即した開発支援を行います。"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {strengths.map((item, index) => (
            <article key={item.title} className="card-accent">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="bg-brand-600 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
