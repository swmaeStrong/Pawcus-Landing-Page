import LeaderboardCard from "@/components/LeaderboardCard";
import FeatureCard from "@/components/FeatureCard";

const leaderboardData = [
  { rank: 1, name: '쓰망', time: '2시간 44분', points: 2840, avatar: '쓰', trend: '+12%', rankImage: 'challenger.png', streak: 7 },
  { rank: 2, name: '0302', time: '2시간 41분', points: 2480, avatar: '03', trend: '+15%', rankImage: null, streak: 3 },
  { rank: '...', name: '', time: '', points: 0, avatar: '', trend: '', rankImage: null, streak: 0 },
  { rank: 47, name: 'You', time: '1시간 23분', points: 850, avatar: 'Y', trend: '+2%', rankImage: null, streak: 1 },
];

const leaderboardFeatures = [
  {
    title: "카테고리별 경쟁",
    description: "Development, Design, LLM 등 다양한 영역에서 동료들과 경쟁할 수 있습니다."
  },
  {
    title: "실시간 업데이트",
    description: "활동 시간이 실시간으로 집계되어 순위가 즉시 반영됩니다."
  },
  {
    title: "건전한 동기부여",
    description: "팀원들과 함께 성장하며 생산성 향상을 위한 동기를 얻을 수 있습니다."
  }
];

export default function LeaderboardSection() {
  return (
    <>
      <div className="text-center mb-12 mt-16">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 dark:text-[rgb(220,220,220)] px-4">동료들과 함께 경쟁하며 성장하세요!</h4>
        <p className="text-base sm:text-lg dark:text-[rgb(153,153,153)] px-4">건전한 경쟁을 통해 서로 동기부여를 받고 더 높은 생산성을 달성하세요</p>
      </div>
      <article className="mb-12 scroll-animate">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-[rgb(220,220,220)]">실시간 리더보드</h3>
            <p className="text-lg sm:text-xl md:text-2xl dark:text-[rgb(153,153,153)] mb-8 leading-relaxed">
              Daily, Weekly, Monthly 기간별로 동료들과 개발 시간을 비교하고 순위를 확인하세요.
            </p>
            <div className="space-y-6">
              {leaderboardFeatures.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <figure>
              <LeaderboardCard leaderboardData={leaderboardData} />
            </figure>
          </div>
        </div>
      </article>
    </>
  );
}