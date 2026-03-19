'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fruitsData from '@/data/fruits.json';
import swordsData from '@/data/swords.json';
import racesData from '@/data/races.json';
import accessoriesData from '@/data/accessories.json';
import { useState, useMemo } from 'react';
import Image from 'next/image';

export default function BuildOptimizerPage() {
  const [selectedFruit, setSelectedFruit] = useState(fruitsData[0]);
  const [selectedSword, setSelectedSword] = useState(swordsData[0]);
  const [selectedRace, setSelectedRace] = useState(racesData[0]);
  const [selectedAcc, setSelectedAcc] = useState(accessoriesData[0]);

  const totalPower = useMemo(() => {
    let score = 0;
    if (selectedFruit?.stats?.Power) score += selectedFruit.stats.Power;
    if (selectedSword?.damageRating) score += selectedSword.damageRating;
    // Simple mock logic for final score
    return Math.min(100, (score * 5));
  }, [selectedFruit, selectedSword, selectedRace, selectedAcc]);

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Build <span style={{ color: '#4DEEEA' }}>Optimizer</span></h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Mix and match equipment to find the perfect synergistic loadout.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            {/* Selection Panel */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '2rem' }}>
              <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>Select Components</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Selector label="Choose Fruit" data={fruitsData} value={selectedFruit.id} onChange={(id: string) => setSelectedFruit(fruitsData.find(f => f.id === id)!)} />
                <Selector label="Choose Sword" data={swordsData} value={selectedSword.id} onChange={(id: string) => setSelectedSword(swordsData.find(s => s.id === id)!)} />
                <Selector label="Choose Race" data={racesData} value={selectedRace.id} onChange={(id: string) => setSelectedRace(racesData.find(r => r.id === id)!)} />
                <Selector label="Choose Accessory" data={accessoriesData} value={selectedAcc.id} onChange={(id: string) => setSelectedAcc(accessoriesData.find(a => a.id === id)!)} />
              </div>
            </div>

            {/* Preview Panel */}
            <div style={{ background: '#050B14', border: '1px solid rgba(77, 238, 234, 0.2)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              
              {/* Highlight Background */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(77, 238, 234, 0.1) 0%, transparent 70%)', zIndex: 0 }} />

              <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '2rem', zIndex: 1 }}>Loadout Stats <span style={{ color: '#4DEEEA' }}>Summary</span></h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem', zIndex: 1 }}>
                <StatCard label="Attack Power" value={`${totalPower}%`} color="#EF4444" />
                <StatCard label="Mobility" value={selectedFruit?.stats?.Speed ? `${selectedFruit.stats.Speed}/10` : 'N/A'} color="#3B82F6" />
                <StatCard label="Survivability" value={selectedAcc?.buff ? "High" : "Mid"} color="#74EE15" />
                <StatCard label="Combo Potential" value="A+" color="#FFE700" />
              </div>

              <div style={{ zIndex: 1 }}>
                <h3 style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Active Buffs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ color: '#4DEEEA', background: 'rgba(77, 238, 234, 0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(77, 238, 234, 0.1)' }}>
                    <strong>Synergy:</strong> {selectedFruit.name} + {selectedRace.name} ({selectedRace.rarity})
                  </div>
                  <div style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {selectedAcc.buff} from {selectedAcc.name}
                  </div>
                </div>
              </div>

              <button style={{ marginTop: 'auto', background: 'linear-gradient(135deg, #4DEEEA 0%, #3b82f6 100%)', color: '#000', border: 'none', padding: '1.2rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', zIndex: 1 }}>
                Export Build Code
              </button>
            </div>

          </div>

          <div style={{ marginTop: '4rem' }}>
             <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>Visual Loadout</h2>
             <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <ItemPreview item={selectedFruit} type="Fruit" />
                <ItemPreview item={selectedSword} type="Sword" />
                <ItemPreview item={selectedRace} type="Race" />
                <ItemPreview item={selectedAcc} type="Accessory" />
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function Selector({ label, data, value, onChange }: any) {
  return (
    <div>
      <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }}
      >
        {data.map((item: any) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

function StatCard({ label, value, color }: any) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '16px', borderLeft: `4px solid ${color}` }}>
      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{label}</div>
      <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</div>
    </div>
  );
}

function ItemPreview({ item, type }: any) {
  return (
    <div style={{ flex: '1 1 200px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <div style={{ fontSize: '0.7rem', color: '#4DEEEA', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{type}</div>
      <div style={{ width: '80px', height: '80px', margin: '0 auto 1rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
        {item.imageUrl && <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: 'cover' }} />}
      </div>
      <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600' }}>{item.name}</div>
    </div>
  );
}
