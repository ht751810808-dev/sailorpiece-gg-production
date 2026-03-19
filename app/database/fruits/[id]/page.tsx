'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fruitsData from '@/data/fruits.json';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RadarChart from '@/components/RadarChart';

// We use 'use client' because of state and charts
export default function FruitDetailPage({ params }: { params: { id: string } }) {
  const fruit = fruitsData.find(f => f.id === params.id);
  
  if (!fruit) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
          
          <Link href="/database/fruits" style={{ display: 'inline-block', marginBottom: '2rem', color: '#4DEEEA', textDecoration: 'none' }}>
            ← Back to Fruits Database
          </Link>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {/* Left Column: Image & Basic Info */}
            <div style={{ flex: '1 1 350px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'sticky', top: '100px' }}>
                <div style={{ width: '100%', height: '350px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', background: '#0B132B' }}>
                  {fruit.imageUrl ? (
                    <Image src={fruit.imageUrl} alt={fruit.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>No Image</div>
                  )}
                </div>
                
                <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: '0 0 1rem 0' }}>{fruit.name}</h1>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#FFE700', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontWeight: 'bold' }}>Tier {fruit.tier}</span>
                  <span style={{ border: '1px solid #4DEEEA', color: '#4DEEEA', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>{fruit.type}</span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>{fruit.rarity}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Price (Beli)</div>
                    <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>${fruit.priceBeli.toLocaleString()}</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Price (Gems)</div>
                    <div style={{ color: '#74EE15', fontSize: '1.1rem', fontWeight: '700' }}>{fruit.priceGems.toLocaleString()} 💎</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lore, Stats Chart, & Skills */}
            <div style={{ flex: '2 1 600px' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Overview</h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.1rem' }}>{fruit.description}</p>
              </div>

              {/* Stats Visualization */}
              {fruit.stats && (
                <div style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '1.8rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Performance Matrix</h2>
                  <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', padding: '2rem', display: 'flex', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                      <RadarChart stats={fruit.stats} label={fruit.name} />
                    </div>
                  </div>
                </div>
              )}

              {fruit.skills && fruit.skills.length > 0 && (
                <div style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '1.8rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Skill Breakdown</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {fruit.skills.map((skill, i) => (
                      <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <h3 style={{ color: '#4DEEEA', margin: 0 }}>{skill.name}</h3>
                          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Mastery Req: {skill.mastery}</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.5 }}>{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 250px', background: 'rgba(116, 238, 21, 0.05)', borderLeft: '4px solid #74EE15', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                  <h3 style={{ color: '#74EE15', marginTop: 0 }}>Pros</h3>
                  <ul style={{ color: 'rgba(255,255,255,0.8)', paddingLeft: '1.2rem', margin: 0 }}>
                    {fruit.pros?.map((p, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{p}</li>)}
                  </ul>
                </div>
                <div style={{ flex: '1 1 250px', background: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid #EF4444', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                  <h3 style={{ color: '#EF4444', marginTop: 0 }}>Cons</h3>
                  <ul style={{ color: 'rgba(255,255,255,0.8)', paddingLeft: '1.2rem', margin: 0 }}>
                    {fruit.cons?.map((p, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{p}</li>)}
                  </ul>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>How to Obtain</h2>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>{fruit.howToGet}</p>
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
