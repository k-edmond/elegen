'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const coreValues = [
  {
    icon: Target,
    title: 'Performance First',
    titleKo: '결과 중심',
    description: '결과 중심의 제품 개발로 눈에 보이는 변화를 제공합니다.',
  },
  {
    icon: Eye,
    title: 'Scientific Approach',
    titleKo: '과학적 접근',
    description: '과학 기반 원료 및 처방을 통한 효과적인 솔루션을 개발합니다.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    titleKo: '품질 보증',
    description: '글로벌 기준의 품질 관리를 통해 안전한 제품을 제공합니다.',
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    titleKo: '글로벌 마인드',
    description: '해외 시장 중심 전략으로 세계적인 브랜드로 성장합니다.',
  },
  {
    icon: Heart,
    title: 'Trust & Partnership',
    titleKo: '신뢰와 파트너십',
    description: '장기적인 파트너십을 통한 공동 성장을 추구합니다.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    titleKo: '고객 중심',
    description: '고객의 니즈를 가장 우선시하는 마케팅 전략을 지향합니다.',
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#E8F8F7] via-white to-[#E8F8F7] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#81D8D0]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#0A8A82]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A35] mb-6">
              피부 과학의{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                새로운 기준
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              엘레젠글로벌은 단순한 스킨케어 브랜드가 아닙니다. 빠르게 소비되는
              트렌드 속에서 본질에 집중하며, 피부의 근본적인 변화를 이끌어내는
              고기능성 솔루션을 연구합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-6">
                혁신과 신뢰를 기반으로 한{' '}
                <span className="text-[#0A8A82]">글로벌 뷰티 기업</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                엘레젠글로벌주식회사는 피부 과학을 기반으로 한 고효능 원료와
                정교한 처방 기술을 결합하여, 실제 변화를 만들어내는 제품을 제공하는
                글로벌 뷰티 기업입니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                당사는 PDRN, 펩타이드, HA 등 고기능성 원료를 중심으로 한 앰플
                및 부스터 솔루션을 핵심 제품군으로 하며, 단순한 화장품을 넘어
                고객의 피부에 실질적인 &lsquo;결과&rsquo;를 제공합니다.
              </p>
              <Button className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white">
                <Link href="/technology" className="flex items-center gap-2">
                  기술력 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#E8F8F7] to-white rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '2024', label: '설립' },
                    { value: '100%', label: '자체 기술' },
                    { value: '50+', label: '글로벌 파트너' },
                    { value: 'Korea', label: '제조 국가' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 text-center shadow-lg"
                    >
                      <div className="text-3xl font-bold text-[#0A8A82] mb-2">
                        {item.value}
                      </div>
                      <div className="text-gray-500 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#81D8D0]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0A8A82]/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A3A35] to-[#0A8A82] rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-[#81D8D0] to-[#5DD3C8] rounded-full flex items-center justify-center text-4xl font-bold">
                  CEO
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  CEO 메시지
                </h2>
                <blockquote className="text-lg text-[#E8F8F7] leading-relaxed mb-6">
                  &ldquo;오늘날 뷰티 시장은 단순한 아름다움을 넘어, 효능과 신뢰를
                  중심으로 빠르게 변화하고 있습니다.&rdquo;
                </blockquote>
                <p className="text-[#81D8D0] leading-relaxed mb-4">
                  안녕하십니까, 엘레젠글로벌 대표입니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  엘레젠은 이러한 흐름 속에서 &ldquo;보이는 결과&rdquo;에 집중하는
                  브랜드로 출발했습니다. 우리는 과학적 근거에 기반한 성분, 엄격한
                  품질 관리, 그리고 글로벌 시장에서 경쟁력 있는 제품을 통해 고객과
                  파트너에게 신뢰를 제공하고자 합니다. 앞으로도 지속적인 연구와
                  혁신을 통해 글로벌 시장에서 인정받는 브랜드로 성장하겠습니다.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold text-[#81D8D0]">대표</div>
                    <div className="text-gray-400 text-sm">ELEGENN GLOBAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#E8F8F7] to-white rounded-3xl p-8 md:p-10 border border-[#81D8D0]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A8A82] to-[#81D8D0] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A35] mb-4">Vision</h3>
              <p className="text-[#0A8A82] font-medium mb-4">
                고기능성 스킨케어 시장에서 신뢰받는 글로벌 브랜드
              </p>
              <p className="text-gray-600 leading-relaxed">
                To become a globally trusted high-performance skincare solution
                provider.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#E8F8F7] to-white rounded-3xl p-8 md:p-10 border border-[#81D8D0]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A8A82] to-[#81D8D0] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A35] mb-4">Mission</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#81D8D0] rounded-full mt-2 flex-shrink-0" />
                  눈에 띄고 효과적인 스킨케어 솔루션 제공
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#81D8D0] rounded-full mt-2 flex-shrink-0" />
                  신뢰할 수 있는 제조를 통한 품질과 안전 보장
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#81D8D0] rounded-full mt-2 flex-shrink-0" />
                  혁신과 성과를 통한 가치 창출
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              CORE VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-4">
              엘레젠글로벌의{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                핵심 가치
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#81D8D0]/30"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#81D8D0] to-[#0A8A82] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A3A35] mb-1">
                  {value.title}
                </h3>
                <p className="text-[#81D8D0] text-sm font-medium mb-3">
                  {value.titleKo}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A3A35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ELEGENN과 함께 성장하세요
          </h2>
          <p className="text-[#81D8D0] text-lg mb-8 max-w-2xl mx-auto">
            OEM/ODM 제조 및 글로벌 유통 파트너십에 관심이 있으신 분은
            문의해 주세요.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#81D8D0] to-[#5DD3C8] hover:from-[#81D8D0] hover:to-[#E8F8F7] text-[#1A3A35] font-bold"
          >
            <Link href="/contact" className="flex items-center gap-2">
              문의하기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
