import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ko', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'ko',
  
  // Prefix for all routes except the default locale
  localePrefix: 'as-needed'
});

// Create navigation utilities
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);