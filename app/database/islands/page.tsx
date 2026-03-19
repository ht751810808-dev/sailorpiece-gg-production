import Header from '@/components/Header';
import Footer from '@/components/Footer';
import islandsData from '@/data/islands.json';
import Link from 'next/link';

export default function IslandsDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ paddingBottom: '4rem' }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: 'bold' }}>Progressive <span style={{ color: '#4DEEEA' }}>Islands</span></h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                Complete travel guide for the world of Sailor Piece. Explore every island, defeat powerful bosses, and unlock legendary trainers.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
             {/* Vertical Path Line (Aesthetic) */}
             <div style={{ position: 'absolute', top: '50px', left: '20px', bottom: '100px', width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(77, 238, 234, 0.3), transparent)', zIndex: 0 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {islandsData.map((item, idx) => (
                <Link key={item.id} href={`/database/islands/${item.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ position: 'relative', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '2.5rem', display: 'flex', gap: '3rem', flexWrap: 'wrap', transition: 'all 0.3s ease', zIndex: 1 }} className="hover-lift">
                    
                    {/* Level Badge Circle */}
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(77, 238, 234, 0.1)', border: '2px solid #4DEEEA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4DEEEA', fontWeight: 'bold', fontSize: '1rem', flexShrink: 0, position: 'relative', zIndex: 2 }}>
                       <div style={{ fontSize: '0.6rem', position: 'absolute', top: '15px', color: 'rgba(77, 238, 234, 0.5)' }}>LVL</div>
                       {item.levels.split(' - ')[0]}
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                           <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>{item.name}</h2>
                           <span style={{ color: '#74EE15', fontSize: '1.2rem', fontWeight: 'bold' }}>#{idx + 1}</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '600px' }}>{item.description}</p>
                        
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Regional Boss:</span>
                              <span style={{ color: '#EF4444', fontWeight: '600' }}>{item.boss}</span>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Notable Loot:</span>
                              <span style={{ color: '#FFE700' }}>{item.drops[0]}</span>
                           </div>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <style>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(77, 238, 234, 0.4) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
      `}</style>
      <Footer />
    </>
  );
}
