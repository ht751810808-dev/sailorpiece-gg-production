import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#070B19', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#4DEEEA' }}>🌊</span> Sailor Piece Unofficial
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '400px' }}>
              The #1 database and wiki for Sailor Piece on Roblox. Get the latest codes, check tier lists, and plan your ultimate build.
            </p>
          </div>
          
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="#codes" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Latest Codes</Link>
              <Link href="#tier-lists" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Tier Lists</Link>
              <Link href="#faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>FAQ</Link>
            </div>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Community</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Official Trello</a>
              <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Official Discord</a>
              <a href="#" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Roblox Group</a>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <p>© 2026 Sailor Piece Unofficial Fan Site. This site is not affiliated with Roblox or the game developers.</p>
        </div>
      </div>
    </footer>
  );
}
