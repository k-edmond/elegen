'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Briefcase,
  Factory,
  Globe,
  Package,
  CheckCircle,
  FlaskConical,
} from 'lucide-react';

const businessAreas = [
  {
    icon: FlaskConical,
    title: 'Functional Skincare Development',
    titleKo: '고기능성 스킨케어 연구 개발',
    description:
      '피부 과학에 기반한 고효능 원료와 정교한 처방 기술을 결합한 제품 개발',
  },
  {
    icon: Package,
    title: 'Ampoule & Booster Solutions',
    titleKo: '앰플 및 부스터 전문 솔루션',
    description:
      'PDRN, 펩타이드, HA 등 고기능성 원료를 중심으로 한 앰플 및 부스터 솔루션 기획',
  },
  {
    icon: Factory,
    title: 'OEM / ODM Manufacturing',
    titleKo: 'OEM/ODM 제조',
    description:
      '한국 내 철저한 품질 관리 프로세스를 통한 안정적인 생산 및 글로벌 품질 기준 충족',
  },
  {
    icon: Globe,
    title: 'Global Distribution & Export',
    titleKo: '글로벌 유통 및 수출',
    description:
      '수출 중심의 비즈니스 전개 및 B2B 글로벌 공급망 구축',
  },
];

const inquiryTypes = [
  'OEM/ODM 제조 문의',
  '제품 구매 문의',
  '글로벌 파트너십',
  '기술 협력',
  '기타',
];

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        inquiryType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              CONTACT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A35] mb-6">
              비즈니스 파트너십{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                문의
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ELEGENN delivers more than care—we deliver confidence through results.
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section id="business" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
              BUSINESS AREAS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-4">
              엘레젠글로벌의{' '}
              <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                사업 영역
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              엘레젠글로벌은 제품 기획부터 생산, 글로벌 유통까지 전 과정을 아우르는
              비즈니스 구조를 갖추고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#E8F8F7] to-white rounded-2xl p-8 border border-[#81D8D0]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0A8A82] to-[#81D8D0] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A3A35] mb-1">
                      {area.title}
                    </h3>
                    <p className="text-[#0A8A82] text-sm font-medium mb-3">
                      {area.titleKo}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-[#E8F8F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-[#81D8D0] text-sm font-semibold tracking-wider mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A35] mb-6">
                언제든지{' '}
                <span className="bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] bg-clip-text text-transparent">
                  문의하세요
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                당사와의 파트너십, OEM/ODM 제조 및 수출 관련 문의를 남겨주시면
                신속하게 답변해 드리겠습니다.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#81D8D0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A8A82]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3A35] mb-1">
                      이메일
                    </h3>
                    <p className="text-gray-600">elegenn@naver.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#81D8D0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A8A82]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3A35] mb-1">
                      전화번호
                    </h3>
                    <p className="text-gray-600">+82 2-XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#81D8D0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A8A82]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3A35] mb-1">
                      주소
                    </h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123
                      <br />
                      스카이타워 15층
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#81D8D0]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#0A8A82]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3A35] mb-1">
                      웹사이트
                    </h3>
                    <p className="text-gray-600">www.elegenn.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A3A35] mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#0A8A82]" />
                  상담 가능 시간
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">평일</span>
                    <span className="text-[#1A3A35] font-medium">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">토요일</span>
                    <span className="text-[#1A3A35] font-medium">
                      10:00 - 15:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">일요일</span>
                    <span className="text-red-500">휴무</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1A3A35] mb-6">
                  문의하기
                </h3>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1A3A35] mb-2">
                      문의가 전송되었습니다
                    </h4>
                    <p className="text-gray-600">
                      빠른 시일 내에 답변 드리겠습니다.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                          이름 *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="이름을 입력하세요"
                          required
                          className="border-gray-200 focus:border-[#81D8D0] focus:ring-[#81D8D0]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                          회사명
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="회사명을 입력하세요"
                          className="border-gray-200 focus:border-[#81D8D0] focus:ring-[#81D8D0]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                          연락처
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="010-XXXX-XXXX"
                          className="border-gray-200 focus:border-[#81D8D0] focus:ring-[#81D8D0]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                          이메일 *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                          className="border-gray-200 focus:border-[#81D8D0] focus:ring-[#81D8D0]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                        문의 유형 *
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#81D8D0] focus:ring-[#81D8D0] focus:outline-none"
                      >
                        <option value="">문의 유형을 선택하세요</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1A3A35] mb-2">
                        문의 내용 *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="문의 내용을 입력하세요"
                        required
                        rows={5}
                        className="border-gray-200 focus:border-[#81D8D0] focus:ring-[#81D8D0] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0A8A82] to-[#81D8D0] hover:from-[#0A8A82] hover:to-[#5DD3C8] text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      문의하기
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      문의하신 내용은 빠른 시일 내에 답변 드리겠습니다.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-[#E8F8F7] relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E8F8F7] to-[#D0F0ED]">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#81D8D0] mx-auto mb-4" />
            <p className="text-[#0A8A82] font-medium">서울특별시 강남구 테헤란로 123</p>
            <p className="text-gray-500 text-sm">스카이타워 15층</p>
          </div>
        </div>
      </section>
    </div>
  );
}
