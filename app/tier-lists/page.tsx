import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TierListSection from '@/components/TierListSection';

export default function TierListsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>
            Comprehensive <span style={{ color: '#FFE700' }}>Tier Lists</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            The official community-voted meta for everything in Sailor Piece.
          </p>
          
          <TierListSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
