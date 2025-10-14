"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  // 리뷰 데이터 가져오기
  const reviews = Array.from({ length: 6 }, (_, i) => ({
    quote: t(`reviews.${i}.quote`),
    name: t(`reviews.${i}.name`),
    handle: t(`reviews.${i}.handle`)
  }));

  // 아바타 색상 배열
  const avatarColors = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-green-400 to-green-600',
    'from-orange-400 to-orange-600',
    'from-teal-400 to-teal-600'
  ];

  return (
    <section className="py-24 relative" aria-labelledby="testimonials-heading">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Reviews Grid - 불규칙한 레이아웃 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((review, index) => {
            // 각 카드마다 다른 패딩과 스타일 적용
            const cardStyles = [
              'p-6',      // 기본
              'p-7',      // 조금 큰
              'p-5',      // 조금 작은
              'p-6 pt-8', // 위쪽 여백 큰
              'p-8',      // 큰 패딩
              'p-6 pb-8'  // 아래쪽 여백 큰
            ];

            return (
              <motion.div
                key={index}
                className="relative group break-inside-avoid mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Card */}
                <div className={`relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 ${cardStyles[index]}`}>
                  {/* Quote */}
                  <div className="mb-6">
                    <svg
                      className="w-8 h-8 text-gray-300 mb-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 text-base leading-relaxed">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-white font-semibold text-lg shadow-md`}>
                      {review.name.charAt(0)}
                    </div>

                    {/* Name & Handle */}
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {review.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {review.handle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
