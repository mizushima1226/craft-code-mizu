import type { ReactNode } from 'react'
import { businessConfig } from '../config/business'

type SocialLinkId = (typeof businessConfig.socialLinks)[number]['id']

function SocialIcon({ id }: { id: SocialLinkId }) {
  const icons: Record<SocialLinkId, ReactNode> = {
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2h3.7l-8.1 9.2L24 22h-7.4l-5.8-7.6L4.2 22H.5l8.6-9.8L0 2h7.6l5.2 6.9L18.9 2Zm-1.3 18.1h2L6.5 3.8H4.4l13.2 16.3Z" />
      </svg>
    ),
    zenn: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 6h14L5 18h14" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 7.01c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }

  return <span className="block h-5 w-5">{icons[id]}</span>
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={compact ? 'flex flex-wrap gap-2' : 'grid gap-3 sm:grid-cols-3'}
    >
      {businessConfig.socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}（${link.account}）を新しいタブで開く`}
            className={
              compact
                ? 'hover:bg-brand-800 focus-visible:outline-brand-300 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors'
                : 'hover:border-brand-200 hover:bg-brand-50 group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors'
            }
          >
            <span
              className={
                compact
                  ? ''
                  : 'bg-brand-100 text-brand-700 group-hover:bg-brand-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors'
              }
            >
              <SocialIcon id={link.id} />
            </span>
            {!compact && (
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">
                  {link.label}
                </span>
                <span className="block truncate text-xs text-slate-500">
                  {link.account}
                </span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
