import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#050B14', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', margin: 0 }}>
              Sailor<span style={{ color: '#4DEEEA' }}>Piece</span>.gg
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
              <li><Link href="/database/islands" style={{ color: '#74EE15', textDecoration: 'none', transition: 'color 0.2s' }}>Islands & Maps</Link></li>
              <li><Link href="/database/dungeons" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Dungeons & Raids</Link></li>
              <li><Link href="/database/bosses" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>World Bosses</Link></li>
              <li><Link href="/database/accessories" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Accessories</Link></li>
              <li><Link href="/database/runes" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Runes & Glyphs</Link></li>
              <li><Link href="/database/traits" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Traits (Passives)</Link></li>
            </ul>
          </div>

          {/* Column 3: Tier Lists & Builds */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Tier Lists</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
              <li><Link href="/tier-lists" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Global Tier Lists</Link></li>
              <li><Link href="/builds" style={{ color: '#FF007F', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>Meta Builds HUB</Link></li>
              <li><Link href="/codes" style={{ color: '#4DEEEA', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>Active Codes (2026)</Link></li>
            </ul>

            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Guides & Community</h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link href="/guides" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Beginner Guides</Link></li>
              <li><Link href="/news" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Patch Notes</Link></li>
              <li><Link href="/faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>FAQ / Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Interactive Tools */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.2rem' }}>Pro Tools <span style={{ background: '#FFE700', color: '#000', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', marginLeft: '0.5rem' }}>HOT</span></h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link href="/tools/gacha-simulator" style={{ color: '#4DEEEA', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>🎰 Gacha Spin Simulator</Link></li>
              <li><Link href="/tools/build-optimizer" style={{ color: '#74EE15', fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.2s' }}>🛠️ Build Optimizer</Link></li>
              <li><Link href="/tools/price-guide" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Trading Value Guide</Link></li>
              <li><Link href="/tools/damage-calculator" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Combat Damage Calc</Link></li>
              <li><Link href="/tools/compare" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Item Attributes Compare</Link></li>
              <li><Link href="/tools/calculator" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Stat Optimization</Link></li>
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
