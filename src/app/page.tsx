"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Area, AreaChart, Tooltip, Legend } from 'recharts';
import { Copy, CheckCircle, TrendingUp, Trophy, BarChart3, Clock, Target, Users, Star, Medal, Award, Zap, Shield, Rocket, Sparkles, Crown, Flame, Bolt } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

// 카테고리별 이용 시간 데이터 (영어로 변경)
const timeData = [
  { skill: 'Development', value: 9.5, fullMark: 10 },
  { skill: 'Debugging', value: 7.2, fullMark: 8 },
  { skill: 'Documentation', value: 4.8, fullMark: 6 },
  { skill: 'Communication', value: 3.1, fullMark: 2 },
  { skill: 'Browsing', value: 6.7, fullMark: 6 },
  { skill: 'Game', value: 3.9, fullMark: 2 }
]

// 시간별 총 이용시간 vs 개발시간 데이터 (Focus Level 제거)
const timeUsageData = [
  { time: '09:00', total: 58, development: 55 },
  { time: '10:00', total: 45, development: 40 },
  { time: '11:00', total: 60, development: 52 },
  { time: '12:00', total: 35, development: 8 },
  { time: '13:00', total: 25, development: 2 },
  { time: '14:00', total: 60, development: 45 },
  { time: '15:00', total: 40, development: 35 },
  { time: '16:00', total: 50, development: 35 },
  { time: '17:00', total: 55, development: 38 },
  { time: '18:00', total: 45, development: 35 },
]

// 리더보드 데이터 (1등 챌린저, 나머지는 티어 없음)
const leaderboardData = [
  { rank: 1, name: '쓰망', time: '2시간 44분', points: 2840, avatar: '쓰', trend: '+12%', rankImage: 'challenger.png', streak: 7 },
  { rank: 2, name: '0302', time: '2시간 41분', points: 2480, avatar: '03', trend: '+15%', rankImage: null, streak: 3 },
  { rank: '...', name: '', time: '', points: 0, avatar: '', trend: '', rankImage: null, streak: 0 },
  { rank: 47, name: 'You', time: '1시간 23분', points: 850, avatar: 'Y', trend: '+2%', rankImage: null, streak: 1 },
]

// 핵심 기능들
const features = [
  {
    icon: Trophy,
    title: '리더보드를 통한 경쟁',
    description: '동료들과 건전한 경쟁을 통해 생산성을 높이고 서로 동기부여를 받으세요',
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    glowColor: 'shadow-amber-500/30'
  },
  {
    icon: Zap,
    title: '스마트 시간 추적',
    description: 'AI가 자동으로 활동을 분석하고 정확한 시간 추적으로 업무 패턴을 파악합니다',
    gradient: 'from-blue-400 via-cyan-500 to-indigo-600',
    glowColor: 'shadow-blue-500/30'
  },
  {
    icon: BarChart3,
    title: '개인 차트를 통한 분석',
    description: '상세한 차트와 그래프로 생산성 패턴을 시각화하고 개선점을 찾아보세요',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    glowColor: 'shadow-emerald-500/30'
  },
  {
    icon: Target,
    title: '자주 이용하는 카테고리 분석',
    description: '가장 많이 사용하는 앱과 카테고리를 분석하여 업무 효율성을 최적화합니다',
    gradient: 'from-purple-400 via-violet-500 to-indigo-600',
    glowColor: 'shadow-purple-500/30'
  }
]

// 주요 통계 데이터 제거

// 플로팅 파티클 컴포넌트
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          <div className={`w-2 h-2 bg-gradient-to-r ${
            ['from-blue-400 to-purple-500', 'from-pink-400 to-red-500', 'from-green-400 to-blue-500', 'from-yellow-400 to-orange-500'][Math.floor(Math.random() * 4)]
          } rounded-full opacity-40`} />
        </div>
      ))}
    </div>
  );
};

