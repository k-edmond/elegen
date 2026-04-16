import Link from 'next/link';
import { FlaskConical, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'PDRN Regen Booster', href: '/products#pdrn' },
    { label: 'Hydra Peptide Booster', href: '/products#hydra' },
    { label: 'Scalp Revital Booster', href: '/products#scalp' },
    { label: 'Hair Repair Booster', href: '/products#hair' },
  ],
  company: [
    { label: '회사 소개', href: '/about' },
    { label: '기술력', href: '/technology' },
    { label: '사업 영역', href: '/contact#business' },
    { label: '문의하기', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1A3A35] to-[#0D2A26] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#81D8D0] to-[#0A8A82] flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">ELEGENN</span>
                <span className="block text-[10px] tracking-[0.3em] text-[#81D8D0] font-medium">
                  GLOBAL
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              피부 과학을 기반으로 한 고효능 스킨케어 솔루션을 제공하는 글로벌 뷰티
              기업입니다.
            </p>
            <p className="text-[#81D8D0] text-sm font-medium">
              &ldquo;보이는 결과, 당신의 아름다움&rdquo;
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#81D8D0] mb-6">
              PRODUCTS
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#81D8D0] mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-[#81D8D0] mb-6">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#81D8D0] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  elegenn@naver.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#81D8D0] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+82 2-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#81D8D0] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  서울특별시 강남구 테헤란로
                  <br />
                  123 스카이타워 15층
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 ELEGENN GLOBAL. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#81D8D0]/20 to-transparent" />
    </footer>
  );
}
