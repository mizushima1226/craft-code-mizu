import { BusinessOverview } from './components/BusinessOverview'
import { BusinessProfile } from './components/BusinessProfile'
import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Strengths } from './components/Strengths'
import { Technologies } from './components/Technologies'
import { Works } from './components/Works'
import { businessConfig, getDisplayName } from './config/business'

function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: getDisplayName(),
    description: businessConfig.businessDescription,
    email: businessConfig.email,
    sameAs: businessConfig.socialLinks.map((link) => link.url),
    areaServed: {
      '@type': 'Country',
      name: 'Japan',
    },
    serviceType: [
      'Webアプリケーション開発',
      '業務システム開発',
      '既存システム改修',
      '技術顧問・フロントエンド支援',
      'クラウド・運用支援',
      'プロジェクトマネジメント支援',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: businessConfig.location,
      addressCountry: 'JP',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function App() {
  return (
    <>
      <StructuredData />
      <a
        href="#main-content"
        className="focus:bg-brand-600 sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:px-4 focus:py-2 focus:text-white"
      >
        メインコンテンツへスキップ
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <BusinessOverview />
        <Services />
        <Technologies />
        <Strengths />
        <Works />
        <Pricing />
        <Process />
        <Faq />
        <BusinessProfile />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
