"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, BarChart3, Repeat, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ScreenshotSection() {
  const t = useTranslations('screenshots');

  const features = [
    {
      image: '/screenshots/Timer.png',
      title: t('timer.title'),
      description: t('timer.description'),
      icon: BarChart3,
      color: 'pink',
      bgColor: 'bg-pink-100',
      borderColor: 'border-pink-200',
      details: [t('timer.detail1'), t('timer.detail2'), t('timer.detail3')]
    },
    {
      image: '/screenshots/AIReport.png',
      title: t('aiReport.title'),
      description: t('aiReport.description'),
      icon: Sparkles,
      color: 'indigo',
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
      details: [t('aiReport.detail1'), t('aiReport.detail2'), t('aiReport.detail3')]
    },
    {
      image: '/screenshots/LogAndRules.png',
      title: t('smartRules.title'),
      description: t('smartRules.description'),
      icon: Repeat,
      color: 'blue',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200',
      details: [t('smartRules.detail1'), t('smartRules.detail2'), t('smartRules.detail3')]
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
            <span className="text-sm font-semibold text-indigo-700">{t('heading')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>


        {/* Hero Image */}
        <div className="flex justify-center mb-16 px-2 md:px-4">
          <div className="relative w-full max-w-[95%] overflow-hidden rounded-2xl shadow-2xl border-2 border-[#5b9bd5]/30">
            <Image
              src="/screenshots/Activities.png"
              alt="Co-molib 활동 기록"
              width={1600}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>


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
