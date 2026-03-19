import Header from '@/components/Header';
import Footer from '@/components/Footer';
import accessoriesData from '@/data/accessories.json';
import Image from 'next/image';

export default function AccessoriesDatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem' }}>Accessories Database</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>Find the best gear to max out your damage output and survivability.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', paddingBottom: '4rem' }}>
            {accessoriesData.map(acc => (
              <div key={acc.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }} className="hover-card">
                
                <div style={{ height: '250px', width: '100%', position: 'relative', background: 'radial-gradient(circle, rgba(77, 238, 234, 0.1) 0%, rgba(0,0,0,0.8) 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {acc.imageUrl ? (
                    <Image src={acc.imageUrl} alt={acc.name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.2)' }}>Accessory Image Unavailable</div>
                  )}
                  <span style={{ 
                    position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
                    background: acc.tier === 'Mythical' ? '#FF007F' : acc.tier === 'Legendary' ? '#FFE700' : 'rgba(255,255,255,0.1)', 
                    color: acc.tier === 'Mythical' ? '#fff' : acc.tier === 'Legendary' ? '#000' : '#fff', 
                    padding: '0.3rem 0.6rem', 
                    borderRadius: '4px', 
                    fontWeight: 'bold',
                    fontSize: '0.8rem'
                  }}>
                    {acc.tier}
                  </span>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0 0 1rem 0' }}>{acc.name}</h2>
                  
                  <div style={{ padding: '1rem', background: 'rgba(77, 238, 234, 0.05)', borderLeft: '3px solid #4DEEEA', borderRadius: '4px', marginBottom: '1.5rem', flexGrow: 1 }}>
                    <p style={{ color: '#fff', lineHeight: 1.5, fontSize: '0.95rem', margin: 0 }}>{acc.buff}</p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', margin: 0 }}>Drops from: <span style={{ color: '#EF4444' }}>{acc.dropFrom}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .hover-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(77, 238, 234, 0.1); }
      `}</style>
      <Footer />
    </>
  );
}
