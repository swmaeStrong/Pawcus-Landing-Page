'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { 
  Clock, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Rocket,
  Star,
  Trophy,
  Brain,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI 기반 자동 카테고리 분류",
    description: "자체적인 알고리즘과 LLM을 결합하여 사용자의 작업 내역을 세밀하게 분류합니다.",
    details: [
      "실시간 애플리케이션 사용 패턴 분석",
      "코딩, 디자인, 브라우징 등 작업 유형 자동 인식",
      "학습을 통한 분류 정확도 지속 개선"
    ]
  },
  {
    icon: Activity,
    title: "실시간 활동 모니터링",
    description: "macOS에서 실행되는 모든 애플리케이션의 사용 시간을 실시간으로 추적하고 분석합니다.",
    details: [
      "VS Code, Chrome, Figma 등 개발 도구 전문 추적",
      "활성 창과 비활성 시간 구분",
      "정확한 포커스 시간 측정"
    ]
  },
  {
    icon: BarChart3,
    title: "고급 데이터 시각화",
    description: "시간대별, 카테고리별, 일별 데이터를 직관적인 차트와 그래프로 제공합니다.",
    details: [
      "레이더 차트로 스킬별 시간 분배 표시",
      "타임라인으로 하루 업무 패턴 시각화",
      "트렌드 분석으로 생산성 변화 추적"
    ]
  },
  {
    icon: Trophy,
    title: "게임화된 경쟁 시스템",
    description: "동료들과 건전한 경쟁을 통해 생산성 향상 동기를 부여하는 리더보드 시스템입니다.",
    details: [
      "Daily, Weekly, Monthly 기간별 순위",
      "카테고리별 전문성 랭킹",
      "포인트 시스템과 성취 뱃지"
    ]
  },
  {
    icon: Target,
    title: "개인 맞춤 인사이트",
    description: "개인의 작업 패턴을 분석하여 생산성 향상을 위한 맞춤형 제안을 제공합니다.",
    details: [
      "최적의 집중 시간대 식별",
      "휴식 패턴 분석 및 제안",
      "목표 설정 및 달성률 추적"
    ]
  },
  {
    icon: Shield,
    title: "강력한 보안 시스템",
    description: "AES-256 암호화를 통해 사용자의 데이터를 안전하게 보호합니다.",
    details: [
      "업계 표준 AES-256 암호화 적용",
      "최소한의 권한만 요청",
      "투명한 데이터 처리 방식"
    ]
  }
];

const useCases = [
  {
    title: "개인 개발자",
    description: "프리랜서나 개인 프로젝트를 진행하는 개발자",
    benefits: [
      "시간 관리 최적화",
      "생산성 패턴 파악",
      "목표 달성률 향상"
    ]
  },
  {
    title: "개발팀",
    description: "함께 일하는 개발팀의 생산성 향상",
    benefits: [
      "팀원 간 건전한 경쟁",
      "팀 전체 생산성 가시화",
      "협업 효율성 개선"
    ]
  },
  {
    title: "스타트업",
    description: "빠른 성장이 필요한 스타트업 환경",
    benefits: [
      "리소스 효율적 활용",
      "개발 속도 향상",
      "데이터 기반 의사결정"
    ]
  }
];

const stats = [];

export default function AboutPage() {
  useEffect(() => {
    // GA4 Page View Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'About - Pawcus 소개',
        page_location: window.location.href,
        content_group1: 'about_page',
        custom_parameter_1: 'about_page_view'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#ECECEC] dark:bg-[#383838] relative">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#1C1C1C] dark:via-[#2D2D2D] dark:to-[#383838] opacity-50 -z-20" />
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl" />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800 dark:text-white">
              <span className="font-black">Pawcus</span>란?
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              개발자의 작업 내역을 <span className="font-bold text-white">체계적으로 분석</span>하고{' '}
              <span className="font-bold text-white">경쟁 시스템</span>을 통해{' '}
              성장을 돕는 생산성 관리 소프트웨어입니다.
            </p>
          </div>
          
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            핵심 기능
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <span className="text-gray-600 dark:text-white mt-0.5 flex-shrink-0">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            이런 사람에게 적극 추천합니다!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">
                    {useCase.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <span className="text-gray-600 dark:text-white flex-shrink-0">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


      </main>
    </div>
  );
}