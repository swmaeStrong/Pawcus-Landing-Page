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

    // GSAP ScrollTrigger 설정
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut"
        },
        end: () => "+=" + (containerRef.current?.offsetWidth || 0) * (panels.length - 1),
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (panels.length - 1));
          setActiveIndex(newIndex);
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
    <section ref={containerRef} className="relative h-screen overflow-hidden" aria-labelledby="features-heading">
      <div className="h-screen flex items-center">
        <div ref={panelsRef} className="flex flex-nowrap" style={{ width: `${images.length * 100}vw` }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="panel relative flex-shrink-0 flex items-center justify-center px-6"
              style={{ minWidth: '100vw', width: '100vw' }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`relative group ${index === activeIndex ? 'transform hover:scale-105' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-700 ${
                      index === activeIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
                    }`} />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: index === activeIndex ? 0 : 50,
                      opacity: index === activeIndex ? 1 : 0
                    }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                      {image.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {image.description}
                      {image.descriptionSub && (
                        <>
                          <br />
                          <span className="mt-2 block">{image.descriptionSub}</span>
                        </>
                      )}
                    </p>

                    {image.features.length > 0 && (
                      <motion.div
                        className="space-y-4"
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
                            className="flex items-center space-x-3"
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
                            <div className={`w-3 h-3 ${feature.color} rounded-full`}></div>
                            <span className="text-gray-700">{feature.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-10 bg-blue-500 shadow-lg'
                  : 'w-3 bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            className="text-center"
            animate={{
              opacity: activeIndex === 0 ? 0.7 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              스크롤하여 기능들을 탐색하세요
            </p>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-gray-400 text-xl"
            >
              →
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-30">
          <button
            onClick={() => activeIndex > 0 && handleNavigation(activeIndex - 1)}
            className={`pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 flex items-center justify-center ${
              activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white hover:scale-110'
            }`}
            disabled={activeIndex === 0}
            aria-label="Previous feature"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => activeIndex < images.length - 1 && handleNavigation(activeIndex + 1)}
            className={`pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 flex items-center justify-center ${
              activeIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white hover:scale-110'
            }`}
            disabled={activeIndex === images.length - 1}
            aria-label="Next feature"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
