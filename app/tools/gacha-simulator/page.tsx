'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const rarities = [
  { name: 'Common', chance: 60, color: 'rgba(255,255,255,0.5)', fruits: ['Bomb', 'Spike', 'Chop', 'Spring'] },
  { name: 'Rare', chance: 25, color: '#3B82F6', fruits: ['Flame', 'Ice', 'Sand', 'Dark'] },
  { name: 'Legendary', chance: 14, color: '#FFE700', fruits: ['Light', 'Quake', 'Magma', 'Rumble'] },
  { name: 'Mythical', chance: 1, color: '#FF007F', fruits: ['Dragon', 'Kitsune', 'Leopard', 'Venom'] }
];

export default function GachaSimulatorPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<{ fruit: string, rarity: any } | null>(null);
  const [inventory, setInventory] = useState<{name: string, rarity: string, color: string}[]>([]);
  const [spins, setSpins] = useState(0);
  const [pity, setPity] = useState(0); // Pity for Legendary/Mythical

  const rollFruit = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    setTimeout(() => {
      let rand = Math.random() * 100;
      let cumulative = 0;
      let pulledRarity = rarities[0];
      
      // Pity logic: Every 50 spins, 100% chance for Legendary+
      if (pity >= 49) {
          rand = 85 + (Math.random() * 15); // Forced into Legendary/Mythical range
      }

      for (const r of rarities) {
        cumulative += r.chance;
        if (rand <= cumulative) {
          pulledRarity = r;
          break;
        }
      }

      const pulledFruit = pulledRarity.fruits[Math.floor(Math.random() * pulledRarity.fruits.length)];
      
      setResult({ fruit: pulledFruit, rarity: pulledRarity });
      setInventory(prev => [{name: pulledFruit, rarity: pulledRarity.name, color: pulledRarity.color}, ...prev]);
      setSpins(s => s + 1);
      
      if (pulledRarity.name === 'Legendary' || pulledRarity.name === 'Mythical') {
          setPity(0);
      } else {
          setPity(p => p + 1);
      }

      setIsSpinning(false);
    }, 1200);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          
          {/* Main Gacha Box */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ background: '#FF007F', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem', display: 'inline-block' }}>EXCLUSIVE TOOL</span>
              <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Gacha <span style={{ color: '#4DEEEA' }}>Simulator</span></h1>
              <p style={{ color: 'var(--color-text-muted)' }}>Professional-grade luck simulator with integrated pity counters and drop history.</p>
            </div>

            <div style={{ background: '#050B14', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '3rem', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              
              <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                {isSpinning ? (
                  <div style={{ animation: 'pulse 0.5s infinite', color: '#4DEEEA', fontSize: '1.5rem', fontWeight: 'bold' }}>TRANSMUTING FRUIT...</div>
                ) : result ? (
                  <div>
                    <h3 style={{ color: result.rarity.color, margin: '0 0 0.5rem 0', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>{result.rarity.name} UNLOCKED</h3>
                    <h2 style={{ fontSize: '3rem', color: '#fff', margin: 0, textShadow: `0 0 25px ${result.rarity.color}` }}>{result.fruit}</h2>
                  </div>
                ) : (
                  <h2 style={{ color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '1px' }}>Ready for Deployment</h2>
                )}
                
                {/* Pity Progress Bar Inline */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', background: 'rgba(255,255,255,0.1)', width: '100%' }}>
                  <div style={{ height: '100%', background: '#FFE700', width: `${(pity/50)*100}%`, transition: 'width 0.3s ease' }} />
                </div>
              </div>

              <button 
                onClick={rollFruit}
                disabled={isSpinning}
                style={{ 
                  background: 'linear-gradient(135deg, #4DEEEA 0%, #3b82f6 100%)', 
                  color: '#000', border: 'none', padding: '1.5rem 3rem', borderRadius: '12px', 
                  fontSize: '1.3rem', fontWeight: '900', cursor: isSpinning ? 'wait' : 'pointer',
                  opacity: isSpinning ? 0.7 : 1, width: '100%', transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 20px rgba(77, 238, 234, 0.2)'
                }}
              >
                SPIN GACHA
              </button>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                   Session Spins: <span style={{ color: '#fff', fontWeight: 'bold' }}>{spins}</span>
                </div>
                <div style={{ color: '#FFE700', fontSize: '0.9rem', fontWeight: 'bold' }}>
                   PITY: {pity}/50 <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>(Guar. Legendary+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rates & Inventory */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ color: '#fff', margin: '0 0 1.5rem 0', fontSize: '1.4rem' }}>Probability Matrix</h3>
              {rarities.map(r => (
                <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <span style={{ color: r.color, fontWeight: 'bold', fontSize: '1rem' }}>{r.name}</span>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>{r.chance}%</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '2rem', flexGrow: 1 }}>
              <h3 style={{ color: '#fff', margin: '0 0 1.5rem 0', fontSize: '1.4rem' }}>Session History</h3>
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {inventory.length === 0 ? <p style={{ color: 'rgba(255,255,255,0.3)' }}>Spin to start your collection.</p> : null}
                {inventory.map((item, idx) => (
                  <div key={idx} style={{ padding: '0.8rem', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: item.color, fontWeight: '500' }}>{item.name}</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{item.rarity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <Footer />
    </>
  );
}
