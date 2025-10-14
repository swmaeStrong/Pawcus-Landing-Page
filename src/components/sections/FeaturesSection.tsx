"use client";

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    if (!containerRef.current || !panelsRef.current) return;

    const panels = gsap.utils.toArray('.panel');

    // 초기 위치 설정
    gsap.set(panelsRef.current, { x: 0 });

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

          console.log('Progress:', self.progress, 'New Index:', newIndex, 'Current activeIndex:', activeIndex);

          // 항상 업데이트하도록 변경
          setActiveIndex(newIndex);
          setScrollProgress(self.progress);
        }
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images.length]);

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
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="features-heading">
      {/* Progress Bar - 상단 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Vertical Progress Indicator - 우측 */}
      <div className="fixed right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
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

      <div className="h-screen flex items-center">
        <div ref={panelsRef} className="flex flex-nowrap" style={{ width: `${images.length * 100}vw` }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="panel relative flex-shrink-0 flex items-center justify-center"
              style={{ minWidth: '100vw', width: '100vw' }}
            >
              <motion.div
                className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0.5,
                  scale: index === activeIndex ? 1 : 0.92
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Card Background Glow */}
                <div className={`absolute -inset-6 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-[2.5rem] blur-3xl transition-all duration-700 ${
                  index === activeIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
                }`} />

                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                  {/* Card Header with gradient */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                      {/* Image Section - Card within Card */}
                      <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <motion.div
                          className="relative group"
                          animate={{
                            y: index === activeIndex ? 0 : 20
                          }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {/* Image Card */}
                          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 shadow-inner border border-gray-200">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10" />
                              <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full h-auto transition-all duration-700 ${
                                  index === activeIndex ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                                }`}
                              />
                            </div>

                          </div>
                        </motion.div>
                      </div>

                      {/* Content Section - Card within Card */}
                      <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <motion.div
                          className="space-y-6"
                          initial={{ y: 50, opacity: 0 }}
                          animate={{
                            y: index === activeIndex ? 0 : 50,
                            opacity: index === activeIndex ? 1 : 0
                          }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {/* Title Card */}
                          <div className="space-y-4">
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                              {image.title}
                            </h3>
                          </div>

                          {/* Description Card */}
                          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <p className="text-base text-gray-700 leading-relaxed">
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
                              className="space-y-3"
                              initial={{ y: 30, opacity: 0 }}
                              animate={{
                                y: index === activeIndex ? 0 : 30,
                                opacity: index === activeIndex ? 1 : 0
                              }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {image.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                                  initial={{ x: -30, opacity: 0 }}
                                  animate={{
                                    x: index === activeIndex ? 0 : -30,
                                    opacity: index === activeIndex ? 1 : 0
                                  }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 0.4 + (featureIndex * 0.1)
                                  }}
                                >
                                  <div className={`w-2.5 h-2.5 ${feature.color} rounded-full flex-shrink-0`}></div>
                                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
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
