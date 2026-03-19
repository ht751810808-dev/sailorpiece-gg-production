'use client';

const codes = [
  { code: 'HAKIUPDATE', reward: '500,000 Beli & 250 Gems', status: 'Active', color: '#10B981' },
  { code: 'NEWFRUITS', reward: 'Race Reroll & Stat Reset', status: 'Active', color: '#10B981' },
  { code: 'SAILOR100K', reward: '1,000 Gems & Clan Reroll', status: 'Active', color: '#10B981' },
  { code: 'SORRYFORSHUTDOWN', reward: 'x2 EXP Boost (30 Mins)', status: 'Active', color: '#10B981' },
  { code: 'GEAR5', reward: 'Expired', status: 'Expired', color: '#EF4444' },
];

export default function CodesSection() {
  return (
    <section id="codes" style={{ padding: '80px 0', background: 'var(--color-bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text)', marginBottom: '1rem' }}>
            Latest <span style={{ color: '#4DEEEA' }}>Sailor Piece Codes</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Redeem these active Roblox codes for free Beli, Gems, Race Rerolls, and powerful EXP boosts. Updated daily!
          </p>
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'rgba(255,255,255,0.02)', 
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1fr', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.05)', fontWeight: 'bold', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            <div>Code</div>
            <div>Reward</div>
            <div style={{ textAlign: 'right' }}>Status</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {codes.map((item, i) => (
              <div 
                key={i} 
                className="code-row"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 3fr 1fr', 
                  padding: '1.25rem 1.5rem', 
                  borderBottom: i !== codes.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  alignItems: 'center',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  if (item.status === 'Active') {
                     navigator.clipboard.writeText(item.code);
                     alert(`Copied code: ${item.code}`);
                  }
                }}
              >
                <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold' }}>
                  {item.code}
                </div>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  {item.reward}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ 
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    background: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`
                  }}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
