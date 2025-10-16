'use client';

import { styles, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function ShowcaseSection() {
  const t = useTranslations('showcase');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const showcases = [
    {
      key: 'home',
      image: '/gif/home.gif',
      title: t('home.title'),
      description: t('home.description'),
    },
    {
      key: 'analysis',
      image: '/gif/analysis.gif',
      title: t('analysis.title'),
      description: t('analysis.description'),
    },
    {
      key: 'webBlock',
      image: '/gif/webBlock.gif',
      title: t('webBlock.title'),
      description: t('webBlock.description'),
    },
  ];

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <section
      className={`${styles.section} relative z-10`}
      aria-labelledby="showcase-heading"
    >
      <div className={styles.scrollAnimate}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            id="showcase-heading"
            className={`${getHeadingStyle(2)} ${styles.text.primary} mb-4`}
          >
            {t('title')}
          </h2>
          <p className={`${getTextStyle('secondary')} max-w-3xl mx-auto`}>
            {t('subtitle')}
          </p>
          <div className={`${styles.gradientDivider} mt-8 mx-auto`} />
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {showcases.map((showcase, index) => (
            <div
              key={showcase.key}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3f72af]/10"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#3f72af]/10 to-[#c6d4e8]/10">
                {!imageErrors[showcase.key] ? (
                  <Image
                    src={showcase.image}
                    alt={showcase.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                    priority={index === 0}
                    onError={() => handleImageError(showcase.key)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Image unavailable</div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`${getHeadingStyle(4)} ${styles.text.primary} mb-3 group-hover:text-[#3f72af] transition-colors`}>
                  {showcase.title}
                </h3>
                <p className={`${getTextStyle('secondary')} leading-relaxed`}>
                  {showcase.description}
                </p>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3f72af]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
