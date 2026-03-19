'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ROBLOX_GAME_URL = 'https://www.roblox.com/games/sailor-piece-roblox-id'; // 替换为真实ID

const stats = [
  { value: '60M+', label: 'Total Visits', icon: '🌊' },
  { value: '130K+', label: 'Active Players', icon: '⚔️' },
  { value: 'Daily', label: 'Code Updates', icon: '🔥' },
  { value: '11,500', label: 'Max Level', icon: '📈' },
];

export default function Hero() {
  const [count, setCount] = useState({ players: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // 数字计数动画
  useEffect(() => {
    const duration = 2000;
    const target = 130;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount({ players: target });
        clearInterval(timer);
      } else {
        setCount({ players: Math.floor(current) });
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
      id="hero"
    >
      {/* 背景图 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* 这里假设你有一个适合海贼王风格的占位符背景图 */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0B132B' }} />
        {/* 渐变遮罩 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(11,19,43,0.3) 0%, rgba(11,19,43,0.1) 40%, rgba(11,19,43,0.9) 90%, #0B132B 100%)',
          }}
        />
        {/* 左右渐变遮罩 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(11,19,43,0.7) 0%, transparent 30%, transparent 70%, rgba(11,19,43,0.7) 100%)',
          }}
        />
      </div>

      {/* 粒子装饰 */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              borderRadius: '50%',
              background: i % 3 === 0 ? '#4DEEEA' : i % 3 === 1 ? '#74EE15' : '#FFE700',
              left: `${5 + i * 8}%`,
              top: `${10 + (i * 17) % 70}%`,
              opacity: 0.4 + (i % 3) * 0.2,
              boxShadow: `0 0 ${8 + i % 5}px currentColor`,
              animation: `float ${3 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* 内容 */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
      >
        {/* 角标 */}
        <div
          className="animate-fade-in-up"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(77, 238, 234, 0.15)',
            border: '1px solid rgba(77, 238, 234, 0.4)',
            borderRadius: '50px',
            padding: '0.35rem 1rem',
            marginBottom: '1.5rem',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-display)',
            color: '#4DEEEA',
            letterSpacing: '0.1em',
          }}
        >
          <span style={{ color: '#FFE700' }}>●</span> The Ultimate Database & Wiki
        </div>

        {/* 主标题 H1 */}
        <h1
          className="animate-fade-in-up delay-100"
          style={{ marginBottom: '1rem' }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              background: 'linear-gradient(135deg, #4DEEEA 0%, #74EE15 50%, #FFE700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              fontWeight: 800
            }}
          >
            SAILOR PIECE
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              marginTop: '0.5rem',
              letterSpacing: '0.05em',
            }}
          >
            Codes, Devil Fruits, Tier Lists & Wiki
          </span>
        </h1>

        {/* 副标题 */}
        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          Get the latest <strong style={{ color: '#FFE700' }}>active codes</strong> for Gems & Beli.
          Explore our comprehensive Devil Fruit tier lists, Haki guides, and island maps for Roblox Sailor Piece.
        </p>

        {/* CTA 按钮 */}
        <div
          className="animate-fade-in-up delay-300"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <a href="#codes" className="btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2rem', background: 'linear-gradient(135deg, #4DEEEA 0%, #3b82f6 100%)', color: '#000' }}>
            🎁 Quick Codes
          </a>
          <a
            href="#tier-lists"
            className="btn-secondary"
            style={{ fontSize: '1.05rem', padding: '0.9rem 2rem' }}
          >
            👑 View Tier Lists
          </a>
        </div>

        {/* 统计数据 */}
        <div
          className="animate-fade-in-up delay-400"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: '1.25rem 1rem', textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: '#fff',
                  lineHeight: 1,
                  fontWeight: 'bold'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.25rem', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部渐变 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, #0B132B, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
