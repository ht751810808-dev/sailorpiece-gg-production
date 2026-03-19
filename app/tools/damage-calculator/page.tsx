'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function DamageCalculatorPage() {
  const [baseDamage, setBaseDamage] = useState(100);
  const [level, setLevel] = useState(1);
  const [statPoints, setStatPoints] = useState(1);
  const [accessoryBuff, setAccessoryBuff] = useState(0); // percentage
  const [raceBuff, setRaceBuff] = useState(0); // percentage

  const totalDamage = Math.floor(
    (baseDamage + (statPoints * 2.5) + (level * 1.5)) * 
    (1 + (accessoryBuff / 100) + (raceBuff / 100))
  );

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 0.5rem 0' }}>Damage <span style={{ color: '#EF4444' }}>Calculator</span></h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Calculate your exact DPS across different builds and accessory combinations.</p>
          </div>

          <div style={{ background: '#0B132B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
              
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Base Weapon/Fruit Move Damage</label>
                <input type="range" min="10" max="5000" value={baseDamage} onChange={e => setBaseDamage(Number(e.target.value))} style={{ width: '100%' }} />
                <div style={{ color: '#fff', marginTop: '0.5rem', fontWeight: 'bold' }}>{baseDamage}</div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Character Level</label>
                  <input type="number" value={level} onChange={e => setLevel(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Stat Points in Class</label>
                  <input type="number" value={statPoints} onChange={e => setStatPoints(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Accessory Damage Buff (%)</label>
                  <input type="number" value={accessoryBuff} onChange={e => setAccessoryBuff(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>Race Output Buff (%)</label>
                  <input type="number" value={raceBuff} onChange={e => setRaceBuff(Number(e.target.value))} style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                </div>
              </div>

            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#EF4444', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>Calculated Total Damage Output</h3>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#fff', textShadow: '0 0 20px rgba(239, 68, 68, 0.5)', lineHeight: 1 }}>
                {totalDamage.toLocaleString()}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
