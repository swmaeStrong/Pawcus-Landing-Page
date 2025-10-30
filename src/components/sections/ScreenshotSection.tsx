"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, BarChart3, Repeat, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ScreenshotSection() {
  const t = useTranslations('features');

  const features = [
    {
      image: '/screenshots/Timer.png',
      title: '포모도로 타이머',
      description: '집중력을 극대화하는 포모도로 타이머로 생산성을 높이세요',
      icon: BarChart3,
      color: 'pink',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-200',
      details: ['25분 집중 + 5분 휴식', '세션 자동 추적', '알림 및 사운드 커스터마이징']
    },
    {
      image: '/screenshots/AIReport.png',
      title: 'AI 리포트',
      description: 'AI가 당신의 작업 패턴을 분석하여 개선점을 제안합니다',
      icon: Sparkles,
      color: 'indigo',
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
      details: ['작업 패턴 자동 분석', '개인화된 생산성 추천', '주간/월간 트렌드 리포트']
    },
    {
      image: '/screenshots/LogAndRules.png',
      title: '스마트 규칙',
      description: '반복적인 작업은 자동화 규칙으로 처리하세요',
      icon: Repeat,
      color: 'blue',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
      details: ['조건 기반 자동화 규칙', '상세한 활동 로그', '시간대별 자동 모드 전환']
    }
  ];

  return (
    <section className="relative py-16 px-2 md:px-4">
      <div className="max-w-[95%] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-indigo-700">주요 기능</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            생산성을 극대화하는 핵심 도구
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI 분석부터 활동 추적까지, 모든 기능을 하나의 플랫폼에서
          </p>
        </motion.div>

        {/* Features - Zigzag Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
              >
                {/* Image - 3/5 width */}
                <div className={`relative group lg:col-span-3 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content - 2/5 width */}
                <div className={`lg:col-span-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} px-4`}>
                  <div className={`inline-flex items-center px-4 py-2 ${feature.bgColor} rounded-full mb-4`}>
                    <Icon className={`w-5 h-5 text-${feature.color}-600 mr-2`} />
                    <span className={`text-base font-semibold text-${feature.color}-700`}>
                      {feature.title}
                    </span>
                  </div>
                  <p className="text-xl text-gray-700 font-medium leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-base text-gray-600">
                        <CheckCircle2 className={`w-5 h-5 text-${feature.color}-600 mr-3 flex-shrink-0 mt-0.5`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
