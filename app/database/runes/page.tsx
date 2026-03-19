import Header from '@/components/Header';
import Footer from '@/components/Footer';
import runesData from '@/data/runes.json';

export default function RunesDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Runes Database</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Equippable runestones to modify your build passives.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {runesData.map(rune => (
              <div key={rune.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{rune.name}</h2>
                  <span style={{ fontSize: '0.9rem', color: rune.tier === 'Mythical' ? '#FF007F' : rune.tier === 'Legendary' ? '#FFE700' : '#3B82F6', fontWeight: 'bold' }}>{rune.tier}</span>
                </div>
                
                <div style={{ background: 'rgba(77, 238, 234, 0.1)', borderLeft: '3px solid #4DEEEA', padding: '1rem', borderRadius: '0 8px 8px 0', marginBottom: '1.5rem' }}>
                  <p style={{ color: '#fff', margin: 0 }}>{rune.effect}</p>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <strong>Drop Location:</strong> <span style={{ color: 'rgba(255,255,255,0.7)' }}>{rune.dropLocation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
