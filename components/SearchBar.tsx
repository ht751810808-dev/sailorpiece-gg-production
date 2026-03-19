'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import fruitsData from '@/data/fruits.json';
import swordsData from '@/data/swords.json';
import bossesData from '@/data/bosses.json';
import accessoriesData from '@/data/accessories.json';
import clansData from '@/data/clans.json';
import islandsData from '@/data/islands.json';
import dungeonsData from '@/data/dungeons.json';

type SearchResult = {
  id: string;
  name: string;
  type: string;
  link: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    
    const matchedFruits = fruitsData
      .filter(f => f.name.toLowerCase().includes(lowerQuery))
      .map(f => ({ id: f.id, name: f.name, type: 'Fruit', link: `/database/fruits/${f.id}` }));
      
    const matchedSwords = swordsData
      .filter(s => s.name.toLowerCase().includes(lowerQuery))
      .map(s => ({ id: s.id, name: s.name, type: 'Sword', link: `/database/swords` }));

    const matchedBosses = bossesData
      .filter(b => b.name.toLowerCase().includes(lowerQuery))
      .map(b => ({ id: b.id, name: b.name, type: 'Boss', link: '/database/bosses' }));

    const matchedAccessories = accessoriesData
      .filter(a => a.name.toLowerCase().includes(lowerQuery))
      .map(a => ({ id: a.id, name: a.name, type: 'Accessory', link: '/database/accessories' }));

    const matchedClans = clansData
      .filter(c => c.name.toLowerCase().includes(lowerQuery))
      .map(c => ({ id: c.id, name: c.name, type: 'Clan', link: '/database/clans' }));

    const matchedIslands = islandsData
      .filter(i => i.name.toLowerCase().includes(lowerQuery))
      .map(i => ({ id: i.id, name: i.name, type: 'Island', link: `/database/islands/${i.id}` }));

    const matchedDungeons = dungeonsData
      .filter(d => d.name.toLowerCase().includes(lowerQuery))
      .map(d => ({ id: d.id, name: d.name, type: 'Dungeon', link: `/database/dungeons` }));

    setResults([...matchedFruits, ...matchedSwords, ...matchedBosses, ...matchedAccessories, ...matchedClans, ...matchedIslands, ...matchedDungeons].slice(0, 8));
    setIsOpen(true);
  }, [query]);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '300px' }}>
      <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search Wiki (CMD+K)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query.length >= 2 && setIsOpen(true)}
            style={{
              width: '100%',
              padding: '0.7rem 1rem 0.7rem 2.8rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              outline: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
            className="search-input"
          />
          <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
            🔍
          </div>
      </div>

      {isOpen && results.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '120%',
          left: 0,
          right: 0,
          background: '#0B132B',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          zIndex: 1000
        }}>
          <div style={{ padding: '0.8rem 1.2rem', background: 'rgba(255,255,255,0.02)', color: 'var(--color-text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
             Wiki Results
          </div>
          {results.map((r, i) => (
            <Link 
              key={`${r.type}-${r.id}-${i}`} 
              href={r.link} 
              onClick={() => { setIsOpen(false); setQuery(''); }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.2rem',
                color: '#fff',
                textDecoration: 'none',
                borderBottom: i === results.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(77, 238, 234, 0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div>
                 <div style={{ fontSize: '1rem', fontWeight: '600' }}>{r.name}</div>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#4DEEEA', background: 'rgba(77, 238, 234, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
                {r.type}
              </div>
            </Link>
          ))}
        </div>
      )}
      <style>{`
        .search-input:focus {
            background: rgba(255,255,255,0.1) !important;
            border-color: #4DEEEA !important;
            box-shadow: 0 0 15px rgba(77, 238, 234, 0.2);
        }
      `}</style>
    </div>
  );
}
