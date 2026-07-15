import { businessConfig, getDisplayName } from '../config/business'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const displayName = getDisplayName()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-main py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
              <img
                src={`${import.meta.env.BASE_URL}${businessConfig.assets.symbolLogo}`}
                alt=""
                width="150"
                height="150"
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="brand-name text-xl text-white">{displayName}</p>
              <p className="mt-1 text-sm">
                {businessConfig.businessDescription}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <SocialLinks compact />
            <a
              href="#top"
              className="text-brand-300 inline-flex items-center gap-1 text-sm transition-colors hover:text-white"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
              ページ上部へ戻る
            </a>
          </div>
        </div>
        <p className="text-brand-200/70 border-brand-800 mt-8 border-t pt-6 text-center text-xs sm:text-left">
          &copy; {currentYear} {displayName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
