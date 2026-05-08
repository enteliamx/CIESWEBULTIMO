// Universidad CIES — Homepage

const HomePage = ({ onNavigate }) => {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <StatsBar />
      <ProgramsGrid onNavigate={onNavigate} />
      <NivelesSection onNavigate={onNavigate} />
      <ModeloEducativo />
      <TestimoniosSection />
      <MapaSection />
      <ContactoStrip onNavigate={onNavigate} />
    </div>
  );
};

// ── Hero ───────────────────────────────────────────────
const HeroSection = ({ onNavigate }) => (
  <section style={hpS.hero}>
    <div style={hpS.heroOverlay} />
    <div style={hpS.heroInner} className="hero-inner">
      <div style={hpS.heroBadge} className="anim-hero-badge">Universidad CIES · Tijuana, Baja California, México</div>
      <h1 style={hpS.heroTitle} className="anim-hero-title">Tu futuro<br/>comienza aquí</h1>
      <p style={hpS.heroSub} className="anim-hero-sub">
        Más de 30 años formando profesionistas exitosos. Licenciaturas, ingenierías, maestrías y preparatoria incorporada al COBACH. Educación práctica para el mundo real.
      </p>
      <div style={hpS.heroActions} className="anim-hero-actions">
        <button style={hpS.btnPrimary} onClick={() => onNavigate('admisiones')}>Inscríbete ahora</button>
        <button style={hpS.btnSecondary} onClick={() => onNavigate('nosotros')}>Conoce más</button>
      </div>
    </div>
    <div style={hpS.heroDecor} />
  </section>
);

// ── Stats bar ───────────────────────────────────────────
const StatsBar = () => {
  const stats = [
    { num: '+30', label: 'años de trayectoria' },
    { num: '+3,000', label: 'egresados exitosos' },
    { num: '8', label: 'licenciaturas e ingenierías' },
    { num: '2', label: 'modalidades de preparatoria' },
    { num: '2', label: 'maestrías ejecutivas' },
    { num: '100%', label: 'RVOE ante SEP' },
  ];
  return (
    <div style={hpS.statsBar} className="stats-bar">
      {stats.map((s, i) => (
        <React.Fragment key={i}>
          <div style={hpS.statItem} className="stat-item">
            <div style={hpS.statNum}>{s.num}</div>
            <div style={hpS.statLabel}>{s.label}</div>
          </div>
          {i < stats.length - 1 && <div style={hpS.statDiv} className="stat-div" />}
        </React.Fragment>
      ))}
    </div>
  );
};

// ── Programs grid ───────────────────────────────────────
const homePrograms = [
  { cat: 'Licenciatura', title: 'Derecho', clave: 'RVOE-BC-021-M2/12', color: '#2B4DA8', page: 'lic-derecho', desc: 'Formación jurídica sólida con enfoque en derecho penal, civil y comercial en el contexto fronterizo.' },
  { cat: 'Licenciatura', title: 'Comercio Exterior', clave: 'RVOE-BC-L008-M2/23', color: '#2B4DA8', page: 'lic-comercio', desc: 'Domina los mercados internacionales y la logística global desde la frontera más activa del mundo.' },
  { cat: 'Licenciatura', title: 'Administración de Empresas', clave: 'RVOE-BC-L015-M2/23', color: '#2B4DA8', page: 'lic-administracion', desc: 'Lidera organizaciones con visión estratégica, gestión financiera y habilidades de emprendimiento.' },
  { cat: 'Ingeniería', title: 'Robótica', clave: 'RVOE-BC-070-M2/15', color: '#0F1E4A', page: 'ing-robotica', desc: 'Diseña y programa sistemas robóticos para la industria manufacturera y de alta tecnología.' },
  { cat: 'Ingeniería', title: 'Inteligencia Artificial', clave: 'RVOE-BC-070-M2/15', color: '#0F1E4A', page: 'ing-ia', desc: 'Machine learning, visión artificial y redes neuronales para las industrias tecnológicas de Tijuana.', clave: 'RVOE-BC-L040-M2/25' },
  { cat: 'Ingeniería', title: 'Mecatrónica', clave: 'RVOE-BC-L039-M2/25', color: '#0F1E4A', page: 'ing-mecatronica', desc: 'Integra mecánica, electrónica e informática para crear sistemas automatizados de alto valor.' },
  { cat: 'Posgrado', title: 'MBA', clave: 'RVOE-BC-M001-M2/26', color: '#C23535', page: 'mba', desc: 'Potencia tu carrera directiva con liderazgo, finanzas y estrategia empresarial global.' },
  { cat: 'Preparatoria', title: 'Preparatoria CIES', clave: 'RVOE CBBC-406/94-1', color: '#3D3D3D', page: 'preparatoria', desc: 'Incorporada al sistema COBACH. Modalidad escolarizada y modalidad 2 años para adultos.' },
];

