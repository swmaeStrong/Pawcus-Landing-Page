import { Card, CardContent } from "@/components/ui/card";
import { Crown, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface LeaderboardUser {
  rank: number | string;
  name: string;
  time: string;
  points: number;
  avatar: string;
  trend: string;
  rankImage: string | null;
  streak: number;
}

interface LeaderboardCardProps {
  leaderboardData: LeaderboardUser[];
}

export default function LeaderboardCard({ leaderboardData }: LeaderboardCardProps) {
  return (
    <Card className="bg-white/80 dark:bg-[#1C1C1C]/90 backdrop-blur-sm shadow-2xl border border-gray-200 dark:border-[rgb(80,80,80)] hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
        <div className="space-y-4">
          {leaderboardData.map((user, index) => {
            if (user.rank === '...') {
              return (
                <div key={index} className="flex items-center justify-center py-4">
                  <div className="text-[rgb(153,153,153)] text-xl font-bold">⋯</div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className={`flex items-center p-2 sm:p-3 md:p-4 rounded-xl transition-all duration-500 hover:scale-[1.02] border relative overflow-hidden group ${
                  index === 0 
                    ? 'bg-gradient-to-r from-yellow-400/30 via-purple-400/20 to-blue-500/30 hover:from-yellow-400/40 hover:via-purple-400/30 hover:to-blue-500/40 shadow-lg border-yellow-400/50' 
                    : 'bg-[#2D2D2D] hover:bg-[#383838] border-[rgb(80,80,80)]'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {index === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-purple-400/10 to-blue-500/15" />
                )}
                
                <div className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg mr-2 sm:mr-3 md:mr-4 border-2 relative z-10 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-yellow-400 via-cyan-400 to-blue-500 text-white border-yellow-400/50 shadow-lg' 
                    : 'bg-white dark:bg-[#1C1C1C] text-gray-700 dark:text-[rgb(220,220,220)] border-gray-300 dark:border-[rgb(80,80,80)]'
                }`}>
                  {user.rank}
                </div>

                {user.rankImage && (
                  <div className="flex-shrink-0 mr-2 sm:mr-3 md:mr-4 relative z-10">
                    <div className="relative group-">
                      <Image
                        src={`/rank/${user.rankImage}`}
                        alt={`rank-${user.rank}`}
                        width={24}
                        height={24}
                        className="drop-shadow-lg w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      />
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1">
                          <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex-1 min-w-0 relative z-10">
                  <h3 className={`font-bold text-sm sm:text-base md:text-lg truncate transition-colors duration-300 text-gray-800 dark:text-[rgb(220,220,220)]`}>
                    {user.name}
                  </h3>
                  <p className="text-gray-500 dark:text-[rgb(153,153,153)] text-xs sm:text-sm">{user.points.toLocaleString()} 포인트</p>
                </div>

                <div className="text-right relative z-10">
                  <div className="text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 text-gray-800 dark:text-[rgb(220,220,220)]">
                    {user.time}
                  </div>
                  <p className="text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold">{user.trend}</p>
                </div>

                {index === 0 && (
                  <div className="absolute top-2 right-2">
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}