export default function LandingPage() {
  const [showToast, setShowToast] = useState(false)
  const dashboardRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // 인터섹션 옵저버를 위한 Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#ECECEC] relative overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <FloatingParticles />

      {/* Toast Notification */}
      {showToast && (
        <aside className="fixed top-20 right-4 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border border-emerald-400/50" role="alert" aria-live="polite">
          <CheckCircle className="h-5 w-5 animate-bounce" aria-hidden="true" />
          <span className="font-medium">명령어가 클립보드에 복사되었습니다!</span>
          <Sparkles className="h-4 w-4 animate-spin" aria-hidden="true" />
        </aside>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        {/* Hero Section - 확대 및 강화 */}
        <section className="py-32 text-center relative" aria-labelledby="hero-heading">
          <div className="scroll-animate">
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl" />
              
              {/* Pawcus Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse" />
                  <Image
                    src="/icons/final_icon_256x256.png"
                    alt="Pawcus Logo"
                    width={120}
                    height={120}
                    className="relative z-10 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <h1 id="hero-heading" className="text-9xl font-black mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative z-10 animate-pulse">
                <span className="inline-block hover:scale-110 transition-transform duration-300">P</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>a</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>w</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>c</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>u</span>
                <span className="inline-block hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>s</span>
              </h1>
              <div className="w-40 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8 shadow-lg shadow-purple-500/50 animate-pulse" />
              <div className="absolute -top-4 -right-4">
                <Crown className="h-12 w-12 text-yellow-500 animate-bounce" />
              </div>
              <div className="absolute -top-2 -left-6">
                <Sparkles className="h-8 w-8 text-blue-500 animate-spin" />
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-5xl mb-8 text-gray-800 font-bold leading-tight bg-gradient-to-r from-gray-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                개발자를 위한 스마트 생산성 관리
              </h2>
              <div className="absolute -right-8 top-0">
                <Bolt className="h-10 w-10 text-yellow-500 animate-pulse" aria-hidden="true" />
              </div>
            </div>
            
            <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
              AI 기반 스마트 시간 추적과 게임화된 경쟁 시스템으로
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">개인과 팀의 생산성을 혁신적으로 향상시켜보세요.</span>
            </p>
            
            {/* Download Options - 간단하고 깔끔한 디자인 */}
            <section className="flex flex-col items-center mb-16 space-y-12" aria-labelledby="download-heading">
              <header className="text-center">
                <h3 id="download-heading" className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent mb-4">
                  Pawcus 다운로드
                </h3>
                <p className="text-lg text-gray-600">
                  선호하는 방법으로 Pawcus를 설치하세요
                </p>
              </header>
              
              {/* Download Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Homebrew Option */}
                <div className="group relative w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
                  <Button
                    onClick={() => copyToClipboard('brew tap swmaeStrong/pawcus && brew install —cask pawcus')}
                    className="relative w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-purple-500 hover:border-purple-600 backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-purple-500/20 min-w-[280px] h-20"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <Copy className="w-7 h-7 text-purple-600" />
                      <div className="text-center">
                        <div className="font-bold text-gray-800">brew 명령어 복사</div>
                        <div className="text-gray-600 text-sm font-normal">터미널에서 간편 설치</div>
                      </div>
                    </div>
                  </Button>
                </div>
                
                {/* DMG Download Option */}
                <div className="group relative w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
                  <Button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/download/v0.8.0/Pawcus.dmg';
                      link.download = 'Pawcus.dmg';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="relative w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-emerald-500 hover:border-emerald-600 backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-emerald-500/20 min-w-[280px] h-20"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="text-center">
                        <div className="font-bold text-gray-800">DMG 다운로드</div>
                        <div className="text-gray-600 text-sm font-normal">직접 설치 파일</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="text-center max-w-2xl">
                <p className="text-gray-500">
                  Homebrew로 자동 업데이트 또는 DMG로 직접 설치
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* Analytics Section - 각각을 큰 컴포넌트로 변경 */}
        <section ref={dashboardRef} className="py-24 relative" aria-labelledby="analytics-heading">
          <header className="text-center mb-16 scroll-animate">
            <div className="relative inline-block">
              <h2 id="analytics-heading" className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                Analytics & Competitions
              </h2>
              <div className="absolute -top-2 -right-8">
                <Flame className="h-8 w-8 text-orange-500 animate-bounce" aria-hidden="true" />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              데이터 기반 인사이트로 생산성 패턴을 발견하고 최적화하세요
            </p>
          </header>

          {/* Category Analysis */}
          <article className="mb-24 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Category Analysis
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  카테고리별 시간 사용 패턴을 한눈에 파악하고 어떤 영역에 더 집중해야 하는지 알아보세요.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">개발 작업</h4>
                    <p className="text-gray-600">하루 평균 7.5시간으로 가장 많은 시간을 투자하는 영역입니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">커뮤니케이션</h4>
                    <p className="text-gray-600">팀 협업과 회의에 3.1시간을 할애하며 적정 수준을 유지하고 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">학습 활동</h4>
                    <p className="text-gray-600">지속적인 성장을 위해 2.7시간의 학습 시간을 확보하고 있습니다.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 relative z-10">
                    <ResponsiveContainer width="100%" height={400}>
                      <RadarChart data={timeData}>
                        <PolarGrid gridType="polygon" stroke="#e5e7eb" strokeWidth={1.5} />
                        <PolarAngleAxis 
                          dataKey="skill" 
                          tick={{ fill: '#374151', fontSize: 14, fontWeight: 'bold' }}
                        />
                        <PolarRadiusAxis 
                          angle={90} 
                          domain={[0, 10]} 
                          tick={{ fill: '#6b7280', fontSize: 12 }}
                          tickFormatter={(value) => `${value}h`}
                        />
                        <Tooltip 
                          content={({ payload, label }) => {
                            if (payload && payload.length > 0) {
                              const data = payload[0].payload;
                              const percentage = Math.round((data.value / data.fullMark) * 100);
                              return (
                                <div className="bg-white p-4 rounded-lg shadow-xl border border-purple-200 backdrop-blur-sm">
                                  <p className="font-semibold text-gray-800 text-lg">{data.skill}</p>
                                  <p className="text-purple-600 font-bold text-lg">{data.value}h ({percentage}%)</p>
                                  <p className="text-gray-500">목표: {data.fullMark}h</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Radar
                          name="Usage Time"
                          dataKey="value"
                          stroke="#8b5cf6"
                          fill="#8b5cf6"
                          fillOpacity={0.3}
                          strokeWidth={4}
                          dot={{ fill: '#8b5cf6', strokeWidth: 3, r: 8, stroke: '#ffffff' }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </article>

          {/* Usage vs Development */}
          <article className="mb-24 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <figure>
                  <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 relative z-10">
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart data={timeUsageData}>
                        <defs>
                          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="colorDevelopment" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeWidth={1} />
                        <XAxis 
                          dataKey="time" 
                          stroke="#6b7280"
                          fontSize={12}
                          tick={{ fill: '#374151' }}
                        />
                        <YAxis 
                          stroke="#6b7280"
                          fontSize={12}
                          tick={{ fill: '#374151' }}
                        />
                        <Tooltip 
                          content={({ payload, label }) => {
                            if (payload && payload.length > 0) {
                              const total = payload[0]?.value || 0;
                              const development = payload[1]?.value || 0;
                              const efficiency = total > 0 ? Math.round((development / total) * 100) : 0;
                              return (
                                <div className="bg-white p-4 rounded-lg shadow-xl border border-blue-200 backdrop-blur-sm">
                                  <p className="font-semibold text-gray-800 mb-3 text-lg">{label}</p>
                                  <div className="space-y-2">
                                    <p className="flex items-center gap-3">
                                      <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                                      <span>Total: {total}분</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                      <span className="w-4 h-4 bg-emerald-500 rounded-full"></span>
                                      <span>Development: {development}분</span>
                                    </p>
                                    <p className="text-gray-500 pt-2 font-semibold">효율성: {efficiency}%</p>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="total"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          fill="url(#colorTotal)"
                        />
                        <Area
                          type="monotone"
                          dataKey="development"
                          stroke="#10b981"
                          strokeWidth={3}
                          fill="url(#colorDevelopment)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                  </Card>
                </figure>
              </div>
              <div className="order-2">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Efficiency Analysis
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  시간대별 총 사용시간과 개발시간을 비교하여 생산성이 가장 높은 시간대를 파악하세요.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">하루 평균 사용 시간</h4>
                    <p className="text-gray-600">총 8.5시간 중 개발에 6.8시간을 할애하여 높은 집중도를 보입니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">생산성 효율</h4>
                    <p className="text-gray-600">전체 사용시간 대비 80%의 개발 효율성을 달성하고 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">최적 시간대</h4>
                    <p className="text-gray-600">오후 3시부터 5시까지가 가장 집중력이 높은 시간대입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Leaderboard */}
          <article className="mb-12 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Leaderboard
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  동료들과 건전한 경쟁을 통해 서로 동기부여를 받고 더 높은 생산성을 달성하세요.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">현재 순위</h4>
                    <p className="text-gray-600">전체 참가자 중 47위로 상위 15%에 위치하고 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">이번 주 성과</h4>
                    <p className="text-gray-600">지난주 대비 3랭크 상승하며 꾸준한 발전을 보이고 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">다음 목표</h4>
                    <p className="text-gray-600">상위 10% 진입을 목표로 지속적인 생산성 향상에 집중합니다.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <figure>
                  <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-8 relative z-10">
                    <div className="space-y-4">
                      {leaderboardData.map((user, index) => {
                        // "..." 구분선
                        if (user.rank === '...') {
                          return (
                            <div
                              key={index}
                              className="flex items-center justify-center py-4"
                            >
                              <div className="text-gray-400 text-xl font-bold animate-pulse">⋯</div>
                            </div>
                          )
                        }

                        return (
                          <div
                            key={index}
                            className={`flex items-center p-4 rounded-xl transition-all duration-500 hover:scale-[1.02] border border-gray-200 relative overflow-hidden group ${
                              index === 0 
                                ? 'bg-gradient-to-r from-yellow-400/20 via-cyan-400/15 to-blue-500/20 hover:from-yellow-400/30 hover:via-cyan-400/25 hover:to-blue-500/30 shadow-lg' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {index === 0 && (
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-cyan-400/10 to-blue-500/10 animate-pulse" />
                            )}
                            
                            {/* 순위 번호 */}
                            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 border-2 relative z-10 ${
                              index === 0 
                                ? 'bg-gradient-to-br from-yellow-400 via-cyan-400 to-blue-500 text-white border-yellow-400/50 shadow-lg animate-pulse' 
                                : 'bg-white text-gray-700 border-gray-300'
                            }`}>
                              {user.rank}
                            </div>

                            {/* 랭크 아이콘 (1등만 표시) */}
                            {user.rankImage && (
                              <div className="flex-shrink-0 mr-4 relative z-10">
                                <div className="relative group-hover:scale-110 transition-transform duration-300">
                                  <Image
                                    src={`/rank/${user.rankImage}`}
                                    alt={`rank-${user.rank}`}
                                    width={32}
                                    height={32}
                                    className="drop-shadow-lg"
                                  />
                                  {index === 0 && (
                                    <div className="absolute -top-1 -right-1">
                                      <Crown className="h-4 w-4 text-yellow-500 animate-bounce" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* 사용자 정보 */}
                            <div className="flex-1 min-w-0 relative z-10">
                              <h3 className={`font-bold text-lg truncate transition-colors duration-300 ${
                                index === 0 ? 'text-gray-800' : 'text-gray-800'
                              }`}>
                                {user.name}
                              </h3>
                              <p className="text-gray-500 text-sm">{user.points.toLocaleString()} 포인트</p>
                            </div>

                            {/* 시간 정보 */}
                            <div className="text-right relative z-10">
                              <div className={`text-lg font-bold transition-colors duration-300 ${
                                index === 0 ? 'text-gray-800' : 'text-gray-800'
                              }`}>
                                {user.time}
                              </div>
                              <p className="text-green-600 text-sm font-semibold">{user.trend}</p>
                            </div>

                            {index === 0 && (
                              <div className="absolute top-2 right-2">
                                <Sparkles className="h-4 w-4 text-yellow-500 animate-spin" />
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                  </Card>
                </figure>
              </div>
            </div>
          </article>
        </section>

        {/* Features Section - 더 임팩트 있게 */}
        <section ref={featuresRef} className="py-24 relative" aria-labelledby="features-heading">
          <header className="text-center mb-20 scroll-animate">
            <div className="relative inline-block">
              {/* Pawcus Mini Icon */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg animate-pulse" />
                  <Image
                    src="/icons/final_icon_128x128.png"
                    alt="Pawcus Logo"
                    width={60}
                    height={60}
                    className="relative z-10 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <h2 id="features-heading" className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                핵심 기능
              </h2>
              <div className="absolute -top-4 -right-12">
                <Star className="h-8 w-8 text-yellow-500 animate-spin" aria-hidden="true" />
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              생산성 혁신을 위한 스마트한 도구들
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-0 hover:shadow-2xl transition-all duration-500 scroll-animate group hover:scale-[1.03] relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start space-x-6 relative z-10">
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-xl ${feature.glowColor} group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="h-4 w-4 text-purple-500 animate-pulse" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section - 부드럽고 조화로운 디자인 */}
        <section className="py-24 text-center relative" aria-labelledby="cta-heading">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/30 via-gray-100/30 to-emerald-200/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl p-16 border border-gray-200 shadow-2xl overflow-hidden">
              <div className="absolute top-8 left-8">
                <Rocket className="h-12 w-12 text-purple-400/40 animate-bounce" aria-hidden="true" />
              </div>
              <div className="absolute bottom-8 right-8">
                <Bolt className="h-10 w-10 text-emerald-400/40 animate-pulse" aria-hidden="true" />
              </div>
              
              <div className="relative z-10">
                {/* Pawcus Small Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-lg animate-pulse" />
                    <Image
                      src="/icons/final_icon_128x128.png"
                      alt="Pawcus Logo"
                      width={60}
                      height={60}
                      className="relative z-10 hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h2 id="cta-heading" className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-700 to-emerald-700 bg-clip-text text-transparent">
                  지금 바로 시작해보세요
                </h2>
                <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
                  간단한 설치로 생산성 게임화의 새로운 경험을 시작할 수 있습니다
                </p>
                
                {/* Download Options */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                  {/* Homebrew Option */}
                  <div className="group relative w-full md:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-indigo-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => copyToClipboard('brew tap swmaeStrong/pawcus && brew install —cask pawcus')}
                      className="relative w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-purple-400 hover:border-purple-500 backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-purple-400/20 min-w-[280px] h-20"
                    >
                      <div className="flex items-center justify-center space-x-4">
                        <Copy className="w-7 h-7 text-purple-600" />
                        <div className="text-center">
                          <div className="font-bold text-gray-800">brew 명령어 복사</div>
                          <div className="text-gray-600 text-sm font-normal">터미널에서 간편 설치</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                  
                  {/* DMG Download Option */}
                  <div className="group relative w-full md:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
                    <Button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/download/v0.8.0/Pawcus.dmg';
                        link.download = 'Pawcus.dmg';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="relative w-full bg-white hover:bg-gray-50 text-gray-800 border-2 border-emerald-400 hover:border-emerald-500 backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-emerald-400/20 min-w-[280px] h-20"
                    >
                      <div className="flex items-center justify-center space-x-4">
                        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="text-center">
                          <div className="font-bold text-gray-800">DMG 다운로드</div>
                          <div className="text-gray-600 text-sm font-normal">직접 설치 파일</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-6">
                  Homebrew로 자동 업데이트 또는 DMG로 직접 설치
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Business Information */}
      <footer className="py-12 border-t border-gray-200/50 bg-gray-50/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4">
            {/* Company Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-lg" />
                <Image
                  src="/icons/final_icon_128x128.png"
                  alt="Pawcus Logo"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
              </div>
            </div>
            
            {/* Business Information */}
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span className="font-medium">상호명: 집중</span>
                <span className="hidden md:inline text-gray-400">|</span>
                <span>사업자등록번호: 255-18-02409</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span>대표자: 김영현</span>
                <span className="hidden md:inline text-gray-400">|</span>
                <span>전화번호: 010-5172-5645</span>
              </div>
              <div className="text-center">
                <span>사업장주소: 전라남도 나주시 우정로 77</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <nav className="pt-4 border-t border-gray-200/50" aria-label="Footer Navigation">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-2 md:space-y-0 mb-4">
                <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  이용약관
                </Link>
                <span className="hidden md:inline text-gray-400" aria-hidden="true">|</span>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                  개인정보처리방침
                </Link>
              </div>
              
              <p className="text-xs text-gray-500">
                © 2025 Pawcus. All rights reserved.
              </p>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}