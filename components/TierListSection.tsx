'use client';

import { useState } from 'react';

const tierListCategories = ['Devil Fruits', 'Swords', 'Races', 'Haki'];

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
            Discover the most powerful Devil Fruits, strongest Swords, and the meta Races to dominate the seas in Season 2026.
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

        {/* Content Placeholder */}
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,231,0,0.3)' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{activeTab} Tier List</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Data for {activeTab} is currently being updated for the latest major patch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
