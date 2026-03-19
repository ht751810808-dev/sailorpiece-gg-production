import Header from '@/components/Header';
import Footer from '@/components/Footer';
import bossesData from '@/data/bosses.json';
import Image from 'next/image';

export default function BossesDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Bosses & Drop Tables</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Track spawn times and highly-coveted Mythical drops from World Bosses.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {bossesData.map(boss => (
              <div key={boss.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,100,100,0.2)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-card">
                
                <div style={{ height: '250px', width: '100%', position: 'relative', background: 'radial-gradient(circle, rgba(255,100,100,0.1) 0%, rgba(0,0,0,0.8) 100%)', borderBottom: '1px solid rgba(255,100,100,0.2)' }}>
                  {boss.imageUrl ? (
                    <Image src={boss.imageUrl} alt={boss.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>Select Image Unavailable</div>
                  )}
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#EF4444', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.8rem', zIndex: 10 }}>World Boss</span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', margin: '0 0 0.25rem 0' }}>{boss.name}</h2>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>📍 {boss.location}</span>
                  </div>
                  
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <p style={{ color: '#FFE700', fontSize: '0.85rem', marginBottom: '0.25rem' }}>⏳ Spawn Requirements:</p>
                    <p style={{ color: '#fff', fontSize: '0.9rem', lineHeight: 1.4, margin: 0 }}>{boss.spawnRequirements}</p>
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', marginTop: 0 }}>Drop Table:</p>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {boss.drops.map((drop, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{ color: '#EF4444', marginRight: '0.5rem' }}>•</span> {drop}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(239, 68, 68, 0.2); }
      `}</style>
      <Footer />
    </>
  );
}
