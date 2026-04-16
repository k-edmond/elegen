'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: '홈', enLabel: 'HOME' },
  { href: '/about', label: '회사 소개', enLabel: 'ABOUT' },
  { href: '/technology', label: '기술력', enLabel: 'TECHNOLOGY' },
  { href: '/products', label: '제품', enLabel: 'PRODUCTS' },
  { href: '/contact', label: '문의', enLabel: 'CONTACT' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-elegenn-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#81D8D0] to-[#0A8A82] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <FlaskConical className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                ELEGENN
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-[#0A8A82] font-medium">
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-[#0A8A82]'
                    : 'text-gray-600 hover:text-[#0A8A82]'
                }`}
              >
                <span className="block text-[10px] tracking-wider text-[#81D8D0] mb-0.5">
                  {item.enLabel}
                </span>
                <span className="block">{item.label}</span>
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#81D8D0]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#E8F8F7] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0A8A82]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A8A82]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8F8F7]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-[#E8F8F7] text-[#0A8A82]'
                    : 'text-gray-600 hover:bg-[#E8F8F7] hover:text-[#0A8A82]'
                }`}
              >
                <span className="text-[10px] tracking-wider text-[#81D8D0] mr-2">
                  {item.enLabel}
                </span>
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button className="w-full bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white">
                <Link href="/contact" className="w-full">
                  문의하기
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
