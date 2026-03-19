import { MetadataRoute } from 'next';
import fruitsData from '@/data/fruits.json';
import swordsData from '@/data/swords.json';
import bossesData from '@/data/bosses.json';
import islandsData from '@/data/islands.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sailorpiece.com';

  // Base routes
  const routes = [
    '',
    '/codes',
    '/database',
    '/database/fruits',
    '/database/swords',
    '/database/races',
    '/database/clans',
    '/database/islands',
    '/database/dungeons',
    '/database/bosses',
    '/database/accessories',
    '/database/runes',
    '/database/traits',
    '/tier-lists',
    '/builds',
    '/tools/gacha-simulator',
    '/tools/build-optimizer',
    '/tools/price-guide',
    '/tools/compare',
    '/tools/calculator',
    '/guides',
    '/news',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Fruit Routes
  const fruitRoutes = fruitsData.map((fruit) => ({
    url: `${baseUrl}/database/fruits/${fruit.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic Sword Routes
  const swordRoutes = swordsData.map((sword) => ({
    url: `${baseUrl}/database/swords/${sword.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic Island Routes
  const islandRoutes = islandsData.map((island) => ({
    url: `${baseUrl}/database/islands/${island.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...fruitRoutes, ...swordRoutes, ...islandRoutes];
}
