'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LiveMeta() {
  const trendingItems = [
    { name: 'Kitsune Fruit', change: '+12%', type: 'Fruit' },
    { name: 'Dragon Fruit', change: '+5%', type: 'Fruit' },
    { name: 'Yamato', change: '+8%', type: 'Sword' },
    { name: 'Magma Core', change: '-3%', type: 'Rune' },
  ];

  return (
    <section style={{ padding: '6rem 0', background: '#050B14', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          {/* Left Column: Build of the Month */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: '#FFE700', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Weekly Highlight 👑</span>
              <h2 style={{ fontSize: '3rem', color: '#fff', margin: '0.5rem 0' }}>Meta <span style={{ color: '#4DEEEA' }}>Loadout</span></h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>The most dominant build used by top 100 Arena players this season.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(77, 238, 234, 0.2)', borderRadius: '24px', padding: '2.5rem', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#4DEEEA', color: '#000', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>TIER S+</div>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <MetaItem name="Dragon Fruit" type="Mythical Zoan" color="#FF007F" />
                  <MetaItem name="True Aizen" type="Mythical Sword" color="#4DEEEA" />
                  <MetaItem name="Servant Class" type="Mythical Race" color="#74EE15" />
                  <MetaItem name="Omniscience" type="Legendary Rune" color="#FFE700" />
               </div>

               <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                    <strong>Verdict:</strong> Using Dragon's massive AoE combined with True Aizen's stun lock allows for an unblockable one-shot combo. Recommended stat split: 2,500 Fruit / 2,000 Sword.
                  </p>
               </div>
            </div>
          </div>

          {/* Right Column: Trending Prices */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '2rem' }}>Market <span style={{ color: '#74EE15' }}>Trends</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {trendingItems.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: '600', marginBottom: '0.2rem' }}>{item.name}</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{item.type}</div>
                  </div>
                  <div style={{ color: item.change.startsWith('+') ? '#74EE15' : '#EF4444', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {item.change}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/tools/price-guide" style={{ display: 'inline-block', marginTop: '2rem', color: '#4DEEEA', textDecoration: 'none', fontWeight: 'bold' }}>
              View Comprehensive Price Guide →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function MetaItem({ name, type, color }: any) {
  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, marginBottom: '0.5rem' }} />
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '0.2rem' }}>{name}</div>
      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{type}</div>
    </div>
  );
}
