'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const faqData = [
  {
    category: "보안 및 프라이버시",
    questions: [
      {
        question: "앱에서 기록 측정을 실행할 경우 어떤 데이터들이 추적되나요?",
        answer: "Pawcus는 앱 정보, 앱의 제목, 그리고 브라우저의 경우 URL도 함께 수집합니다. 수집된 데이터들은 카테고리 분류 및 데이터 시각화 이외의 다른 목적으로는 사용되지 않습니다."
      },
      {
        question: "Pawcus는 어떤 방식으로 데이터를 보호하나요?",
        answer: "Pawcus는 AES-256 암호화를 사용하여 모든 활동 로그를 보호합니다. 이는 현재 가장 강력한 암호화 표준 중 하나입니다. 데이터는 서버에 저장되지만 오직 사용자에게 서비스를 제공하기 위한 목적으로만 사용되며, 다른 목적으로는 절대 사용되지 않습니다."
      },
      {
        question: "내 개인정보가 외부로 유출될 가능성이 있나요?",
        answer: "전혀 없습니다. Pawcus는 사용자의 데이터를 오직 서비스 제공을 위한 목적으로만 사용하며, 다른 목적으로는 절대 사용하지 않습니다. 제3자에게 제공하거나 판매하지 않으며, 사용자의 동의 없이 어떤 방식으로도 사용되지 않습니다."
      },
    ]
  },
  {
    category: "기능 및 사용법",
    questions: [
      {
        question: "어떤 애플리케이션을 추적할 수 있나요?",
        answer: "macOS에서 실행되는 모든 애플리케이션을 추적할 수 있습니다. VS Code, Xcode, Chrome, Safari, Figma, Sketch 등 개발자들이 자주 사용하는 도구들이 모두 포함되며, AI가 자동으로 카테고리를 분류합니다."
      },
      {
        question: "동시에 여러 탭을 띄웠을 경우에는 추적이 어떻게 되나요?",
        answer: "사용자가 가장 최근에 활성화한 탭을 기준으로 시간 기록이 진행됩니다."
      },
      {
        question: "리더보드는 어떻게 작동하나요?",
        answer: "리더보드는 같은 팀이나 그룹 내에서 개발 시간을 비교할 수 있는 기능입니다. Daily, Weekly, Monthly 단위로 순위를 확인할 수 있으며, 카테고리별 전문성도 비교 가능합니다. 리더보드는 20-30초 이내에 최신 데이터가 반영되어 실시간으로 순위 변동을 확인할 수 있습니다. 모든 데이터는 익명화되어 처리됩니다."
      },
      {
        question: "아무 활동을 하고 있지 않아도 추적되나요?",
        answer: "아니요. Pawcus는 15분을 기준으로 AFK(Away From Keyboard) 상태를 감지합니다. 15분 동안 아무런 활동이 없으면 사용자가 자리를 비운 것으로 판단하여 로그 추적을 중단합니다. 다시 활동을 시작하면 자동으로 추적이 재개됩니다."
      }
    ]
  },
  {
    category: "설치 및 환경 설정",
    questions: [
      {
        question: "어떤 macOS 버전을 지원하나요?",
        answer: "macOS 14.0 (Sonoma) 이상을 지원합니다. 최신 macOS Sequoia와 Sonoma에서 최적화되어 있으며, Intel Mac과 Apple Silicon Mac 모두에서 원활하게 동작합니다."
      },
    ]
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: '전체' },
    { id: 'security', name: '보안 및 프라이버시' },
    { id: 'features', name: '기능 및 사용법' },
    { id: 'installation', name: '설치 및 환경 설정' }
  ];
  
  const categoryMapping = {
    '보안 및 프라이버시': 'security',
    '기능 및 사용법': 'features',
    '설치 및 환경 설정': 'installation'
  };
  
  const filteredData = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(category => categoryMapping[category.category as keyof typeof categoryMapping] === selectedCategory);

  return (
    <div className="min-h-screen bg-[#ECECEC] dark:bg-[#383838] relative">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#1C1C1C] dark:via-[#2D2D2D] dark:to-[#383838] opacity-50 -z-20" />
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-r from-pink-400/20 to-yellow-600/20 rounded-full blur-3xl" />
      </div>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-gray-800 dark:text-white">
            자주 묻는 질문
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pawcus에 대해 궁금한 점들을 모았습니다. 
            <span className="font-bold text-gray-800 dark:text-white"> 보안, 사용법, 문제 해결</span> 등
            자세한 답변을 확인해보세요.
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
                    ? 'bg-gray-800 dark:bg-white text-white dark:text-gray-800 shadow-lg'
                    : 'bg-white/80 dark:bg-[#1C1C1C]/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] border border-gray-200 dark:border-[rgb(80,80,80)]'
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-800 dark:text-white">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
        <section className="text-center mt-16 p-8 bg-white/80 dark:bg-[#1C1C1C]/80 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-[rgb(80,80,80)]">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            다른 질문이 있으신가요?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            FAQ에서 원하는 답변을 찾지 못하셨다면, 언제든지 문의해주세요.
          </p>
          <div className="text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              <span className="font-semibold text-gray-800 dark:text-white">이메일:</span> support@pawcus.dev
            </p>
            <p>
              <span className="font-semibold text-gray-800 dark:text-white">전화:</span> 010-5172-5645
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}