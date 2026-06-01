'use client'
import Image from 'next/image'

const modules = [
  { icon: '🔍', name: 'Abuse Investigation', desc: 'AI-guided investigation workflows meeting federal and state requirements. Structured timelines, documentation checklists, and reporting templates.', status: 'Core Module' },
  { icon: '📋', name: 'Incident Reporting', desc: 'Automated incident report generation with regulatory routing — QAPI, state agency, and internal stakeholder notifications.', status: 'Core Module' },
  { icon: '👥', name: 'Staffing Intelligence', desc: 'AI-powered staffing gap analysis, census forecasting, and agency management recommendations for optimal nurse-to-resident ratios.', status: 'Core Module' },
  { icon: '📊', name: 'Clinical QA', desc: 'Quality assurance dashboards, survey-readiness scoring, and proactive risk identification across your resident population.', status: 'Core Module' },
  { icon: '✅', name: 'Policy Compliance', desc: 'Real-time policy compliance monitoring against CMS, state, and accreditation standards with corrective action planning.', status: 'Core Module' },
  { icon: '🗓️', name: 'Leadership Workflow', desc: 'Daily stand-up templates, care conference preparation, and shift change briefings — AI-structured for nursing leadership efficiency.', status: 'Core Module' },
]

const stats: [string, string][] = [
  ['27+', 'Years LTC experience'],
  ['6', 'Command modules'],
  ['CMS', 'Standards built-in'],
  ['MVP', 'Fully deployed'],
]

const navLinks = ['Modules', 'About', 'Demo', 'Contact']
const marqueeItems = ['Abuse Investigations', 'Incident Reporting', 'Staffing Intelligence', 'Clinical QA', 'CMS Compliance', 'Survey Readiness', 'Leadership Workflows', 'QAPI Automation']

