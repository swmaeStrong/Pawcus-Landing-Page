// 컬러 팔레트 정의
export const colors = {
  primary: '#3f72af',    // 딥 블루 - 주요 액센트
  secondary: '#c6d4e8',  // 라이트 블루 - 보조 액센트
  white: '#ffffff',      // 화이트 - 기본 배경
  lightGray: '#ececec',  // 라이트 그레이 - 보조 배경
  text: {
    primary: '#2d3748',   // 다크 그레이 - 메인 텍스트
    secondary: '#4a5568', // 미디엄 그레이 - 보조 텍스트
    light: '#718096',     // 라이트 그레이 - 서브 텍스트
  }
} as const;

// 공통 스타일 상수 정의
export const styles = {
  // Layout & Container
  container: "max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12",
  section: "text-center relative",
  cardContainer: "max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",
  
  // Background & Page
  pageBackground: "min-h-screen relative overflow-hidden",
  pageBackgroundPrimary: "bg-white",
  pageBackgroundSecondary: "bg-[#ececec]",
  gradientBackground: "fixed inset-0 bg-gradient-to-br from-[#c6d4e8]/30 via-[#3f72af]/10 to-[#c6d4e8]/20 opacity-50",
  animatedBackground: "fixed inset-0 pointer-events-none -z-10",
  
  // Navigation
  navigation: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#c6d4e8]/50 shadow-sm",
  navItem: "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#c6d4e8]/30",
  navItemActive: "text-[#3f72af] bg-[#c6d4e8]/40",
  navItemInactive: "text-gray-600 hover:text-[#3f72af]",
  
  // Cards
  card: "bg-white/90 backdrop-blur-sm shadow-xl border-[#c6d4e8]/50 rounded-xl p-6 transition-all duration-300",
  cardModern: "bg-white/90 backdrop-blur-20 border border-[#c6d4e8]/30 box-shadow-modern transition-all duration-300 hover:border-[#3f72af]/40 hover:box-shadow-modern-hover",
  glassEffect: "bg-white/80 backdrop-blur-20 border border-[#c6d4e8]/40",
  
  // Typography
  heading: {
    h1: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-800",
    h2: "text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800",
    h3: "text-4xl font-bold text-gray-800",
    h4: "text-2xl font-bold text-gray-800"
  },
  text: {
    body: "text-lg sm:text-xl md:text-2xl text-[#4a5568]",
    secondary: "text-[#4a5568]",
    muted: "text-[#718096]",
    small: "text-sm text-[#4a5568]",
    primary: "text-[#2d3748]"
  },
  
  // Gradients
  gradientText: "bg-gradient-to-r from-[#3f72af] to-[#3f72af]/80 bg-clip-text text-transparent font-semibold",
  gradientPrimary: "bg-gradient-to-r from-[#3f72af] to-[#3f72af]/70 bg-clip-text text-transparent",
  gradientDivider: "w-40 h-1.5 bg-[#3f72af] mx-auto rounded-full",
  
  // Buttons
  button: {
    primary: "relative bg-white hover:bg-[#ececec]/50 text-[#2d3748] border backdrop-blur-sm px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm shadow-lg",
    primaryAction: "bg-[#3f72af] hover:bg-[#3f72af]/90 text-white border-[#3f72af] hover:border-[#3f72af]/90 hover:shadow-[#3f72af]/20",
    secondary: "bg-[#c6d4e8] hover:bg-[#c6d4e8]/80 text-[#3f72af] border-[#c6d4e8] hover:border-[#c6d4e8]/80",
    ghost: "bg-white hover:bg-[#ececec]/30 text-[#4a5568] border border-[#c6d4e8] hover:border-[#3f72af]/50",
    homebrew: "border-[#3f72af] hover:border-[#3f72af]/80 hover:shadow-[#3f72af]/20",
    dmg: "border-[#3f72af] hover:border-[#3f72af]/80 hover:shadow-[#3f72af]/20"
  },
  
  // Footer
  footer: "py-12 border-t border-[#c6d4e8]/50 bg-[#ececec]/60 backdrop-blur-sm relative",
  footerGradient: "absolute inset-0 bg-gradient-to-br from-[#ececec]/50 via-white/30 to-[#c6d4e8]/20",
  
  // Animations & Effects
  scrollAnimate: "scroll-animate opacity-0 transform translate-y-30 transition-all duration-800",
  scrollAnimateLeft: "scroll-animate-left opacity-0 transform translate-x-minus-50 transition-all duration-800",
  scrollAnimateRight: "scroll-animate-right opacity-0 transform translate-x-50 transition-all duration-800",
  hoverLift: "hover:transform hover:translate-y-minus-4 hover:shadow-purple-500/15 transition-all duration-300",
  
  // Leaderboard
  leaderboard: {
    first: "bg-gradient-to-br from-[#3f72af]/10 to-[#3f72af]/20 border border-[#3f72af]/30 shadow-[#3f72af]/10",
    second: "bg-gradient-to-br from-[#c6d4e8]/40 to-[#c6d4e8]/60 border border-[#c6d4e8]/70 shadow-[#c6d4e8]/20", 
    third: "bg-gradient-to-br from-[#c6d4e8]/30 to-[#c6d4e8]/50 border border-[#c6d4e8]/60 shadow-[#c6d4e8]/15",
    fourth: "bg-gradient-to-br from-[#ececec]/50 to-[#ececec]/70 border border-[#ececec]/80 shadow-[#ececec]/20",
    default: "bg-gradient-to-br from-white/80 to-[#ececec]/40 border border-[#c6d4e8]/40 shadow-[#c6d4e8]/10"
  },
  
  // Download Section
  downloadSection: "flex flex-col items-center mb-16 space-y-8 px-4 overflow-visible",
  downloadButtons: "flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full",
  
  // Toast & Notifications
  toast: {
    success: "bg-gradient-to-r from-[#3f72af] to-[#3f72af]/90 border-[#3f72af]/50 text-white",
    error: "bg-gradient-to-r from-red-500 to-red-600 border-red-400/50 text-white",
    container: "fixed top-20 right-4 z-60 px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-500 border"
  },
  
  // Form & Input
  input: "border border-[#c6d4e8] bg-white/90 text-[#2d3748] rounded-lg px-3 py-2 focus:border-[#3f72af] focus:ring-[#3f72af]/20",
  
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