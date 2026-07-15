import { works, worksDisclaimer } from '../data/works'
import { SectionHeading } from './SectionHeading'

export function Works() {
  return (
    <section
      id="works"
      className="section-padding border-t border-slate-100 bg-slate-50/50"
      aria-labelledby="works-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="works-heading"
          title="開発経験・対応実績"
          description="これまでに携わった開発案件の一例です。会社員としての業務経験を含みます。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {works.map((work) => (
            <article key={work.id} className="card">
              <h3 className="text-lg font-bold text-slate-900">{work.title}</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    案件概要
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {work.summary}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    主な対応範囲
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {work.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span
                          className="bg-brand-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {work.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                      使用技術
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {work.technologies.map((tech) => (
                        <li key={tech}>
                          <span className="tag">{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          {worksDisclaimer}
        </p>
      </div>
    </section>
  )
}
