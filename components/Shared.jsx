// Shared: PageHeader banner + WhatsApp FAB

const PageHeader = ({ breadcrumb, title, subtitle, onNavigate, eyebrow }) => (
  <div style={phS.wrap}>
    <div style={phS.inner}>
      {breadcrumb && (
        <div style={phS.breadcrumb}>
          <button style={phS.breadBtn} onClick={() => onNavigate('home')}>Inicio</button>
          {breadcrumb.map((b, i) => (
            <React.Fragment key={i}>
              <span style={phS.sep}>›</span>
              {b.page
                ? <button style={phS.breadBtn} onClick={() => onNavigate(b.page)}>{b.label}</button>
                : <span style={phS.breadCur}>{b.label}</span>
              }
            </React.Fragment>
          ))}
        </div>
      )}
      {eyebrow && <div style={phS.eyebrow} className="anim-hero-badge">{eyebrow}</div>}
      <h1 style={phS.title} className="anim-page-title">{title}</h1>
      {subtitle && <p style={phS.sub} className="anim-page-sub">{subtitle}</p>}
    </div>
  </div>
);

const phS = {
  wrap: { background: '#0F1E4A', padding: '56px 0 48px' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20 },
  breadBtn: { background: 'none', border: 'none', fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', cursor: 'pointer', padding: 0 },
  sep: { color: 'rgba(255,255,255,0.3)', fontSize: 13 },
  breadCur: { fontFamily: "'Figtree',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.85)' },
  eyebrow: { fontFamily: "'Figtree',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C23535', marginBottom: 12 },
  title: { fontFamily: "'Varsity Impact',serif", fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: 12 },
  sub: { fontFamily: "'Figtree',sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, maxWidth: 600 },
};

// WhatsApp floating button
const WhatsAppFAB = () => {
  const [hover, setHover] = React.useState(false);
  const phone = '526644901395';
  const msg = encodeURIComponent('Hola, me interesa obtener información sobre los programas de Universidad CIES.');
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...wS.btn,
        ...(hover ? wS.btnHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title="Escríbenos por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
      </svg>
      {hover && <span style={wS.tooltip}>¿Tienes dudas? Escríbenos</span>}
    </a>
  );
};

const wS = {
  btn: { position: 'fixed', bottom: 28, right: 28, width: 58, height: 58, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.45)', zIndex: 500, transition: 'transform 0.2s, box-shadow 0.2s', textDecoration: 'none' },
  btnHover: { transform: 'scale(1.08)', boxShadow: '0 6px 28px rgba(37,211,102,0.55)' },
  tooltip: { position: 'absolute', right: '110%', whiteSpace: 'nowrap', background: '#1A1A1A', color: '#fff', fontFamily: "'Figtree',sans-serif", fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 4, pointerEvents: 'none' },
};

// Promo: entry image modal + bottom beca bar. Both reappear on every page load / refresh (no persistence).
const BecaBanner = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [barOpen, setBarOpen] = React.useState(false);

  React.useEffect(() => {
    const t1 = setTimeout(() => setModalOpen(true), 400);
    const t2 = setTimeout(() => setBarOpen(true), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Campus Mexicali: promo propia de preparatoria en landing y navegacion interna del campus
  const esMexicali = typeof window !== 'undefined' && window.location.pathname.indexOf('/campus-mexicali') === 0;
  const promo = esMexicali
    ? { img: '/assets/promo_mexicali_prepa.webp', alt: 'Preparatoria CIES ahora en Mexicali — inscripción gratis y 30% de descuento', txt: '¡Quiero mi beca de prepa!', barTitle: '¡Becas de preparatoria!', barSub: 'Inscripción gratis y 30% en colegiatura.', barBtn: '¡Quiero mi beca de prepa!' }
    : { img: '/assets/CIES_promocionNUEVA_web_1600.webp', alt: 'Promoción de inscripción — Universidad CIES', txt: '¡Quiero mi beca de agosto!', barTitle: '¡Becas disponibles!', barSub: 'Aplica ahora y reduce tu colegiatura.', barBtn: '¡Quiero mi beca!' };

  const waMsg = 'https://wa.me/526644901395?text=' + encodeURIComponent(promo.txt);

  return (
    <React.Fragment>
      {modalOpen && (
        <div style={pmS.overlay} onClick={() => setModalOpen(false)}>
          <div style={pmS.box} onClick={(e) => e.stopPropagation()}>
            <button style={pmS.close} onClick={() => setModalOpen(false)} aria-label="Cerrar">✕</button>
            <a href={waMsg} target="_blank" rel="noopener noreferrer" style={pmS.link} onClick={() => setModalOpen(false)}>
              <img src={promo.img} alt={promo.alt} style={pmS.img} />
            </a>
          </div>
        </div>
      )}
      {barOpen && (
        <div style={bbS.wrap}>
          <div style={bbS.inner}>
            <div style={bbS.icon}>🎓</div>
            <div style={bbS.text}>
              <div style={bbS.title}>{promo.barTitle}</div>
              <div style={bbS.sub}>{promo.barSub}</div>
            </div>
            <a href={waMsg} target="_blank" rel="noopener noreferrer" style={bbS.btn} onClick={() => setBarOpen(false)}>
              {promo.barBtn}
            </a>
            <button style={bbS.close} onClick={() => setBarOpen(false)} aria-label="Cerrar">✕</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const pmS = {
  overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, animation:'fadeIn 0.25s ease' },
  box: { position:'relative', maxWidth:'min(640px, 92vw)', width:'100%' },
  close: { position:'absolute', top:8, right:8, width:34, height:34, borderRadius:'50%', background:'#fff', border:'none', color:'#0F1E4A', fontSize:17, fontWeight:700, cursor:'pointer', boxShadow:'0 2px 10px rgba(0,0,0,0.35)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2, lineHeight:1 },
  link: { display:'block', cursor:'pointer' },
  img: { width:'100%', height:'auto', borderRadius:12, display:'block', boxShadow:'0 12px 48px rgba(0,0,0,0.5)' },
};

const bbS = {
  wrap: { position:'fixed', bottom:96, left:'50%', transform:'translateX(-50%)', zIndex:490, animation:'slideUp 0.4s ease', maxWidth:480, width:'calc(100% - 32px)' },
  inner: { background:'#0F1E4A', borderRadius:10, padding:'14px 16px', display:'flex', alignItems:'center', gap:12, boxShadow:'0 8px 32px rgba(0,0,0,0.35)', border:'2px solid rgba(43,77,168,0.4)' },
  icon: { fontSize:24, flexShrink:0 },
  text: { flex:1, minWidth:0 },
  title: { fontFamily:"'Varsity Impact',serif", fontSize:18, fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.1 },
  sub: { fontFamily:"'Figtree',sans-serif", fontSize:12, color:'rgba(255,255,255,0.7)', marginTop:2 },
  btn: { background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:700, fontSize:13, padding:'10px 16px', borderRadius:6, textDecoration:'none', whiteSpace:'nowrap', flexShrink:0 },
  close: { background:'none', border:'none', color:'rgba(255,255,255,0.5)', cursor:'pointer', fontSize:16, padding:'4px', flexShrink:0, lineHeight:1 },
};

Object.assign(window, { PageHeader, WhatsAppFAB, BecaBanner });