export default function Page() {
  return (
    <main style={{ fontFamily: 'system-ui,sans-serif', background: '#FDFAF5' }}>
      <style>{`
        :root {
          --amber:#BA7517; --amber-mid:#EF9F27; --amber-light:#FAEEDA;
          --navy:#0A2028; --navy-mid:#1A3A48;
          --teal:#0F6E56; --teal-light:#E1F5EE;
          --cream:#FDFAF5; --white:#FFFFFF;
          --text-dark:#0A2028; --text-mid:#2A4A3A; --text-muted:#6B8A7A;
          --border:#D5E8DC;
        }
        .mod-card { background:#fff; border-radius:16px; padding:28px; border:1px solid var(--border); transition:all .2s; cursor:default; box-shadow:0 2px 12px rgba(10,32,40,.04); }
        .mod-card:hover { border-color:var(--amber); transform:translateY(-3px); box-shadow:0 8px 32px rgba(186,117,23,.1); }
        .nav-link { font-size:13px; color:var(--text-muted); text-decoration:none; font-weight:500; }
        .nav-link:hover { color:var(--amber); }
      `}</style>

      {/* NAV — glass blur */}
      <nav style={{
        background: 'rgba(253,250,245,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(213,232,220,0.6)',
        padding: '0 5%',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 1px 24px rgba(10,32,40,.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', background: 'var(--navy)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'var(--amber-mid)', fontFamily: 'Georgia,serif', letterSpacing: '-.02em' }}>NOC</div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: '15px', fontWeight: 700, color: 'var(--navy)' }}>NOCAiS<span style={{ color: 'var(--amber)' }}>™</span></div>
        </div>
        <div style={{ display: 'flex', gap: '28px' }}>
          {navLinks.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>)}
        </div>
        <button style={{ background: 'var(--amber)', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 16px rgba(186,117,23,.25)' }}>
          Request Demo
        </button>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg,#0A2028 0%,#1A3A48 60%,#0F6E56 100%)', padding: '80px 5% 96px', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '48px', alignItems: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(186,117,23,.2)', border: '1px solid rgba(186,117,23,.4)', borderRadius: '20px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, color: '#FAC775', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '24px' }}>
              <span style={{ width: '7px', height: '7px', background: '#FAC775', borderRadius: '50%', display: 'inline-block' }} />
              LTC Nursing Leadership Platform
            </div>
            <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 700, lineHeight: 1.08, marginBottom: '20px' }}>
              Command Your<br />
              <span style={{ color: '#FAC775', fontStyle: 'italic' }}>Clinical Operations</span><br />
              With AI
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,.75)', lineHeight: 1.75, marginBottom: '12px', maxWidth: '500px' }}>
              NOCAiS™ is the Nursing Operations Command AI System — purpose-built for LTC nursing leadership to manage investigations, incidents, staffing, and compliance with clinical precision.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.5)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '480px' }}>
              Built against real LTC standards. Validated against actual abuse investigation protocols. Designed by a nurse leader with 27 years of LTC and survey experience.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button style={{ background: 'var(--amber)', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 20px rgba(186,117,23,.3)' }}>Request a Demo</button>
              <button style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.3)', padding: '14px 32px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>View Modules</button>
            </div>
          </div>

          {/* HERO PHOTO — better crop */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative', background: 'rgba(255,255,255,.08)' }}>
              <Image
                src="/images/founder.jpg"
                alt="Leonilla Addeh — LTC nursing operations expert"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
              />
            </div>
            {/* KEEP: CMS standards card only */}
            <div style={{ position: 'absolute', top: '24px', right: '-16px', background: '#fff', borderRadius: '12px', padding: '12px 18px', boxShadow: '0 8px 32px rgba(0,0,0,.15)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '4px' }}>Clinical Validation</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>Built to CMS standards</div>
              <div style={{ fontSize: '11px', color: 'var(--teal)', fontWeight: 600, marginTop: '2px' }}>✓ Survey-ready</div>
            </div>
            {/* REMOVED: "Fully Deployed" badge — per brand feedback */}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: 'var(--amber)', padding: '13px 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} style={{ fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '.1em', textTransform: 'uppercase', padding: '0 28px', opacity: .9 }}>
              {t} <span style={{ color: 'rgba(255,255,255,.4)' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section style={{ padding: '72px 5%', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: '8px' }}>The Impact</p>
          <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, color: 'var(--navy)' }}>Built from 27 years on the LTC front line</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
          {stats.map(([n, d]) => (
            <div key={n} style={{ textAlign: 'center', padding: '28px 16px', background: '#FAEEDA', borderRadius: '14px', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: '40px', fontWeight: 700, color: 'var(--amber)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 500 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={{ padding: '72px 5%', background: '#FDFAF5' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: '8px' }}>Command Modules</p>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
          Every critical function of<br /><span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>LTC nursing leadership — automated</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-mid)', maxWidth: '520px', marginBottom: '48px', lineHeight: 1.7 }}>
          NOCAiS™ does not just organize your workflows. It guides you through them with clinical intelligence built on real LTC standards.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '18px' }}>
          {modules.map(m => (
            <div key={m.name} className="mod-card">
              <div style={{ fontSize: '24px', marginBottom: '12px' }}>{m.icon}</div>
              <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '17px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>{m.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.65, marginBottom: '12px' }}>{m.desc}</p>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--amber)', background: 'rgba(186,117,23,.1)', padding: '4px 10px', borderRadius: '10px' }}>{m.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '72px 5%', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '64px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: '8px' }}>Why NOCAiS Exists</p>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700, color: 'var(--navy)', marginBottom: '20px' }}>
              Built by a nurse leader who has<br /><span style={{ color: 'var(--amber)', fontStyle: 'italic' }}>been in the hot seat</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '16px' }}>
              Abuse investigations. QAPI meetings. State surveys. Staffing emergencies. Leonilla Addeh has navigated every one of them — and built NOCAiS™ so nursing leaders never have to navigate them without intelligent support.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: '28px' }}>
              Every piece of logic in NOCAiS was validated against real LTC operations — corrected against actual investigation timelines, reporting rules, and output standards that surveyors expect.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[['27 yrs', 'LTC & home health leadership'], ['MVP', 'Fully deployed & tested'], ['CMS', 'Compliant standards built-in'], ['Survey', 'Ready documentation output']].map(([n, d]) => (
                <div key={n} style={{ padding: '14px 16px', background: '#FDFAF5', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'Georgia,serif', fontSize: '20px', fontWeight: 700, color: 'var(--amber)', lineHeight: 1, marginBottom: '4px' }}>{n}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
          {/* ABOUT PHOTO — better crop */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative', background: '#e8f0e8', boxShadow: '0 20px 60px rgba(10,32,40,.12)' }}>
              <Image
                src="/images/founder-working.jpg"
                alt="Leonilla Addeh — NOCAiS creator, LTC nursing leader"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 8%' }}
              />
            </div>
            <div style={{ position: 'absolute', top: '20px', right: '-14px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px 16px', fontSize: '12px', fontWeight: 700, color: 'var(--navy)', boxShadow: '0 4px 20px rgba(10,32,40,.1)' }}>
              RN, MSN-Ed <span style={{ color: 'var(--amber)' }}>· 27 Yrs LTC</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#0A2028,#0F6E56)', padding: '80px 5%', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 700, marginBottom: '14px' }}>
          Lead with intelligence.<br />Protect your facility.
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.65)', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.75 }}>
          NOCAiS™ gives LTC nursing leaders the AI command system to handle investigations, incidents, and compliance — without the chaos.
        </p>
        <button style={{ background: 'var(--amber)', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 6px 24px rgba(186,117,23,.35)' }}>
          Request a Demo
        </button>
      </section>

      <footer style={{ background: '#060F14', padding: '32px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ fontFamily: 'Georgia,serif', fontSize: '15px', fontWeight: 700, color: '#fff' }}>NOCAiS™</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.3)' }}>A Limitless Healthcare AI™ Platform · © 2026</div>
      </footer>
    </main>
  )
}
