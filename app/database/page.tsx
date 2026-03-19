import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WikiCategories from '@/components/WikiCategories';

export default function DatabasePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>
            Sailor Piece <span style={{ color: '#4DEEEA' }}>Database</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            Select a category below to view detailed stats, requirements, and drop rates.
          </p>
          
          <WikiCategories />
        </div>
      </main>
      <Footer />
    </>
  );
}
