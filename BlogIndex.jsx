// Universidad CIES — Blog Index Component
const BlogIndexPage = ({ onNavigate }) => {
  const [filter, setFilter] = React.useState('Todos');
  const posts = window.BLOG_POSTS || [];
  const cats = ['Todos', ...Array.from(new Set(posts.map(p => p.category)))];
  const filtered = filter === 'Todos' ? posts : posts.filter(p => p.category === filter);

  const S = {
    wrap: {fontFamily:'Figtree, system-ui, sans-serif',color:'#1A1A1A',background:'#fff',minHeight:'100vh'},
    hero: {background:'#1a1f3c',padding:'72px 24px 48px',color:'#fff',textAlign:'center'},
    eyebrow: {fontSize:'0.8rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#C23535',marginBottom:12},
    h1: {fontFamily:'Varsity Impact, sans-serif',fontSize:'clamp(2rem,5vw,3.2rem)',color:'#fff',margin:'0 0 16px'},
    sub: {fontSize:'1.05rem',color:'rgba(255,255,255,0.75)',maxWidth:560,margin:'0 auto'},
    filters: {display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap',padding:'32px 24px 0'},
    filterBtn: (active) => ({padding:'8px 20px',borderRadius:24,border:'2px solid '+(active?'#C23535':'#ddd'),background:active?'#C23535':'#fff',color:active?'#fff':'#555',fontFamily:'Figtree, sans-serif',fontSize:'0.85rem',fontWeight:600,cursor:'pointer',transition:'all 0.2s'}),
    grid: {maxWidth:1200,margin:'40px auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:28},
    card: {border:'1px solid #eee',borderRadius:12,overflow:'hidden',cursor:'pointer',transition:'box-shadow 0.2s, transform 0.2s'},
    cardTop: {background:'#1a1f3c',height:8},
    cardBody: {padding:24},
    cardCat: {fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',color:'#C23535',marginBottom:8},
    cardTitle: {fontFamily:'Varsity Impact, sans-serif',fontSize:'1.15rem',lineHeight:1.3,color:'#1a1f3c',margin:'0 0 12px'},
    cardDesc: {fontSize:'0.9rem',color:'#666',lineHeight:1.6,margin:'0 0 16px'},
    cardMeta: {display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'0.8rem',color:'#999'},
    cardLink: {color:'#C23535',fontWeight:700,fontSize:'0.85rem',textDecoration:'none'}
  };

  const schemaList = {
    "@context":"https://schema.org","@type":"Blog",
    "name":"Blog Universidad CIES","url":"https://www.universidadcies.mx/blog/",
    "description":"Artículos sobre carreras, campo laboral e industria en Tijuana y la frontera México-Estados Unidos.",
    "publisher":{"@type":"Organization","name":"Universidad CIES","url":"https://www.universidadcies.mx"}
  };

  return React.createElement('div', {style:S.wrap},
    React.createElement('script', {type:'application/ld+json', dangerouslySetInnerHTML:{__html:JSON.stringify(schemaList)}}),
    React.createElement(Nav, {currentPage:'blog', onNavigate}),

    React.createElement('div', {style:S.hero},
      React.createElement('div', {style:S.eyebrow}, 'Blog CIES'),
      React.createElement('h1', {style:S.h1}, 'Carreras, industria y frontera'),
      React.createElement('p', {style:S.sub}, 'Guías, análisis y recursos para estudiantes y profesionistas de Tijuana y Baja California.')
    ),

    React.createElement('div', {style:S.filters},
      cats.map(c => React.createElement('button', {key:c, style:S.filterBtn(filter===c), onClick:()=>setFilter(c)}, c))
    ),

    React.createElement('div', {style:S.grid},
      filtered.map(post => React.createElement('div', {
        key:post.slug,
        style:S.card,
        onClick:()=>{ window.location.href='/blog/'+post.slug+'/'; },
        onMouseEnter:e=>{ e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'; e.currentTarget.style.transform='translateY(-2px)'; },
        onMouseLeave:e=>{ e.currentTarget.style.boxShadow=''; e.currentTarget.style.transform=''; }
      },
        React.createElement('div', {style:S.cardTop}),
        React.createElement('div', {style:S.cardBody},
          React.createElement('div', {style:S.cardCat}, post.category, ' · ', post.program.split(' ').slice(0,3).join(' ')),
          React.createElement('h2', {style:S.cardTitle}, post.title),
          React.createElement('p', {style:S.cardDesc}, post.description.substring(0,120)+'...'),
          React.createElement('div', {style:S.cardMeta},
            React.createElement('span', null, post.readTime),
            React.createElement('a', {href:'/blog/'+post.slug+'/', style:S.cardLink, onClick:e=>e.stopPropagation()}, 'Leer →')
          )
        )
      ))
    ),

    React.createElement(SiteFooter, {onNavigate})
  );
};
