import Header from '@/components/Header';
import Footer from '@/components/Footer';
import codesData from '@/data/codes.json';

export default function CodesPage() {
  const activeCodes = codesData.filter(c => c.status === 'Active');
  const expiredCodes = codesData.filter(c => c.status === 'Expired');

  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>
            All <span style={{ color: '#4DEEEA' }}>Sailor Piece Codes</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            Check out the complete list of working codes for Beli, Gems, and Rerolls.
          </p>

          <h2 style={{ color: '#10B981', marginBottom: '1rem' }}>✅ Active Codes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem' }}>
            {activeCodes.map(c => (
              <div key={c.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '4px solid #10B981' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', fontFamily: 'monospace' }}>{c.code}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Reward: {c.reward}</p>
                </div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Added: {c.addedDate}</div>
              </div>
            ))}
          </div>

          <h2 style={{ color: '#EF4444', marginBottom: '1rem' }}>❌ Expired Codes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '4rem', opacity: 0.6 }}>
            {expiredCodes.map(c => (
              <div key={c.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', borderLeft: '4px solid #EF4444' }}>
                <div style={{ textDecoration: 'line-through', color: '#fff' }}>{c.code}</div>
                <div>{c.reward}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
