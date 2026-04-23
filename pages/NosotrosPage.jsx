// Universidad CIES — Nosotros Page

const NosotrosPage = ({ onNavigate }) => (
  <div>
    <PageHeader
      breadcrumb={[{ label: 'Nosotros' }]}
      eyebrow="Quiénes somos"
      title="30 años formando líderes"
      subtitle="Somos la universidad más dinámica de Tijuana, con tres niveles educativos, ocho programas universitarios y una comunidad de más de 3,000 egresados exitosos."
      onNavigate={onNavigate}
    />

    {/* Misión / Visión / Valores */}
    <section style={nsS.mvsSection}>
      <div style={nsS.inner}>
        <div style={nsS.mvsGrid}>
          <div style={nsS.mvsCard}>
            <div style={nsS.mvsIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B4DA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 style={nsS.mvsTitle}>Misión</h3>
            <p style={nsS.mvsText}>Formar profesionistas íntegros, competitivos y socialmente responsables mediante programas académicos de calidad, vinculados con el sector productivo, que contribuyan al desarrollo regional y nacional.</p>
          </div>
          <div style={nsS.mvsCard}>
            <div style={nsS.mvsIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B4DA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 style={nsS.mvsTitle}>Visión</h3>
            <p style={nsS.mvsText}>Ser reconocida como la institución de educación superior líder en la región fronteriza México-Estados Unidos, por la excelencia académica de sus programas, la innovación educativa y el impacto de sus egresados en la sociedad.</p>
          </div>
          <div style={nsS.mvsCard}>
            <div style={nsS.mvsIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2B4DA8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={nsS.mvsTitle}>Valores</h3>
            <p style={nsS.mvsText}>Excelencia académica · Integridad y ética profesional · Compromiso social · Innovación continua · Respeto a la diversidad · Responsabilidad y disciplina · Vinculación con la industria.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Niveles educativos */}
    <section style={nsS.historiaSection}>
      <div style={nsS.inner}>
        <div style={nsS.eyebrow}>Tres niveles educativos</div>
        <h2 style={nsS.h2}>Una institución, toda tu trayectoria</h2>
        <p style={{ ...nsS.body, marginBottom: 36 }}>Desde la preparatoria hasta el posgrado, CIES acompaña tu desarrollo profesional en cada etapa, con programas de calidad, docentes en activo y certificaciones con validez ante la SEP.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="mvs-grid">
          {[
            { color:'#0F1E4A', nivel:'Preparatoria', desc:'Bachillerato General (3 años) y Modalidad a Dos Años. Certificado con validez ante la SEP.', items:['Bachillerato General','Modalidad a Dos Años'] },
            { color:'#2B4DA8', nivel:'Universidad', desc:'4 licenciaturas y 4 ingenierías con RVOE SEP. Enfoque práctico y docentes en activo.', items:['Derecho','Comercio Exterior','Administración','Robótica','IA','Mecatrónica','Ing. Industrial','Ciencias de la Educación'] },
            { color:'#C23535', nivel:'Posgrado', desc:'MBA y Maestría en Innovación Educativa. Modalidad ejecutiva: viernes y sábados.', items:['MBA Ejecutivo','Maestría en Innovación Educativa'] },
          ].map((n, i) => (
            <div key={i} style={{ background: n.color, borderRadius: 10, padding: '28px 24px' }}>
              <div style={{ fontFamily:"'Varsity Impact',serif", fontSize:28, fontWeight:800, color:'#fff', textTransform:'uppercase', marginBottom:12 }}>{n.nivel}</div>
              <p style={{ fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.75)', lineHeight:1.65, marginBottom:16 }}>{n.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {n.items.map((item, j) => (
                  <span key={j} style={{ background:'rgba(255,255,255,0.15)', fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:600, color:'#fff', padding:'3px 9px', borderRadius:3 }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Números */}
    <section style={nsS.numSection}>
      <div style={nsS.inner}>
        <div style={nsS.numGrid} className="num-grid">
          {[
            { num: '+30', label: 'años de trayectoria' },
            { num: '+3,000', label: 'egresados exitosos' },
            { num: '8', label: 'licenciaturas e ingenierías' },
            { num: '2', label: 'modalidades de preparatoria' },
            { num: '2', label: 'maestrías ejecutivas' },
            { num: '100%', label: 'RVOE ante SEP' },
          ].map((n, i) => (
            <div key={i} style={nsS.numItem}>
              <div style={nsS.numVal}>{n.num}</div>
              <div style={nsS.numLabel}>{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={nsS.ctaSection}>
      <div style={nsS.inner}>
        <div style={nsS.ctaBox}>
          <h2 style={nsS.ctaTitle}>¿Quieres ser parte de la comunidad CIES?</h2>
          <p style={nsS.ctaSub}>Solicita información sobre nuestros programas y agenda una visita a campus.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button style={nsS.ctaBtn} onClick={() => onNavigate('admisiones')}>Solicitar información</button>
            <button style={nsS.ctaBtnOutline} onClick={() => onNavigate('home')}>Ver oferta académica</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const nsS = {
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  eyebrow: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 10 },
  h2: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 20 },
  body: { fontFamily: "'Figtree',sans-serif", fontSize: 16, color: '#5A5A5A', lineHeight: 1.7 },
  mvsSection: { background: '#fff', padding: '80px 0' },
  mvsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 },
  mvsCard: { background: '#F5F5F5', borderRadius: 8, padding: '32px 28px' },
  mvsIcon: { width: 52, height: 52, background: '#E8EDF8', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  mvsTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 22, fontWeight: 700, color: '#1A1A1A', marginBottom: 12 },
  mvsText: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#5A5A5A', lineHeight: 1.7 },
  historiaSection: { background: '#F5F5F5', padding: '80px 0' },
  timeline: { display: 'flex', flexDirection: 'column', gap: 0 },
  timelineItem: { display: 'grid', gridTemplateColumns: '60px 20px 1fr', gap: '0 16px', alignItems: 'flex-start', paddingBottom: 24, position: 'relative' },
  timelineYear: { fontFamily: "'Varsity Impact',serif", fontSize: 16, fontWeight: 700, color: '#2B4DA8', paddingTop: 2 },
  timelineDot: { width: 10, height: 10, borderRadius: '50%', background: '#C23535', marginTop: 4, flexShrink: 0, justifySelf: 'center' },
  timelineText: { fontFamily: "'Figtree',sans-serif", fontSize: 14, color: '#5A5A5A', lineHeight: 1.55 },
  numSection: { background: '#0F1E4A', padding: '64px 0' },
  numGrid: { display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, borderRadius: 0 },
  numItem: { textAlign: 'center', padding: '20px 16px', borderRight: '1px solid rgba(255,255,255,0.08)' },
  numVal: { fontFamily: "'Varsity Impact',serif", fontSize: 38, fontWeight: 800, color: '#fff', lineHeight: 1 },
  numLabel: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6 },
  ctaSection: { background: '#fff', padding: '80px 0' },
  ctaBox: { background: '#F5F5F5', borderRadius: 12, padding: '52px 48px', textAlign: 'center' },
  ctaTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 12 },
  ctaSub: { fontFamily: "'Figtree',sans-serif", fontSize: 16, color: '#5A5A5A', marginBottom: 32, lineHeight: 1.6 },
  ctaBtn: { background: '#C23535', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 4, border: 'none', cursor: 'pointer' },
  ctaBtnOutline: { background: 'transparent', color: '#2B4DA8', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 30px', borderRadius: 4, border: '2px solid #2B4DA8', cursor: 'pointer' },
};

Object.assign(window, { NosotrosPage });
