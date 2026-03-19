import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>
              Sailor Piece <span style={{ color: '#FFE700' }}>News & Updates</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Stay up to date with the latest patch notes and seasonal changes.</p>
          </div>

          <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
            {/* Patch Note 1 */}
            <article style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ color: '#fff', margin: 0 }}>Update 7: The Cursed Update</h2>
                <span style={{ color: '#4DEEEA', fontSize: '0.9rem' }}>March 18, 2026</span>
              </div>
              <ul style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
                <li>Added new World Boss: **Sukuna** (Shibuya Station).</li>
                <li>Added Mythical Accessory: **Manipulator Outfit**.</li>
                <li>Max Level Cap increased from 10,000 to 11,500!</li>
                <li>Buffed **Light Fruit** (Reduced Cooldown on V move).</li>
                <li>Nerfed **Bomb Fruit** PvP stun duration.</li>
              </ul>
              <button style={{ background: 'transparent', color: '#4DEEEA', border: 'none', cursor: 'pointer', padding: 0, fontSize: '1rem' }}>Read Full Notes →</button>
            </article>

            {/* Patch Note 2 */}
            <article style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ color: '#fff', margin: 0 }}>Hotfix 6.5: Balance Changes</h2>
                <span style={{ color: '#4DEEEA', fontSize: '0.9rem' }}>March 10, 2026</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Addressed severe lag issues during the Yeti Boss fight on Snow Mountain. Adjusted Clan Reroll Pity System—you are now guaranteed a Legendary Clan after 100 Boss drops.
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
