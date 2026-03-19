'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';

export default function Header() {
  const [wikiOpen, setWikiOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const wikiRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wikiRef.current && !wikiRef.current.contains(event.target as Node)) {
        setWikiOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header style={{ 
      position: 'fixed', top: 0, width: '100%', zIndex: 100, 
      background: 'rgba(5, 11, 20, 0.95)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem', height: '80px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#fff', margin: 0 }}>
            Sailor<span style={{ color: '#4DEEEA' }}>Piece</span><span style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem'}}>.click</span>
          </h1>
        </Link>
        
        <nav style={{ display: 'flex', gap: '1.5rem', height: '100%', alignItems: 'center' }}>
          
          {/* Wiki Dropdown */}
          <div ref={wikiRef} style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
            <button 
              onMouseEnter={() => setWikiOpen(true)}
              onClick={() => setWikiOpen(!wikiOpen)}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
            >
              Wiki
              <span style={{ fontSize: '0.8rem', transform: wikiOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
            </button>

            {wikiOpen && (
              <div 
                onMouseLeave={() => setWikiOpen(false)}
                style={{ 
                position: 'absolute', top: '80px', left: 0, background: '#fff', 
                borderRadius: '8px', padding: '0.5rem 0', minWidth: '220px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 105,
                border: '1px solid rgba(0,0,0,0.1)'
              }}>
                <DropdownItem href="/database/fruits" label="Devil Fruits" />
                <DropdownItem href="/database/swords" label="Swords & Weapons" />
                <DropdownItem href="/database/races" label="Races & Lineages" />
                <DropdownItem href="/database/bosses" label="World Bosses" />
                <DropdownItem href="/database/accessories" label="Accessories" />
                <DropdownItem href="/database/runes" label="Runes & Glyphs" />
                <DropdownItem href="/database/clans" label="Clans" />
                <DropdownItem href="/database/traits" label="Passive Traits" />
                <DropdownItem href="/database/islands" label="Islands & Maps" />
                <DropdownItem href="/database/dungeons" label="Dungeons & Raids" />
              </div>
            )}
          </div>

          <Link href="/tier-lists" className="nav-link">Tier Lists</Link>
          <Link href="/builds" className="nav-link">Builds</Link>
          <Link href="/codes" className="nav-link">Codes</Link>
          
          {/* Tools Dropdown */}
          <div ref={toolsRef} style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
            <button 
              onMouseEnter={() => setToolsOpen(true)}
              onClick={() => setToolsOpen(!toolsOpen)}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
            >
              Tools
              <span style={{ fontSize: '0.8rem', transform: toolsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
            </button>

            {toolsOpen && (
              <div 
                onMouseLeave={() => setToolsOpen(false)}
                style={{ 
                position: 'absolute', top: '80px', left: 0, background: '#fff', 
                borderRadius: '8px', padding: '0.5rem 0', minWidth: '240px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 105,
                border: '1px solid rgba(0,0,0,0.1)'
              }}>
                <DropdownItem href="/tools/gacha-simulator" label="🎰 Gacha Simulator" />
                <DropdownItem href="/tools/build-optimizer" label="🛠️ Build Optimizer" />
                <DropdownItem href="/tools/price-guide" label="💰 Trading Prices" />
                <DropdownItem href="/tools/damage-calculator" label="⚔️ Damage Calc" />
                <DropdownItem href="/tools/compare" label="⚖️ Item Compare" />
                <DropdownItem href="/tools/calculator" label="🔢 Stat Optimizer" />
              </div>
            )}
          </div>

          <Link href="/guides" className="nav-link">Guides</Link>
          <Link href="/news" className="nav-link">News</Link>
          <div style={{ marginLeft: '1.5rem' }}>
            <SearchBar />
          </div>
        </nav>
      </div>

      <style>{`
        .nav-link { color: #fff; text-decoration: none; font-weight: 500; font-size: 1rem; transition: color 0.2s; white-space: nowrap; }
        .nav-link:hover { color: #4DEEEA; }
      `}</style>
    </header>
  );
}

function DropdownItem({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} style={{ 
      display: 'block', padding: '0.8rem 1.5rem', 
      color: '#333', textDecoration: 'none', fontSize: '0.95rem',
      transition: 'background 0.2s'
    }}
    onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {label}
    </Link>
  );
}
