// Dark Color System Configuration
export const darkColorSystem = {
  // 배경색
  background: '#383838',           // bg-[#383838]
  component: '#1C1C1C',           // 컴포넌트 bg-[#1C1C1C]
  componentSecondary: '#2D2D2D',  // 보조 컴포넌트 bg-[#2D2D2D]
  
  // 테두리 색상
  border: 'rgb(80, 80, 80)',      // 테두리 색상 (더 밝게)
  borderLight: 'rgb(120, 120, 120)', // 밝은 테두리 색상 (더 밝게)
  
  // 텍스트 색상
  text: {
    primary: 'rgb(220, 220, 220)', // 밝은 텍스트 220,220,220
    secondary: 'rgb(153, 153, 153)', // 약간 어두운 153,153,153
    accent: 'rgb(168, 85, 247)',   // 보라색 액센트 텍스트
  },
  
  // Tailwind 클래스명
  classes: {
    background: 'bg-[#383838]',
    component: 'bg-[#1C1C1C]',
    componentSecondary: 'bg-[#2D2D2D]',
    border: 'border-[rgb(80,80,80)]',
    borderLight: 'border-[rgb(120,120,120)]',
    textPrimary: 'text-[rgb(220,220,220)]',
    textSecondary: 'text-[rgb(153,153,153)]',
    textAccent: 'text-[rgb(168,85,247)]',
  }
} as const;

// CSS Variables for runtime color switching
export const darkColorVariables = {
  '--dark-background': '#383838',
  '--dark-component': '#1C1C1C',
  '--dark-component-secondary': '#2D2D2D',
  '--dark-border': 'rgb(80, 80, 80)',
  '--dark-border-light': 'rgb(120, 120, 120)',
  '--dark-text-primary': 'rgb(220, 220, 220)',
  '--dark-text-secondary': 'rgb(153, 153, 153)',
  '--dark-text-accent': 'rgb(168, 85, 247)',
} as const;

// Dark mode is now permanently enabled by default
// No theme switching functionality needed