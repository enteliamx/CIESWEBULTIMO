// CIES Deportes: subpágina "Próximamente"
// Marca: azul #3068A0 · verde #459758 (tomados del logo oficial CIES Deportes)

const CD_WA = 'https://wa.me/526644901395';
const CD_AZUL = '#3068A0';
const CD_VERDE = '#459758';

const CdWaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
);

const CiesDeportesPage = ({ onNavigate }) => {
  const oferta = [
    {
      titulo: 'Diplomados',
      desc: 'Programas de especialización en ciencias del deporte, entrenamiento y gestión deportiva.',
    },
    {
      titulo: 'Cursos',
      desc: 'Formación corta y práctica para entrenadores, preparadores físicos y personal de clubes.',
    },
    {
      titulo: 'Certificaciones',
      desc: 'Acreditaciones con validez oficial que respaldan tu perfil profesional en el ámbito deportivo.',
    },
  ];

  const faqs = [
    {
      q: '¿Qué es CIES Deportes?',
      a: 'CIES Deportes es la nueva división de formación deportiva de Universidad CIES en Tijuana, Baja California. Ofrecerá diplomados, cursos y certificaciones con validez oficial dirigidos a entrenadores, preparadores físicos, instructores y profesionales del deporte.',
    },
    {
      q: '¿Cuándo abre CIES Deportes?',
      a: 'CIES Deportes está próximo a abrir en Universidad CIES. Las fechas de apertura e inscripción se anunciarán próximamente; puedes registrar tu interés por WhatsApp para recibir la información en cuanto esté disponible.',
    },
    {
      q: '¿Los programas de CIES Deportes tienen validez oficial?',
      a: 'Sí. Los diplomados, cursos y certificaciones de CIES Deportes se emiten con validez oficial, respaldados por Universidad CIES, institución con más de 30 años de trayectoria y programas con RVOE ante la Secretaría de Educación Pública.',
    },
    {
      q: '¿Dónde se impartirá CIES Deportes?',
      a: 'CIES Deportes se impartirá en las instalaciones de Universidad CIES en Blvd. Federico Benítez 5, Tijuana, Baja California, México.',
    },
  ];

  return (
    <div>
      {/* ── Hero ───────────────────────────────── */}
      <div style={cdS.heroWrap}>
        <div style={cdS.heroGlow} aria-hidden="true" />
        <div style={cdS.heroInner}>
          {/* Breadcrumb */}
          <div style={cdS.breadcrumb}>
            <button style={cdS.breadBtn} onClick={() => onNavigate('home')}>Inicio</button>
            <span style={cdS.sep}>›</span>
            <span style={cdS.breadCur}>CIES Deportes</span>
          </div>

          <div style={cdS.heroGrid} className="cd-hero-grid">
            <div>
              <div style={cdS.badge} className="anim-hero-badge">Nueva división · Universidad CIES</div>
              <h1 style={cdS.h1} className="anim-page-title">
                Pronto en<br /><span style={cdS.h1Accent}>Universidad CIES</span>
              </h1>
              <p style={cdS.sub} className="anim-page-sub">
                Diplomados, cursos y certificaciones con validez oficial.
              </p>
              <div style={cdS.heroActions} className="anim-hero-actions">
                <a
                  href={`${CD_WA}?text=${encodeURIComponent('Hola, quiero información sobre CIES Deportes: diplomados, cursos y certificaciones.')}`}
                  target="_blank" rel="noopener noreferrer" style={cdS.waBtn}
                >
                  <CdWaIcon /> Quiero información
                </a>
              </div>
            </div>

            <div style={cdS.logoBox} className="cd-logo-box">
              <img
                src="/assets/LOGO_CIES_DEPORTES.webp"
                alt="Logo CIES Deportes, Universidad CIES Tijuana"
                style={cdS.logo}
                width="420" height="397"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Oferta ─────────────────────────────── */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div style={cdS.container}>
          <div style={cdS.eyebrow}>Lo que viene</div>
          <h2 style={cdS.h2} className="anim-section-title">Formación deportiva con respaldo universitario</h2>
          <p style={cdS.lead}>
            CIES Deportes es la división de formación deportiva de Universidad CIES en Tijuana, Baja California.
            Una oferta pensada para entrenadores, preparadores físicos, instructores y profesionales del deporte
            que buscan certificarse con respaldo institucional.
          </p>

          <div style={cdS.grid} className="cd-grid">
            {oferta.map((o, i) => (
              <div key={i} style={cdS.card}>
                <div style={{ ...cdS.cardBar, background: i === 2 ? CD_AZUL : i === 1 ? '#3B8276' : CD_VERDE }} />
                <h3 style={cdS.cardTitle}>{o.titulo}</h3>
                <p style={cdS.cardDesc}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <section style={{ background: '#F7F9FC', padding: '64px 0' }}>
        <div style={{ ...cdS.container, maxWidth: 860 }}>
          <div style={cdS.eyebrow}>Preguntas frecuentes</div>
          <h2 style={{ ...cdS.h2, marginBottom: 28 }}>Sobre CIES Deportes</h2>
          {faqs.map((f, i) => (
            <div key={i} style={cdS.faqItem}>
              <h3 style={cdS.faqQ}>{f.q}</h3>
              <p style={cdS.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section style={cdS.ctaWrap}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={cdS.ctaTitle}>Sé el primero en enterarte</h2>
          <p style={cdS.ctaSub}>
            Déjanos tus datos por WhatsApp y te avisamos en cuanto abran las inscripciones de CIES Deportes.
          </p>
          <a
            href={`${CD_WA}?text=${encodeURIComponent('Hola, quiero que me avisen cuando abran las inscripciones de CIES Deportes.')}`}
            target="_blank" rel="noopener noreferrer" style={cdS.ctaBtn}
          >
            <CdWaIcon /> Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

const cdS = {
  container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },

  heroWrap: { position: 'relative', background: '#0F1E4A', padding: '48px 0 64px', overflow: 'hidden' },
  heroGlow: {
    position: 'absolute', inset: 0,
    background: `radial-gradient(1000px 420px at 12% 12%, ${CD_VERDE}30, transparent 62%), radial-gradient(900px 420px at 88% 88%, ${CD_AZUL}45, transparent 62%)`,
    pointerEvents: 'none',
  },
  heroInner: { position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28 },
  breadBtn: { background: 'none', border: 'none', fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: 0 },
  sep: { color: 'rgba(255,255,255,0.3)', fontSize: 13 },
  breadCur: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.85)' },

  heroGrid: { display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'center' },
  badge: {
    display: 'inline-block', fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff',
    background: `linear-gradient(90deg, ${CD_VERDE}, ${CD_AZUL})`,
    padding: '6px 14px', borderRadius: 999, marginBottom: 18,
  },
  h1: {
    fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(38px,6vw,64px)', fontWeight: 800,
    color: '#fff', textTransform: 'uppercase', lineHeight: 1.02, marginBottom: 18,
  },
  h1Accent: {
    background: `linear-gradient(90deg, ${CD_VERDE}, #6FB3E0)`,
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', color: '#6FB3E0',
  },
  sub: {
    fontFamily: "'Figtree',sans-serif", fontSize: 19, fontWeight: 500,
    color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, maxWidth: 520, marginBottom: 28,
  },
  heroActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  waBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff',
    fontFamily: "'Figtree',sans-serif", fontWeight: 600, fontSize: 15,
    padding: '13px 26px', borderRadius: 4, textDecoration: 'none',
  },

  logoBox: {
    background: '#fff', borderRadius: 16, padding: 32,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 18px 60px rgba(0,0,0,0.35)',
  },
  logo: { width: '100%', maxWidth: 320, height: 'auto', objectFit: 'contain', display: 'block' },

  eyebrow: {
    fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', color: CD_VERDE, marginBottom: 10,
  },
  h2: {
    fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800,
    color: '#0F1E4A', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 16,
  },
  lead: {
    fontFamily: "'Figtree',sans-serif", fontSize: 16, color: '#4A4A4A',
    lineHeight: 1.7, maxWidth: 760, marginBottom: 40,
  },

  grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  card: {
    background: '#fff', border: '1px solid #E6EAF2', borderRadius: 12,
    padding: '28px 24px', overflow: 'hidden', position: 'relative',
  },
  cardBar: { position: 'absolute', top: 0, left: 0, right: 0, height: 4 },
  cardTitle: {
    fontFamily: "'Figtree',sans-serif", fontSize: 19, fontWeight: 700,
    color: '#0F1E4A', marginBottom: 10, marginTop: 6,
  },
  cardDesc: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#5A5A5A', lineHeight: 1.65 },

  faqItem: { background: '#fff', border: '1px solid #E6EAF2', borderRadius: 10, padding: '20px 22px', marginBottom: 12 },
  faqQ: { fontFamily: "'Figtree',sans-serif", fontSize: 16, fontWeight: 700, color: '#0F1E4A', marginBottom: 8 },
  faqA: { fontFamily: "'Figtree',sans-serif", fontSize: 15, color: '#5A5A5A', lineHeight: 1.7 },

  ctaWrap: { background: `linear-gradient(100deg, ${CD_VERDE}, ${CD_AZUL})`, padding: '60px 0' },
  ctaTitle: {
    fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800,
    color: '#fff', textTransform: 'uppercase', marginBottom: 12,
  },
  ctaSub: {
    fontFamily: "'Figtree',sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.88)',
    marginBottom: 30, lineHeight: 1.6,
  },
  ctaBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#0F1E4A',
    fontFamily: "'Figtree',sans-serif", fontWeight: 700, fontSize: 16,
    padding: '14px 32px', borderRadius: 4, textDecoration: 'none',
  },
};

Object.assign(window, { CiesDeportesPage });
