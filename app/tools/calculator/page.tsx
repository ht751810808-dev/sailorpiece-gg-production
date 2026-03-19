'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function StatCalculatorPage() {
  const [level, setLevel] = useState<number>(1);
  const [basePoints, setBasePoints] = useState<number>(3);
  
  const [stats, setStats] = useState({
    melee: 1,
    defense: 1,
    sword: 1,
    fruit: 1
  });

  const POINTS_PER_LEVEL = 3;
  const totalPointsAvailable = level * POINTS_PER_LEVEL;
  const pointsUsed = (stats.melee - 1) + (stats.defense - 1) + (stats.sword - 1) + (stats.fruit - 1);
  const pointsRemaining = totalPointsAvailable - pointsUsed;

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newLevel = parseInt(e.target.value);
    if (isNaN(newLevel)) newLevel = 1;
    if (newLevel > 11500) newLevel = 11500; // Assuming Max Level Cap
    setLevel(newLevel);
  };

  const handleStatChange = (statName: 'melee'|'defense'|'sword'|'fruit', newValue: number) => {
    if (isNaN(newValue)) return;
    if (newValue < 1) newValue = 1;
    
    // Calculate difference
    const diff = newValue - stats[statName];
    
    // Check if we have enough points
    if (diff > pointsRemaining && diff > 0) {
      newValue = stats[statName] + pointsRemaining;
    }
    
    setStats(prev => ({ ...prev, [statName]: newValue }));
  };

  const resetStats = () => {
    setStats({ melee: 1, defense: 1, sword: 1, fruit: 1 });
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Stat Point <span style={{ color: '#4DEEEA' }}>Calculator</span></h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Plan your perfect damage distribution or hybrid build without wasting stat resets in-game.</p>
          </div>

          <div style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem' }}>
            
            {/* Level Input & Remaining Points */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Current Level (Max 11,500)</label>
                <input 
                  type="number" 
                  value={level} 
                  onChange={handleLevelChange}
                  style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid #4DEEEA', color: '#fff', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '1.2rem', width: '150px' }}
                />
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Points Remaining</p>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: pointsRemaining === 0 ? '#EF4444' : '#74EE15', margin: 0 }}>
                  {pointsRemaining.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Stat Row Generator */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {(['melee', 'defense', 'sword', 'fruit'] as const).map(stat => (
                <div key={stat} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '100px', textTransform: 'capitalize', color: '#fff', fontWeight: 600 }}>{stat}</div>
                  
                  {/* Progress Bar Container */}
                  <div style={{ flexGrow: 1, background: 'rgba(255,255,255,0.05)', height: '24px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ 
                      width: `${(stats[stat] / (level * 3)) * 100}%`, 
                      height: '100%', 
                      background: stat === 'melee' ? '#EF4444' : stat === 'defense' ? '#3B82F6' : stat === 'sword' ? '#F59E0B' : '#A855F7',
                      transition: 'width 0.2s ease-out'
                    }} />
                  </div>

                  <input 
                    type="number" 
                    value={stats[stat]} 
                    onChange={(e) => handleStatChange(stat, parseInt(e.target.value))}
                    style={{ width: '120px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '0.5rem', borderRadius: '8px', textAlign: 'right' }}
                  />
                  
                  <button 
                    onClick={() => handleStatChange(stat, stats[stat] + pointsRemaining)}
                    style={{ background: 'rgba(77, 238, 234, 0.1)', color: '#4DEEEA', border: '1px solid rgba(77, 238, 234, 0.3)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}
                  >
                    MAX
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={resetStats} 
                style={{ background: 'transparent', color: '#EF4444', border: '1px solid #EF4444', padding: '0.75rem 2rem', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}
              >
                Reset Allocation
              </button>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
