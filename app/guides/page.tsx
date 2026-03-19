import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuidesPage() {
  return (
    <div style={{ background: '#FAF9F6' }}>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '80vh', background: '#FAF9F6', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#111', marginBottom: '0.5rem', fontWeight: 800 }}>Sailor Piece Guides <span style={{ fontWeight: 400 }}>水手碎片指南</span></h1>
            <p style={{ color: '#555', fontSize: '1.2rem' }}>
              Step-by-step Sailor Piece tips, and tutorials for every stage of the game. Updated March 2026.<br/>
              <span style={{ fontSize: '1rem' }}>面向新手玩家的水手碎片分布指南。内容包括：种族介绍、水果介绍、0-250级升级指南、前两小时待办事项清单以及需要避免的常见错误。</span>
            </p>
          </div>

          <h2 style={{ fontSize: '2rem', color: '#111', marginBottom: '2rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Beginner Guides 新手指南</h2>

          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Guide Article 1 */}
            <article style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Beginner 初学者</span>
                <span style={{ color: '#888', fontSize: '0.9rem' }}>12 min read</span>
              </div>
              
              <h2 style={{ fontSize: '2rem', color: '#111', marginBottom: '1rem', marginTop: 0, lineHeight: 1.3 }}>
                Sailor Piece Beginner Guide — New Players Start Here<br/>
                <span style={{ fontSize: '1.5rem', color: '#444' }}>水手碎片新手指南——新玩家从这里开始</span>
              </h2>
              
              <div style={{ color: '#444', lineHeight: 1.8 }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Step-by-step Sailor Piece guide for new players. Learn races, fruits, leveling 0-250, first 2 hours checklist, and common mistakes to avoid.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                  面向新手玩家的《水手碎片》分步指南。内容包括：种族介绍、水果介绍、0-250级升级指南、前两小时待办事项清单以及需要避免的常见错误。
                </p>
                <a href="#" style={{ color: '#ea580c', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read Guide \u2192 阅读指南 \u2192
                </a>
              </div>
            </article>

            {/* Guide Article 2 */}
            <article style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ background: '#fef08a', color: '#854d0e', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Advanced 高级</span>
                <span style={{ color: '#888', fontSize: '0.9rem' }}>8 min read</span>
              </div>
              
              <h2 style={{ fontSize: '2rem', color: '#111', marginBottom: '1rem', marginTop: 0, lineHeight: 1.3 }}>
                How to Awaken Observation Haki (Kenbunshoku)<br/>
                <span style={{ fontSize: '1.5rem', color: '#444' }}>如何觉醒见闻色霸气（Kenbunshoku）</span>
              </h2>
              
              <div style={{ color: '#444', lineHeight: 1.8 }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Unlock the ability to dodge attacks automatically and see enemy levels through walls. Full quest line breakdown.
                </p>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                  解锁自动躲避攻击并透过墙壁看到敌人等级的能力。全任务线解析。
                </p>
                <a href="#" style={{ color: '#ea580c', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Read Guide \u2192 阅读指南 \u2192
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
