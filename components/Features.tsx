export default function Features() {
  const features = [
    {
      title: 'Legendary Devil Fruits',
      desc: 'Find and consume rare fruits spawned across the islands to gain superhuman powers like Magma, Light, or Dough abilities.',
      icon: '🍎',
    },
    {
      title: 'Master All Haki Types',
      desc: 'Unlock Observation Haki to dodge, Armament Haki to boost damage, and the ultra-rare Conqueror’s Haki to stun your foes.',
      icon: '⚡',
    },
    {
      title: 'Epic Boss Fights',
      desc: 'Form clans and team up to take down massive Raid Bosses and Sea Beasts to secure mythic weapons and accessory drops.',
      icon: '🐉',
    },
    {
      title: 'Island Exploration',
      desc: 'Sail through vast seas from the First Sea to the highly dangerous Third Sea. Discover hidden quests and rune dungeons.',
      icon: '⛵',
    },
  ];

  return (
    <section id="features" style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>
            Conquer the <span style={{ color: '#74EE15' }}>Grand Seas</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Sailor Piece brings an incredible RPG experience to Roblox. Level up your stats, join a clan, and become the strongest pirate or marine.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((f, i) => (
            <div 
              key={i} 
              className="glass-card"
              style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
