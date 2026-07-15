import { technologyCategories } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Technologies() {
  return (
    <section
      id="technologies"
      className="section-padding border-t border-slate-100 bg-slate-50/50"
      aria-labelledby="technologies-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="technologies-heading"
          title="対応技術"
          description="案件の要件に応じて技術を選定します。以下は主な対応技術の一例です。"
        />
        <div className="mt-10 space-y-8">
          {technologyCategories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <li key={tech}>
                    <span className="tag">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
