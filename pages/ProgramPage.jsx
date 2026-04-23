// Universidad CIES — Plantilla de programa: single-scroll (sin tabs)

const WA_NUM = '526644901395';

const ProgramPage = ({ program, onNavigate }) => {
  const waMsg = encodeURIComponent(`Hola, me interesa el programa de ${program.title} en Universidad CIES. ¿Me pueden dar más información?`);
  const waUrl = `https://wa.me/${WA_NUM}?text=${waMsg}`;

  return (
    <div>
      {/* ── Header ── */}
      <div style={ppS.header}>
        <div style={ppS.headerInner} className="pp-header-inner">
          <div style={ppS.breadcrumb}>
            <button style={ppS.breadBtn} onClick={() => onNavigate('home')}>Inicio</button>
            <span style={ppS.sep}>›</span>
            <button style={ppS.breadBtn} onClick={() => onNavigate(program.categoryPage)}>{program.categoryLabel}</button>
            <span style={ppS.sep}>›</span>
            <span style={ppS.breadCur}>{program.title}</span>
          </div>
          <div style={ppS.eyebrow} className="anim-hero-badge">{program.categoryLabel}</div>
          <div style={ppS.rvoeTag} className="anim-hero-badge">{program.clave}</div>
          <h1 style={ppS.title} className="anim-page-title">{program.title}</h1>
          <p style={ppS.sub} className="anim-page-sub">{program.subtitle}</p>
          <div style={ppS.metaRow} className="pp-meta-row">
            {program.meta.map((m, i) => (
              <div key={i} style={ppS.metaItem} className="pp-meta-item"><span>{m.icon}</span><span>{m.value}</span></div>
            ))}
          </div>
          <div style={ppS.actions}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={ppS.btnWa}>
              <WaIcon /> Solicitar información por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Body: main + sidebar ── */}
      <div style={ppS.body} className="pp-body">
        <div style={ppS.bodyInner} className="program-body-inner pp-body-inner">

          {/* Main column */}
          <div style={ppS.mainCol} className="pp-main-col">

            {/* 1. Plan de estudios */}
            <section style={ppS.section} id="plan" className="pp-section">
              <div style={ppS.sectionEyebrow}>Plan de estudios</div>
              <h2 style={ppS.h2}>{program.plan.duracion} · {program.plan.modalidad}</h2>
              <p style={ppS.bodyText}>Período {program.plan.periodo}. El programa está diseñado para que el egresado adquiera competencias teóricas y prácticas desde el primer cuatrimestre.</p>
              <div style={ppS.planGrid} className="pp-plan-grid">
                {program.plan.cuatrimestres.map((c, i) => (
                  <div key={i} style={ppS.cuatri}>
                    <div style={ppS.cuatriNum}>{c.num}</div>
                    <div style={ppS.cuatriMaterias}>
                      {c.materias.map((m, j) => <div key={j} style={ppS.materia}>· {m}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div style={ppS.divider} />

            {/* 2. Perfil de ingreso */}
            <section style={ppS.section} id="ingreso" className="pp-section">
              <div style={ppS.sectionEyebrow}>Perfil de ingreso</div>
              <h2 style={ppS.h2}>¿A quién va dirigida esta carrera?</h2>
              <p style={ppS.bodyText}>El aspirante a ingresar a este programa deberá contar con las siguientes características:</p>
              <ul style={ppS.list}>
                {program.perfilIngreso.map((item, i) => (
                  <li key={i} style={ppS.listItem}>
                    <div style={ppS.bullet} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div style={ppS.divider} />

            {/* 3. Por qué es importante */}
            <section style={ppS.section} id="importancia" className="pp-section">
              <div style={ppS.sectionEyebrow}>Relevancia</div>
              <h2 style={ppS.h2}>¿Por qué es importante esta carrera?</h2>
              <p style={ppS.bodyText}>{program.importancia.desc}</p>
              <div style={ppS.importanciaGrid} className="pp-imp-grid">
                {program.importancia.puntos.map((p, i) => (
                  <div key={i} style={ppS.importanciaCard}>
                    <div style={ppS.importanciaNum}>{String(i+1).padStart(2,'0')}</div>
                    <div style={ppS.importanciaText}>{p}</div>
                  </div>
                ))}
              </div>
            </section>

            <div style={ppS.divider} />

            {/* 4. Perfil de egreso */}
            <section style={ppS.section} id="egreso" className="pp-section">
              <div style={ppS.sectionEyebrow}>Perfil de egreso</div>
              <h2 style={ppS.h2}>Al graduarte, serás capaz de…</h2>
              <div style={ppS.egresoGrid} className="pp-egreso-grid">
                {program.perfilEgreso.map((item, i) => (
                  <div key={i} style={ppS.egresoCard}>
                    <div style={ppS.egresoCheck}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={ppS.egresoText}>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div style={ppS.divider} />

            {/* 5. Campo laboral */}
            <section style={ppS.section} id="campo" className="pp-section">
              <div style={ppS.sectionEyebrow}>Campo laboral</div>
              <h2 style={ppS.h2}>¿Dónde trabajan nuestros egresados?</h2>
              <p style={ppS.bodyText}>Los egresados de este programa pueden desempeñarse en:</p>
              <div style={ppS.campoGrid} className="pp-campo-grid">
                {program.campoLaboral.map((c, i) => (
                  <div key={i} style={ppS.campoCard}>
                    <div style={ppS.campoDot} />
                    <div>
                      <div style={ppS.campoTitle}>{c.sector}</div>
                      <div style={ppS.campoDesc}>{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div style={ppS.divider} />

            {/* 6. Por qué CIES */}
            <section style={ppS.section} id="cies" className="pp-section">
              <div style={ppS.sectionEyebrow}>¿Por qué CIES?</div>
              <h2 style={ppS.h2}>Lo que nos hace diferentes</h2>
              <div style={ppS.razonesGrid} className="pp-razones-grid">
                {program.porQueCIES.map((r, i) => (
                  <div key={i} style={ppS.razonCard}>
                    <div style={ppS.razonNum}>{String(i+1).padStart(2,'0')}</div>
                    <div style={ppS.razonTitle}>{r.title}</div>
                    <div style={ppS.razonDesc}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Banner */}
            <div style={ppS.ctaBanner} className="pp-cta-banner">
              <div>
                <div style={ppS.ctaBannerTitle}>¿Te interesa {program.title}?</div>
                <div style={ppS.ctaBannerSub}>Escríbenos por WhatsApp y te respondemos en minutos.</div>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={ppS.ctaBannerBtn}>
                <WaIcon /> Escribir por WhatsApp
              </a>
            </div>

          </div>{/* end mainCol */}

          {/* Sticky sidebar */}
          <aside style={ppS.sidebar}>
            <div style={ppS.sideCard}>
              <div style={ppS.sideTitle}>{program.title}</div>
              <div style={ppS.sideMetas}>
                {program.meta.map((m, i) => (
                  <div key={i} style={ppS.sideMeta}>
                    <span style={ppS.sideMetaLabel}>{m.label}</span>
                    <span style={ppS.sideMetaVal}>{m.value}</span>
                  </div>
                ))}
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={ppS.sideWa}>
                <WaIcon /> Solicitar información
              </a>
              <div style={ppS.sideNav}>
                <div style={ppS.sideNavTitle}>Contenido</div>
                {[['plan','Plan de estudios'],['ingreso','Perfil de ingreso'],['importancia','¿Por qué estudiarla?'],['egreso','Perfil de egreso'],['campo','Campo laboral'],['cies','Por qué CIES']].map(([id,label]) => (
                  <a key={id} href={`#${id}`} style={ppS.sideNavLink}>{label}</a>
                ))}
              </div>
              <div style={ppS.sideContact}>
                <div style={ppS.sideContactItem}>(664) 490-1395</div>
                <div style={ppS.sideContactItem}>Blvd. Federico Benítez 5, Tijuana B.C.</div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink:0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
);

const ppS = {
  header: { background:'#0F1E4A', padding:'52px 0 48px' },
  headerInner: { maxWidth:1200, margin:'0 auto', padding:'0 24px' },
  breadcrumb: { display:'flex', alignItems:'center', gap:6, marginBottom:20, flexWrap:'wrap' },
  breadBtn: { background:'none', border:'none', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.55)', cursor:'pointer', padding:0 },
  sep: { color:'rgba(255,255,255,0.3)', fontSize:13 },
  breadCur: { fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.85)' },
  eyebrow: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:4 },
  rvoeTag: { fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:800, color:'#C23535', marginBottom:10, letterSpacing:'0.03em' },
  title: { fontFamily:"'Varsity Impact',serif", fontSize:'clamp(32px,5vw,56px)', fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.05, marginBottom:12 },
  sub: { fontFamily:"'Figtree',sans-serif", fontSize:16, color:'rgba(255,255,255,0.7)', lineHeight:1.65, maxWidth:640, marginBottom:20 },
  metaRow: { display:'flex', gap:20, flexWrap:'wrap', marginBottom:28 },
  metaItem: { display:'flex', alignItems:'center', gap:7, fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.75)' },
  actions: { display:'flex', gap:12, flexWrap:'wrap' },
  btnWa: { background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:15, padding:'13px 24px', borderRadius:4, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 },
  body: { background:'#F5F5F5', padding:'48px 0 80px' },
  bodyInner: { maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 300px', gap:32, alignItems:'flex-start' },
  mainCol: { display:'flex', flexDirection:'column', gap:0 },
  sidebar: {},
  section: { background:'#fff', borderRadius:8, padding:'36px 32px', boxShadow:'0 2px 12px rgba(0,0,0,0.07)', marginBottom:20 },
  divider: { height:0 },
  sectionEyebrow: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#C23535', marginBottom:8 },
  h2: { fontFamily:"'Varsity Impact',serif", fontSize:'clamp(22px,3vw,30px)', fontWeight:700, color:'#1A1A1A', marginBottom:12 },
  bodyText: { fontFamily:"'Figtree',sans-serif", fontSize:15, color:'#5A5A5A', lineHeight:1.7, marginBottom:24 },
  planGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:14 },
  cuatri: { border:'1px solid #E8E8E8', borderRadius:8, overflow:'hidden' },
  cuatriNum: { background:'#0F1E4A', color:'#fff', fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', padding:'9px 14px' },
  cuatriMaterias: { padding:'12px 14px', display:'flex', flexDirection:'column', gap:5 },
  materia: { fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#3D3D3D', lineHeight:1.4 },
  list: { paddingLeft:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 },
  listItem: { display:'flex', alignItems:'flex-start', gap:12, fontFamily:"'Figtree',sans-serif", fontSize:15, color:'#3D3D3D', lineHeight:1.55 },
  bullet: { width:8, height:8, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:6 },
  importanciaGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 },
  importanciaCard: { background:'#F0F4FF', borderRadius:8, padding:'20px 18px' },
  importanciaNum: { fontFamily:"'Varsity Impact',serif", fontSize:28, fontWeight:800, color:'#2B4DA8', lineHeight:1, marginBottom:8 },
  importanciaText: { fontFamily:"'Figtree',sans-serif", fontSize:14, color:'#3D3D3D', lineHeight:1.6 },
  egresoGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:12 },
  egresoCard: { display:'flex', alignItems:'flex-start', gap:12, background:'#F5F5F5', borderRadius:8, padding:'14px 16px' },
  egresoCheck: { width:24, height:24, background:'#2B4DA8', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  egresoText: { fontFamily:"'Figtree',sans-serif", fontSize:14, color:'#3D3D3D', lineHeight:1.55 },
  campoGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:14 },
  campoCard: { background:'#F5F5F5', borderRadius:8, padding:'18px', display:'flex', gap:12, alignItems:'flex-start' },
  campoDot: { width:8, height:8, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:5 },
  campoTitle: { fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:700, color:'#1A1A1A', marginBottom:4 },
  campoDesc: { fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A', lineHeight:1.5 },
  razonesGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16 },
  razonCard: { background:'#F5F5F5', borderRadius:8, padding:'22px 18px' },
  razonNum: { fontFamily:"'Varsity Impact',serif", fontSize:26, fontWeight:800, color:'#C23535', lineHeight:1, marginBottom:8 },
  razonTitle: { fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:700, color:'#1A1A1A', marginBottom:5 },
  razonDesc: { fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A', lineHeight:1.55 },
  ctaBanner: { background:'#0F1E4A', borderRadius:8, padding:'32px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:20, flexWrap:'wrap', marginTop:8 },
  ctaBannerTitle: { fontFamily:"'Varsity Impact',serif", fontSize:24, fontWeight:800, color:'#fff', textTransform:'uppercase', marginBottom:6 },
  ctaBannerSub: { fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.7)' },
  ctaBannerBtn: { background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:15, padding:'13px 24px', borderRadius:4, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, flexShrink:0 },
  sideCard: { background:'#fff', borderRadius:8, boxShadow:'0 2px 12px rgba(0,0,0,0.08)', padding:'22px', position:'sticky', top:88 },
  sideTitle: { fontFamily:"'Varsity Impact',serif", fontSize:18, fontWeight:700, color:'#1A1A1A', marginBottom:14, lineHeight:1.2 },
  sideMetas: { display:'flex', flexDirection:'column', borderTop:'1px solid #F0F0F0', borderBottom:'1px solid #F0F0F0', marginBottom:16 },
  sideMeta: { display:'flex', justifyContent:'space-between', padding:'9px 0', borderBottom:'1px solid #F8F8F8' },
  sideMetaLabel: { fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A' },
  sideMetaVal: { fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:600, color:'#1A1A1A', textAlign:'right', maxWidth:130 },
  sideWa: { width:'100%', background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:13, padding:'11px 0', borderRadius:4, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:8, marginBottom:16, boxSizing:'border-box' },
  sideNav: { borderTop:'1px solid #F0F0F0', paddingTop:14, marginBottom:16 },
  sideNavTitle: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'#8A8A8A', marginBottom:8 },
  sideNavLink: { display:'block', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A', padding:'5px 0', textDecoration:'none', borderBottom:'1px solid #F8F8F8', transition:'color 0.15s' },
  sideContact: { borderTop:'1px solid #F0F0F0', paddingTop:12, display:'flex', flexDirection:'column', gap:5 },
  sideContactItem: { fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A' },
};

Object.assign(window, { ProgramPage });
