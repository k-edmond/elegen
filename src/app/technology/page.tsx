'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dna, Sparkles, Droplets, Microscope, FlaskConical, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const technologies = [
  {
    id: 'pdrn',
    icon: Dna,
    name: 'PDRN',
    fullName: 'Polydeoxyribonucleotide',
    tagline: '피부 본연의 힘을 깨우는 정제된 재생 에너지',
    description:
      '연어 생식세포에서 추출한 DNA 조각으로, 피부 세포의 재생을 돕고 손상된 피부 장벽을 탄탄하게 재건하는 핵심 성분입니다.',
    benefits: [
      '피부 세포 재생 촉진',
      '손상 피부 장벽 복구',
      '항염 효과',
      '빠른 피부 진정',
    ],
    color: 'from-[#81D8D0] to-[#5DD3C8]',
    bgColor: 'bg-[#81D8D0]/10',
  },
  {
    id: 'peptide',
    icon: Sparkles,
    name: 'Peptide Complex',
    fullName: '아미노산 결합체',
    tagline: '무너진 피부 밸런스를 되찾는 단백질 결합',
    description:
      '아미노산의 결합체로, 피부 탄력 저하를 막고 깊은 주름부터 미세 주름까지 케어하여 탄탄하고 매끄러운 피부 결을 완성합니다.',
    benefits: [
      '콜라겐 합성 촉진',
      '탄력 개선',
      '주름 케어',
      '피부 장벽 강화',
    ],
    color: 'from-[#0A8A82] to-[#81D8D0]',
    bgColor: 'bg-[#0A8A82]/10',
  },
  {
    id: 'ha',
    icon: Droplets,
    name: 'HA',
    fullName: 'Hyaluronic Acid',
    tagline: '마르지 않는 깊은 보습감',
    description:
      '고분자/저분자 히알루론산의 교차 배합으로 겉과 속을 동시에 보습하여 지속 가능한 수분 감도를 제공하는 핵심 보습 성분입니다.',
    benefits: [
      '높은 보습력',
      '장시간 수분 유지',
      '피부 탄력 향상',
      '즉각적인 촉감 개선',
    ],
    color: 'from-[#1A3A35] to-[#0A8A82]',
    bgColor: 'bg-[#1A3A35]/10',
  },
  {
    id: 'formulation',
    icon: FlaskConical,
    name: 'Advanced Formulation',
    fullName: '엘레젠 독자 기술',
    tagline: '불필요한 요소를 배제한 고효능 처방',
    description:
      '정제된 고기능성 원료들이 피부 깊숙이 빠르고 안전하게 전달될 수 있도록 정밀하게 설계된 엘레젠만의 흡수 테크놀로지입니다.',
    benefits: [
      '빠른 흡수',
      '깊은 침투',
      '안정적 전달',
      '최적의 효능 발현',
    ],
    color: 'from-[#C0C0C0] to-[#81D8D0]',
    bgColor: 'bg-[#C0C0C0]/10',
  },
];

export default function TechnologyPage() {
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
          {/* Microscope pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#81D8D0]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#81D8D0]/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A35] mb-6">
              과학이 만들어낸{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                혁신적 처방
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              불필요한 요소를 배제한 고효능 처방으로, 피부 과학의 한계를
              뛰어넘는 결과를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Science Concept */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1A3A35] to-[#0A8A82] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Microscope className="w-10 h-10 text-[#81D8D0]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Science Concept
                </h2>
                <p className="text-[#81D8D0] leading-relaxed">
                  엘레젠글로벌은 단순한 피부 관리가 아닌, 피부의{' '}
                  <span className="text-white font-semibold">
                    근본적인 변화
                  </span>
                  를 추구합니다.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#81D8D0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Dna className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">분자 수준 연구</div>
                    <div className="text-gray-300 text-sm">
                      고기능성 원료의 분자 구조 분석
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#81D8D0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">효능 최적화</div>
                    <div className="text-gray-300 text-sm">
                      각 성분 간 시너지 효과 극대화
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                  <div className="w-10 h-10 bg-[#81D8D0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">안전성 검증</div>
                    <div className="text-gray-300 text-sm">
                      글로벌 기준의 엄격한 품질 관리
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Detail */}
      <section className="py-24 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              CORE INGREDIENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-4">
              엘레젠의{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                핵심 성분
              </span>
            </h2>
          </div>

          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                id={tech.id}
                className={`scroll-mt-24 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color}`}
                      />
                      <span className="text-[#0A8A82] text-sm font-medium">
                        {tech.fullName}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-2">
                      {tech.name}
                    </h3>
                    <p className={`text-lg font-medium ${tech.bgColor.replace('10', '50')} text-[#0A8A82] mb-4`}>
                      {tech.tagline}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {tech.description}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-3">
                      {tech.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100"
                        >
                          <span
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                          />
                          <span className="text-sm text-gray-700">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div
                      className={`${tech.bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden`}
                    >
                      <div className="relative z-10">
                        <div
                          className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto shadow-2xl`}
                        >
                          <tech.icon className="w-16 h-16 md:w-20 md:h-20 text-white" />
                        </div>
                        <div className="text-center mt-6">
                          <div className="text-4xl md:text-5xl font-bold text-[#1A3A35]">
                            {tech.name}
                          </div>
                        </div>
                      </div>
                      {/* Decorative circles */}
                      <div
                        className={`absolute w-48 h-48 rounded-full bg-gradient-to-br ${tech.color} opacity-20 -top-12 -right-12 blur-2xl`}
                      />
                      <div
                        className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${tech.color} opacity-10 -bottom-8 -left-8 blur-xl`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              QUALITY ASSURANCE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-4">
              글로벌 기준의{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                품질 관리
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '원료 검수',
                description:
                  '모든 원료는严格的原料検査를 거쳐 순도 및 안전성을 검증합니다.',
                icon: FlaskConical,
              },
              {
                title: '제조 공정',
                description:
                  '한국 내 철저한 품질 관리 프로세스를 통한 안정적인 생산을 진행합니다.',
                icon: Microscope,
              },
              {
                title: '최종 검사',
                description:
                  '글로벌 품질 기준 충족 여부를 최종 검사하여 안전한 제품만 출고합니다.',
                icon: Sparkles,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#E8F8F7] to-white rounded-2xl p-8 text-center border border-[#81D8D0]/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A8A82] to-[#81D8D0] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3A35] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A3A35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            엘레젠의 기술력을 직접 경험하세요
          </h2>
          <p className="text-[#81D8D0] text-lg mb-8 max-w-2xl mx-auto">
            고기능성 스킨케어 솔루션이 만들어내는 놀라운 변화를 확인해 보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#81D8D0] to-[#5DD3C8] hover:from-[#81D8D0] hover:to-[#E8F8F7] text-[#1A3A35] font-bold"
            >
              <Link href="/products" className="flex items-center gap-2">
                제품 보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#81D8D0] text-[#81D8D0] hover:bg-[#81D8D0] hover:text-[#1A3A35]"
            >
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
