export function detectOS(): 'windows' | 'mac' | 'linux' | 'ios' | 'android' | 'unknown' {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() || '';

  // Check for mobile first
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  if (/iphone|ipad|ipod/.test(userAgent) ||
      (platform === 'macintel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }

  // Check for desktop
  if (userAgent.includes('win') || platform.includes('win')) {
    return 'windows';
  }

  if (userAgent.includes('mac') || platform.includes('mac')) {
    return 'mac';
  }

  if (userAgent.includes('linux') || platform.includes('linux')) {
    return 'linux';
  }

  return 'unknown';
}

export function isWindows(): boolean {
  return detectOS() === 'windows';
}

export function isMac(): boolean {
  return detectOS() === 'mac';
}

export function isMobile(): boolean {
  const os = detectOS();
  return os === 'ios' || os === 'android';
}

export function isDesktop(): boolean {
  const os = detectOS();
  return os === 'windows' || os === 'mac' || os === 'linux';
}