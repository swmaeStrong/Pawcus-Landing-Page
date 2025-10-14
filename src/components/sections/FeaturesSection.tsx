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
      src: "/screenshots/ScoringSystem.png",
      alt: "집중점수 시스템",
      title: t('focusScore.title'),
      description: t('focusScore.description'),
      features: []
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
          const newIndex = Math.round(self.progress * (panels.length - 1));
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
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
                            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full">
                              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                Feature {index + 1}
                              </span>
                            </div>
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

        {/* Scroll Hint - 개선된 디자인 */}
        <motion.div
          className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
          animate={{
            opacity: activeIndex === 0 ? 1 : 0,
            y: activeIndex === 0 ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">스크롤하여 탐색</span>
                <motion.svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </div>
            </div>
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Section Counter - 하단 중앙 */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <span className="text-sm font-semibold text-gray-800">
              {activeIndex + 1} <span className="text-gray-400">/</span> {images.length}
            </span>
          </div>
        </div>

        {/* Navigation Arrows - 개선된 디자인 */}
        <div className="fixed top-1/2 transform -translate-y-1/2 left-4 lg:left-8 right-4 lg:right-8 flex justify-between pointer-events-none z-30">
          <motion.button
            onClick={() => activeIndex > 0 && handleNavigation(activeIndex - 1)}
            className={`pointer-events-auto group relative w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 transition-all duration-300 flex items-center justify-center ${
              activeIndex === 0 ? 'opacity-0 cursor-not-allowed scale-90' : 'opacity-100 hover:shadow-2xl hover:scale-110'
            }`}
            disabled={activeIndex === 0}
            aria-label="Previous feature"
            whileHover={{ scale: activeIndex === 0 ? 0.9 : 1.1 }}
            whileTap={{ scale: activeIndex === 0 ? 0.9 : 0.95 }}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              이전
            </div>
          </motion.button>

          <motion.button
            onClick={() => activeIndex < images.length - 1 && handleNavigation(activeIndex + 1)}
            className={`pointer-events-auto group relative w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-gray-200 transition-all duration-300 flex items-center justify-center ${
              activeIndex === images.length - 1 ? 'opacity-0 cursor-not-allowed scale-90' : 'opacity-100 hover:shadow-2xl hover:scale-110'
            }`}
            disabled={activeIndex === images.length - 1}
            aria-label="Next feature"
            whileHover={{ scale: activeIndex === images.length - 1 ? 0.9 : 1.1 }}
            whileTap={{ scale: activeIndex === images.length - 1 ? 0.9 : 0.95 }}
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              다음
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
