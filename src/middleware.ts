import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';
 
export default createMiddleware({
  ...routing,
  // Enable automatic locale detection based on browser language
  localeDetection: true,
  // Always show locale prefix for consistency
  localePrefix: 'always'
});
 
export const config = {
  // Match only internationalized pathnames and exclude static assets
  matcher: [
    '/',
    '/(ko|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};