export default function FAQ() {
  const faqs = [
    {
      q: 'How do I redeem codes in Sailor Piece?',
      a: 'Launch the game, tap the Settings/Cog icon on the left side of the screen. Scroll down to the "Codes" section, paste your code, and click "Redeem".'
    },
    {
      q: 'What is the max level in Sailor Piece?',
      a: 'As of the latest major update, the maximum level cap is 11,500. Grinding islands efficiently and using 2x EXP codes will help you reach max level faster.'
    },
    {
      q: 'How do I get Haki?',
      a: 'Armament Haki (Buso) can be purchased from the Haki Trainer located on Yeti Island or specific level zones depending on the Sea. It costs a significant amount of Beli.'
    },
    {
      q: 'Where is the official Trello board?',
      a: 'We link to the official Sailor Piece Trello in our Community section below. Trello is the best place to view all boss drop rates and specific sword stats.'
    }
  ];

  return (
    <section id="faq" style={{ padding: '80px 0', background: 'var(--color-bg-alt)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', color: '#fff' }}>
          Frequently Asked <span style={{ color: '#FFE700' }}>Questions</span>
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ color: '#4DEEEA', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Q: {faq.q}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
