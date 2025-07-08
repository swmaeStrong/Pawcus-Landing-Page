import FeatureCard from "@/components/FeatureCard";

const categoryAnalysisFeatures = [
  {
    title: "주요 활동 영역 파악",
    description: "개발자의 주요 활동 영역을 한눈에 파악할 수 있습니다."
  },
  {
    title: "집중 분야 인사이트",
    description: "어느 분야에 더 집중해야 하는지 데이터 기반 인사이트를 제공합니다."
  },
  {
    title: "시각적 데이터 표현",
    description: "레이더 차트로 복합적인 데이터를 직관적으로 표현합니다."
  }
];

const recentActivityFeatures = [
  {
    title: "정확한 시간 추적",
    description: "어떤 앱에서 얼마나 오랫동안 작업했는지 정확하게 추적합니다."
  },
  {
    title: "자동 카테고리 분류",
    description: "AI가 활동을 자동으로 분석하여 적절한 카테고리로 분류합니다."
  },
  {
    title: "시간 관리 최적화",
    description: "상세한 활동 로그를 통해 시간 관리를 최적화할 수 있습니다."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative" aria-labelledby="features-heading">
      <article className="mb-24 scroll-animate">
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 dark:text-[rgb(220,220,220)]">Pawcus Features</h3>
          <p className="text-lg sm:text-xl md:text-2xl dark:text-[rgb(153,153,153)] leading-relaxed px-4">
            사용 로그를 실시간으로 분석하여 카테고라이징을 해주고, 가장 많이 사용하는 카테고리의 통계를 내줍니다
          </p>
        </div>

        {/* Category Analysis Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">카테고리별 시간 분석</h3>
            <p className="text-lg sm:text-xl md:text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
              Development, Design, Browser 등 6개 영역별 시간 사용 패턴을 레이더 차트로 시각화합니다.
            </p>
            <div className="space-y-6">
              {categoryAnalysisFeatures.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <figure>
              <div className="aspect-square bg-[#1C1C1C] dark:bg-[#1C1C1C] flex items-center justify-center p-2 sm:p-3 md:p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">실시간 활동 추적</h3>
            <p className="text-lg sm:text-xl md:text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
              VS Code, Chrome, Figma 등 앱별 활동을 실시간으로 기록하고 자동으로 카테고리를 분류합니다.
            </p>
            <div className="space-y-6">
              {recentActivityFeatures.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Analytics Screenshots */}
        <div className="text-center mb-12 mt-16">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)] px-4 sm:block">시간대별로 나의 집중도를 분석해보세요!</h4>
          <p className="text-base sm:text-lg dark:text-[rgb(153,153,153)] px-4 sm:block">언제 가장 집중력이 높은지 파악하여 중요한 작업을 적절한 시간에 배치하세요</p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <img 
              src="/screenshots/hourlyUsageLog.png" 
              alt="Hourly Usage Analytics"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent hidden sm:block">
              <h4 className="font-semibold text-lg mb-2 text-white">시간대별 사용량 분석</h4>
              <p className="text-sm text-gray-200 mb-2">하루 종일 사용량과 개발시간을 비교하여 생산성이 가장 높은 시간대를 찾아줍니다.</p>
              <p className="text-xs text-gray-300">언제 가장 집중력이 높은지 알아내어 중요한 작업을 적절한 시간에 배치할 수 있습니다.</p>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="text-center mb-12 mt-16">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)] px-4 sm:block">이제 나의 업무시간, 휴식 습관을 체크해보세요!</h4>
          <p className="text-base sm:text-lg dark:text-[rgb(153,153,153)] px-4 sm:block">하루 전체의 업무 패턴을 직관적으로 파악하여 시간 관리를 개선하세요</p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <img 
              src="/screenshots/timeline.png" 
              alt="Daily Timeline View"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent hidden sm:block">
              <h4 className="font-semibold text-lg mb-2 text-white">일일 업무 타임라인</h4>
              <p className="text-sm text-gray-200 mb-2">24시간 동안의 모든 활동을 meetings, work, breaks 등으로 분류하여 시간 블록으로 표시합니다.</p>
              <p className="text-xs text-gray-300">하루 전체의 업무 패턴을 직관적으로 파악할 수 있어 시간 또는 생산성 개선에 도움이 됩니다.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}