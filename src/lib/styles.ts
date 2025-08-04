// 공통 스타일 상수 정의
export const styles = {
  // Layout & Container
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-32 text-center relative",
  cardContainer: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // Background & Page
  pageBackground: "min-h-screen bg-white relative overflow-hidden",
  gradientBackground: "fixed inset-0 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 opacity-50",
  animatedBackground: "fixed inset-0 pointer-events-none -z-10",
  
  // Navigation
  navigation: "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm",
  navItem: "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100",
  navItemActive: "text-purple-600 bg-purple-50",
  navItemInactive: "text-gray-600 hover:text-gray-900",
  
  // Cards
  card: "bg-white/80 backdrop-blur-sm shadow-xl border-gray-200 rounded-xl p-6 transition-all duration-300",
  cardModern: "bg-white/80 backdrop-blur-20 border border-indigo-200/15 box-shadow-modern transition-all duration-300 hover:border-indigo-300/30 hover:box-shadow-modern-hover",
  glassEffect: "bg-white/70 backdrop-blur-20 border border-gray-200/50",
  
  // Typography
  heading: {
    h1: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-800",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800",
    h3: "text-4xl font-bold text-gray-800",
    h4: "text-2xl font-bold text-gray-800"
  },
  text: {
    body: "text-lg sm:text-xl md:text-2xl text-gray-600",
    secondary: "text-gray-600",
    muted: "text-gray-500",
    small: "text-sm text-gray-600"
  },
  
  // Gradients
  gradientText: "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold",
  gradientPurple: "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
  gradientDivider: "w-40 h-1.5 bg-purple-600 mx-auto rounded-full",
  
  // Buttons
  button: {
    primary: "relative bg-white hover:bg-gray-50 text-gray-800 border backdrop-blur-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm shadow-lg",
    homebrew: "border-purple-500 hover:border-purple-600 hover:shadow-purple-500/20",
    dmg: "border-emerald-500 hover:border-emerald-600 hover:shadow-emerald-500/20",
    ghost: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300"
  },
  
  // Footer
  footer: "py-12 border-t border-gray-200/50 bg-gray-50/80 backdrop-blur-sm relative",
  footerGradient: "absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50",
  
  // Animations & Effects
  scrollAnimate: "scroll-animate opacity-0 transform translate-y-30 transition-all duration-800",
  scrollAnimateLeft: "scroll-animate-left opacity-0 transform translate-x-minus-50 transition-all duration-800",
  scrollAnimateRight: "scroll-animate-right opacity-0 transform translate-x-50 transition-all duration-800",
  hoverLift: "hover:transform hover:translate-y-minus-4 hover:shadow-purple-500/15 transition-all duration-300",
  
  // Leaderboard
  leaderboard: {
    first: "bg-gradient-to-br from-yellow-50/50 to-orange-50/80 border border-yellow-200/60 shadow-yellow-100/20",
    second: "bg-gradient-to-br from-red-50/50 to-red-50/80 border border-red-200/60 shadow-red-100/20", 
    third: "bg-gradient-to-br from-yellow-50/50 to-orange-50/80 border border-yellow-200/60 shadow-yellow-100/20",
    fourth: "bg-gradient-to-br from-blue-50/50 to-blue-50/80 border border-blue-200/60 shadow-blue-100/20",
    default: "bg-gradient-to-br from-gray-50/50 to-gray-50/80 border border-gray-200/60 shadow-gray-100/20"
  },
  
  // Download Section
  downloadSection: "flex flex-col items-center mb-16 space-y-8 px-4 overflow-visible",
  downloadButtons: "flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full",
  
  // Toast & Notifications
  toast: {
    success: "bg-gradient-to-r from-emerald-500 to-green-600 border-emerald-400/50 text-white",
    error: "bg-gradient-to-r from-red-500 to-red-600 border-red-400/50 text-white",
    container: "fixed top-20 right-4 z-60 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border"
  },
  
  // Form & Input
  input: "border border-gray-200 bg-white/80 text-gray-800 rounded-lg px-3 py-2 focus:border-purple-500 focus:ring-purple-500/20",
  
  // Utilities
  center: "flex justify-center items-center",
  spacingY: "space-y-8",
  spacingX: "space-x-4"
} as const;

// 동적 스타일 생성 함수들
export const createCardStyle = (variant: 'default' | 'modern' | 'glass' = 'default') => {
  const baseCard = styles.card;
  
  switch (variant) {
    case 'modern':
      return styles.cardModern;
    case 'glass':
      return styles.glassEffect;
    default:
      return baseCard;
  }
};

export const createButtonStyle = (variant: 'homebrew' | 'dmg' | 'ghost' = 'ghost') => {
  const baseButton = styles.button.primary;
  
  switch (variant) {
    case 'homebrew':
      return `${baseButton} ${styles.button.homebrew}`;
    case 'dmg':
      return `${baseButton} ${styles.button.dmg}`;
    default:
      return styles.button.ghost;
  }
};

export const createLeaderboardStyle = (position: number) => {
  if (position === 1) return styles.leaderboard.first;
  if (position === 2) return styles.leaderboard.second;
  if (position === 3) return styles.leaderboard.third;
  if (position === 4) return styles.leaderboard.fourth;
  return styles.leaderboard.default;
};

// 텍스트 스타일 헬퍼
export const getHeadingStyle = (level: 1 | 2 | 3 | 4) => {
  return styles.heading[`h${level}` as keyof typeof styles.heading];
};

export const getTextStyle = (variant: 'body' | 'secondary' | 'muted' | 'small') => {
  return styles.text[variant];
};