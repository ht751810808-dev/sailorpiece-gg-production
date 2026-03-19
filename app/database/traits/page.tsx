import Header from '@/components/Header';
import Footer from '@/components/Footer';
import traitsData from '@/data/traits.json';

export default function TraitsDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Character Traits</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Innate passives rolled at birth (using Gems).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {traitsData.map(trait => (
              <div key={trait.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{trait.name}</h2>
                  <span style={{ fontSize: '0.85rem', color: '#FF007F', fontWeight: 'bold' }}>{trait.rarity}</span>
                </div>
                
                <div style={{ background: 'rgba(116, 238, 21, 0.1)', borderLeft: '3px solid #74EE15', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                  <p style={{ color: '#fff', margin: 0 }}>{trait.effect}</p>
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
