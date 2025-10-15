"use client";

import { useRef, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  descriptionSub?: string;
  features: { color: string; text: string }[];
}

export default function FeaturesSection() {
  const t = useTranslations('features');
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/screenshots/SessionAnalysis.png",
      alt: "세션 분석",
      title: t('sessionAnalysis.title'),
      description: t('sessionAnalysis.description'),
      descriptionSub: t('sessionAnalysis.descriptionSub'),
      features: [
        { color: "bg-blue-500", text: t('sessionAnalysis.features.detailedMetrics') },
        { color: "bg-purple-500", text: t('sessionAnalysis.features.focusPattern') },
        { color: "bg-pink-500", text: t('sessionAnalysis.features.productivityInsights') }
      ]
    },
    {
      id: 3,
      src: "/screenshots/Timeline.png",
      alt: "타임라인 개요",
      title: t('timelineOverview.title'),
      description: t('timelineOverview.description'),
      descriptionSub: t('timelineOverview.descriptionSub'),
      features: [
        { color: "bg-blue-500", text: t('timelineOverview.features.timelineSummary') },
        { color: "bg-green-500", text: t('timelineOverview.features.workPattern') },
        { color: "bg-purple-500", text: t('timelineOverview.features.detailedAnalysis') }
      ]
    },
    {
      id: 2,
      src: "/screenshots/BlockAppFeature.png",
      alt: "앱 차단 기능",
      title: t('blockAppFeature.title'),
      description: t('blockAppFeature.description'),
      descriptionSub: t('blockAppFeature.descriptionSub'),
      features: [
        { color: "bg-red-500", text: t('blockAppFeature.features.appBlocking') },
        { color: "bg-orange-500", text: t('blockAppFeature.features.websiteBlocking') },
        { color: "bg-yellow-500", text: t('blockAppFeature.features.focusMode') }
      ]
    },
    {
      id: 4,
      src: "/screenshots/DailyGoal.png",
      alt: "매일 목표 설정",
      title: t('dailyGoal.title'),
      description: t('dailyGoal.description'),
      descriptionSub: t('dailyGoal.descriptionSub'),
      features: [
        { color: "bg-orange-500", text: t('dailyGoal.features.goalSetting') },
        { color: "bg-teal-500", text: t('dailyGoal.features.realTimeProgress') },
        { color: "bg-pink-500", text: t('dailyGoal.features.visualFeedback') }
      ]
    },
    {
      id: 5,
      src: "/screenshots/GroupOverview.png",
      alt: "팀 간 경쟁",
      title: t('groupOverview.title'),
      description: t('groupOverview.description'),
      descriptionSub: t('groupOverview.descriptionSub'),
      features: [
        { color: "bg-indigo-500", text: t('groupOverview.features.teamCompetition') },
        { color: "bg-cyan-500", text: t('groupOverview.features.motivationalRanking') },
        { color: "bg-amber-500", text: t('groupOverview.features.groupPerformance') }
      ]
    }
  ];

  // 화면 크기 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // locale 변경 시 ScrollTrigger 새로고침
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [locale]);

  useEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    // 반응형: 큰 화면(lg 이상)에서만 가로 스크롤 활성화
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // 큰 화면: 가로 스크롤 애니메이션
      const panels = gsap.utils.toArray('.panel');

      // 초기 위치 및 너비 설정
      gsap.set(panelsRef.current, { x: 0, width: `${images.length * 100}vw` });

      // GSAP ScrollTrigger 설정 - Scroll Magic 스타일
      const scrollTween = gsap.to(panelsRef.current, {
        x: () => -(panelsRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          end: () => "+=" + (panelsRef.current!.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // progress를 패널 수에 맞게 변환 (0부터 panels.length-1까지)
            const rawIndex = self.progress * (panels.length - 1);
            // 가장 가까운 정수로 반올림
            const newIndex = Math.max(0, Math.min(panels.length - 1, Math.round(rawIndex)));

            // 항상 업데이트하도록 변경
            setActiveIndex(newIndex);
            setScrollProgress(self.progress);
          }
        }
      });

      return () => {
        scrollTween.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      // 작은 화면: 가로 스크롤 비활성화, 초기 위치로 리셋
      gsap.set(panelsRef.current, { x: 0, width: '100%' });
      setActiveIndex(0);
      setScrollProgress(0);
    });

    return () => {
      mm.revert();
    };
  }, [images.length, locale]);

  const handleNavigation = (targetIndex: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollDistance = (containerRef.current?.offsetWidth || 0) * (images.length - 1);
    const targetScroll = containerTop + (targetIndex / (images.length - 1)) * totalScrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={containerRef} className="relative lg:h-screen lg:overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-0" aria-labelledby="features-heading">

      {/* Vertical Progress Indicator - 우측 (큰 화면에서만 표시) */}
      <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className="group relative"
            aria-label={`Go to section ${index + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-blue-500 scale-150'
                : 'bg-gray-400 hover:bg-gray-500'
            }`} />
            <span className={`absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap text-xs font-medium transition-opacity duration-200 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>
              {index + 1} / {images.length}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:h-screen flex items-center">
        <div ref={panelsRef} className="flex flex-col lg:flex-row lg:flex-nowrap" style={{ width: '100%' }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="panel relative flex items-center justify-center py-6 lg:py-0 w-full lg:flex-shrink-0 lg:min-w-screen lg:w-screen"
            >
              <motion.div
                className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isLargeScreen ? (index === activeIndex ? 1 : 0.5) : 1,
                  scale: isLargeScreen ? (index === activeIndex ? 1 : 0.92) : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Card Background Glow */}
                <div className={`absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-[2.5rem] blur-2xl lg:blur-3xl transition-all duration-700 ${
                  isLargeScreen ? (index === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-95') : 'opacity-60 scale-105'
                }`} />

                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border border-gray-200/50 overflow-hidden">
                  {/* Card Header with gradient */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                  <div className="p-4 sm:p-6 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center">
                      {/* Image Section - Card within Card */}
                      <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <motion.div
                          className="relative group"
                          animate={{
                            y: isLargeScreen ? (index === activeIndex ? 0 : 20) : 0
                          }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {/* Image Card */}
                          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-inner border border-gray-200">
                            <div className="relative rounded-lg lg:rounded-xl overflow-hidden shadow-lg">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10" />
                              <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full h-auto transition-all duration-700 ${
                                  isLargeScreen ? (index === activeIndex ? 'scale-100 blur-0' : 'scale-105 blur-sm') : 'scale-100 blur-0'
                                }`}
                              />
                            </div>

                          </div>
                        </motion.div>
                      </div>

                      {/* Content Section - Card within Card */}
                      <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <motion.div
                          className="space-y-3 sm:space-y-4 lg:space-y-6"
                          initial={{ y: 50, opacity: 0 }}
                          animate={{
                            y: isLargeScreen ? (index === activeIndex ? 0 : 50) : 0,
                            opacity: isLargeScreen ? (index === activeIndex ? 1 : 0) : 1
                          }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {/* Title Card */}
                          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                              {image.title}
                            </h3>
                          </div>

                          {/* Description Card */}
                          <div className="bg-gray-50 border border-gray-200 rounded-lg lg:rounded-xl p-4 sm:p-5 lg:p-6">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {image.description}
                              {image.descriptionSub && (
                                <>
                                  <br />
                                  <span className="mt-2 block text-gray-600">{image.descriptionSub}</span>
                                </>
                              )}
                            </p>
                          </div>

                          {/* Features Cards */}
                          {image.features.length > 0 && (
                            <motion.div
                              className="space-y-2 sm:space-y-2.5 lg:space-y-3"
                              initial={{ y: 30, opacity: 0 }}
                              animate={{
                                y: isLargeScreen ? (index === activeIndex ? 0 : 30) : 0,
                                opacity: isLargeScreen ? (index === activeIndex ? 1 : 0) : 1
                              }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {image.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 bg-white border border-gray-200 rounded-md lg:rounded-lg p-2 sm:p-2.5 lg:p-3 shadow-sm hover:shadow-md transition-shadow"
                                  initial={{ x: -30, opacity: 0 }}
                                  animate={{
                                    x: isLargeScreen ? (index === activeIndex ? 0 : -30) : 0,
                                    opacity: isLargeScreen ? (index === activeIndex ? 1 : 0) : 1
                                  }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.4 + (featureIndex * 0.1)
                                  }}
                                >
                                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${feature.color} rounded-full flex-shrink-0`}></div>
                                  <span className="text-xs sm:text-sm font-medium text-gray-700">{feature.text}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
