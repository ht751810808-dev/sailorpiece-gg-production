import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(11,19,43,0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: '#4DEEEA' }}>🌊</span> Sailor Piece
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link href="#codes" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>Codes</Link>
          <Link href="#tier-lists" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>Tier Lists</Link>
          <Link href="#features" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>Features</Link>
          <Link href="#faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontWeight: 500 }}>FAQ</Link>
        </nav>

        {/* Join Discord CTA */}
        <a 
          href="https://discord.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', background: '#5865F2', color: '#fff' }}
        >
          Join Discord
        </a>
      </div>
    </header>
  );
}
