'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Dna,
  Droplets,
  Sparkles,
  FlaskConical,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'pdrn',
    icon: Dna,
    name: 'PDRN Regen Booster',
    nameKo: '피부 재생 에너지',
    tagline: '피부 시간을 되돌리는 강력한 재생 에너지',
    taglineEn: 'High-concentration PDRN formula designed to support skin regeneration and recovery.',
    color: 'from-[#81D8D0] to-[#5DD3C8]',
    bgColor: 'bg-[#81D8D0]',
    tag: '베스트셀러',
    description:
      '고농축 PDRN 함유로 손상 피부 집중 케어. 빠른 흡수와 깊은 영양 전달로 전문가 및 데일리 케어 겸용 제품입니다.',
    features: [
      '고농축 PDRN 함유로 손상 피부 집중 케어',
      '빠른 흡수와 깊은 영양 전달 (Fast absorption & deep delivery)',
      '전문가 및 데일리 케어 겸용 (Professional & daily use)',
    ],
    mechanism:
      '단순한 표면 케어가 아닌, 피부 본연의 힘을 끌어올리는 설계. (A targeted formulation that goes beyond surface care)',
    targets: [
      '레이저 등 피부과 시술 후 빠른 진정 및 회복이 필요한 분',
      '피부 장벽이 무너져 쉽게 붉어지고 예민해진 분',
    ],
  },
  {
    id: 'hydra',
    icon: Droplets,
    name: 'Hydra Peptide Booster',
    nameKo: '수분 & 탄력',
    tagline: '차원이 다른 밀도 높은 수분 탄력',
    taglineEn: 'Advanced moisture and elasticity solution powered by Peptide complex and HA.',
    color: 'from-[#0A8A82] to-[#81D8D0]',
    bgColor: 'bg-[#0A8A82]',
    tag: '인기',
    description:
      '고분자/저분자 히알루론산 교차 배합으로 겉과 속 동시 보습. 펩타이드 콤플렉스가 선사하는 즉각적인 탄력 개선.',
    features: [
      '고분자/저분자 히알루론산 교차 배합으로 겉과 속 동시 보습',
      '펩타이드 콤플렉스가 선사하는 즉각적인 탄력 개선',
      '장시간 지속되는 수분 감각',
    ],
    mechanism:
      '피부 깊숙이 수분을 공급하며, 펩타이드가 콜라겐 합성을 촉진하여 탄력 있는 피부를 만들어 줍니다.',
    targets: [
      '속당김이 심하고 푸석푸석한 피부',
      '탄력 저하로 늘어진 모공과 잔주름이 고민인 분',
    ],
  },
  {
    id: 'scalp',
    icon: Sparkles,
    name: 'Scalp Revital Booster',
    nameKo: '두피 환경 개선',
    tagline: '건강한 모발의 시작, 두피 환경의 근본적 개선',
    taglineEn: 'Intensive scalp care solution for a healthy foundation.',
    color: 'from-[#1A3A35] to-[#0A8A82]',
    bgColor: 'bg-[#1A3A35]',
    tag: '신제품',
    description:
      '열감 진정 및 두피 유수분 밸런스 정상화. 두피 장벽 강화를 통한 모근 지지력 향상.',
    features: [
      '열감 진정 및 두피 유수분 밸런스 정상화',
      '두피 장벽 강화를 통한 모근 지지력 향상',
      '상쾌하고 건강한 두피 환경 조성',
    ],
    mechanism:
      '두피 장벽을 강화하고 유수분 밸런스를 정상화하여 모발이 자랄 수 있는 건강한 환경을 만들어 줍니다.',
    targets: [
      '스트레스와 열로 인해 붉고 예민해진 두피',
      '힘없이 처지고 얇아지는 모발의 근본적인 원인을 케어하고 싶은 분',
    ],
  },
  {
    id: 'hair',
    icon: FlaskConical,
    name: 'Hair Repair Booster',
    nameKo: '모발 손상 복구',
    tagline: '손상된 큐티클에 채우는 고농축 단백질',
    taglineEn: 'High-performance hair restoration formula for damaged hair.',
    color: 'from-[#C0C0C0] to-[#81D8D0]',
    bgColor: 'bg-[#C0C0C0]',
    tag: '전문가 추천',
    description:
      '극손상모 집중 영양 공급 및 코팅 효과. 끈적임 없이 가볍고 빠르게 흡수되는 실키 텍스처.',
    features: [
      '극손상모 집중 영양 공급 및 코팅 효과',
      '끈적임 없이 가볍고 빠르게 흡수되는 실키 텍스처',
      '전문 살롱 클리닉 수준의 효과',
    ],
    mechanism:
      '고농축 단백질이 손상된 큐티클을 복구하고 코팅하여 부드럽고 건강한 모발을 완성합니다.',
    targets: [
      '잦은 펌과 염색으로 끊어지고 갈라지는 극손상모',
      '전문 살롱 클리닉 효과를 집에서도 경험하고 싶은 분',
    ],
  },
];

