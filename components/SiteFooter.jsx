// Universidad CIES — Footer completo con redes sociales

const SiteFooter = ({ onNavigate }) => {
  const WA = 'https://wa.me/526644901395';
  const licenciaturas = [
    { label: 'Derecho', page: 'lic-derecho' },
    { label: 'Comercio Exterior', page: 'lic-comercio' },
    { label: 'Administración', page: 'lic-administracion' },
    { label: 'Ciencias de la Educación', page: 'lic-educacion' },
  ];
  const ingenierias = [
    { label: 'Robótica', page: 'ing-robotica' },
    { label: 'Inteligencia Artificial', page: 'ing-ia' },
    { label: 'Mecatrónica', page: 'ing-mecatronica' },
    { label: 'Ingeniería Industrial', page: 'ing-industrial' },
  ];
  const institucion = [
    { label: 'Nosotros', page: 'nosotros' },
    { label: 'Preparatoria', page: 'preparatoria' },
    { label: 'Admisiones', page: 'admisiones' },
    { label: 'MBA', page: 'mba' },
    { label: 'Maestría en Innovación Educativa', page: 'mie' },
  ];

  return (
    <footer style={fS.footer}>
      <div style={fS.inner}>
        <div style={fS.top} className="footer-grid">
          {/* Brand col */}
          <div style={fS.brand}>
            <img src={'/assets/LOGO_CIES_HORIZONTAL_BLANCO.png'} alt="Universidad CIES" style={fS.logo} />
            <p style={fS.tagline}>Formando profesionistas para el mundo real desde hace más de 30 años en Tijuana, México.</p>

            {/* Contacto */}
            <div style={fS.contact}>
              <div style={fS.contactLine}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Blvd. Federico Benítez 5, Tijuana B.C.</span>
              </div>
              <div style={fS.contactLine}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{ color:'rgba(255,255,255,0.58)', textDecoration:'none' }}>(664) 490-1395</a>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:8, marginTop:4}}>
                <a href="mailto:contacto@universidadcies.mx" style={{color:'rgba(255,255,255,0.75)', fontSize:14, textDecoration:'none'}}>contacto@universidadcies.mx</a>
              </div>
            </div>

            {/* Redes sociales */}
            <div style={fS.social}>
              <a href="https://www.facebook.com/universidadciesmx" target="_blank" rel="noopener noreferrer" style={fS.socialBtn} title="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/universidadciesbc/" target="_blank" rel="noopener noreferrer" style={fS.socialBtn} title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ ...fS.socialBtn, background:'#25D366' }} title="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
              </a>
            </div>
          </div>

          {/* Licenciaturas */}
          <div style={fS.col}>
            <div style={fS.colTitle}>Licenciaturas</div>
            {licenciaturas.map(l => (
              <a key={l.page} href={window.CIES_NAV ? window.CIES_NAV[l.page] : '#'} style={{...fS.link, textDecoration:'none', display:'block'}}>{l.label}</a>
            ))}
          </div>

          {/* Ingenierías */}
          <div style={fS.col}>
            <div style={fS.colTitle}>Ingenierías</div>
            {ingenierias.map(l => (
              <a key={l.page} href={window.CIES_NAV ? window.CIES_NAV[l.page] : '#'} style={{...fS.link, textDecoration:'none', display:'block'}}>{l.label}</a>
            ))}
          </div>

          {/* Institución */}
          <div style={fS.col}>
            <div style={fS.colTitle}>Institución</div>
            {institucion.map(l => (
              <a key={l.page} href={window.CIES_NAV ? window.CIES_NAV[l.page] : '#'} style={{...fS.link, textDecoration:'none', display:'block'}}>{l.label}</a>
            ))}
            <button style={fS.ctaBtn} onClick={() => onNavigate('admisiones')}>Solicitar información</button>
          </div>
        </div>

        <div style={fS.bottom}>
          <div style={fS.copy}>© 2025 Universidad CIES · Tijuana, B.C. · RVOE SEP</div>
          <div style={fS.bottomLinks}>
            <a href="https://entelia.mx" target="_blank" rel="noopener noreferrer" style={{ ...fS.bottomLink, textDecoration:'none' }}>Creado por entelia.mx</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const fS = {
  footer: { background:'#0F1E4A', padding:'64px 0 0' },
  inner: { maxWidth:1200, margin:'0 auto', padding:'0 24px' },
  top: { display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr 1.2fr', gap:48, paddingBottom:48, borderBottom:'1px solid rgba(255,255,255,0.1)' },
  brand: {},
  logo: { height:38, marginBottom:20, objectFit:'contain' },
  tagline: { fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.58)', lineHeight:1.65, marginBottom:20, maxWidth:280 },
  contact: { display:'flex', flexDirection:'column', gap:10, marginBottom:20 },
  contactLine: { display:'flex', alignItems:'flex-start', gap:8, fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.58)', lineHeight:1.4 },
  social: { display:'flex', gap:8 },
  socialBtn: { width:34, height:34, background:'rgba(255,255,255,0.1)', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', textDecoration:'none', transition:'background 0.2s' },
  col: { display:'flex', flexDirection:'column', gap:8 },
  colTitle: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'#fff', marginBottom:6 },
  link: { textAlign:'left', fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.6)', padding:'2px 0', lineHeight:1.5 },
  ctaBtn: { background:'#C23535', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:13, padding:'10px 16px', borderRadius:4, border:'none', cursor:'pointer', marginTop:10, textAlign:'center' },
  bottom: { padding:'20px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 },
  copy: { fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)' },
  bottomLinks: { display:'flex', gap:20 },
  bottomLink: { background:'none', border:'none', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.35)', cursor:'pointer', padding:0 },
};

Object.assign(window, { SiteFooter });
