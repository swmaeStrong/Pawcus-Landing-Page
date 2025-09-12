import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pomocore.com'
  const blogUrl = 'https://blog.pomocore.com'
  const locales = ['en', 'ko']
  
  const appDir = join(process.cwd(), 'src', 'app', '[locale]')
  const routes: string[] = []
  
  function getRoutes(dir: string, basePath: string = '') {
    try {
      const items = readdirSync(dir)
      
      for (const item of items) {
        const fullPath = join(dir, item)
        const stat = statSync(fullPath)
        
        if (stat.isDirectory() && !item.startsWith('_') && !item.startsWith('.')) {
          const pageFile = join(fullPath, 'page.tsx')
          try {
            statSync(pageFile)
            routes.push(basePath ? `${basePath}/${item}` : item)
          } catch {
          }
          
          getRoutes(fullPath, basePath ? `${basePath}/${item}` : item)
        }
      }
    } catch (error) {
      console.error('Error reading directory:', error)
    }
  }
  
  getRoutes(appDir)
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Main site entries
  for (const locale of locales) {
    sitemapEntries.push({
      url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })
    
    for (const route of routes) {
      const priority = route === '' ? 1 : 
                      route === 'about' ? 0.8 :
                      route === 'faq' ? 0.7 :
                      ['privacy', 'terms'].includes(route) ? 0.5 : 0.6
      
      const changeFrequency = ['privacy', 'terms'].includes(route) ? 'yearly' : 
                             route === '' ? 'daily' : 'monthly'
      
      sitemapEntries.push({
        url: locale === 'en' ? `${baseUrl}/${route}` : `${baseUrl}/${locale}/${route}`,
        lastModified: new Date(),
        changeFrequency: changeFrequency as any,
        priority,
      })
    }
  }
  
  // Blog site entry (블로그는 별도 관리)
  sitemapEntries.push({
    url: blogUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })
  
  return sitemapEntries
}