import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dungeonsData from '@/data/dungeons.json';

export default function DungeonsDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Dungeons 地下城</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>High level instanced raids for legendary gear drops.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {dungeonsData.map(item => (
              <div key={item.id} style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: '0 0 1rem 0' }}>{item.name}</h2>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '0.5rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem', fontWeight: 'bold' }}>
                  Req Lvl: {item.levelReq}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', margin: '0 0 1rem 0' }}>{item.description}</p>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <strong>Drops:</strong> <span style={{ color: '#FFE700' }}>{item.drops}</span>
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