export default function ProductsPage() {
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
              PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A35] mb-6">
              고기능성{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                스킨케어 솔루션
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              메디컬 브랜드 특유의 &lsquo;전문가용 솔루션&rsquo; 느낌을 담은
              고기능성 제품 라인업
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`scroll-mt-24 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Product Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="sticky top-28">
                      <div
                        className={`${product.bgColor}/10 rounded-3xl p-8 md:p-12 relative overflow-hidden`}
                      >
                        {/* Product Image Placeholder */}
                        <div className="relative z-10 text-center">
                          <div
                            className={`w-48 h-64 mx-auto rounded-3xl bg-gradient-to-b ${product.color} flex flex-col items-center justify-center p-6 shadow-2xl`}
                          >
                            <product.icon className="w-20 h-20 text-white mb-4" />
                            <span className="text-white text-xs font-medium tracking-wider">
                              ELEGENN
                            </span>
                            <span className="text-white/80 text-[10px]">
                              GLOBAL
                            </span>
                            <div className="w-full h-px bg-white/30 my-3" />
                            <span className="text-white text-sm font-bold">
                              {product.name.split(' ')[0]}
                            </span>
                            <span className="text-white/80 text-[10px]">
                              {product.name.split(' ')[1]}
                            </span>
                          </div>

                          {/* Tag */}
                          <div className="absolute -top-4 -right-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] text-white text-sm font-medium rounded-full shadow-lg">
                              {product.tag}
                            </span>
                          </div>
                        </div>

                        {/* Decorative */}
                        <div
                          className={`absolute w-48 h-48 rounded-full bg-gradient-to-br ${product.color} opacity-10 -top-12 -right-12 blur-2xl`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color}`}
                      />
                      <span className="text-[#0A8A82] text-sm font-medium">
                        {product.nameKo}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-2">
                      {product.name}
                    </h2>

                    <p className="text-lg text-[#0A8A82] font-medium mb-4">
                      {product.tagline}
                    </p>

                    <p className="text-gray-500 italic mb-6">{product.taglineEn}</p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="bg-[#E8F8F7] rounded-2xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-[#1A3A35] mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#0A8A82]" />
                        주요 특징
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#0A8A82] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mechanism */}
                    <div className="bg-gradient-to-r from-[#1A3A35] to-[#0A8A82] rounded-2xl p-6 mb-6 text-white">
                      <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#81D8D0]" />
                        작용 기전
                      </h3>
                      <p className="text-[#E8F8F7]">{product.mechanism}</p>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-lg font-bold text-[#1A3A35] mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#0A8A82]" />
                        이런 분에게 추천
                      </h3>
                      <div className="space-y-2">
                        {product.targets.map((target, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100"
                          >
                            <span className="w-2 h-2 bg-[#81D8D0] rounded-full" />
                            <span className="text-gray-700">{target}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < products.length - 1 && (
                  <div className="my-24 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-6">
            ELEGENN과 함께{' '}
            <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
              시작하세요
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            OEM/ODM 제조 및 글로벌 유통에 관심이 있으신 분은 언제든지 문의해
            주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                문의하기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#81D8D0] text-[#0A8A82] hover:bg-[#E8F8F7]"
            >
              <Link href="/technology">기술력 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
