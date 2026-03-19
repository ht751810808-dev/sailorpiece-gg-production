import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sailor Piece Codes & Wiki 2026 – Roblox Strategy Guide',
  description:
    'The ultimate Sailor Piece Roblox wiki. Get the latest active codes, devil fruit tier lists, sword guides, map locations, and build strategies. Updated daily for 2026.',
  keywords: [
    'sailor piece codes',
    'sailor piece roblox',
    'sailor piece wiki',
    'sailor piece trello',
    'sailor piece tier list',
    'sailor piece devil fruits',
    'sailor piece guide',
    'roblox sailor piece',
  ],
  metadataBase: new URL('https://www.sailorpiece.com'),
  openGraph: {
    title: 'Sailor Piece Codes & Wiki 2026',
    description:
      'The ultimate Sailor Piece Roblox wiki. Get the latest active codes, devil fruit tier lists, sword guides, map locations, and build strategies.',
    url: 'https://www.sailorpiece.com',
    siteName: 'Sailor Piece Database',
    images: [
      {
        url: '/images/hero-bg.png', // 后续会替换成生成的图
        width: 1200,
        height: 630,
        alt: 'Sailor Piece Roblox Fan Site',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sailor Piece Codes & Wiki 2026',
    description: 'Latest Sailor Piece codes, devil fruit tier lists, and guides. Updated daily!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 已按要求清理所有广告和统计代码 */}
      </head>
      <body>{children}</body>
    </html>
  );
}
