import Header from '@/components/Header';
import Footer from '@/components/Footer';
import racesData from '@/data/races.json';
import Image from 'next/image';

export default function RacesDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: 'bold' }}>Divine <span style={{ color: '#4DEEEA' }}>Races</span></h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Your race defines your core potential. Roll for legendary and mythical races to unlock game-breaking abilities and passives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem', paddingBottom: '5rem' }}>
            {racesData.map(race => (
              <div key={race.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }} className="race-card">
                
                <div style={{ height: '280px', width: '100%', position: 'relative', background: '#0B132B' }}>
                  {race.imageUrl ? (
                    <Image src={race.imageUrl} alt={race.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>Race Avatar</div>
                  )}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #0B132B, transparent)', zIndex: 1 }} />
                </div>

                <div style={{ padding: '2rem', position: 'relative', marginTop: '-40px', zIndex: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0, fontWeight: 'bold' }}>{race.name}</h2>
                    <span style={{ fontSize: '0.85rem', color: '#4DEEEA', fontWeight: 'bold', letterSpacing: '1px' }}>{race.rarity}</span>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontWeight: 'bold' }}>Active Passives</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {race.buffs.map((buff, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                           <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#74EE15' }} />
                           {buff}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'not-allowed', opacity: 0.8 }}>
                    Simulation Roll Available
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .race-card:hover {
          transform: translateY(-10px);
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(77, 238, 234, 0.3) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }
      `}</style>
      <Footer />
    </>
  );
}
