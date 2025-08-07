'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import { styles, createCardStyle, getHeadingStyle, getTextStyle } from '@/lib/styles';
import { useTranslations } from 'next-intl';

export default function FAQPage() {
  const t = useTranslations('faq');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: t('categories.all') },
    { id: 'security', name: t('categories.security') },
    { id: 'features', name: t('categories.features') },
    { id: 'installation', name: t('categories.installation') }
  ];
  
  const faqData = [
    {
      category: t('categories.security'),
      categoryId: 'security',
      questions: Array.isArray(t.raw('questions.security')) ? t.raw('questions.security') : []
    },
    {
      category: t('categories.features'), 
      categoryId: 'features',
      questions: Array.isArray(t.raw('questions.features')) ? t.raw('questions.features') : []
    },
    {
      category: t('categories.installation'),
      categoryId: 'installation', 
      questions: Array.isArray(t.raw('questions.installation')) ? t.raw('questions.installation') : []
    }
  ];
  
  const filteredData = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(category => category.categoryId === selectedCategory);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.pomocore.dev/faq" />
        <meta property="og:url" content="https://www.pomocore.dev/faq" />
        <meta property="og:title" content="FAQ - 자주 묻는 질문" />
        <meta property="og:description" content="Pomocore에 대해 궁금한 점들을 모았습니다. 보안, 사용법, 문제 해결 등 자세한 답변을 확인해보세요." />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`${styles.pageBackground} ${styles.pageBackgroundSecondary}`}>
        <Navigation />
      
      {/* Animated Background */}
      <div className={styles.gradientBackground} />
      <div className={styles.animatedBackground}>
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#3f72af]/20 to-[#c6d4e8]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-[#c6d4e8]/25 to-[#3f72af]/15 rounded-full blur-3xl" />
      </div>
      
      <main className={`${styles.cardContainer} relative z-10 pt-24 pb-16`}>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className={`${getHeadingStyle(3)} mb-6`}>
            {t('title')}
          </h1>
          <p className={`text-xl ${getTextStyle('secondary')} max-w-3xl mx-auto leading-relaxed`}>
            {t('description')}
          </p>
        </section>
        
        {/* Category Tabs */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `${styles.button.primaryAction} text-white shadow-lg`
                    : `${createCardStyle('modern')} ${getTextStyle('secondary')} hover:bg-[#ececec]/50`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Sections */}
        <div className="transition-all duration-500 ease-in-out">
          {filteredData.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-12">
              <h2 className={`${getHeadingStyle(4)} mb-8`}>
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq: { question: string; answer: string }, faqIndex: number) => (
                  <Card key={faqIndex} className={`${createCardStyle('modern')} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader>
                      <CardTitle className={`text-lg ${styles.text.primary}`}>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`${getTextStyle('secondary')} leading-relaxed`}>
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className={`text-center mt-16 p-8 ${createCardStyle('modern')} rounded-3xl`}>
          <h2 className={`${getHeadingStyle(4)} mb-4`}>
            {t('contact.title')}
          </h2>
          <p className={`${getTextStyle('secondary')} mb-6`}>
            {t('contact.description')}
          </p>
          <div className={getTextStyle('secondary')}>
            <p className="mb-2">
              <span className={`font-semibold ${styles.text.primary}`}>{t('contact.email')}:</span> support@pawcus.dev
            </p>
            <p>
              <span className={`font-semibold ${styles.text.primary}`}>{t('contact.phone')}:</span> 010-5172-5645
            </p>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}