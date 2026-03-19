import Header from '@/components/Header';
import Footer from '@/components/Footer';
import clansData from '@/data/clans.json';

export default function ClansDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Clans & Bloodlines</h1>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Reroll your clan to acquire powerful passive buffs. Legendary clans significantly alter your playstyle.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
            {clansData.map(clan => (
              <div key={clan.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{clan.name}</h2>
                    <span style={{ 
                      color: clan.rarity === 'Legendary' ? '#FFE700' : clan.rarity === 'Epic' ? '#A855F7' : 'var(--color-text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      [{clan.rarity}]
                    </span>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: 0 }}>{clan.buff}</p>
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
