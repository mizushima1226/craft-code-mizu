import { businessConfig } from '../config/business'
import { contactTopics } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-brand-50"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="contact-heading"
          title="お問い合わせ"
          description="開発のご相談・お見積もりのご依頼は、メールにてお気軽にお問い合わせください。"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h3 className="text-base font-bold text-slate-900">
              メールでのお問い合わせ
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              ご相談内容をメールでお送りください。内容を確認のうえ、通常2営業日以内にご返信します。
            </p>
            <a
              href={`mailto:${businessConfig.email}`}
              className="btn-primary mt-6"
            >
              メールで問い合わせる
            </a>
            <p className="mt-4 text-xs text-slate-500">
              返信目安：通常2営業日以内
            </p>
          </div>

          <div className="card">
            <h3 className="text-base font-bold text-slate-900">
              ご相談いただける内容の例
            </h3>
            <ul className="mt-4 space-y-2">
              {contactTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span
                    className="bg-brand-500 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
          <p>
            営業目的の一斉送信や、内容の確認ができない自動送信メールには対応しておりません。
          </p>
          <p className="border-brand-200 text-brand-900 rounded-lg border bg-white px-4 py-3">
            お問い合わせの内容によっては、ご依頼をお受けできない場合があります。秘密保持契約の締結前は、機密情報や個人情報を送信しないでください。
          </p>
        </div>
      </div>
    </section>
  )
}
