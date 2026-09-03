// Universidad CIES — Campus Mexicali (hub + placeholder de niveles)

const CM_INFO = {
  addressLine: 'Calle Roberto Montenegro 26, C.P. 21379',
  addressCity: 'Mexicali, Baja California',
  phoneDisplay: '(686) 844-7575',
  phoneRaw: '526868447575',
  email: 'contacto@universidadcies.mx',
  mapsQuery: 'Roberto+Montenegro+26,+Mexicali,+Baja+California,+Mexico',
};

const cmNav = (key) => (typeof window !== 'undefined' && window.CIES_NAV && window.CIES_NAV[key]) ? window.CIES_NAV[key] : '#';
const cmWa = (text) => 'https://wa.me/' + CM_INFO.phoneRaw + '?text=' + encodeURIComponent(text || 'Hola, me interesa información del Campus Mexicali de Universidad CIES.');

// ── Hero ────────────────────────────────────────────────
const CMHero = () => (
  <section style={cmS.hero}>
    <div style={cmS.heroOverlay} />
    <div style={cmS.heroInner} className="hero-inner">
      <div style={cmS.heroBadge} className="anim-hero-badge">Universidad CIES · Campus Mexicali, Baja California</div>
      <h1 style={cmS.heroTitle} className="anim-hero-title">Campus<br/>Mexicali</h1>
      <p style={cmS.heroSub} className="anim-hero-sub">
        Más de 30 años formando profesionistas en Baja California, ahora en Mexicali. Ingenierías y preparatoria con RVOE vigente y enfoque en el mercado laboral de la región.
      </p>
      <div style={cmS.heroActions} className="anim-hero-actions">
        <a href="#cm-contacto" style={cmS.btnPrimary}>Solicitar información</a>
        <a href="#cm-oferta" style={cmS.btnSecondary}>Ver oferta educativa</a>
      </div>
    </div>
    <div style={cmS.heroDecor} />
  </section>
);

// ── Stats bar ───────────────────────────────────────────
const CMStats = () => {
  const stats = [
    { num: '+30', label: 'años de trayectoria' },
    { num: '+3,000', label: 'egresados exitosos' },
    { num: '100%', label: 'RVOE ante SEP' },
    { num: 'Nuevo', label: 'campus en Mexicali' },
  ];
  return (
    <div style={cmS.statsBar} className="stats-bar">
      {stats.map((s, i) => (
        <React.Fragment key={i}>
          <div style={cmS.statItem} className="stat-item">
            <div style={cmS.statNum}>{s.num}</div>
            <div style={cmS.statLabel}>{s.label}</div>
          </div>
          {i < stats.length - 1 && <div style={cmS.statDiv} className="stat-div" />}
        </React.Fragment>
      ))}
    </div>
  );
};

