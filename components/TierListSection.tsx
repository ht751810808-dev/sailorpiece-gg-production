'use client';

import { useState } from 'react';

const tierListCategories = ['Devil Fruits', 'Swords', 'Races'];

const devilFruitsData = [
  { name: 'Light Fruit', tier: 'S', desc: 'Best overall fruit. Extremely high damage, massive AoE, flight mobility.', color: '#FFD700' },
  { name: 'Quake Fruit', tier: 'A', desc: 'Incredible raw power and burst AoE damage for bosses, lacks mobility.', color: '#FF4500' },
  { name: 'Flame Fruit', tier: 'A', desc: 'Solid early-to-mid game fruit with reliable burn AoE attacks.', color: '#FF8C00' },
  { name: 'Bomb Fruit', tier: 'B', desc: 'Decent burst damage but lacks versatility and mobility.', color: '#A9A9A9' },
  { name: 'Invisible Fruit', tier: 'D', desc: 'Provides stealth but virtually zero combat value.', color: '#8B4513' },
];

export default function TierListSection() {
  const [activeTab, setActiveTab] = useState('Devil Fruits');

  return (
    <section id="tier-lists" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>
            Sailor Piece <span style={{ color: '#FFE700' }}>Tier Lists</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Based on the latest community meta. Discover the most powerful Devil Fruits!
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {tierListCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                background: activeTab === category ? '#FFE700' : 'rgba(255,255,255,0.1)',
                color: activeTab === category ? '#000' : '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Real Data Render */}
        <div className="glass-card" style={{ padding: '3rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          {activeTab === 'Devil Fruits' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {devilFruitsData.map((fruit, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px' }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: 900, 
                    color: fruit.color, 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    border: `2px solid ${fruit.color}`,
                    borderRadius: '8px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}>
                    {fruit.tier}
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.25rem' }}>{fruit.name}</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>{fruit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{activeTab} Tier List</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Data for {activeTab} is currently being verified against the latest major patch.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
