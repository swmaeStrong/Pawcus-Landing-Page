"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  CheckCircle2,
  Calendar,
  Clock,
  ListTodo,
  FolderKanban,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Sparkles,
  Timer,
  Repeat
} from 'lucide-react';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  detail: string;
  icon: any;
  color: string;
  bgColor: string;
}

export default function TestPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'workflow' | 'integrations'>('features');

  const features: FeatureCard[] = [
    {
      id: 1,
      title: "스마트 태스크 관리",
      description: "AI 기반 우선순위 자동 설정으로 중요한 일에 집중하세요",
      detail: "머신러닝이 당신의 작업 패턴을 학습하여 최적의 일정을 제안합니다",
      icon: ListTodo,
      color: "#6366f1",
      bgColor: "bg-indigo-50"
    },
    {
      id: 2,
      title: "포모도로 타이머",
      description: "과학적으로 검증된 25분 집중 시스템으로 생산성 극대화",
      detail: "집중 시간과 휴식을 완벽하게 균형잡아 번아웃을 방지합니다",
      icon: Timer,
      color: "#ec4899",
      bgColor: "bg-pink-50"
    },
    {
      id: 3,
      title: "프로젝트 타임라인",
      description: "직관적인 간트 차트로 프로젝트 진행 상황을 한눈에 파악",
      detail: "마일스톤 설정과 의존성 관리로 프로젝트를 체계적으로 관리하세요",
      icon: Calendar,
      color: "#8b5cf6",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      title: "목표 트래킹",
      description: "단기/장기 목표를 설정하고 달성 현황을 시각화",
      detail: "OKR 방식으로 팀과 개인의 목표를 정렬하고 추적합니다",
      icon: Target,
      color: "#10b981",
      bgColor: "bg-emerald-50"
    },
    {
      id: 5,
      title: "협업 워크스페이스",
      description: "팀원들과 실시간으로 소통하며 함께 작업하세요",
      detail: "댓글, 멘션, 파일 공유로 원활한 협업이 가능합니다",
      icon: Users,
      color: "#f59e0b",
      bgColor: "bg-amber-50"
    },
    {
      id: 6,
      title: "생산성 분석",
      description: "작업 시간, 완료율 등 상세한 인사이트 제공",
      detail: "데이터 기반으로 업무 패턴을 분석하고 개선점을 찾아냅니다",
      icon: BarChart3,
      color: "#06b6d4",
      bgColor: "bg-cyan-50"
    },
    {
      id: 7,
      title: "반복 작업 자동화",
      description: "정기적인 태스크를 자동으로 생성하고 관리",
      detail: "일일, 주간, 월간 반복 작업을 설정하여 시간을 절약하세요",
      icon: Repeat,
      color: "#14b8a6",
      bgColor: "bg-teal-50"
    },
    {
      id: 8,
      title: "칸반 보드",
      description: "드래그 앤 드롭으로 작업 흐름을 직관적으로 관리",
      detail: "Todo, In Progress, Done 등 커스텀 컬럼으로 워크플로우 구성",
      icon: FolderKanban,
      color: "#ef4444",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Productivity<span className="text-indigo-600">Pro</span>
              </span>
            </motion.div>

            <div className="flex items-center space-x-8">
              <button className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                기능
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                가격
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">
                고객사례
              </button>
              <motion.button
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-sm font-semibold shadow-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                무료로 시작하기
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1.5 bg-indigo-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
                <span className="text-sm font-semibold text-indigo-700">AI 기반 스마트 워크플로우</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                일의 효율을
                <br />
                <span className="text-indigo-600">10배 높이는</span>
                <br />
                생산성 도구
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                태스크 관리부터 시간 추적, 팀 협업까지.
                모든 업무를 하나의 플랫폼에서 효율적으로 관리하세요.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-semibold shadow-lg shadow-indigo-200 transition-all flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>14일 무료 체험</span>
                  <CheckCircle2 className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="px-7 py-3.5 bg-white hover:bg-gray-50 rounded-xl text-gray-700 font-semibold border-2 border-gray-200 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  데모 보기
                </motion.button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" />
                  신용카드 불필요
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" />
                  즉시 사용 가능
                </div>
              </div>
            </motion.div>

            {/* Right - Timer Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <Image
                  src="/screenshots/Timer.png"
                  alt="포모도로 타이머"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-2 border border-gray-200"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-gray-800">실시간 동작</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-indigo-700">핵심 기능</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              생산성을 극대화하는 도구들
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              업무 효율을 높이는 데 필요한 모든 기능을 하나의 플랫폼에서
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCard(selectedCard === feature.id ? null : feature.id)}
                  className={`
                    relative p-6 rounded-2xl cursor-pointer
                    bg-white border-2
                    hover:shadow-xl transition-all duration-300
                    ${selectedCard === feature.id
                      ? 'border-indigo-500 shadow-lg'
                      : 'border-gray-200 hover:border-indigo-300'
                    }
                  `}
                >
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: feature.color }}
                      />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {selectedCard === feature.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {feature.detail}
                        </p>
                        <button className="mt-3 text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center">
                          자세히 보기 →
                        </button>
                      </motion.div>
                    )}
                  </div>

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 hover:from-indigo-50/50 hover:to-purple-50/50 rounded-2xl transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase with Screenshots */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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

          {/* Feature 1: AI Report (Left Image, Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-indigo-100 group">
                <Image
                  src="/screenshots/AIReport.png"
                  alt="AI 리포트"
                  width={700}
                  height={500}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-3 py-1 bg-indigo-100 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
                <span className="text-sm font-semibold text-indigo-700">AI 기반 분석</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                인공지능 생산성 리포트
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AI가 당신의 작업 패턴을 분석하여 개선점을 제안합니다.
                머신러닝 기반으로 최적의 업무 시간대와 집중력 패턴을 파악하여
                생산성을 극대화할 수 있는 인사이트를 제공합니다.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '작업 패턴 자동 분석',
                  '개인화된 생산성 추천',
                  '주간/월간 트렌드 리포트',
                  '목표 달성률 예측'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 2: Activities (Right Image, Left Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-purple-100 rounded-full mb-4">
                <BarChart3 className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-purple-700">실시간 트래킹</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                활동 기록 및 분석
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                모든 앱과 웹사이트 사용 시간을 자동으로 추적합니다.
                어떤 작업에 시간을 쓰고 있는지 한눈에 파악하고,
                비생산적인 활동을 줄여 집중력을 높일 수 있습니다.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '앱별 사용 시간 추적',
                  '카테고리별 시간 분류',
                  '생산성 점수 계산',
                  '타임라인 시각화'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-100 group">
                <Image
                  src="/screenshots/Activities.png"
                  alt="활동 기록"
                  width={700}
                  height={500}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Log & Rules (Left Image, Right Text) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-100 group">
                <Image
                  src="/screenshots/LogAndRules.png"
                  alt="로그 & 규칙"
                  width={700}
                  height={500}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full mb-4">
                <Repeat className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-700">자동화</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                스마트 규칙 & 로그
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                반복적인 작업은 자동화 규칙으로 처리하세요.
                특정 조건에 따라 자동으로 앱을 차단하거나 알림을 보내는 등
                맞춤형 워크플로우를 구성할 수 있습니다.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '조건 기반 자동화 규칙',
                  '상세한 활동 로그',
                  '커스텀 트리거 설정',
                  '시간대별 자동 모드 전환'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 4: Timer (Centered Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-3 py-1 bg-pink-100 rounded-full mb-4">
              <Timer className="w-4 h-4 text-pink-600 mr-2" />
              <span className="text-sm font-semibold text-pink-700">집중 타이머</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              포모도로 타이머
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              과학적으로 검증된 25분 집중 + 5분 휴식 사이클로 생산성을 극대화하세요.
              커스터마이징 가능한 타이머와 함께 방해 요소를 자동으로 차단합니다.
            </p>

            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-100 group">
              <Image
                src="/screenshots/Timer.png"
                alt="포모도로 타이머"
                width={1000}
                height={700}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Feature Pills */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 px-6">
                {[
                  { icon: Clock, text: '맞춤 시간 설정' },
                  { icon: Target, text: '목표 세션 관리' },
                  { icon: TrendingUp, text: '통계 추적' }
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-pink-600" />
                      <span className="text-sm font-semibold text-gray-800">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              간단한 3단계 워크플로우
            </h2>
            <p className="text-lg text-gray-600">
              복잡한 설정 없이 바로 시작하세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: '태스크 생성',
                description: '할 일을 추가하고 우선순위를 설정하세요',
                icon: ListTodo,
                color: 'indigo'
              },
              {
                step: '2',
                title: '시간 추적',
                description: '포모도로 타이머로 집중 시간을 측정하세요',
                icon: Timer,
                color: 'purple'
              },
              {
                step: '3',
                title: '성과 분석',
                description: '데이터로 업무 패턴을 파악하고 개선하세요',
                icon: BarChart3,
                color: 'pink'
              },
            ].map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white font-bold text-xl mb-6">
                      {workflow.step}
                    </div>
                    <div className={`w-12 h-12 bg-${workflow.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${workflow.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {workflow.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {workflow.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 6L26 16L16 26M26 16H6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10만+', label: '활성 사용자', icon: Users },
              { value: '500만+', label: '완료된 태스크', icon: CheckCircle2 },
              { value: '99.9%', label: '가동률', icon: TrendingUp },
              { value: '4.9/5', label: '사용자 평점', icon: Target },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              지금 바로 시작하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              14일 무료 체험으로 생산성의 차이를 경험해보세요.
              신용카드 등록 없이 바로 시작할 수 있습니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.button
                className="px-8 py-4 bg-white hover:bg-gray-50 rounded-xl text-indigo-600 font-bold text-lg shadow-xl transition-all flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>무료로 시작하기</span>
                <CheckCircle2 className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-indigo-500/30 hover:bg-indigo-500/40 backdrop-blur-sm rounded-xl text-white font-semibold text-lg border-2 border-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                영업팀 문의하기
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-100">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                14일 무료 체험
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                언제든 취소 가능
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                24/7 고객 지원
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">
                  Productivity<span className="text-indigo-600">Pro</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                생산성을 10배 높이는
                <br />
                스마트 워크 플랫폼
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">제품</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">기능</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">가격</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">통합</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">업데이트</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">블로그</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">문의</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">법적 고지</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">보안</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">접근성</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2024 ProductivityPro. All rights reserved.
              </div>

              <div className="flex items-center space-x-6">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