// ── Niveles educativos (4 tarjetas → subpáginas) ────────
const CMNiveles = () => {
  const niveles = [
    { nivel: 'Ingenierías', desc: 'Ingenierías para la Industria 4.0 y la economía tecnológica de la frontera. Abrimos con Ingeniería en Inteligencia Artificial.', tags: ['Industria 4.0', 'Inteligencia Artificial'], color: '#0F3A6B', page: 'cm-ingenierias' },
    { nivel: 'Preparatoria', desc: 'Bachillerato con validez oficial ante la SEP, base sólida para continuar con estudios superiores en CIES.', tags: ['Validez SEP', 'Bachillerato'], color: '#2B4DA8', page: 'cm-preparatoria' },
  ];
  return (
    <section id="cm-oferta" style={{ background: '#fff', padding: '72px 0', borderTop: '1px solid #F0F0F0' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <div style={cmS.sectionHead}>
          <div style={cmS.eyebrow}>Oferta educativa</div>
          <h2 style={cmS.sectionTitle}>Estudia en Mexicali con CIES</h2>
          <p style={cmS.sectionSub}>Abrimos el campus con dos niveles educativos: ingenierías y preparatoria, ambos con RVOE vigente. La oferta se amplía de forma progresiva.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }} className="niveles-grid">
          {niveles.map((n, i) => (
            <a key={i} href={cmNav(n.page)} style={{ ...cmS.nivelCard, background: n.color }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={cmS.nivelKicker}>Nivel</div>
              <div style={cmS.nivelName}>{n.nivel}</div>
              <p style={cmS.nivelDesc}>{n.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {n.tags.map((t, j) => (
                  <span key={j} style={cmS.nivelTag}>{t}</span>
                ))}
              </div>
              <div style={cmS.nivelLink}>Conocer más →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Por qué CIES ────────────────────────────────────────
const CMModelo = () => {
  const pilares = [
    { title: 'Docentes en activo', desc: 'Aprendes con profesionales que ejercen su profesión en la región.' },
    { title: 'Enfoque práctico', desc: 'Laboratorios, proyectos y casos reales desde el primer cuatrimestre.' },
    { title: 'RVOE oficial', desc: 'Programas con Reconocimiento de Validez Oficial de Estudios ante la SEP.' },
    { title: 'Horarios flexibles', desc: 'Modalidades pensadas para estudiantes y para quienes ya trabajan.' },
    { title: 'Precio accesible', desc: 'Colegiaturas competitivas y planes de pago. Becas disponibles.' },
    { title: 'Enfoque laboral', desc: 'Formación orientada a la empleabilidad real en Mexicali y la frontera.' },
  ];
  return (
    <section style={cmS.modeloSec}>
      <div style={cmS.inner}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="model-grid">
          <div>
            <div style={cmS.eyebrow}>Nuestro modelo</div>
            <h2 style={{ ...cmS.sectionTitle, textAlign: 'left', color: '#fff' }}>Por qué elegir CIES en Mexicali</h2>
            <p style={{ fontFamily: "'Figtree',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: 16, marginBottom: 40 }}>
              Llevamos más de tres décadas preparando profesionistas en Baja California. Ese mismo modelo educativo, práctico y enfocado en el empleo, llega ahora a Mexicali.
            </p>
            <div style={cmS.pilares} className="pilares-grid">
              {pilares.map((p, i) => (
                <div key={i} style={cmS.pilar}>
                  <div style={cmS.pilarIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C23535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div style={cmS.pilarTitle}>{p.title}</div>
                    <div style={cmS.pilarDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={cmS.modeloCard}>
            <div style={cmS.modeloCardInner}>
              <img src={(window.CIES_BASE ? window.CIES_BASE + '/' : '') + 'assets/LOGO_UNI_CIES_6.png'} alt="Universidad CIES Campus Mexicali" style={{ height: 80, objectFit: 'contain', marginBottom: 24 }} />
              <div style={cmS.modeloStat}>+30 años</div>
              <div style={cmS.modeloStatLabel}>de experiencia educativa en B.C.</div>
              <div style={cmS.modeloDivider} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[['2', 'niveles educativos'], ['+3,000', 'egresados'], ['100%', 'RVOE vigente'], ['686', 'lada Mexicali']].map(([n, l]) => (
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

// ── Mapa y ubicación (NAP Mexicali) ─────────────────────
const CMMapa = () => (
  <section style={{ background: '#fff', padding: '0' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="map-grid">
      <div style={{ height: 380, overflow: 'hidden' }}>
        <iframe
          title="Universidad CIES Campus Mexicali — Ubicación"
          src={'https://maps.google.com/maps?q=' + CM_INFO.mapsQuery + '&output=embed&z=16'}
          width="100%" height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div style={{ background: '#0F1E4A', padding: '48px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 12 }}>Visítanos</div>
        <h2 style={{ fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(26px,3vw,36px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 24 }}>Estamos en Mexicali, B.C.</h2>
        {[
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Dirección', value: CM_INFO.addressLine + ', ' + CM_INFO.addressCity },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label: 'Teléfono / WhatsApp', value: CM_INFO.phoneDisplay },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>, label: 'Correo', value: CM_INFO.email },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 18 }}>
            <div style={{ flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
            <div>
              <div style={{ fontFamily: "'Figtree',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 3 }}>{item.label}</div>
              <div style={{ fontFamily: "'Figtree',sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Preguntas frecuentes (AIEO / FAQ) ───────────────────
const CM_FAQ = [
  { q: '¿Dónde está el Campus Mexicali de Universidad CIES?', a: 'El Campus Mexicali se ubica en ' + CM_INFO.addressLine + ', ' + CM_INFO.addressCity + '.' },
  { q: '¿Qué programas ofrece CIES en Mexicali?', a: 'Universidad CIES ofrece licenciaturas, ingenierías, maestrías y preparatoria con RVOE ante la SEP. La oferta del Campus Mexicali se habilita de forma progresiva por nivel, comenzando con Ingeniería en Inteligencia Artificial.' },
  { q: '¿Los programas del Campus Mexicali tienen RVOE oficial?', a: 'Sí. Todos los programas de Universidad CIES cuentan con Reconocimiento de Validez Oficial de Estudios (RVOE) ante la Secretaría de Educación Pública.' },
  { q: '¿Cómo solicito informes del Campus Mexicali?', a: 'Puedes comunicarte por teléfono o WhatsApp al ' + CM_INFO.phoneDisplay + ' o al correo ' + CM_INFO.email + '.' },
];

const CMFaq = () => (
  <section style={{ background: '#F5F5F5', padding: '72px 0' }}>
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
      <div style={cmS.sectionHead}>
        <div style={cmS.eyebrow}>Preguntas frecuentes</div>
        <h2 style={cmS.sectionTitle}>Sobre el Campus Mexicali</h2>
      </div>
      <div>
        {CM_FAQ.map((f, i) => (
          <div key={i} style={cmS.faqItem}>
            <div style={cmS.faqQ}>{f.q}</div>
            <div style={cmS.faqA}>{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Contacto / CTA ──────────────────────────────────────
const CMContacto = () => (
  <section id="cm-contacto" style={cmS.stripSec}>
    <div style={cmS.stripInner}>
      <div>
        <h2 style={cmS.stripTitle}>¿Listo para estudiar en Mexicali?</h2>
        <p style={cmS.stripSub}>Déjanos tus datos o escríbenos por WhatsApp. Te damos informes sobre la oferta del Campus Mexicali.</p>
      </div>
      <div style={cmS.stripActions}>
        <a href={cmWa()} target="_blank" rel="noopener noreferrer" style={cmS.stripWa}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
          WhatsApp (686) 844-7575
        </a>
        <a href={'mailto:' + CM_INFO.email} style={cmS.stripBtn}>Enviar correo</a>
      </div>
    </div>
  </section>
);

// ── Página hub del campus ───────────────────────────────
const CampusMexicaliPage = ({ onNavigate }) => (
  <div>
    <CMHero />
    <CMStats />
    <CMNiveles />
    <CMModelo />
    <CMMapa />
    <CMFaq />
    <CMContacto />
  </div>
);

// ── Placeholder "Muy pronto" por nivel ──────────────────
const CampusEnConstruccion = ({ nivel, descripcion }) => (
  <div>
    <section style={cmS.ecSec}>
      <div style={cmS.ecInner}>
        <div style={cmS.ecBadge}>Campus Mexicali · Muy pronto</div>
        <h1 style={cmS.ecTitle}>{nivel}<br/>en Mexicali</h1>
        <p style={cmS.ecSub}>{descripcion || 'Estamos preparando la oferta de este nivel para el Campus Mexicali. Déjanos tus datos y serás de los primeros en recibir informes.'}</p>
        <div style={cmS.ecActions}>
          <a href={cmWa('Hola, me interesa información sobre ' + nivel + ' en el Campus Mexicali de Universidad CIES.')} target="_blank" rel="noopener noreferrer" style={cmS.btnPrimary}>Solicitar informes por WhatsApp</a>
          <a href={cmNav('campus-mexicali')} style={cmS.btnSecondary}>← Volver al Campus Mexicali</a>
        </div>
      </div>
    </section>
  </div>
);

// ── Estilos ─────────────────────────────────────────────
const cmS = {
  hero: { background: '#0F1E4A', position: 'relative', overflow: 'hidden', minHeight: 480 },
  heroOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0F1E4A 55%, #1A2E6B 100%)' },
  heroInner: { maxWidth: 680, margin: '0 auto', padding: '96px 24px 72px', position: 'relative', zIndex: 2 },
  heroBadge: { display: 'inline-block', fontFamily: "'Figtree',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 18, background: 'rgba(194,53,53,0.12)', padding: '5px 12px', borderRadius: 3 },
  heroTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(48px,7vw,80px)', fontWeight: 800, color: '#fff', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 22 },
  heroSub: { fontFamily: "'Figtree',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 36, maxWidth: 540 },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  heroDecor: { position: 'absolute', right: -60, top: 0, bottom: 0, width: 480, background: 'linear-gradient(135deg, transparent 40%, rgba(43,77,168,0.15) 100%)', pointerEvents: 'none' },
  btnPrimary: { background: '#C23535', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 4, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' },
  btnSecondary: { background: 'transparent', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 30px', borderRadius: 4, border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' },
  btnSecondaryDark: { background: 'transparent', color: '#0F1E4A', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 30px', borderRadius: 4, border: '2px solid rgba(15,30,74,0.25)', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' },
  statsBar: { background: '#fff', borderBottom: '1px solid #E8E8E8', padding: '0 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', flexWrap: 'wrap' },
  statItem: { padding: '24px 32px', textAlign: 'center', flex: '1 1 120px' },
  statNum: { fontFamily: "'Varsity Impact',serif", fontSize: 36, fontWeight: 800, color: '#2B4DA8', lineHeight: 1 },
  statLabel: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: '#8A8A8A', marginTop: 4 },
  statDiv: { width: 1, height: 40, background: '#E8E8E8', flexShrink: 0, alignSelf: 'center' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  sectionHead: { textAlign: 'center', marginBottom: 52 },
  eyebrow: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 10 },
  sectionTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(30px,4vw,42px)', fontWeight: 700, color: '#1A1A1A', marginBottom: 14 },
  sectionSub: { fontFamily: "'Figtree',sans-serif", fontSize: 16, color: '#5A5A5A', maxWidth: 620, margin: '0 auto', lineHeight: 1.65 },
  nivelCard: { borderRadius: 10, padding: '36px 28px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', flexDirection: 'column', textDecoration: 'none' },
  nivelKicker: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 10 },
  nivelName: { fontFamily: "'Varsity Impact',serif", fontSize: 34, fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 14 },
  nivelDesc: { fontFamily: "'Figtree',sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.78)', lineHeight: 1.65, marginBottom: 20 },
  nivelTag: { background: 'rgba(255,255,255,0.15)', fontFamily: "'Figtree',sans-serif", fontSize: 12, fontWeight: 600, color: '#fff', padding: '4px 10px', borderRadius: 3 },
  nivelLink: { marginTop: 'auto', paddingTop: 24, fontFamily: "'Figtree',sans-serif", fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)' },
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
  faqItem: { background: '#fff', borderRadius: 8, padding: '22px 24px', marginBottom: 14, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' },
  faqQ: { fontFamily: "'Figtree',sans-serif", fontSize: 16, fontWeight: 700, color: '#1A1A1A', marginBottom: 8 },
  faqA: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#5A5A5A', lineHeight: 1.65 },
  stripSec: { background: '#C23535', padding: '56px 0' },
  stripInner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' },
  stripTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', marginBottom: 8 },
  stripSub: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.82)', lineHeight: 1.5, maxWidth: 520 },
  stripActions: { display: 'flex', gap: 12, flexShrink: 0, flexWrap: 'wrap' },
  stripBtn: { background: '#fff', color: '#C23535', fontFamily: "'Figtree',sans-serif", fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 4, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' },
  stripWa: { background: '#25D366', color: '#fff', fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15, padding: '13px 24px', borderRadius: 4, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 },
  ecSec: { background: '#0F1E4A', position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center' },
  ecInner: { maxWidth: 720, margin: '0 auto', padding: '80px 24px', textAlign: 'center' },
  ecBadge: { display: 'inline-block', fontFamily: "'Figtree',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 20, background: 'rgba(194,53,53,0.12)', padding: '5px 12px', borderRadius: 3 },
  ecTitle: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(40px,6vw,68px)', fontWeight: 800, color: '#fff', lineHeight: 1.0, textTransform: 'uppercase', marginBottom: 22 },
  ecSub: { fontFamily: "'Figtree',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 36, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' },
  ecActions: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
};

Object.assign(window, { CampusMexicaliPage, CampusEnConstruccion });
