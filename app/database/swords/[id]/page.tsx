import Header from '@/components/Header';
import Footer from '@/components/Footer';
import swordsData from '@/data/swords.json';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function SwordDetailPage({ params }: { params: { id: string } }) {
  const sword = swordsData.find(s => s.id === params.id);
  
  if (!sword) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <Link href="/database/swords" style={{ display: 'inline-block', marginBottom: '2rem', color: '#4DEEEA', textDecoration: 'none' }}>
            ← Back to Swords Database
          </Link>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'sticky', top: '120px' }}>
                <div style={{ width: '100%', height: '300px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', background: '#0B132B' }}>
                  {sword.imageUrl ? (
                    <Image src={sword.imageUrl} alt={sword.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>No Image</div>
                  )}
                </div>
                
                <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: '0 0 1rem 0' }}>{sword.name}</h1>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ background: '#FFE700', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>Tier {sword.tier}</span>
                  <span style={{ border: '1px solid #4DEEEA', color: '#4DEEEA', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>{sword.rarity}</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ flex: 1, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ color: '#EF4444', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Damage</div>
                    <div style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}>{sword.damageRating}/10</div>
                  </div>
                  <div style={{ flex: 1, background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ color: '#3B82F6', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Speed</div>
                    <div style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 'bold' }}>{sword.speedRating}/10</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: '2 1 500px' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Overview</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.1rem' }}>{sword.description}</p>
              </div>

              <div>
                <h2 style={{ fontSize: '2rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>How to Obtain</h2>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ color: '#4DEEEA', margin: 0, lineHeight: 1.6, fontSize: '1.1rem', fontWeight: 600 }}>{sword.obtainMethod}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
