import type { Metadata } from 'next';
import { Playfair_Display, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ELEGENN GLOBAL | 고기능성 스킨케어 솔루션',
    template: '%s | ELEGENN GLOBAL',
  },
  description:
    '엘레젠글로벌은 피부 과학을 기반으로 한 고효능 원료와 정교한 처방 기술을 결합하여, 실제 변화를 만들어내는 제품을 제공하는 글로벌 뷰티 기업입니다.',
  keywords: [
    'ELEGENN GLOBAL',
    '고기능성 스킨케어',
    'PDRN',
    '펩타이드',
    '앰플',
    '부스터',
    '피부 재생',
    '보습',
    '두피 케어',
    '헤어 리페어',
    '뷰티',
    '화장품',
  ],
  authors: [{ name: 'ELEGENN GLOBAL', url: 'https://elegenn.com' }],
  openGraph: {
    title: 'ELEGENN GLOBAL | 고기능성 스킨케어 솔루션',
    description:
      '피부 과학을 기반으로 한 고효능 스킨케어 솔루션. PDRN, 펩타이드, HA를 통한 실제 보이는 결과를 제공합니다.',
    url: 'https://elegenn.com',
    siteName: 'ELEGENN GLOBAL',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSans.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
