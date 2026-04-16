'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, FlaskConical, Dna, Droplets, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'pdrn',
    name: 'PDRN Regen Booster',
    nameKo: '피부 재생 에너지',
    description: '고농축 PDRN으로 손상 피부 집중 케어',
    icon: Dna,
    color: 'from-[#81D8D0] to-[#5DD3C8]',
    tag: '베스트셀러',
  },
  {
    id: 'hydra',
    name: 'Hydra Peptide Booster',
    nameKo: '수분 & 탄력',
    description: '펩타이드 콤플렉스가 선사하는 차원이 다른 보습',
    icon: Droplets,
    color: 'from-[#0A8A82] to-[#81D8D0]',
    tag: '인기',
  },
  {
    id: 'scalp',
    name: 'Scalp Revital Booster',
    nameKo: '두피 환경 개선',
    description: '건강한 모발의 시작, 두피 근본 케어',
    icon: Sparkles,
    color: 'from-[#1A3A35] to-[#0A8A82]',
    tag: '신제품',
  },
  {
    id: 'hair',
    name: 'Hair Repair Booster',
    nameKo: '모발 손상 복구',
    description: '극손상모 집중 영양 공급 및 코팅 효과',
    icon: FlaskConical,
    color: 'from-[#C0C0C0] to-[#81D8D0]',
    tag: '전문가 추천',
  },
];

const technologies = [
  {
    icon: Dna,
    title: 'PDRN',
    subtitle: '피부 본연의 힘을 깨우는 정제된 재생 에너지',
    description:
      '연어 생식세포에서 추출한 DNA 조각으로, 피부 세포의 재생을 돕고 손상된 피부 장벽을 탄탄하게 재건합니다.',
  },
  {
    icon: Sparkles,
    title: 'Peptide Complex',
    subtitle: '무너진 피부 밸런스를 되찾는 단백질 결합',
    description:
      '아미노산의 결합체로, 피부 탄력 저하를 막고 깊은 주름부터 미세 주름까지 케어하여 탄탄하고 매끄러운 피부 결을 완성합니다.',
  },
  {
    icon: Droplets,
    title: 'HA (Hyaluronic Acid)',
    subtitle: '마르지 않는 깊은 보습감',
    description:
      '고분자/저분자 히알루론산의 교차 배합으로 겉과 속을 동시에 보습하여 지속 가능한 수분 감도를 제공합니다.',
  },
];

export default function HomePage() {
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E8F8F7] via-white to-[#E8F8F7]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#81D8D0]/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A8A82]/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#81D8D0]/5 rounded-full blur-2xl animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#81D8D0]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#81D8D0] rounded-full animate-pulse" />
                <span className="text-[#0A8A82] text-sm font-medium">
                  High-Performance Skincare
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A35] mb-6 leading-tight">
                True performance
                <br />
                <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                  begins beneath
                </span>{' '}
                the surface.
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                진정한 아름다움은 일시적인 효과가 아닌, 지속 가능한 변화에서
                시작됩니다. 엘레젠글로벌과 함께 당신의 피부를 깨우세요.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
                >
                  <Link href="/products" className="flex items-center gap-2">
                    Discover Your Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#81D8D0] text-[#0A8A82] hover:bg-[#E8F8F7] px-8"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
                {/* Ampoule Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-72 md:w-56 md:h-80">
                    {/* Bottle */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#81D8D0]/20 to-[#81D8D0]/60 rounded-3xl border-2 border-[#81D8D0]/30 backdrop-blur-sm shadow-2xl animate-pulse-glow">
                      {/* Liquid */}
                      <div className="absolute bottom-4 left-4 right-4 h-2/3 bg-gradient-to-t from-[#81D8D0]/80 to-[#81D8D0]/30 rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-2xl" />
                      </div>
                      {/* Cap */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-[#C0C0C0] to-[#A0A0A0] rounded-t-lg shadow-lg">
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-[#D0D0D0] rounded-full" />
                      </div>
                      {/* Label */}
                      <div className="absolute top-8 left-4 right-4 bg-white/90 rounded-lg p-3 text-center">
                        <span className="text-[10px] tracking-wider text-[#0A8A82] block">
                          ELEGENN
                        </span>
                        <span className="text-[8px] text-gray-400 block mt-0.5">
                          GLOBAL
                        </span>
                        <div className="w-full h-px bg-[#81D8D0]/30 my-2" />
                        <span className="text-[9px] text-[#1A3A35] font-medium">
                          PDRN REGEN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <Dna className="w-8 h-8 text-[#81D8D0]" />
                </div>
                <div
                  className="absolute bottom-20 left-0 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <Sparkles className="w-7 h-7 text-[#0A8A82]" />
                </div>
                <div
                  className="absolute top-1/4 -left-8 w-12 h-12 bg-[#81D8D0]/20 rounded-full animate-float"
                  style={{ animationDelay: '2s' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#81D8D0]" />
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              BRAND STORY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3A35] mb-8">
              ELEGENN GLOBAL: Where science meets{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                visible results.
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              엘레젠글로벌은 단순한 스킨케어 브랜드가 아닙니다. 빠르게 소비되는
              트렌드 속에서 본질에 집중하며, 피부의 근본적인 변화를 이끌어내는
              고기능성 솔루션을 연구합니다.
            </p>
            <Button
              variant="outline"
              className="border-2 border-[#81D8D0] text-[#0A8A82] hover:bg-[#E8F8F7] px-8"
            >
              <Link href="/about" className="flex items-center gap-2">
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-24 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              CORE TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3A35] mb-4">
              Engineered for{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                visible transformation.
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              불필요한 요소를 배제한 고효능 처방으로 피부 과학의 한계를
              뛰어넘습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8F8F7] hover:border-[#81D8D0]/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#81D8D0] to-[#0A8A82] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3A35] mb-2">
                  {tech.title}
                </h3>
                <p className="text-[#81D8D0] text-sm font-medium mb-4">
                  {tech.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white"
            >
              <Link href="/technology" className="flex items-center gap-2">
                View Our Technology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              PRODUCT LINEUP
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3A35] mb-4">
              High-Performance{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                Skin Solution
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              과학적 근거에 기반한 고기능성 원료와 정교한 처방 기술의 조화
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products#${product.id}`}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#81D8D0]/30 overflow-hidden"
              >
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#81D8D0]/10 text-[#0A8A82] text-xs font-medium rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <product.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#1A3A35] mb-1">
                  {product.name}
                </h3>
                <p className="text-[#81D8D0] text-sm font-medium mb-2">
                  {product.nameKo}
                </p>
                <p className="text-gray-500 text-sm">{product.description}</p>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-[#81D8D0]" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
            >
              <Link href="/products" className="flex items-center gap-2">
                Experience Real Results
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A3A35] to-[#0A8A82]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: '순수 원료' },
              { value: '50+', label: '글로벌 파트너' },
              { value: '10K+', label: '만족 고객' },
              { value: '24/7', label: '기술 지원' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-[#81D8D0] text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#E8F8F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-6">
            ELEGENN과 함께{' '}
            <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
              시작하세요
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
           OEM/ODM 제조 및 글로벌 유통에 관심이 있으신 분은 언제든지
            문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
            >
              <Link href="/contact" className="flex items-center gap-2">
                문의하기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#81D8D0] text-[#0A8A82] hover:bg-[#E8F8F7] px-8"
            >
              <Link href="/products">제품 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
