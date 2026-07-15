import { businessConfig } from '../config/business'
import { SectionHeading } from './SectionHeading'
import { SocialLinks } from './SocialLinks'

function buildProfileItems() {
  const items: { label: string; value: string }[] = [
    { label: '代表者名', value: businessConfig.representativeName },
    { label: '所在地', value: businessConfig.location },
    { label: '事業形態', value: businessConfig.businessType },
    { label: '事業内容', value: businessConfig.businessDescription },
    { label: '主な契約形態', value: businessConfig.contractType },
    { label: '連絡先', value: businessConfig.email },
  ]

  if (businessConfig.tradeName) {
    items.unshift({ label: '屋号', value: businessConfig.tradeName })
  }

  return items
}

export function BusinessProfile() {
  const profileItems = buildProfileItems()

  return (
    <section
      id="profile"
      className="section-padding border-t border-slate-100 bg-slate-50/50"
      aria-labelledby="profile-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="profile-heading"
          title="事業者情報"
          description="事業の基本情報です。"
        />
        <dl className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
          {profileItems.map((item, index) => (
            <div
              key={item.label}
              className={`grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4 ${
                index !== profileItems.length - 1
                  ? 'border-b border-slate-100'
                  : ''
              }`}
            >
              <dt className="text-sm font-semibold text-slate-900">
                {item.label}
              </dt>
              <dd className="text-sm text-slate-600 sm:col-span-2">
                {item.label === '連絡先' ? (
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="text-brand-700 decoration-brand-200 hover:text-brand-800 underline underline-offset-2"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            外部プロフィール・技術発信
          </h3>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
