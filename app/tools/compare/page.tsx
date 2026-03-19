'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fruitsData from '@/data/fruits.json';
import { useState } from 'react';

export default function CompareToolPage() {
  const [item1, setItem1] = useState(fruitsData[0]);
  const [item2, setItem2] = useState(fruitsData[1]);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Item <span style={{ color: '#4DEEEA' }}>Compare Tool</span></h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Compare Devil Fruits side-by-side to make the best decision for your build.</p>
          </div>

          {/* Selectors */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            <select style={{ flex: 1, padding: '1rem', background: '#0B132B', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1.1rem' }} onChange={e => setItem1(fruitsData.find(f => f.id === e.target.value) || fruitsData[0])}>
              {fruitsData.map(f => <option key={f.id} value={f.id}>{f.name} ({f.tier})</option>)}
            </select>
            <select style={{ flex: 1, padding: '1rem', background: '#0B132B', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '1.1rem' }} defaultValue={item2.id} onChange={e => setItem2(fruitsData.find(f => f.id === e.target.value) || fruitsData[1])}>
              {fruitsData.map(f => <option key={f.id} value={f.id}>{f.name} ({f.tier})</option>)}
            </select>
          </div>

          {/* Compare Table */}
          <div style={{ background: '#050B14', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: '#fff' }}>
              <tbody>
                {/* Images */}
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ width: '20%', padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right', fontWeight: 'bold' }}>Visual</td>
                  <td style={{ width: '40%', padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                    {item1.imageUrl ? <img src={item1.imageUrl} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #4DEEEA' }} /> : 'No Image'}
                  </td>
                  <td style={{ width: '40%', padding: '2rem', background: 'rgba(255,255,255,0.01)' }}>
                    {item2.imageUrl ? <img src={item2.imageUrl} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #74EE15' }} /> : 'No Image'}
                  </td>
                </tr>
                {/* Stats */}
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right', fontWeight: 'bold' }}>Tier</td>
                  <td style={{ padding: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#FFE700' }}>{item1.tier}</td>
                  <td style={{ padding: '1rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#FFE700' }}>{item2.tier}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right', fontWeight: 'bold' }}>Type</td>
                  <td style={{ padding: '1rem', color: '#4DEEEA' }}>{item1.type}</td>
                  <td style={{ padding: '1rem', color: '#4DEEEA' }}>{item2.type}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right', fontWeight: 'bold' }}>Skill Count</td>
                  <td style={{ padding: '1rem' }}>{item1.skills?.length || 0} Abilities</td>
                  <td style={{ padding: '1rem' }}>{item2.skills?.length || 0} Abilities</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', color: 'var(--color-text-muted)', textAlign: 'right', fontWeight: 'bold' }}>Trading Value Limit</td>
                  <td style={{ padding: '1rem', color: '#74EE15', fontWeight: 'bold' }}>${item1.priceBeli.toLocaleString()}</td>
                  <td style={{ padding: '1rem', color: '#74EE15', fontWeight: 'bold' }}>${item2.priceBeli.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
