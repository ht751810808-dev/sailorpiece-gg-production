'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Pricing Data matching typical Roblox meta economies
const tradingData = [
  { item: 'Kitsune Fruit', type: 'Fruit', value: '115,000,000', demand: 'Extremely High', trend: 'UP' },
  { item: 'Dragon Fruit', type: 'Fruit', value: '90,000,000', demand: 'Very High', trend: 'STABLE' },
  { item: 'Dark Blade', type: 'Weapon', value: '150,000,000', demand: 'Insane', trend: 'UP' },
  { item: 'Manipulator Outfit', type: 'Accessory', value: '45,000,000', demand: 'High', trend: 'DOWN' },
  { item: 'Light Fruit', type: 'Fruit', value: '5,000,000', demand: 'Medium', trend: 'STABLE' },
  { item: 'Quake Fruit', type: 'Fruit', value: '4,000,000', demand: 'Low', trend: 'DOWN' },
];

export default function PriceGuidePage() {
  const [search, setSearch] = useState('');
  
  const filtered = tradingData.filter(d => d.item.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Live <span style={{ color: '#74EE15' }}>Trading Values</span></h1>
            <p style={{ color: 'var(--color-text-muted)' }}>The most accurate, community-driven price guide for items. Updated daily.</p>
          </div>

          <div style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
              <input 
                type="text" 
                placeholder="Search items to check value..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '1.1rem', outline: 'none' }}
              />
            </div>
            
            <div style={{ padding: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#fff' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: 'var(--color-text-muted)' }}>
                    <th style={{ padding: '1rem' }}>Item Name</th>
                    <th style={{ padding: '1rem' }}>Category</th>
                    <th style={{ padding: '1rem' }}>Community Value (Beli)</th>
                    <th style={{ padding: '1rem' }}>Demand</th>
                    <th style={{ padding: '1rem' }}>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((data, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', fontWeight: 600, color: '#fff' }}>{data.item}</td>
                      <td style={{ padding: '1rem', color: '#4DEEEA' }}>{data.type}</td>
                      <td style={{ padding: '1rem', color: '#74EE15', fontWeight: 'bold' }}>{data.value}</td>
                      <td style={{ padding: '1rem', color: data.demand.includes('High') ? '#EF4444' : 'rgba(255,255,255,0.7)' }}>{data.demand}</td>
                      <td style={{ padding: '1rem', color: data.trend === 'UP' ? '#74EE15' : data.trend === 'DOWN' ? '#EF4444' : 'rgba(255,255,255,0.5)' }}>
                        {data.trend === 'UP' ? '📈 Rising' : data.trend === 'DOWN' ? '📉 Falling' : '➖ Stable'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
