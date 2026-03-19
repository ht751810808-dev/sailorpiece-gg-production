import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CodesSection from '@/components/CodesSection';
import TierListSection from '@/components/TierListSection';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

// 结构化数据 - FAQPage (SEO)
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I redeem codes in Sailor Piece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Launch Sailor Piece on Roblox, click the Settings/Cog icon on the left side of the screen, scroll down to the Codes section (A Secret Code...), enter your code, and press Redeem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best Devil Fruit in Sailor Piece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Currently, high-tier fruits like Dragon, Dough, and Leopard are considered the best for PvP and grinding due to their high AoE damage and mobility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find the official Sailor Piece Trello or Discord?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official Trello is the best place to find details on races, swords, and boss drops. You can find the links in the Community section of our website.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* 结构化数据注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Header />

      <main>
        {/* 1. Hero 英雄区 */}
        <Hero />

        {/* 2. 兑换码核心区（搜索量最高关键词） */}
        <CodesSection />

        {/* 3. Tier Lists 分类区（恶魔果实，武器，种族） */}
        <TierListSection />

        {/* 4. 游戏特色 + 攻略预览 */}
        <Features />

        {/* 5. FAQ（SEO 内容 + 长尾词） */}
        <FAQ />

        {/* 6. 底部 CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
