'use client';

export default function WikiCategories() {
  const categories = [
    { title: 'Devil Fruits', icon: '🍎', link: '/database/fruits' },
    { title: 'Swords & Weapons', icon: '⚔️', link: '/database/swords' },
    { title: 'Races & Clans', icon: '🧬', link: '/database/races' },
    { title: 'Islands & Maps', icon: '🗺️', link: '/database/islands' },
    { title: 'Dungeons & Raids', icon: '🏰', link: '/database/dungeons' },
    { title: 'World Bosses', icon: '👹', link: '/database/bosses' },
    { title: 'Accessories', icon: '💍', link: '/database/accessories' },
    { title: 'Runes & Glyphs', icon: '💎', link: '/database/runes' },
    { title: 'Character Traits', icon: '⚡', link: '/database/traits' },
    { title: 'Tools & Meta', icon: '🧮', link: '/tools/gacha-simulator' },
  ];

  return (
    <section id="wiki-categories" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1.2rem', fontWeight: 'bold' }}>
            Exploration <span style={{ color: '#4DEEEA' }}>Categories</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            The most exhaustive and deep Sailor Piece knowledge-base in the world. Select a module to dive into the data.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {categories.map((cat, i) => (
            <a 
              href={cat.link}
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2.5rem 1.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                textDecoration: 'none',
                color: '#fff',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(77, 238, 234, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(77, 238, 234, 0.3)';
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1.2rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{cat.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
