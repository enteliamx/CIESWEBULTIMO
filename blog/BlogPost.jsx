// Universidad CIES — Blog Post Component
const WA_BLOG = 'https://wa.me/526644901395';
const CARRERA_SLUG_FIX = {'licenciatura-administracion-tijuana':'licenciatura-administracion-empresas-tijuana','licenciatura-comercio-exterior-tijuana':'licenciatura-comercio-exterior-aduanas-tijuana','preparatoria-tijuana-certificado':'preparatoria-tijuana-certificado-sep'};

const BlogPostPage = ({ onNavigate }) => {
  const slug = (window.location.pathname.replace(/\/+$/, '').split('/').pop()) || '';
  const post = (window.BLOG_POSTS || []).find(p => p.slug === slug);

  React.useEffect(() => {
    if (post) {
      document.title = post.title;
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); }
      desc.content = post.description;
      let canon = document.querySelector('link[rel="canonical"]');
      if (!canon) { canon = document.createElement('link'); canon.rel = 'canonical'; document.head.appendChild(canon); }
      canon.href = 'https://www.universidadcies.mx/blog/' + post.slug + '/';
    }
  }, [post]);

  if (!post) return React.createElement('div', {style:{padding:'80px 24px',textAlign:'center'}},
    React.createElement('h1', {style:{fontFamily:'Varsity Impact, sans-serif',fontSize:'2rem'}}, 'Entrada no encontrada'),
    React.createElement('button', {onClick:()=>onNavigate('blog'), style:{marginTop:24,padding:'12px 24px',background:'#C23535',color:'#fff',border:'none',borderRadius:8,cursor:'pointer',fontFamily:'Figtree, sans-serif',fontSize:'1rem'}}, '← Ver todas las entradas')
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {"@type":"Organization","name":"Universidad CIES","url":"https://www.universidadcies.mx"},
    "publisher": {"@type":"Organization","name":"Universidad CIES","logo":{"@type":"ImageObject","url":"https://www.universidadcies.mx/assets/LOGO_CIES_HORIZONTAL_OFICIAL.png"}},
    "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.universidadcies.mx/blog/"+post.slug+"/"},
    "url": "https://www.universidadcies.mx/blog/"+post.slug+"/",
    "inLanguage": "es-MX",
    "about": {"@type":"Course","name":post.program,"provider":{"@type":"EducationalOrganization","name":"Universidad CIES","address":{"@type":"PostalAddress","addressLocality":"Tijuana","addressRegion":"BC","addressCountry":"MX"}}}
  };

  const S = {
    wrap: {fontFamily:'Figtree, system-ui, sans-serif',color:'#1A1A1A',background:'#fff',minHeight:'100vh'},
    hero: {background:'#1a1f3c',padding:'72px 24px 48px',color:'#fff'},
    heroInner: {maxWidth:760,margin:'0 auto'},
    breadcrumb: {display:'flex',alignItems:'center',gap:8,fontSize:'0.85rem',color:'rgba(255,255,255,0.7)',marginBottom:20,flexWrap:'wrap'},
    sep: {opacity:0.5},
    cat: {display:'inline-block',background:'rgba(194,53,53,0.85)',color:'#fff',padding:'3px 10px',borderRadius:20,fontSize:'0.75rem',fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase'},
    h1: {fontSize:'clamp(1.6rem,4vw,2.4rem)',fontFamily:'Varsity Impact, sans-serif',fontWeight:700,lineHeight:1.15,margin:'16px 0 20px'},
    meta: {display:'flex',gap:20,fontSize:'0.85rem',color:'rgba(255,255,255,0.65)',flexWrap:'wrap'},
    body: {maxWidth:760,margin:'0 auto',padding:'48px 24px'},
    article: {lineHeight:1.8,fontSize:'1.05rem'},
    cta: {background:'#f7f7f7',borderRadius:12,padding:'32px',marginTop:48,textAlign:'center'},
    ctaTitle: {fontFamily:'Varsity Impact, sans-serif',fontSize:'1.4rem',color:'#1a1f3c',marginBottom:12},
    ctaBtn: {display:'inline-flex',alignItems:'center',gap:8,background:'#C23535',color:'#fff',padding:'14px 28px',borderRadius:8,textDecoration:'none',fontWeight:700,fontSize:'1rem',border:'none',cursor:'pointer'},
    backBtn: {display:'inline-flex',alignItems:'center',gap:6,background:'none',border:'2px solid #C23535',color:'#C23535',padding:'10px 20px',borderRadius:8,cursor:'pointer',fontFamily:'Figtree, sans-serif',fontSize:'0.9rem',fontWeight:600,marginBottom:32},
    tag: {display:'inline-block',background:'#f0f0f0',color:'#555',padding:'4px 10px',borderRadius:20,fontSize:'0.8rem',marginRight:8}
  };

  const carreraSlug = CARRERA_SLUG_FIX[post.programSlug] || post.programSlug;
  const waMsg = encodeURIComponent(`Hola, leí el artículo sobre ${post.program} en Universidad CIES y me interesa obtener más información.`);
  const waUrl = `${WA_BLOG}?text=${waMsg}`;

  return React.createElement('div', {style:S.wrap},
    React.createElement('script', {type:'application/ld+json', dangerouslySetInnerHTML:{__html:JSON.stringify(schema)}}),
    React.createElement(Nav, {currentPage:'blog', onNavigate}),

    React.createElement('div', {style:S.hero},
      React.createElement('div', {style:S.heroInner},
        React.createElement('nav', {style:S.breadcrumb},
          React.createElement('a', {href:'/', style:{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}, 'Inicio'),
          React.createElement('span', {style:S.sep}, '›'),
          React.createElement('a', {href:'/blog/', style:{color:'rgba(255,255,255,0.7)',textDecoration:'none'}}, 'Blog'),
          React.createElement('span', {style:S.sep}, '›'),
          React.createElement('span', {style:{color:'#fff'}}, post.title.substring(0,50)+'...')
        ),
        React.createElement('span', {style:S.cat}, post.category),
        React.createElement('h1', {style:S.h1}, post.title),
        React.createElement('div', {style:S.meta},
          React.createElement('span', null, '📅 ', new Date(post.date).toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'})),
          React.createElement('span', null, '⏱ Lectura: ', post.readTime),
          React.createElement('span', null, '🎓 ', post.program)
        )
      )
    ),

    React.createElement('div', {style:S.body},
      React.createElement('button', {style:S.backBtn, onClick:()=>onNavigate('blog')}, '← Todas las entradas'),
      React.createElement('article', {style:S.article, dangerouslySetInnerHTML:{__html:post.content}}),

      React.createElement('div', {style:{marginTop:40,padding:'20px 24px',border:'1px solid #eee',borderLeft:'4px solid #C23535',borderRadius:8,background:'#fafafa'}},
        React.createElement('div', {style:{fontSize:'0.8rem',fontWeight:700,letterSpacing:'0.05em',textTransform:'uppercase',color:'#C23535',marginBottom:6}}, 'Carrera relacionada'),
        React.createElement('a', {href:'/'+carreraSlug+'/', style:{fontFamily:'Varsity Impact, sans-serif',fontSize:'1.15rem',color:'#1a1f3c',textDecoration:'none',fontWeight:700}}, post.program+' en Tijuana — CIES →'),
        React.createElement('p', {style:{color:'#555',margin:'6px 0 0',fontSize:'0.95rem'}}, 'Plan de estudios, RVOE y campo laboral de la carrera.')
      ),

      React.createElement('div', {style:S.cta},
        React.createElement('div', {style:S.ctaTitle}, '¿Te interesa ', post.program, '?'),
        React.createElement('p', {style:{color:'#555',marginBottom:20}}, 'Escríbenos por WhatsApp y te respondemos en minutos. Inscripción sin costo.'),
        React.createElement('a', {href:waUrl, target:'_blank', rel:'noopener noreferrer', style:S.ctaBtn}, '💬 Escribir por WhatsApp')
      )
    ),

    React.createElement(SiteFooter, {onNavigate})
  );
};
