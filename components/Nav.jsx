// Nav v2 - blog mobile fix
// Universidad CIES — Navbar con dropdowns (fixed)

// Dropdown item with hover highlight
const DropItem = ({ item, active, onNav }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={'/' + item.page}
      style={{
        ...navS.dropItem,
        ...(hover ? navS.dropItemHover : {}),
        ...(active ? navS.dropItemActive : {}),
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e) => { e.preventDefault(); onNav(item.page); }}
    >
      {item.label}
    </a>
  );
};

// Main Nav component
const Nav = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const [dropdown, setDropdown] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const logoSrc = (window.CIES_BASE ? window.CIES_BASE + '/' : '') + 'assets/LOGO_CIES_HORIZONTAL_OFICIAL.png';
  const logoWhite = (window.CIES_BASE ? window.CIES_BASE + '/' : '') + 'assets/LOGO_CIES_HORIZONTAL_BLANCO.png';
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navGroups = [
    { id: 'nosotros', label: 'Nosotros', page: 'nosotros' },
    {
      id: 'licenciaturas', label: 'Licenciaturas',
      children: [
        { label: 'Derecho', page: 'lic-derecho' },
        { label: 'Comercio Exterior', page: 'lic-comercio' },
        { label: 'Administración de Empresas', page: 'lic-administracion' },
        { label: 'Ciencias de la Educación', page: 'lic-educacion' },
      ]
    },
    {
      id: 'ingenierias', label: 'Ingenierías',
      children: [
        { label: 'Ing. en Robótica', page: 'ing-robotica' },
        { label: 'Inteligencia Artificial', page: 'ing-ia' },
        { label: 'Mecatrónica', page: 'ing-mecatronica' },
        { label: 'Ing. Industrial', page: 'ing-industrial' },
      ]
    },
    {
      id: 'maestrias', label: 'Maestrías',
      children: [
        { label: 'MBA', page: 'mba' },
        { label: 'Maestría en Innovación Educativa', page: 'mie' },
      ]
    },
    { id: 'preparatoria', label: 'Preparatoria', page: 'preparatoria' },
    { id: 'admisiones', label: 'Admisiones', page: 'admisiones' },
  { id: 'blog', label: 'Blog', page: 'blog' },
  ];

  const openDropdown = (id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(id);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDropdown(null), 120);
  };

  const handleNav = (page) => {
    if (page === 'blog') { window.location.href = '/blog/'; return; }
    setMenuOpen(false);
    setDropdown(null);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    onNavigate(page);
  };

  const isActive = (group) => {
    if (group.page) return currentPage === group.page;
    if (group.children) return group.children.some(c => c.page === currentPage);
    return false;
  };

  return (
    <header style={{
      ...navS.header,
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.13)' : '0 1px 0 rgba(0,0,0,0.07)',
    }}>
      <div style={navS.inner}>
        <img
          src={logoSrc}
          alt="Universidad CIES"
          style={navS.logo}
          onClick={() => handleNav('home')}
        />

        {/* Desktop nav */}
        <nav style={navS.nav} className="nav-desktop">
          {navGroups.map(group => (
            <div key={group.id} style={navS.navItem}
              onMouseEnter={() => group.children ? openDropdown(group.id) : null}
              onMouseLeave={() => group.children ? scheduleClose() : null}
            >
              <button
                style={{ ...navS.navLink, ...(hoveredLink === group.id ? navS.navLinkHover : {}), ...(isActive(group) ? navS.navLinkActive : {}) }}
                onMouseEnter={() => setHoveredLink(group.id)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => group.page ? handleNav(group.page) : openDropdown(dropdown === group.id ? null : group.id)}
              >
                {group.label}
                {group.children && (
                  <svg style={{ ...navS.chevron, transform: dropdown === group.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} viewBox="0 0 10 6" fill="none" width="10" height="6">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>

              {group.children && dropdown === group.id && (
                <div style={navS.dropdown}
                  onMouseEnter={() => openDropdown(group.id)}
                  onMouseLeave={() => scheduleClose()}
                >
                  {group.children.map(c => (
                    <DropItem key={c.page} item={c} active={currentPage === c.page} onNav={handleNav} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button style={navS.cta} className="nav-cta-desktop" style={{display: isMobile ? 'none' : undefined}} onClick={() => handleNav('admisiones')}>Inscríbete</button>

        {/* Burger */}
        <button style={navS.burger} className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><line x1="4" y1="4" x2="18" y2="18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="4" x2="4" y2="18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></>
              : <><line x1="3" y1="6" x2="19" y2="6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="11" x2="19" y2="11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="16" x2="19" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={navS.mobile}>
          {navGroups.map(group => (
            <div key={group.id}>
              {group.page ? (
                <a href={group.page === 'blog' ? '/blog/' : (window.CIES_NAV ? window.CIES_NAV[group.page] : '#')} style={{...navS.mobileLink, textDecoration:'none', display:'block'}}>{group.label}</a>
              ) : (
                <>
                  <div style={navS.mobileGroup}>{group.label}</div>
                  {group.children.map(c => (
                    <a key={c.page} href={window.CIES_NAV ? window.CIES_NAV[c.page] : '#'} style={{...navS.mobileChild, textDecoration:'none', display:'block'}}>{c.label}</a>
                  ))}
                </>
              )}
            </div>
          ))}
          <button style={navS.mobileCta} onClick={() => handleNav('admisiones')}>Inscríbete</button>
          {/* Redes sociales en menú móvil */}
          <div style={{ display:'flex', gap:12, padding:'16px 0 4px', justifyContent:'center' }}>
            <a href="https://www.facebook.com/universidadciesmx" target="_blank" rel="noopener noreferrer" style={navS.mobileSocial} title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/universidadciesbc/" target="_blank" rel="noopener noreferrer" style={navS.mobileSocial} title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/526644901395" target="_blank" rel="noopener noreferrer" style={{ ...navS.mobileSocial, color:'#25D366' }} title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const navS = {
  header: { position:'sticky', top:0, zIndex:200, background:'#fff', transition:'box-shadow 0.2s ease' },
  inner: { maxWidth:1200, margin:'0 auto', padding:'0 24px', height:72, display:'flex', alignItems:'center', gap:0 },
  logo: { height:36, objectFit:'contain', flexShrink:0, cursor:'pointer', marginRight:32 },
  nav: { display: isMobile ? 'none' : 'flex', gap:2, flex:1, alignItems:'center' },
  navItem: { position:'relative' },
  navLink: { fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:500, color:'#3D3D3D', background:'none', border:'none', cursor:'pointer', padding:'8px 12px', borderRadius:4, display:'flex', alignItems:'center', gap:4, transition:'color 0.15s,background 0.15s', whiteSpace:'nowrap' },
  navLinkHover: { background:'#F0F3FA', color:'#2B4DA8' },
  navLinkActive: { color:'#2B4DA8', fontWeight:600, background:'#E8EDF8' },
  chevron: { opacity:0.6 },
  dropdown: { position:'absolute', top:'calc(100% + 2px)', left:0, background:'#fff', borderRadius:8, boxShadow:'0 8px 32px rgba(0,0,0,0.14)', padding:'8px', minWidth:220, zIndex:300 },
  dropItem: { display:'block', width:'100%', textAlign:'left', fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:400, color:'#3D3D3D', background:'none', border:'none', cursor:'pointer', padding:'10px 14px', borderRadius:4, transition:'background 0.12s,color 0.12s' },
  dropItemHover: { background:'#F0F3FA', color:'#2B4DA8' },
  dropItemActive: { background:'#E8EDF8', color:'#2B4DA8', fontWeight:600 },
  cta: { background:'#C23535', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'9px 22px', borderRadius:4, border:'none', cursor:'pointer', flexShrink:0, marginLeft:16, transition:'background 0.2s' },
  burger: { display: isMobile ? 'flex' : 'none', background:'none', border:'none', cursor:'pointer', padding:4, marginLeft:'auto' },
  mobile: { background:'#fff', borderTop:'1px solid #E8E8E8', padding:'12px 24px 20px', display:'flex', flexDirection:'column' },
  mobileLink: { background:'none', border:'none', textAlign:'left', width:'100%', fontFamily:"'Figtree',sans-serif", fontSize:15, fontWeight:500, color:'#1A1A1A', padding:'12px 0', borderBottom:'1px solid #F0F0F0', cursor:'pointer' },
  mobileGroup: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, color:'#8A8A8A', letterSpacing:'0.08em', textTransform:'uppercase', padding:'14px 0 4px' },
  mobileChild: { background:'none', border:'none', textAlign:'left', width:'100%', fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:400, color:'#3D3D3D', padding:'10px 14px', cursor:'pointer', borderBottom:'1px solid #F5F5F5' },
  mobileCta: { background:'#C23535', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:15, padding:'13px 20px', borderRadius:4, border:'none', cursor:'pointer', marginTop:16, textAlign:'center' },
  mobileSocial: { display:'flex', alignItems:'center', justifyContent:'center', width:38, height:38, borderRadius:'50%', background:'#F5F5F5', color:'#3D3D3D', textDecoration:'none' },
};

Object.assign(window, { Nav });
