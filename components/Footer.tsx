import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#050B14', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', margin: 0 }}>
              Sailor<span style={{ color: '#4DEEEA' }}>Piece</span>.help
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              The #1 community-driven resource for Sailor Piece. Verified codes, mythical drops, and professional PvP meta strategies.
            </p>
          </div>

          {/* Column 2: Wiki */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Wiki Databases</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link href="/database/fruits" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Devil Fruits</Link></li>
              <li><Link href="/database/swords" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Swords & Weapons</Link></li>
              <li><Link href="/database/races" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Races & Lineages</Link></li>
              <li><Link href="/database/islands" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Islands & Maps</Link></li>
              <li><Link href="/database/dungeons" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Dungeons & Raids</Link></li>
              <li><Link href="/database/bosses" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>World Bosses</Link></li>
            </ul>
          </div>

          {/* Column 3: Tools & Guides */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Pro Tools</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link href="/tools/gacha-simulator" style={{ color: '#4DEEEA', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>🎰 Gacha Simulator</Link></li>
              <li><Link href="/tools/build-optimizer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>🛠️ Build Optimizer</Link></li>
              <li><Link href="/codes" style={{ color: '#FFE700', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>Active Codes</Link></li>
              <li><Link href="/builds" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Meta Builds</Link></li>
            </ul>
          </div>

          {/* Column 4: Friendly Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Friendly Links</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="https://www.titanfishing.art/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Titan Fishing</a></li>
              <li><a href="http://impostergame.pro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Imposter Game</a></li>
              <li><a href="https://chatgptcaricature.art" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>ChatGPT Caricature</a></li>
              <li><a href="https://teamnamegenerator.click" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Team Name Generator</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
             <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Support</h4>
             <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link href="/faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ</Link></li>
              <li><Link href="/news" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>News</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} SailorPiece.gg. Developed with ❤️ for the community.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.85rem' }}>Terms</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '0.85rem' }}>Disclaimer</a>
          </div>
        </div>
      </div>
      <style>{`
        footer a:hover { color: #fff !important; }
      `}</style>
    </footer>
  );
}
