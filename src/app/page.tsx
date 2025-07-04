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


// 주요 통계 데이터 제거


export default function LandingPage() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('명령어가 클립보드에 복사되었습니다!')
  const [toastType, setToastType] = useState<'success' | 'error'>('success')
  const dashboardRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setToastMessage('명령어가 클립보드에 복사되었습니다!')
      setToastType('success')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      
      // GA4 Event Tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download_attempt', {
          event_category: 'engagement',
          event_label: 'homebrew_copy',
          method: 'homebrew',
          content_type: 'command_copy'
        })
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
      setToastMessage('복사에 실패했습니다. 수동으로 복사해주세요.')
      setToastType('error')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
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
    <div className="min-h-screen bg-[#ECECEC] dark:bg-[#383838] relative overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#1C1C1C] dark:via-[#2D2D2D] dark:to-[#383838] opacity-50" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl " />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl " style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/15 to-blue-600/15 rounded-full blur-3xl " style={{ animationDelay: '2s' }} />
      </div>
      

      {/* Toast Notification */}
      {showToast && (
        <aside 
          className={`fixed top-20 right-4 z-50 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border ${
            toastType === 'success' 
              ? 'bg-gradient-to-r from-emerald-500 to-green-600 border-emerald-400/50' 
              : 'bg-gradient-to-r from-red-500 to-red-600 border-red-400/50'
          } text-white`} 
          role="alert" 
          aria-live="polite"
        >
          <CheckCircle className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium">{toastMessage}</span>
          {toastType === 'success' && <Sparkles className="h-4 w-4" aria-hidden="true" />}
        </aside>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        {/* Hero Section - 확대 및 강화 */}
        <section className="py-32 text-center relative" aria-labelledby="hero-heading">
          <div className="scroll-animate">
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-3xl" />
              <h1 id="hero-heading" className="text-9xl font-black mb-6 text-gray-800 dark:text-[rgb(220,220,220)] relative z-10">
                Pawcus
              </h1>
              <div className="w-40 h-1.5 bg-purple-600 dark:bg-[rgb(168,85,247)] mx-auto rounded-full mb-8" />
            </div>
            
            <div className="relative">
              <h2 className="text-5xl mb-8 text-gray-800 dark:text-[rgb(220,220,220)] font-bold leading-tight">
                개발자를 위한 <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">스마트 생산성 관리</span>
              </h2>
            </div>
            
            <p className="text-2xl text-gray-600 dark:text-[rgb(153,153,153)] mb-16 max-w-4xl mx-auto leading-relaxed">
              AI 기반 스마트 시간 추적과 게임화된 경쟁 시스템으로
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">개인과 팀의 생산성을 혁신적으로 향상시켜보세요.</span>
            </p>
            
            {/* Demo Video */}
            <div className="flex justify-center mb-16">
              <video 
                autoPlay
                muted
                loop
                playsInline
                controls 
                className="rounded-2xl shadow-2xl w-full max-w-4xl"
                style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <source src="/screenshots/demo.mov" type="video/quicktime" />
                <source src="/screenshots/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Download Options - 간단하고 깔끔한 디자인 */}
            <section className="flex flex-col items-center mb-16 space-y-12" aria-labelledby="download-heading">
              <header className="text-center">
                <h3 id="download-heading" className="text-4xl font-bold text-gray-800 dark:text-[rgb(220,220,220)] mb-4">
                  <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">Pawcus</span> 다운로드
                </h3>
                <p className="text-lg text-gray-600 dark:text-[rgb(153,153,153)]">
                  선호하는 방법으로 Pawcus를 설치하세요
                </p>
              </header>
              
              {/* Download Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                {/* Homebrew Option */}
                <div className="group relative w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 " />
                  <Button
                    onClick={() => copyToClipboard('brew tap swmaeStrong/pawcus && brew install --cask pawcus')}
                    className="relative w-full bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border-2 border-purple-500 dark:border-[rgb(80,80,80)] hover:border-purple-600 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-purple-500/20 min-w-[280px] h-20"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <Copy className="w-7 h-7 text-purple-600 dark:text-[rgb(168,85,247)]" />
                      <div className="text-center">
                        <div className="font-bold text-gray-800 dark:text-[rgb(220,220,220)]">brew 명령어 복사</div>
                        <div className="text-gray-600 dark:text-[rgb(153,153,153)] text-sm font-normal">터미널에서 간편 설치</div>
                      </div>
                    </div>
                  </Button>
                </div>
                
                {/* DMG Download Option */}
                <div className="group relative w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 " />
                  <Button
                    onClick={() => {
                      // GA4 Event Tracking
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'download_attempt', {
                          event_category: 'engagement',
                          event_label: 'dmg_download_hero',
                          method: 'dmg',
                          content_type: 'direct_download'
                        })
                      }
                      
                      const link = document.createElement('a');
                      link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/latest/download/Pawcus.dmg';
                      link.download = 'Pawcus.dmg';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="relative w-full bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border-2 border-emerald-500 dark:border-[rgb(80,80,80)] hover:border-emerald-600 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-emerald-500/20 min-w-[280px] h-20"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <svg className="w-7 h-7 text-emerald-600 dark:text-[rgb(168,85,247)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="text-center">
                        <div className="font-bold text-gray-800 dark:text-[rgb(220,220,220)]">DMG 다운로드</div>
                        <div className="text-gray-600 dark:text-[rgb(153,153,153)] text-sm font-normal">직접 설치 파일</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="text-center max-w-2xl">
                <p className="text-gray-500 dark:text-[rgb(153,153,153)]">
                  Homebrew로 자동 업데이트 또는 DMG로 직접 설치
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section ref={dashboardRef} className="py-24 relative" aria-labelledby="features-heading">
          <article className="mb-24 scroll-animate">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-6 dark:text-[rgb(220,220,220)]">Pawcus Features</h3>
              <p className="text-2xl dark:text-[rgb(153,153,153)] leading-relaxed">
                사용 로그를 실시간으로 분석하여 카테고라이징을 해주고, 가장 많이 사용하는 카테고리의 통계를 내줍니다
              </p>
            </div>
            {/* Category Analysis Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">카테고리별 시간 분석</h3>
                <p className="text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
                  Development, Design, Browser 등 6개 영역별 시간 사용 패턴을 레이더 차트로 시각화합니다.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">주요 활동 영역 파악</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">개발자의 주요 활동 영역을 한눈에 파악할 수 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">집중 분야 인사이트</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">어느 분야에 더 집중해야 하는지 데이터 기반 인사이트를 제공합니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">시각적 데이터 표현</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">레이더 차트로 복합적인 데이터를 직관적으로 표현합니다.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <figure>
                  <div className="aspect-square bg-[#1C1C1C] dark:bg-[#1C1C1C] flex items-center justify-center p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src="/screenshots/categoryAnalysis.png" 
                      alt="Top 6 Category Analysis"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>
                </figure>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-1">
                <figure>
                  <div className="rounded-xl shadow-2xl border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src="/screenshots/recentActivity.png" 
                      alt="Recent Activity Log"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>
                </figure>
              </div>
              <div className="order-2">
                <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">실시간 활동 추적</h3>
                <p className="text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
                  VS Code, Chrome, Figma 등 앱별 활동을 실시간으로 기록하고 자동으로 카테고리를 분류합니다.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">정확한 시간 추적</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">어떤 앱에서 얼마나 오랫동안 작업했는지 정확하게 추적합니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">자동 카테고리 분류</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">AI가 활동을 자동으로 분석하여 적절한 카테고리로 분류합니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">시간 관리 최적화</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">상세한 활동 로그를 통해 시간 관리를 최적화할 수 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wide screenshots in separate row */}
            <div className="text-center mb-12 mt-16">
              <h4 className="text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)]">시간대별로 나의 집중도를 분석해보세요!</h4>
              <p className="text-lg dark:text-[rgb(153,153,153)]">언제 가장 집중력이 높은지 파악하여 중요한 작업을 적절한 시간에 배치하세요</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {/* Hourly Usage Log - Wide landscape */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/screenshots/hourlyUsageLog.png" 
                  alt="Hourly Usage Analytics"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h4 className="font-semibold text-lg mb-2 text-white">시간대별 사용량 분석</h4>
                  <p className="text-sm text-gray-200 mb-2">하루 종일 사용량과 개발시간을 비교하여 생산성이 가장 높은 시간대를 찾아줍니다.</p>
                  <p className="text-xs text-gray-300">언제 가장 집중력이 높은지 알아내어 중요한 작업을 적절한 시간에 배치할 수 있습니다.</p>
                </div>
              </div>
            </div>
            
            {/* Timeline in full width */}
            <div className="text-center mb-12 mt-16">
              <h4 className="text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)]">이제 나의 업무시간, 휴식 습관을 체크해보세요!</h4>
              <p className="text-lg dark:text-[rgb(153,153,153)]">하루 전체의 업무 패턴을 직관적으로 파악하여 시간 관리를 개선하세요</p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {/* Timeline - Ultra wide landscape */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img 
                  src="/screenshots/timeline.png" 
                  alt="Daily Timeline View"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h4 className="font-semibold text-lg mb-2 text-white">일일 업무 타임라인</h4>
                  <p className="text-sm text-gray-200 mb-2">24시간 동안의 모든 활동을 meetings, work, breaks 등으로 분류하여 시간 블록으로 표시합니다.</p>
                  <p className="text-xs text-gray-300">하루 전체의 업무 패턴을 직관적으로 파악할 수 있어 시간 또는 생산성 개선에 도움이 됩니다.</p>
                </div>
              </div>
            </div>
          </article>

          {/* Leaderboard */}
          <div className="text-center mb-12 mt-16">
            <h4 className="text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)]">동료들과 함께 경쟁하며 성장하세요!</h4>
            <p className="text-lg dark:text-[rgb(153,153,153)]">건전한 경쟁을 통해 서로 동기부여를 받고 더 높은 생산성을 달성하세요</p>
          </div>
          <article className="mb-12 scroll-animate">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">실시간 리더보드</h3>
                <p className="text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
                  Daily, Weekly, Monthly 기간별로 동료들과 개발 시간을 비교하고 순위를 확인하세요.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">카테고리별 경쟁</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">Development, Design, LLM 등 다양한 영역에서 동료들과 경쟁할 수 있습니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">실시간 업데이트</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">활동 시간이 실시간으로 집계되어 순위가 즉시 반영됩니다.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
                    <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">건전한 동기부여</h4>
                    <p className="text-gray-600 dark:text-[rgb(153,153,153)]">팀원들과 함께 성장하며 생산성 향상을 위한 동기를 얻을 수 있습니다.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <figure>
                  <Card className="bg-white/80 dark:bg-[#1C1C1C]/90 backdrop-blur-sm shadow-2xl border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
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
                              <div className="text-[rgb(153,153,153)] text-xl font-bold">⋯</div>
                            </div>
                          )
                        }

                        return (
                          <div
                            key={index}
                            className={`flex items-center p-4 rounded-xl transition-all duration-500 hover:scale-[1.02] border relative overflow-hidden group ${
                              index === 0 
                                ? 'bg-gradient-to-r from-yellow-400/30 via-purple-400/20 to-blue-500/30 hover:from-yellow-400/40 hover:via-purple-400/30 hover:to-blue-500/40 shadow-lg border-yellow-400/50' 
                                : 'bg-[#2D2D2D] hover:bg-[#383838] border-[rgb(80,80,80)]'
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {index === 0 && (
                              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-purple-400/10 to-blue-500/15" />
                            )}
                            
                            {/* 순위 번호 */}
                            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 border-2 relative z-10 ${
                              index === 0 
                                ? 'bg-gradient-to-br from-yellow-400 via-cyan-400 to-blue-500 text-white border-yellow-400/50 shadow-lg' 
                                : 'bg-white dark:bg-[#1C1C1C] text-gray-700 dark:text-[rgb(220,220,220)] border-gray-300 dark:border-[rgb(80,80,80)]'
                            }`}>
                              {user.rank}
                            </div>

                            {/* 랭크 아이콘 (1등만 표시) */}
                            {user.rankImage && (
                              <div className="flex-shrink-0 mr-4 relative z-10">
                                <div className="relative group-">
                                  <Image
                                    src={`/rank/${user.rankImage}`}
                                    alt={`rank-${user.rank}`}
                                    width={32}
                                    height={32}
                                    className="drop-shadow-lg"
                                  />
                                  {index === 0 && (
                                    <div className="absolute -top-1 -right-1">
                                      <Crown className="h-4 w-4 text-yellow-500 " />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* 사용자 정보 */}
                            <div className="flex-1 min-w-0 relative z-10">
                              <h3 className={`font-bold text-lg truncate transition-colors duration-300 ${
                                index === 0 ? 'text-gray-800 dark:text-[rgb(220,220,220)]' : 'text-gray-800 dark:text-[rgb(220,220,220)]'
                              }`}>
                                {user.name}
                              </h3>
                              <p className="text-gray-500 dark:text-[rgb(153,153,153)] text-sm">{user.points.toLocaleString()} 포인트</p>
                            </div>

                            {/* 시간 정보 */}
                            <div className="text-right relative z-10">
                              <div className={`text-lg font-bold transition-colors duration-300 ${
                                index === 0 ? 'text-gray-800 dark:text-[rgb(220,220,220)]' : 'text-gray-800 dark:text-[rgb(220,220,220)]'
                              }`}>
                                {user.time}
                              </div>
                              <p className="text-green-600 dark:text-green-400 text-sm font-semibold">{user.trend}</p>
                            </div>

                            {index === 0 && (
                              <div className="absolute top-2 right-2">
                                <Sparkles className="h-4 w-4 text-yellow-500 " />
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


        {/* CTA Section - 부드럽고 조화로운 디자인 */}
        <section className="py-24 text-center relative" aria-labelledby="cta-heading">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/30 via-gray-100/30 to-emerald-200/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000" />
            <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#2D2D2D] dark:via-[#1C1C1C] dark:to-[#383838] rounded-3xl p-16 border border-gray-200 dark:border-[rgb(80,80,80)] shadow-2xl overflow-hidden">
              
              <div className="relative z-10">
                {/* Pawcus Small Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 rounded-full blur-lg" />
                    <Image
                      src="/icons/final_icon_128x128.png"
                      alt="Pawcus Logo"
                      width={60}
                      height={60}
                      className="relative z-10 "
                    />
                  </div>
                </div>
                
                <h2 id="cta-heading" className="text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">
                  <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">지금 바로</span> 시작해보세요
                </h2>
                <p className="text-xl mb-10 text-gray-600 dark:text-[rgb(153,153,153)] max-w-2xl mx-auto">
                  간단한 설치로 생산성 게임화의 새로운 경험을 시작할 수 있습니다
                </p>
                
                {/* Download Options */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                  {/* Homebrew Option */}
                  <div className="group relative w-full md:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-indigo-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => {
                        // GA4 Event Tracking for CTA section
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'download_attempt', {
                            event_category: 'engagement',
                            event_label: 'homebrew_copy_cta',
                            method: 'homebrew',
                            content_type: 'command_copy'
                          })
                        }
                        
                        copyToClipboard('brew tap swmaeStrong/pawcus && brew install --cask pawcus')
                      }}
                      className="relative w-full bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border-2 border-purple-400 dark:border-[rgb(80,80,80)] hover:border-purple-500 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-purple-400/20 min-w-[280px] h-20"
                    >
                      <div className="flex items-center justify-center space-x-4">
                        <Copy className="w-7 h-7 text-purple-600" />
                        <div className="text-center">
                          <div className="font-bold text-gray-800 dark:text-[rgb(220,220,220)]">brew 명령어 복사</div>
                          <div className="text-gray-600 dark:text-[rgb(153,153,153)] text-sm font-normal">터미널에서 간편 설치</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                  
                  {/* DMG Download Option */}
                  <div className="group relative w-full md:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 " />
                    <Button
                      onClick={() => {
                        // GA4 Event Tracking for CTA section
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'download_attempt', {
                            event_category: 'engagement',
                            event_label: 'dmg_download_cta',
                            method: 'dmg',
                            content_type: 'direct_download'
                          })
                        }
                        
                        const link = document.createElement('a');
                        link.href = 'https://github.com/swmaeStrong/Pawcus-Public/releases/download/v0.8.0/Pawcus.dmg';
                        link.download = 'Pawcus.dmg';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="relative w-full bg-white dark:bg-[#1C1C1C] hover:bg-gray-50 dark:hover:bg-[#2D2D2D] text-gray-800 dark:text-[rgb(220,220,220)] border-2 border-emerald-400 dark:border-[rgb(80,80,80)] hover:border-emerald-500 dark:hover:border-[rgb(120,120,120)] backdrop-blur-sm px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-emerald-400/20 min-w-[280px] h-20"
                    >
                      <div className="flex items-center justify-center space-x-4">
                        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 dark:text-[rgb(220,220,220)]">DMG 다운로드</div>
                          <div className="text-gray-600 dark:text-[rgb(153,153,153)] text-sm font-normal">직접 설치 파일</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-[rgb(153,153,153)] mt-6">
                  Homebrew로 자동 업데이트 또는 DMG로 직접 설치
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Business Information */}
      <footer className="py-12 border-t border-gray-200/50 dark:border-[rgb(80,80,80)]/50 bg-gray-50/80 dark:bg-[#383838]/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50 dark:from-[#383838]/50 dark:via-[#1C1C1C]/30 dark:to-[#2D2D2D]/50" />
        
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
            <div className="text-sm text-gray-600 dark:text-[rgb(153,153,153)] space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span className="font-medium">상호명: 집중</span>
                <span className="hidden md:inline text-gray-400 dark:text-[rgb(153,153,153)]">|</span>
                <span>사업자등록번호: 255-18-02409</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-1 md:space-y-0">
                <span>대표자: 김영현</span>
                <span className="hidden md:inline text-gray-400 dark:text-[rgb(153,153,153)]">|</span>
                <span>전화번호: 010-5172-5645</span>
              </div>
              <div className="text-center">
                <span>사업장주소: 전라남도 나주시 우정로 77</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <nav className="pt-4 border-t border-gray-200/50 dark:border-[rgb(80,80,80)]/50" aria-label="Footer Navigation">
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 space-y-2 md:space-y-0 mb-4">
                <Link href="/terms" className="text-sm text-gray-600 dark:text-[rgb(153,153,153)] hover:text-purple-600 dark:hover:text-[rgb(168,85,247)] transition-colors">
                  이용약관
                </Link>
                <span className="hidden md:inline text-gray-400 dark:text-[rgb(153,153,153)]" aria-hidden="true">|</span>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-[rgb(153,153,153)] hover:text-purple-600 dark:hover:text-[rgb(168,85,247)] transition-colors">
                  개인정보처리방침
                </Link>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-[rgb(153,153,153)]">
                © 2025 Pawcus. All rights reserved.
              </p>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}