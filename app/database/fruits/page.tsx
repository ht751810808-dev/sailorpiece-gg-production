import Header from '@/components/Header';
import Footer from '@/components/Footer';
import fruitsData from '@/data/fruits.json';
import Image from 'next/image';
import Link from 'next/link';

export default function FruitsDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Devil Fruits Database</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Found {fruitsData.length} Devil Fruits in the database.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {fruitsData.map(fruit => (
              <Link href={`/database/fruits/${fruit.id}`} key={fruit.id} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer', height: '100%' }} className="hover-card">
                  
                  <div style={{ height: '250px', width: '100%', position: 'relative', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {fruit.imageUrl ? (
                      <Image src={fruit.imageUrl} alt={fruit.name} fill style={{ objectFit: 'cover' }} />
                    ) : (
                      <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>Missing Icon</div>
                    )}
                    <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFE700', color: '#000', padding: '0.3rem 0.6rem', borderRadius: '4px', fontWeight: 'bold', zIndex: 10 }}>Tier {fruit.tier}</span>
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h2 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{fruit.name}</h2>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
                      <span style={{ color: '#4DEEEA', fontWeight: 600 }}>{fruit.type}</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{fruit.rarity}</span>
                    </div>
                    
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '1.5rem', flexGrow: 1 }}>
                      {fruit.description}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Price: <span style={{ color: '#fff' }}>${fruit.priceBeli.toLocaleString()}</span> / <span style={{ color: '#74EE15' }}>{fruit.priceGems} Gems</span></p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2) !important; }
      `}</style>
      <Footer />
    </>
  );
}
