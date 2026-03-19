import Header from '@/components/Header';
import Footer from '@/components/Footer';
import buildsData from '@/data/builds.json';

export default function BuildsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>
              Meta <span style={{ color: '#FF007F' }}>Builds</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Discover high-synergy setups designed by top 1% PvP and Raiding players.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {buildsData.map(build => (
              <div key={build.id} style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,0,127,0.05) 100%)', border: '1px solid rgba(255,0,127,0.2)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800, margin: 0 }}>{build.name}</h3>
                  <span style={{ background: '#FF007F', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: '8px', fontWeight: 'bold' }}>⭐ {build.tier}</span>
                </div>
                
                <div style={{ padding: '1.2rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <p style={{ color: '#4DEEEA', fontSize: '0.85rem', marginBottom: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Core Synergy Components</p>
                  <ul style={{ color: '#fff', margin: 0, paddingLeft: '1.2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    <li><strong>Fruit:</strong> {build.components.fruit}</li>
                    <li><strong>Sword:</strong> {build.components.sword}</li>
                    <li><strong>Race:</strong> {build.components.race}</li>
                    <li><strong>Accessory:</strong> {build.components.accessory}</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.3rem', fontWeight: 'bold' }}>COMBO EXECUTION:</p>
                   <code style={{ color: '#74EE15', fontSize: '0.9rem' }}>{build.combo}</code>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, flexGrow: 1, fontSize: '0.95rem' }}>{build.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
