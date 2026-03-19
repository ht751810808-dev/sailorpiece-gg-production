export default function FinalCTA() {
  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0B132B 0%, #1A2A4A 100%)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1.5rem', fontWeight: 800 }}>
          Ready to Start Your <span style={{ color: '#FFE700' }}>Journey?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          Join millions of players on Roblox. Eat a Devil Fruit, master your Haki, and conquer the Grand Seas in Sailor Piece.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="https://www.roblox.com/games/sailor-piece-roblox-id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', background: '#00EA5E', color: '#000', fontWeight: 'bold' }}
          >
            Play on Roblox Now
          </a>
        </div>
      </div>
    </section>
  );
}
