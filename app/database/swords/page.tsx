import Header from '@/components/Header';
import Footer from '@/components/Footer';
import swordsData from '@/data/swords.json';
import Image from 'next/image';
import Link from 'next/link';

export default function SwordsDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Swords Database</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Explore all obtainable swords in Sailor Piece.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {swordsData.map(sword => (
              <Link href={`/database/swords/${sword.id}`} key={sword.id} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer', height: '100%' }} className="hover-card">
                  
                  <div style={{ height: '250px', width: '100%', position: 'relative', background: 'radial-gradient(circle, rgba(116, 238, 21, 0.1) 0%, rgba(0,0,0,0.8) 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {sword.imageUrl ? (
                      <Image src={sword.imageUrl} alt={sword.name} fill style={{ objectFit: 'cover' }} />
                    ) : (
                      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>Sword Image Unavailable</div>
                    )}
                    <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFE700', color: '#000', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 'bold', zIndex: 10 }}>Tier {sword.tier}</span>
                  </div>
                  
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0 0 1rem 0' }}>{sword.name}</h2>
                    
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '1.5rem', flexGrow: 1, marginTop: 0 }}>
                      {sword.description}
                    </p>

                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', margin: 0 }}>How to obtain:</p>
                      <p style={{ color: '#fff', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>{sword.obtainMethod}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(116, 238, 21, 0.1); border-color: rgba(255,255,255,0.2) !important; }
      `}</style>
      <Footer />
    </>
  );
}
