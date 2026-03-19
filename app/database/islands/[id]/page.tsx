'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import islandsData from '@/data/islands.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function IslandDetailPage({ params }: { params: { id: string } }) {
  const island = islandsData.find(i => i.id === params.id);
  
  if (!island) return notFound();

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
          
          <Link href="/database/islands" style={{ color: '#4DEEEA', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            ← Back to Island Database
          </Link>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 1rem 0' }}>{island.name}</h1>
            <div style={{ display: 'inline-block', background: 'rgba(116, 238, 21, 0.1)', color: '#74EE15', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', marginBottom: '2rem' }}>
              Level Requirement: {island.levels}
            </div>

            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>{island.description}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Quests Section */}
              <div>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Available Quests</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {island.quests?.map((q, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.2rem', borderRadius: '12px' }}>
                      <div style={{ color: '#4DEEEA', fontWeight: 'bold', marginBottom: '0.3rem' }}>{q.name}</div>
                      <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Goal: {q.target}</div>
                      <div style={{ color: '#74EE15', fontSize: '0.9rem' }}>Reward: {q.reward}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable NPCs/Trainers */}
              <div>
                <h2 style={{ color: '#fff', fontSize: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Points of Interest</h2>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Trainers</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {island.trainers?.map((t, i) => (
                      <span key={i} style={{ background: 'rgba(77, 238, 234, 0.1)', color: '#4DEEEA', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.9rem' }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                   <h3 style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Notable Drops</h3>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {island.drops?.map((d, i) => (
                      <span key={i} style={{ background: 'rgba(255, 231, 0, 0.1)', color: '#FFE700', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.9rem' }}>{d}</span>
                    ))}
                  </div>
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
