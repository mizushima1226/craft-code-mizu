import type { ReactNode } from 'react'
import { services } from '../data/services'
import { SectionHeading } from './SectionHeading'

const serviceIcons: Record<string, ReactNode> = {
  'web-app': (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </svg>
  ),
  'business-system': (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M4 7h16v12H4z" />
      <path d="M8 11h8M8 15h5" />
    </svg>
  ),
  maintenance: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l2 2 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2z" />
    </svg>
  ),
  'technical-advisor': (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  ),
  cloud: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 18h11a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.7-1.5A3.5 3.5 0 0 0 7 18z" />
    </svg>
  ),
  pm: (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 10h8M8 14h5" />
      <path d="M9 5V3h6v2" />
    </svg>
  ),
}

export function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="services-heading"
          title="サービス"
          description="お客さまの課題に合わせて、設計から運用まで幅広く支援します。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="card border-t-brand-400 overflow-hidden border-t-4"
            >
              <div className="bg-brand-100 text-brand-700 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                {serviceIcons[service.id]}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