const ProgramsGrid = ({ onNavigate }) => {
  const [hover, setHover] = React.useState(null);
  return (
    <section style={hpS.programsSec}>
      <div style={hpS.inner}>
        <div style={hpS.sectionHead}>
          <div style={hpS.eyebrow}>Lo que ofrecemos</div>
          <h2 style={hpS.sectionTitle}>Oferta académica</h2>
          <p style={hpS.sectionSub}>Programas diseñados para la economía del siglo XXI, con docentes activos en la industria y enfoque en empleabilidad real.</p>
        </div>
        <div style={hpS.grid} className="programs-grid">
          {homePrograms.map((p, i) => (
            <a key={i}
              href={window.CIES_NAV ? window.CIES_NAV[p.page] : '#'}
              style={{ ...hpS.card, ...(hover === i ? hpS.cardHover : {}), textDecoration:'none', color:'inherit', display:'block' }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div style={{ ...hpS.cardAccent, background: p.color }} />
              <div style={hpS.cardBody}>
                <div style={hpS.cardCat}>{p.cat} · {p.clave}</div>
                <div style={hpS.cardTitle}>{p.title}</div>
                <div style={hpS.cardDesc}>{p.desc}</div>
                <div style={{ ...hpS.cardLink, color: p.color }}>Ver programa →</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button style={hpS.allBtn} onClick={() => onNavigate('admisiones')}>Solicitar información de admisiones</button>
        </div>
      </div>
    </section>
  );
};

// ── Tres niveles educativos ─────────────────────────────
const NivelesSection = ({ onNavigate }) => {
  const niveles = [
    {
      nivel: 'Preparatoria', icon: '◉',
      desc: 'Bachillerato General y Modalidad a Dos Años. Certificado con validez oficial ante la SEP.',
      programas: ['Bachillerato General', 'Modalidad a Dos Años'],
      color: '#2B4DA8', page: 'preparatoria',
    },
    {
      nivel: 'Licenciaturas', icon: '◉',
      desc: '4 licenciaturas con RVOE SEP. Derecho, Comercio Exterior, Administración y Educación.',
      programas: ['Derecho', 'Comercio Exterior', 'Administración', 'Ciencias de la Educación'],
      color: '#0F1E4A', page: 'licenciaturas',
    },
    {
      nivel: 'Ingenierías', icon: '◉',
      desc: '4 ingenierías con RVOE SEP. Robótica, IA, Mecatrónica e Industrial. Industria 4.0.',
      programas: ['Robótica', 'Inteligencia Artificial', 'Mecatrónica', 'Ing. Industrial'],
      color: '#0F3A6B', page: 'ingenierias',
    },
    {
      nivel: 'Posgrado', icon: '◉',
      desc: 'MBA y Maestría en Innovación Educativa. Modalidad ejecutiva: viernes y sábados.',
      programas: ['MBA Ejecutivo', 'Maestría en Innovación Educativa'],
      color: '#C23535', page: 'maestrias',
    },
  ];
  return (
    <section style={{ background: '#fff', padding: '72px 0', borderTop: '1px solid #F0F0F0' }}>
      <div style={hpS.inner}>
        <div style={hpS.sectionHead}>
          <div style={hpS.eyebrow}>Tres niveles educativos</div>
          <h2 style={hpS.sectionTitle}>Una institución, toda tu trayectoria</h2>
          <p style={hpS.sectionSub}>Desde la preparatoria hasta el posgrado, CIES acompaña tu desarrollo profesional en cada etapa.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="niveles-grid">
          {niveles.map((n, i) => (
            <div key={i} style={{ background: n.color, borderRadius: 10, padding: '36px 28px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onClick={() => onNavigate(n.page)}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 10px 32px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:10 }}>Nivel</div>
              <div style={{ fontFamily:"'Varsity Impact',serif", fontSize:34, fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.05, marginBottom:14 }}>{n.nivel}</div>
              <p style={{ fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.78)', lineHeight:1.65, marginBottom:20 }}>{n.desc}</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {n.programas.map((p, j) => (
                  <span key={j} style={{ background:'rgba(255,255,255,0.15)', fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:600, color:'#fff', padding:'4px 10px', borderRadius:3 }}>{p}</span>
                ))}
              </div>
              <div style={{ marginTop:24, fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:700, color:'rgba(255,255,255,0.9)' }}>Ver programas →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Modelo educativo ────────────────────────────────────
const ModeloEducativo = () => {
  const pilares = [
    { icon: '◈', title: 'Docentes en activo', desc: 'Todos nuestros profesores ejercen su profesión. Aprendes con quien lo vive.' },
    { icon: '◈', title: 'Enfoque práctico', desc: 'Laboratorios, simulaciones y proyectos reales desde el primer cuatrimestre.' },
    { icon: '◈', title: 'Bolsa de trabajo', desc: 'Red de más de 200 empresas aliadas en Tijuana, Mexicali y San Diego.' },
    { icon: '◈', title: 'Horarios flexibles', desc: 'Turno matutino, vespertino y modalidad ejecutiva para quienes trabajan.' },
    { icon: '◈', title: 'Precio accesible', desc: 'Colegiaturas competitivas y planes de pago sin intereses. Becas disponibles.' },
    { icon: '◈', title: 'RVOE oficial', desc: 'Programas con reconocimiento de validez oficial ante la SEP.' },
  ];
  return (
    <section style={hpS.modeloSec}>
      <div style={hpS.inner}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="model-grid">
          <div>
            <div style={hpS.eyebrow}>Nuestro modelo</div>
            <h2 style={{ ...hpS.sectionTitle, textAlign: 'left', color: '#fff' }}>Por qué elegir CIES</h2>
            <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: 16, marginBottom: 40 }}>
              Somos la universidad con mayor enfoque en el mercado laboral de Tijuana. No teorizamos: preparamos a nuestros estudiantes para que consigan trabajo antes de graduarse.
            </p>
            <div style={hpS.pilares} className="pilares-grid">
              {pilares.map((p, i) => (
                <div key={i} style={hpS.pilar}>
                  <div style={hpS.pilarIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C23535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <div style={hpS.pilarTitle}>{p.title}</div>
                    <div style={hpS.pilarDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={hpS.modeloCard}>
            <div style={hpS.modeloCardInner}>
              <img src={(window.CIES_BASE ? window.CIES_BASE + '/' : '') + 'assets/LOGO_UNI_CIES_6.png'} alt="CIES" style={{ height: 80, objectFit: 'contain', marginBottom: 24 }} />
              <div style={hpS.modeloStat}>+30 años</div>
              <div style={hpS.modeloStatLabel}>formando líderes en Tijuana</div>
              <div style={hpS.modeloDivider} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[['8', 'lic. e ing.'], ['+3,000', 'egresados'], ['2', 'maestrías'], ['100%', 'RVOE SEP']].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Varsity Impact',serif", fontSize: 28, fontWeight: 800, color: '#2B4DA8' }}>{n}</div>
                    <div style={{ fontFamily: "'Figtree',sans-serif", fontSize: 12, color: '#8A8A8A', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Testimonios ─────────────────────────────────────────
const TestimoniosSection = () => {
  const testimonios = [
    { name: 'Alejandro Torres', prog: 'Ing. en Robótica — Generación 2022', text: 'Conseguí trabajo en Foxconn antes de graduarme. El laboratorio de robótica de CIES es de los mejores que he visto en Tijuana.' },
    { name: 'Daniela Sánchez', prog: 'Licenciatura en Comercio Exterior — Generación 2021', text: 'Los profesores tienen empresas propias o trabajan en el sector. Eso marca una diferencia enorme. Hoy trabajo en agencia aduanal.' },
    { name: 'Roberto Méndez', prog: 'MBA — Generación 2023', text: 'El MBA me dio las herramientas para ascender a director de operaciones. La modalidad ejecutiva es perfecta para quienes trabajan.' },
  ];
  return (
    <section style={hpS.testimoniosSec}>
      <div style={hpS.inner}>
        <div style={hpS.sectionHead}>
          <div style={hpS.eyebrow}>Egresados</div>
          <h2 style={hpS.sectionTitle}>Lo que dicen nuestros estudiantes</h2>
        </div>
        <div style={hpS.testimGrid} className="testim-grid">
          {testimonios.map((t, i) => (
            <div key={i} style={hpS.testimCard}>
              <div style={hpS.testimQuote}>"</div>
              <p style={hpS.testimText}>{t.text}</p>
              <div style={hpS.testimAuthor}>
                <div style={hpS.testimAvatar}>{t.name[0]}</div>
                <div>
                  <div style={hpS.testimName}>{t.name}</div>
                  <div style={hpS.testimProg}>{t.prog}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Mapa y ubicación ────────────────────────────────────
const MapaSection = () => (
  <section style={{ background: '#fff', padding: '0' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="map-grid">
      {/* Mapa embed */}
      <div style={{ height: 380, overflow: 'hidden' }}>
        <iframe
          title="Universidad CIES — Ubicación"
          src="https://maps.google.com/maps?q=Blvd.+Federico+Ben%C3%ADtez+5,+Tijuana,+Baja+California,+Mexico&output=embed&z=16"
          width="100%" height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* Info */}
      <div style={{ background: '#0F1E4A', padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#C23535', marginBottom:12 }}>Visítanos</div>
        <h2 style={{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(26px,3vw,36px)', fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.1, marginBottom:24 }}>Estamos en Tijuana, B.C.</h2>
        {[
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:'Dirección', value:'Blvd. Federico Benítez 5, Tijuana B.C.' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label:'WhatsApp', value:'(664) 490-1395' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:'Horario', value:'Lun–Vie 8:00–20:00 · Sáb 9:00–14:00' },
        ].map((item, i) => (
          <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start', marginBottom:18 }}>
            <div style={{ flexShrink:0, marginTop:1 }}>{item.icon}</div>
            <div>
              <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom:3 }}>{item.label}</div>
              <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:15, color:'rgba(255,255,255,0.9)', lineHeight:1.4 }}>{item.value}</div>
            </div>
          </div>
        ))}
        <a href="https://share.google/W5Ssb2tu5weHgjezy" target="_blank" rel="noopener noreferrer"
          style={{ marginTop:8, display:'inline-flex', alignItems:'center', gap:8, background:'#C23535', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'11px 20px', borderRadius:4, textDecoration:'none', alignSelf:'flex-start' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Ver en Google Maps
        </a>
      </div>
    </div>
  </section>
);

// ── Contacto strip ──────────────────────────────────────
const ContactoStrip = ({ onNavigate }) => (
  <section style={hpS.stripSec}>
    <div style={hpS.stripInner} className="strip-inner">
      <div>
        <h2 style={hpS.stripTitle}>¿Listo para dar el siguiente paso?</h2>
        <p style={hpS.stripSub}>Agenda una visita a campus o solicita información. Respondemos en menos de 24 horas.</p>
      </div>
      <div style={hpS.stripActions}>
        <button style={hpS.stripBtn} onClick={() => onNavigate('admisiones')}>Solicitar información</button>
        <a href="https://wa.me/526644901395" target="_blank" rel="noopener noreferrer" style={hpS.stripWa}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
          WhatsApp
        </a>
        <a href="https://www.facebook.com/universidadciesmx" target="_blank" rel="noopener noreferrer" style={hpS.stripSocial} title="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/universidadciesbc/" target="_blank" rel="noopener noreferrer" style={hpS.stripSocial} title="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </div>
    </div>
  </section>
);

// ── Styles ──────────────────────────────────────────────
const hpS = {
  hero: { background: '#0F1E4A', position: 'relative', overflow: 'hidden', minHeight: 560 },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0F1E4A 55%, #1A2E6B 100%)' },
  heroInner: { maxWidth: 1200, margin: '0 auto', padding: '96px 24px 80px', position: 'relative', zIndex: 2, maxWidth: 680 },
  heroBadge: { display: 'inline-block', fontFamily: "'Figtree',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 18, background: 'rgba(194,53,53,0.12)', padding: '5px 12px', borderRadius: 3 },
  heroTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(52px,7vw,84px)', fontWeight: 800, color: '#fff', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 22 },
  heroSub: { fontFamily: "'Figtree',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 36, maxWidth: 520 },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  heroDecor: { position: 'absolute', right: -60, top: 0, bottom: 0, width: 480, background: 'linear-gradient(135deg, transparent 40%, rgba(43,77,168,0.15) 100%)', pointerEvents: 'none' },
  btnPrimary: { background: '#C23535', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 4, border: 'none', cursor: 'pointer' },
  btnSecondary: { background: 'transparent', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 30px', borderRadius: 4, border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer' },
  statsBar: { background: '#fff', borderBottom: '1px solid #E8E8E8', padding: '0 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap' },
  statItem: { padding: '24px 32px', textAlign: 'center', flex: '1 1 120px' },
  statNum: { fontFamily: "'Varsity Impact',serif", fontSize: 36, fontWeight: 800, color: '#2B4DA8', lineHeight: 1 },
  statLabel: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: '#8A8A8A', marginTop: 4 },
  statDiv: { width: 1, height: 40, background: '#E8E8E8', flexShrink: 0, alignSelf: 'center' },
  programsSec: { background: '#F5F5F5', padding: '80px 0' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  sectionHead: { textAlign: 'center', marginBottom: 52 },
  eyebrow: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 10 },
  sectionTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(30px,4vw,42px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 14 },
  sectionSub: { fontFamily: "'Figtree',sans-serif", fontSize: 16, color: '#5A5A5A', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 },
  card: { background: '#fff', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s ease' },
  cardHover: { boxShadow: '0 6px 24px rgba(0,0,0,0.15)', transform: 'translateY(-2px)' },
  cardAccent: { height: 4 },
  cardBody: { padding: '20px 20px 24px' },
  cardCat: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: 8 },
  cardTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 20, fontWeight: 700, color: '#1A1A1A', lineHeight: 1.15, marginBottom: 10 },
  cardDesc: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: '#5A5A5A', lineHeight: 1.55, marginBottom: 14 },
  cardLink: { fontFamily: "'Figtree',sans-serif", fontSize: 13, fontWeight: 600 },
  allBtn: { background: '#2B4DA8', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 4, border: 'none', cursor: 'pointer' },
  modeloSec: { background: '#0F1E4A', padding: '88px 0' },
  pilares: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' },
  pilar: { display: 'flex', alignItems: 'flex-start', gap: 12 },
  pilarIcon: { width: 28, height: 28, background: 'rgba(194,53,53,0.15)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 },
  pilarTitle: { fontFamily: "'Figtree',sans-serif", fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 },
  pilarDesc: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.58)', lineHeight: 1.5 },
  modeloCard: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modeloCardInner: { background: '#fff', borderRadius: 12, padding: '40px 36px', textAlign: 'center', width: '100%', maxWidth: 360, boxShadow: '0 12px 40px rgba(0,0,0,0.25)' },
  modeloStat: { fontFamily: "'Varsity Impact',serif", fontSize: 52, fontWeight: 800, color: '#0F1E4A', lineHeight: 1 },
  modeloStatLabel: { fontFamily: "'Figtree',sans-serif", fontSize: 14, color: '#8A8A8A', marginTop: 6, marginBottom: 28 },
  modeloDivider: { height: 1, background: '#E8E8E8', marginBottom: 28 },
  testimoniosSec: { background: '#fff', padding: '80px 0' },
  testimGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  testimCard: { background: '#F5F5F5', borderRadius: 8, padding: '32px 28px', position: 'relative' },
  testimQuote: { fontFamily: "'Varsity Impact',serif", fontSize: 64, fontWeight: 800, color: '#E8E8E8', lineHeight: 0.7, marginBottom: 16 },
  testimText: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#3D3D3D', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' },
  testimAuthor: { display: 'flex', alignItems: 'center', gap: 12 },
  testimAvatar: { width: 42, height: 42, borderRadius: '50%', background: '#2B4DA8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Varsity Impact',serif", fontSize: 18, fontWeight: 700, flexShrink: 0 },
  testimName: { fontFamily: "'Figtree',sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A' },
  testimProg: { fontFamily: "'Figtree',sans-serif", fontSize: 12, color: '#8A8A8A', marginTop: 2 },
  stripSocial: { display:'flex', alignItems:'center', justifyContent:'center', width:42, height:42, borderRadius:'50%', background:'rgba(255,255,255,0.2)', color:'#fff', textDecoration:'none', transition:'background 0.2s', flexShrink:0 },
  stripSec: { background: '#C23535', padding: '56px 0' },
  stripInner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' },
  stripTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: 8 },
  stripSub: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5 },
  stripActions: { display: 'flex', gap: 12, flexShrink: 0, flexWrap: 'wrap' },
  stripBtn: { background: '#fff', color: '#C23535', fontFamily: "'Figtree',sans-serif", fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' },
  stripWa: { background: '#25D366', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 24px', borderRadius: 4, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 },
};

Object.assign(window, { HomePage, MapaSection, NivelesSection });
