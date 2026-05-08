ñ// Universidad CIES — Maestrías, Preparatoria, Admisiones, Categorías

const WA = 'https://wa.me/526644901395';

// ─────────────────────────────────────────────────────────
// MAESTRÍAS INDEX
// ─────────────────────────────────────────────────────────
const MaestriasPage = ({ onNavigate }) => {
  const programas = [
    { page: 'mba', title: 'MBA', sub: 'Maestría en Administración de Empresas', dur: '4 semestres · 75 créditos', modo: 'Ejecutivo · Viernes y Sábados', desc: 'Potencia tu carrera directiva con liderazgo, finanzas corporativas, estrategia y habilidades de negociación para el mercado global.' },
    { page: 'mie', title: 'Maestría en Innovación Educativa', sub: 'Posgrado en Educación', dur: '4 semestres · 75 créditos', modo: 'Ejecutivo · Viernes y Sábados', desc: 'Transforma tu práctica educativa con metodologías innovadoras, tecnología educativa y gestión del cambio en instituciones del siglo XXI.' },
  ];
  return (
    <div>
      <PageHeader breadcrumb={[{ label: 'Posgrados' }]} eyebrow="Posgrados · Nivel Maestría" title="Maestrías" subtitle="Programas ejecutivos para profesionistas que buscan escalar su carrera. Viernes y sábados para que no pares de trabajar." onNavigate={onNavigate} />
      <section style={{ background: '#F5F5F5', padding: '72px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(420px,1fr))', gap: 28 }} className="maestrias-grid">
            {programas.map(p => (
              <div key={p.page} style={listS.card} onClick={() => onNavigate(p.page)}>
                <div style={{ ...listS.cardAccent, background: '#C23535' }} />
                <div style={listS.cardBody}>
                  <div style={listS.cardCat}>Posgrado · Maestría Ejecutiva</div>
                  <div style={listS.cardTitle}>{p.title}</div>
                  <div style={listS.cardSub}>{p.sub}</div>
                  <p style={listS.cardDesc}>{p.desc}</p>
                  <div style={listS.cardMeta}>
                    <span>{p.dur}</span><span style={listS.dot}>·</span><span>{p.modo}</span>
                  </div>
                  <div style={{ ...listS.cardLink, color: '#C23535' }}>Ver programa →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// PLANTILLA POSGRADO (single scroll, igual que ProgramPage)
// ─────────────────────────────────────────────────────────
const PostgradoPage = ({ data, onNavigate }) => {
  const waMsg = encodeURIComponent(`Hola, me interesa ${data.title} en Universidad CIES. ¿Me pueden dar más información?`);
  const waUrl = `${WA}?text=${waMsg}`;

  return (
    <div>
      <div style={pgS.header}>
        <div style={pgS.inner}>
          <div style={pgS.breadcrumb}>
            <button style={pgS.breadBtn} onClick={() => onNavigate('home')}>Inicio</button><span style={pgS.sep}>›</span>
            <button style={pgS.breadBtn} onClick={() => onNavigate('maestrias')}>Maestrías</button><span style={pgS.sep}>›</span>
            <span style={pgS.breadCur}>{data.title}</span>
          </div>
          <div style={pgS.eyebrow}>Posgrado · Maestría Ejecutiva</div>
          <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:800, color:'#C23535', marginBottom:10, letterSpacing:'0.03em' }} className="anim-hero-badge">
            {data.meta.find(m=>m.label==='RVOE')?.value}
          </div>
          <h1 style={pgS.title} className="anim-page-title">{data.title}</h1>
          <p style={pgS.sub} className="anim-page-sub">{data.subtitle}</p>
          <div style={pgS.metaRow}>
            {data.meta.map((m, i) => <span key={i} style={pgS.metaItem}>{m.icon} {m.value}</span>)}
          </div>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={pgS.btnWa}><WaIconSm /> Solicitar información por WhatsApp</a>
        </div>
      </div>

      <div style={pgS.body}>
        <div style={pgS.bodyInner} className="pg-body-inner">
          <div style={pgS.mainCol}>

            {/* Plan */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>Plan de estudios</div>
              <h2 style={pgS.h2}>{data.plan.duracion} · {data.plan.modalidad}</h2>
              <p style={pgS.bodyTxt}>Modalidad ejecutiva: {data.plan.horario}</p>
              <div style={pgS.planGrid}>
                {data.plan.cuatrimestres.map((c, i) => (
                  <div key={i} style={pgS.cuatri}>
                    <div style={pgS.cuatriNum}>{c.num}</div>
                    <div style={pgS.cuatriMats}>{c.materias.map((m, j) => <div key={j} style={pgS.materia}>· {m}</div>)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfil ingreso */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>Perfil de ingreso</div>
              <h2 style={pgS.h2}>¿A quién va dirigido?</h2>
              <ul style={pgS.list}>{data.perfilIngreso.map((item, i) => <li key={i} style={pgS.listItem}><div style={pgS.bullet}/><span>{item}</span></li>)}</ul>
            </div>

            {/* Importancia */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>Relevancia</div>
              <h2 style={pgS.h2}>¿Por qué es importante este posgrado?</h2>
              <p style={pgS.bodyTxt}>{data.importancia.desc}</p>
              <div style={pgS.impGrid}>
                {data.importancia.puntos.map((p, i) => (
                  <div key={i} style={pgS.impCard}>
                    <div style={pgS.impNum}>{String(i+1).padStart(2,'0')}</div>
                    <div style={pgS.impText}>{p}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfil egreso */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>Perfil de egreso</div>
              <h2 style={pgS.h2}>Al graduarte, serás capaz de…</h2>
              <div style={pgS.egresoGrid}>
                {data.perfilEgreso.map((item, i) => (
                  <div key={i} style={pgS.egresoCard}>
                    <div style={pgS.egresoCheck}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                    <span style={pgS.egresoText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campo laboral */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>Campo laboral</div>
              <h2 style={pgS.h2}>¿Dónde trabajan nuestros egresados?</h2>
              <div style={pgS.campoGrid}>
                {data.campoLaboral.map((c, i) => (
                  <div key={i} style={pgS.campoCard}><div style={pgS.campoDot}/><div><div style={pgS.campoT}>{c.sector}</div><div style={pgS.campoD}>{c.desc}</div></div></div>
                ))}
              </div>
            </div>

            {/* Por qué CIES */}
            <div style={pgS.section}>
              <div style={pgS.secEye}>¿Por qué CIES?</div>
              <h2 style={pgS.h2}>Lo que nos hace diferentes</h2>
              <div style={pgS.razonGrid}>
                {data.porQueCIES.map((r, i) => (
                  <div key={i} style={pgS.razonCard}><div style={pgS.razonNum}>{String(i+1).padStart(2,'0')}</div><div style={pgS.razonT}>{r.title}</div><div style={pgS.razonD}>{r.desc}</div></div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={pgS.ctaBanner}>
              <div><div style={pgS.ctaT}>¿Te interesa {data.title}?</div><div style={pgS.ctaSub}>Escríbenos por WhatsApp y te respondemos en minutos.</div></div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={pgS.ctaBtn}><WaIconSm /> Escribir por WhatsApp</a>
            </div>

          </div>

          {/* Sidebar */}
          <aside>
            <div style={pgS.sideCard}>
              <div style={pgS.sideTitle}>{data.title}</div>
              <div style={pgS.sideMetas}>
                {data.meta.map((m, i) => <div key={i} style={pgS.sideMeta}><span style={pgS.sideML}>{m.label}</span><span style={pgS.sideMV}>{m.value}</span></div>)}
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" style={pgS.sideWa}><WaIconSm /> Solicitar información</a>
              <div style={pgS.sideContact}>
                <div style={pgS.sideCI}>(664) 490-1395</div>
                <div style={pgS.sideCI}>Blvd. Federico Benítez 5, Tijuana B.C.</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const WaIconSm = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
);

// ─────────────────────────────────────────────────────────
// DATOS DE MAESTRÍAS
// ─────────────────────────────────────────────────────────
const MAESTRIA_DATA = {
  mba: {
    title: 'MBA', subtitle: 'Potencia tu carrera directiva. Liderazgo, finanzas, estrategia y habilidades de negociación para el mercado global desde Tijuana.',
    meta: [
      { label: 'RVOE', value: 'RVOE-BC-M001-M2/26', icon: '✓' },
      { label: 'Nivel', value: 'Maestría Ejecutiva', icon: '🎓' },
      { label: 'Duración', value: '4 semestres · 75 créditos', icon: '🗓' },
      { label: 'Modalidad', value: 'Presencial ejecutivo', icon: '🏫' },
      { label: 'Horario', value: 'Viernes 17:00–22:00 y Sáb 8:00–14:00', icon: '⏰' },
    ],
    importancia: {
      desc: 'El MBA es la credencial directiva más reconocida en el mundo empresarial. En un entorno donde las organizaciones necesitan líderes capaces de tomar decisiones estratégicas bajo presión, el MBA de CIES te da las herramientas para dar ese salto.',
      puntos: [
        'Los directivos con MBA ganan en promedio 40% más que aquellos sin posgrado en el mercado mexicano.',
        'Tijuana-San Diego es uno de los corredores empresariales más dinámicos de América del Norte.',
        'La transformación digital requiere líderes que combinen visión estratégica con comprensión tecnológica.',
        'El MBA abre puertas a posiciones de C-suite, consejos de administración y emprendimiento de alto impacto.',
      ]
    },
    plan: {
      duracion: '4 semestres (2 años) · 75 créditos', modalidad: 'Presencial ejecutivo', horario: 'Viernes 17:00–22:00 y Sábados 8:00–14:00',
      cuatrimestres: [
        { num: 'Semestre 1 · 18 créditos', materias: ['Economía de los negocios', 'Derecho tributario', 'Calidad total'] },
        { num: 'Semestre 2 · 19 créditos', materias: ['Desarrollo de Pequeñas y medianas empresas', 'Administración internacional', 'Desarrollo organizacional'] },
        { num: 'Semestre 3 · 18 créditos', materias: ['Desarrollo de planes de negocios', 'Administración financiera', 'Comercialización estratégica'] },
        { num: 'Semestre 4 · 20 créditos', materias: ['Formulación de negocios', 'Liderazgo aplicado'] },
      ],
    },
    perfilIngreso: ['Título de licenciatura o ingeniería', 'Mínimo 2 años de experiencia profesional (recomendado)', 'Interés en la dirección estratégica, finanzas y liderazgo', 'Capacidad de análisis y toma de decisiones bajo presión', 'Disposición para el trabajo colaborativo e intensivo'],
    perfilEgreso: ['Dirigir organizaciones o áreas estratégicas con visión global', 'Diseñar e implementar planes de negocio y estrategias competitivas', 'Gestionar finanzas corporativas y evaluar proyectos de inversión', 'Liderar equipos de alto desempeño en entornos de cambio', 'Negociar acuerdos estratégicos nacionales e internacionales', 'Transformar digitalmente organizaciones con enfoque en resultados'],
    campoLaboral: [
      { sector: 'Dirección general', desc: 'CEO, Director General o Gerente General en cualquier sector.' },
      { sector: 'Dirección financiera', desc: 'CFO, Director de Finanzas, Controller o Gerente de Planeación Financiera.' },
      { sector: 'Consultoría estratégica', desc: 'Consultor de gestión, estrategia y transformación organizacional.' },
      { sector: 'Emprendimiento', desc: 'Fundador y CEO de startup, empresa familiar o spin-off corporativo.' },
      { sector: 'Sector público', desc: 'Director de organismo público, funcionario de alto nivel o asesor de política.' },
      { sector: 'Banca e inversiones', desc: 'Analista de inversiones, Director de crédito, gestor de fondos.' },
    ],
    porQueCIES: [
      { title: 'Modalidad ejecutiva real', desc: 'Viernes noche y sábado mañana. Diseñado para profesionistas que trabajan de tiempo completo.' },
      { title: 'Docentes directivos en activo', desc: 'Todos los profesores ocupan posiciones directivas en empresas o bancos de Baja California.' },
      { title: 'Networking fronterizo', desc: 'Conecta con la red de directivos de Tijuana, Mexicali y San Diego.' },
      { title: 'Casos reales locales', desc: 'Trabajas con casos de empresas reales de la región, no solo material teórico.' },
      { title: 'Inversión accesible', desc: 'El MBA de mayor costo-beneficio de Tijuana, con planes de pago sin intereses.' },
      { title: 'Grado oficial', desc: 'Título de Maestro en Administración con validez ante la SEP.' },
    ],
  },

  mie: {
    title: 'Maestría en Innovación Educativa', subtitle: 'Transforma tu práctica educativa con metodologías innovadoras, tecnología educativa y gestión del cambio en instituciones del siglo XXI.',
    meta: [
      { label: 'RVOE', value: 'RVOE-BC-M007-M2/26', icon: '✓' },
      { label: 'Nivel', value: 'Maestría Ejecutiva', icon: '🎓' },
      { label: 'Duración', value: '4 semestres · 75 créditos', icon: '🗓' },
      { label: 'Modalidad', value: 'Presencial ejecutivo', icon: '🏫' },
      { label: 'Horario', value: 'Viernes 17:00–22:00 y Sáb 8:00–14:00', icon: '⏰' },
    ],
    importancia: {
      desc: 'La educación está en un punto de inflexión. La tecnología, la pandemia y las nuevas generaciones están transformando los modelos educativos, y las instituciones necesitan profesionales capaces de liderar ese cambio.',
      puntos: [
        'La transformación digital educativa crea demanda urgente de expertos en tecnología pedagógica e innovación.',
        'Las empresas invierten cada vez más en formación y capacitación, generando empleos para educadores con visión corporativa.',
        'Las instituciones privadas en crecimiento necesitan directivos con formación en gestión educativa de calidad.',
        'La IA y las plataformas digitales están redefiniendo cómo se diseña, imparte y evalúa el aprendizaje.',
      ]
    },
    plan: {
      duracion: '4 semestres (2 años) · 75 créditos', modalidad: 'Presencial ejecutivo', horario: 'Viernes 17:00–22:00 y Sábados 8:00–14:00',
      cuatrimestres: [
        { num: 'Semestre 1 · 18 créditos', materias: ['Didáctica General', 'Teoría Curricular', 'Trabajo en Equipo'] },
        { num: 'Semestre 2 · 18 créditos', materias: ['Pedagogía General', 'Teorías del Aprendizaje', 'Evaluación Educativa'] },
        { num: 'Semestre 3 · 20 créditos', materias: ['Diseño de Materiales Didácticos', 'Proyecto Educativo'] },
        { num: 'Semestre 4 · 19 créditos', materias: ['Microenseñanza', 'Evaluación Curricular'] },
      ],
    },
    perfilIngreso: ['Título de licenciatura concluida en cualquier área', 'Docentes, coordinadores o directivos del sector educativo', 'Interés en transformar prácticas pedagógicas con tecnología', 'Experiencia docente o en gestión educativa (recomendada)', 'Disposición para el trabajo autónomo e investigación aplicada'],
    perfilEgreso: ['Diseñar e implementar proyectos de innovación pedagógica', 'Aplicar tecnología educativa para mejorar los procesos de aprendizaje', 'Liderar procesos de cambio e innovación en organizaciones educativas', 'Gestionar instituciones con enfoque estratégico y humanista', 'Desarrollar investigación educativa aplicada', 'Diseñar programas de formación docente y capacitación'],
    campoLaboral: [
      { sector: 'Instituciones educativas', desc: 'Director, subdirector o coordinador académico en escuelas y universidades.' },
      { sector: 'Universidades', desc: 'Docente de posgrado, coordinador de programas e investigador educativo.' },
      { sector: 'Sector corporativo', desc: 'Gerente de capacitación y diseñador instruccional en empresas.' },
      { sector: 'Tecnología educativa', desc: 'Especialista en plataformas LMS, producción de contenidos digitales y cursos en línea.' },
      { sector: 'Sector público', desc: 'SEP, CONAFE, INEA, Secretaría de Educación de Baja California.' },
      { sector: 'Consultoría educativa', desc: 'Asesor en innovación pedagógica, acreditación y gestión del cambio educativo.' },
    ],
    porQueCIES: [
      { title: 'Modalidad ejecutiva', desc: 'Viernes noche y sábado mañana para docentes en activo que no pueden dejar de trabajar.' },
      { title: 'IA y tecnología integradas', desc: 'Aprenderás a aplicar inteligencia artificial, LMS, gamificación y herramientas digitales.' },
      { title: 'Proyecto de intervención real', desc: 'Tu tesis es un proyecto de mejora aplicado en tu institución educativa actual.' },
      { title: 'Docentes investigadores', desc: 'Catedráticos con experiencia en investigación y proyectos de intervención comprobados.' },
      { title: 'Red de educadores', desc: 'Conecta con directivos, docentes e innovadores de toda Baja California.' },
      { title: 'Grado oficial', desc: 'Título de Maestro en Innovación Educativa con validez ante la SEP.' },
    ],
  },
};

const MBAPage = ({ onNavigate }) => <PostgradoPage data={MAESTRIA_DATA.mba} onNavigate={onNavigate} />;
const MIEPage = ({ onNavigate }) => <PostgradoPage data={MAESTRIA_DATA.mie} onNavigate={onNavigate} />;

// ─────────────────────────────────────────────────────────
// PREPARATORIA
// ─────────────────────────────────────────────────────────
const PreparatoriaPage = ({ onNavigate }) => (
  <div>
    <PageHeader breadcrumb={[{ label: 'Preparatoria' }]} eyebrow="Nivel Medio Superior · Certificado válido ante la SEP" title="Preparatoria CIES" subtitle="Bachillerato General en modalidad escolarizada y Modalidad a Dos Años. Certificado con validez oficial ante la Secretaría de Educación Pública." onNavigate={onNavigate} />

    <section style={{ background: '#fff', padding: '72px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 56 }} className="prep-grid">

          {/* Bachillerato General */}
          <div style={prepS.card}>
            <div style={{ ...prepS.cardHeader, background: '#0F1E4A' }}>
              <div style={prepS.cardBadge}>Modalidad Escolarizada</div>
              <h2 style={prepS.cardTitle}>Preparatoria COBACH</h2>
              <p style={prepS.cardSub}>Para estudiantes que egresan de secundaria</p>
            </div>
            <div style={prepS.cardBody}>
              {[['RVOE','CBBC-406/94-1'],['Duración','3 años (6 semestres)'],['Modalidad','Presencial'],['Turno','Matutino y vespertino'],['Certificado','Válido ante la SEP']].map(([l,v],i)=>(
                <div key={i} style={prepS.infoRow}><span style={prepS.infoL}>{l}</span><span style={prepS.infoV}>{v}</span></div>
              ))}
              {['Plan de estudios oficial con validez SEP','Orientación vocacional y psicopedagógica','Actividades deportivas y culturales','Laboratorios de ciencias y computación','Preparación para el examen de admisión universitaria','Vinculación directa con carreras universitarias CIES'].map((f,i)=>(
                <div key={i} style={prepS.feat}><div style={prepS.featDot}/><span>{f}</span></div>
              ))}
              <a href={`${WA}?text=${encodeURIComponent('Hola, me interesa el Bachillerato General en Preparatoria CIES.')}`} target="_blank" rel="noopener noreferrer" style={prepS.waBtn}>
                <WaIconSm /> Solicitar información
              </a>
            </div>
          </div>

          {/* Modalidad 2 años */}
          <div style={prepS.card}>
            <div style={{ ...prepS.cardHeader, background: '#2B4DA8' }}>
              <div style={{ ...prepS.cardBadge, background: 'rgba(255,255,255,0.2)' }}>Modalidad a Dos Años</div>
              <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:800, color:'#fff', marginBottom:6, letterSpacing:'0.03em', opacity:0.9 }}>RVOE-BC-019-M2/12</div>
              <h2 style={prepS.cardTitle}>Preparatoria en 2 Años</h2>
              <p style={prepS.cardSub}>Termina el bachillerato en la mitad de tiempo</p>
            </div>
            <div style={prepS.cardBody}>
              {[['RVOE','RVOE-BC-019-M2/12'],['Duración','2 años'],['Modalidad','Presencial'],['Horario','Fines de semana'],['Certificado','Válido ante la SEP']].map(([l,v],i)=>(
                <div key={i} style={prepS.infoRow}><span style={prepS.infoL}>{l}</span><span style={prepS.infoV}>{v}</span></div>
              ))}
              {['Ideal para quienes trabajan o tienen otras actividades','Sábados y domingos con horario accesible','Mismo certificado con validez oficial ante la SEP','Sin límite superior de edad para ingresar','Grupos pequeños con atención personalizada','Posibilidad de continuar con licenciatura en CIES'].map((f,i)=>(
                <div key={i} style={prepS.feat}><div style={prepS.featDot}/><span>{f}</span></div>
              ))}
              <a href={`${WA}?text=${encodeURIComponent('Hola, me interesa la Modalidad a Dos Años de Preparatoria CIES.')}`} target="_blank" rel="noopener noreferrer" style={prepS.waBtn}>
                <WaIconSm /> Solicitar información
              </a>
            </div>
          </div>
        </div>

        {/* Requisitos */}
        <div style={prepS.reqSection}>
          <h2 style={prepS.h2}>Requisitos de admisión</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="req-grid">
            {[
              {
                titulo: 'Preparatoria COBACH (3 años)',
                docs: ['Acta de nacimiento (copia certificada)', 'CURP', 'Certificado de secundaria original', '3 fotografías tamaño infantil a color']
              },
              {
                titulo: 'Modalidad a Dos Años',
                docs: ['Acta de nacimiento (copia certificada)', 'CURP', 'Certificado de secundaria original', '3 fotografías tamaño infantil a color', 'Tener 16 años cumplidos al momento de la admisión']
              },
            ].map((r, i) => (
              <div key={i} style={prepS.reqCard}>
                <div style={prepS.reqTitle}>{r.titulo}</div>
                {r.docs.map((d, j) => (
                  <div key={j} style={prepS.reqItem}><div style={prepS.reqDot}/><span>{d}</span></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: '#0F1E4A', padding: '56px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(26px,4vw,40px)', fontWeight:800, color:'#fff', textTransform:'uppercase', marginBottom:12 }}>¿Listo para inscribirte?</h2>
        <p style={{ fontFamily:"'Figtree',sans-serif", fontSize:16, color:'rgba(255,255,255,0.7)', marginBottom:32, lineHeight:1.6 }}>Inscripciones abiertas. Escríbenos para saber el próximo período disponible.</p>
        <a href={`${WA}?text=${encodeURIComponent('Hola, me interesa la Preparatoria CIES. ¿Me pueden dar información sobre inscripciones?')}`} target="_blank" rel="noopener noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:10, background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:16, padding:'14px 32px', borderRadius:4, textDecoration:'none' }}>
          <WaIconSm /> Escribir por WhatsApp
        </a>
      </div>
    </section>
  </div>
);

// ─────────────────────────────────────────────────────────
// ADMISIONES (sin formulario — solo WhatsApp + mapa)
// ─────────────────────────────────────────────────────────
const AdmisionesPage = ({ onNavigate }) => {
  const steps = [
    { num: '01', title: 'Escríbenos por WhatsApp', desc: 'Mándanos un mensaje y te respondemos en menos de 24 horas. Sin trámites complicados.' },
    { num: '02', title: 'Orientación personalizada', desc: 'Te guiamos para elegir el programa que mejor se adapta a tu perfil y objetivos.' },
    { num: '03', title: 'Entrega de documentos', desc: 'Presenta tu documentación en campus. Te decimos exactamente qué traer.' },
    { num: '04', title: '¡Inscripción oficial!', desc: 'Realiza el pago y comienza tu carrera en Universidad CIES.' },
  ];

  const programas = [
    { cat: 'Licenciaturas', items: ['Derecho (BC-L033)', 'Comercio Exterior (BC-L008)', 'Administración de Empresas (BC-L015)', 'Ciencias de la Educación (BC-L025)'] },
    { cat: 'Ingenierías', items: ['Robótica (RVOE-BC-070-M2/15)', 'Inteligencia Artificial (BC-L040)', 'Mecatrónica (BC-L039)', 'Industrial (BC-L038)'] },
    { cat: 'Maestrías', items: ['MBA Ejecutivo', 'Maestría en Innovación Educativa'] },
    { cat: 'Preparatoria', items: ['Bachillerato General (3 años)', 'Modalidad a Dos Años'] },
  ];

  return (
    <div>
      <PageHeader breadcrumb={[{ label: 'Admisiones' }]} eyebrow="Proceso de admisión" title="Inscríbete en CIES" subtitle="Da el primer paso. Escríbenos por WhatsApp y te orientamos sin compromiso." onNavigate={onNavigate} />

      {/* CTA WhatsApp prominente */}
      <section style={{ background: '#25D366', padding: '40px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(22px,3vw,32px)', fontWeight:800, color:'#fff', textTransform:'uppercase' }}>¿Tienes dudas? Escríbenos ahora</div>
            <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:15, color:'rgba(255,255,255,0.9)', marginTop:4 }}>Respondemos en minutos · (664) 490-1395</div>
          </div>
          <a href={`${WA}?text=${encodeURIComponent('Hola, me interesa información sobre admisiones en Universidad CIES.')}`} target="_blank" rel="noopener noreferrer"
            style={{ background:'#fff', color:'#25D366', fontFamily:"'Figtree',sans-serif", fontWeight:700, fontSize:16, padding:'14px 32px', borderRadius:4, textDecoration:'none', flexShrink:0, display:'inline-flex', alignItems:'center', gap:8 }}>
            <WaIconSm /> Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* Pasos */}
      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#C23535', marginBottom:10 }}>Proceso</div>
            <h2 style={{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(26px,3.5vw,38px)', fontWeight:700, color:'#1A1A1A' }}>4 pasos para inscribirte</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="step-grid">
            {steps.map((s, i) => (
              <div key={i} style={admS.step}>
                <div style={admS.stepNum}>{s.num}</div>
                <div style={admS.stepTitle}>{s.title}</div>
                <div style={admS.stepDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas + Requisitos */}
      <section style={{ background: '#F5F5F5', padding: '48px 0 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="form-grid">
          {/* Oferta */}
          <div style={admS.infoCard}>
            <div style={admS.infoTitle}>Oferta académica</div>
            {programas.map((g, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:700, color:'#2B4DA8', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:8 }}>{g.cat}</div>
                {g.items.map((item, j) => (
                  <div key={j} style={admS.docItem}><div style={admS.docDot}/><span>{item}</span></div>
                ))}
              </div>
            ))}
          </div>

          {/* Requisitos + Costos + Contacto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={admS.infoCard}>
              <div style={{ background:'linear-gradient(135deg,#0F1E4A,#2B4DA8)', borderRadius:8, padding:'24px', marginBottom:0 }}>
                <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:8 }}>Apoyo económico</div>
                <div style={{ fontFamily:"'Varsity Impact',serif", fontSize:32, fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.05, marginBottom:10 }}>¡Becas disponibles!</div>
                <p style={{ fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.65, marginBottom:20 }}>
                  En Universidad CIES creemos que el acceso a la educación de calidad no debe tener barreras económicas. Contamos con becas parciales para estudiantes de nuevo ingreso.
                </p>
                {['Beca por mérito académico','Beca por situación económica','Descuento para familiares de alumnos','Planes de pago sin intereses'].map((b,i)=>(
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8, fontFamily:"'Figtree',sans-serif", fontSize:14, color:'rgba(255,255,255,0.9)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {b}
                  </div>
                ))}
                <a href={`https://wa.me/526644901395?text=${encodeURIComponent('Hola, estoy interesado en aplicar para una beca en Universidad CIES.')}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ marginTop:20, display:'flex', alignItems:'center', justifyContent:'center', gap:8, background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:700, fontSize:15, padding:'14px 0', borderRadius:4, textDecoration:'none' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/></svg>
                  Aplicar para beca
                </a>
              </div>
            </div>

            <div style={admS.infoCard}>
              <div style={admS.infoTitle}>Documentos requeridos</div>
              {['Acta de nacimiento (original + copia)','CURP','Certificado de estudios previos','3 fotografías tamaño infantil'].map((d,i)=>(
                <div key={i} style={admS.docItem}><div style={admS.docDot}/><span>{d}</span></div>
              ))}
            </div>

            <div style={admS.infoCard}>
              <div style={admS.infoTitle}>Contacto directo</div>
              <div style={admS.contactLine}>📍 Blvd. Federico Benítez 5, Tijuana B.C.</div>
              <div style={admS.contactLine}>📞 (664) 490-1395</div>
              <div style={admS.contactLine}>🕐 Lun–Vie 8:00–20:00 · Sáb 9:00–14:00</div>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={admS.waBtn}>
                <WaIconSm /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section style={{ background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="map-grid">
          <div style={{ height: 380, overflow: 'hidden' }}>
            <iframe
              title="Universidad CIES — Ubicación"
              src="https://maps.google.com/maps?q=Blvd.+Federico+Ben%C3%ADtez+5,+Tijuana,+Baja+California,+Mexico&output=embed&z=16"
              width="100%" height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ background: '#0F1E4A', padding: '40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(22px,2.5vw,32px)', fontWeight:800, color:'#fff', textTransform:'uppercase', marginBottom:20 }}>Cómo llegar</div>
            {[['📍','Dirección','Blvd. Federico Benítez 5, Tijuana B.C.'],['📞','WhatsApp','(664) 490-1395'],['🕐','Horario','Lun–Vie 8:00–20:00 · Sáb 9:00–14:00']].map(([icon,label,val],i)=>(
              <div key={i} style={{ display:'flex', gap:12, marginBottom:16 }}>
                <span style={{ fontSize:18 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom:2 }}>{label}</div>
                  <div style={{ fontFamily:"'Figtree',sans-serif", fontSize:15, color:'rgba(255,255,255,0.9)' }}>{val}</div>
                </div>
              </div>
            ))}
            <a href="https://share.google/W5Ssb2tu5weHgjezy" target="_blank" rel="noopener noreferrer"
              style={{ marginTop:8, display:'inline-flex', alignItems:'center', gap:8, background:'#C23535', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'11px 20px', borderRadius:4, textDecoration:'none', alignSelf:'flex-start' }}>
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// CATEGORÍAS
// ─────────────────────────────────────────────────────────
const LicenciaturasPage = ({ onNavigate }) => {
  const progs = [
    { page:'lic-derecho', title:'Derecho', clave:'RVOE-BC-021-M2/12', desc:'Formación jurídica sólida para el ámbito fronterizo. Litigación oral, derecho penal, civil, mercantil y más.' },
    { page:'lic-comercio', title:'Comercio Exterior', clave:'RVOE-BC-L008-M2/23', desc:'Domina la aduana, el T-MEC y los mercados internacionales desde la frontera más activa del mundo.' },
    { page:'lic-administracion', title:'Administración de Empresas', clave:'RVOE-BC-L015-M2/23', desc:'Lidera organizaciones con visión estratégica. Finanzas, recursos humanos, marketing y emprendimiento.' },
    { page:'lic-educacion', title:'Ciencias de la Educación', clave:'RVOE-BC-L025-M2/23', desc:'Diseña programas educativos, gestiona instituciones y aplica tecnología para transformar la educación.' },
  ];
  return <ProgramListingPage title="Licenciaturas" eyebrow="Licenciaturas · RVOE SEP" subtitle="Cuatro licenciaturas con alto índice de empleabilidad, plan de estudios actualizado y docentes en activo." programs={progs} onNavigate={onNavigate} />;
};

const IngenieriasPage = ({ onNavigate }) => {
  const progs = [
    { page:'ing-robotica', title:'Ingeniería en Robótica', clave:'RVOE-BC-070-M2/15', desc:'Diseña e integra sistemas robóticos industriales para la manufactura avanzada y automatización de la región fronteriza.' },
    { page:'ing-ia', title:'Ingeniería en Inteligencia Artificial', clave:'RVOE-BC-L040-M2/25', desc:'Machine learning, visión artificial, redes neuronales y automatización para la industria tecnológica de Tijuana.' },
    { page:'ing-mecatronica', title:'Ingeniería en Mecatrónica', clave:'RVOE-BC-L039-M2/25', desc:'Mecánica + electrónica + computación + control. La ingeniería más completa y versátil del mercado.' },
    { page:'ing-industrial', title:'Ingeniería Industrial', clave:'RVOE-BC-L038-M2/25', desc:'Optimiza procesos, reduce costos e implementa Lean y Six Sigma en manufactura, logística y servicios.' },
  ];
  return <ProgramListingPage title="Ingenierías" eyebrow="Ingenierías · RVOE SEP" subtitle="Cuatro carreras de ingeniería diseñadas para la Industria 4.0 y la economía tecnológica de la frontera." programs={progs} onNavigate={onNavigate} />;
};

const ProgramListingPage = ({ title, eyebrow, subtitle, programs, onNavigate }) => {
  const [hover, setHover] = React.useState(null);
  return (
    <div>
      <PageHeader breadcrumb={[{ label: title }]} eyebrow={eyebrow} title={title} subtitle={subtitle} onNavigate={onNavigate} />
      <section style={{ background: '#F5F5F5', padding: '72px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 24 }} className="listing-grid">
            {programs.map((p, i) => (
              <div key={p.page} style={{ ...listS.card, ...(hover === i ? listS.cardHover : {}) }}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                onClick={() => onNavigate(p.page)}>
                <div style={listS.cardAccent} />
                <div style={listS.cardBody}>
                  <div style={listS.cardCat}>{eyebrow.split('·')[0].trim()} · {p.clave}</div>
                  <div style={listS.cardTitle}>{p.title}</div>
                  <p style={listS.cardDesc}>{p.desc}</p>
                  <div style={listS.cardLink}>Ver programa →</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href={`${WA}?text=${encodeURIComponent('Hola, me interesa información sobre admisiones en Universidad CIES.')}`} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:15, padding:'14px 32px', borderRadius:4, textDecoration:'none' }}>
              <WaIconSm /> Solicitar información por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// ─── Styles ────────────────────────────────────────────────
const listS = {
  card: { background:'#fff', borderRadius:8, boxShadow:'0 2px 12px rgba(0,0,0,0.08)', overflow:'hidden', cursor:'pointer', transition:'all 0.2s ease' },
  cardHover: { boxShadow:'0 6px 24px rgba(0,0,0,0.15)', transform:'translateY(-2px)' },
  cardAccent: { height:4, background:'#2B4DA8' },
  cardBody: { padding:'20px 20px 24px' },
  cardCat: { fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'#8A8A8A', marginBottom:8 },
  cardTitle: { fontFamily:"'Varsity Impact',serif", fontSize:22, fontWeight:700, color:'#1A1A1A', lineHeight:1.15, marginBottom:10 },
  cardSub: { fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#8A8A8A', marginBottom:10 },
  cardDesc: { fontFamily:"'Figtree',sans-serif", fontSize:14, color:'#5A5A5A', lineHeight:1.55, marginBottom:14 },
  cardMeta: { display:'flex', alignItems:'center', gap:6, fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A', marginBottom:14 },
  dot: { color:'#C8C8C8' },
  cardLink: { fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:600, color:'#2B4DA8' },
};

const pgS = {
  header:{ background:'#0F1E4A', padding:'52px 0 48px' },
  inner:{ maxWidth:1200, margin:'0 auto', padding:'0 24px' },
  breadcrumb:{ display:'flex', alignItems:'center', gap:6, marginBottom:20, flexWrap:'wrap' },
  breadBtn:{ background:'none', border:'none', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.55)', cursor:'pointer', padding:0 },
  sep:{ color:'rgba(255,255,255,0.3)', fontSize:13 },
  breadCur:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.85)' },
  eyebrow:{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#C23535', marginBottom:10 },
  title:{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:800, color:'#fff', textTransform:'uppercase', lineHeight:1.05, marginBottom:12 },
  sub:{ fontFamily:"'Figtree',sans-serif", fontSize:16, color:'rgba(255,255,255,0.7)', lineHeight:1.65, maxWidth:640, marginBottom:16 },
  metaRow:{ display:'flex', gap:16, flexWrap:'wrap', marginBottom:24 },
  metaItem:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.75)', display:'flex', alignItems:'center', gap:6 },
  btnWa:{ display:'inline-flex', alignItems:'center', gap:8, background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:15, padding:'13px 24px', borderRadius:4, textDecoration:'none' },
  body:{ background:'#F5F5F5', padding:'40px 0 80px' },
  bodyInner:{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 280px', gap:28, alignItems:'flex-start' },
  mainCol:{ display:'flex', flexDirection:'column', gap:20 },
  section:{ background:'#fff', borderRadius:8, padding:'32px 28px', boxShadow:'0 2px 12px rgba(0,0,0,0.07)' },
  secEye:{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#C23535', marginBottom:6 },
  h2:{ fontFamily:"'Varsity Impact',serif", fontSize:'clamp(20px,2.5vw,28px)', fontWeight:700, color:'#1A1A1A', marginBottom:12 },
  bodyTxt:{ fontFamily:"'Figtree',sans-serif", fontSize:15, color:'#5A5A5A', lineHeight:1.7, marginBottom:20 },
  planGrid:{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:12 },
  cuatri:{ border:'1px solid #E8E8E8', borderRadius:6, overflow:'hidden' },
  cuatriNum:{ background:'#0F1E4A', color:'#fff', fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', padding:'8px 12px' },
  cuatriMats:{ padding:'10px 12px', display:'flex', flexDirection:'column', gap:4 },
  materia:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#3D3D3D', lineHeight:1.4 },
  list:{ paddingLeft:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10 },
  listItem:{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:"'Figtree',sans-serif", fontSize:15, color:'#3D3D3D' },
  bullet:{ width:8, height:8, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:6 },
  impGrid:{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14 },
  impCard:{ background:'#F0F4FF', borderRadius:8, padding:'18px 16px' },
  impNum:{ fontFamily:"'Varsity Impact',serif", fontSize:26, fontWeight:800, color:'#2B4DA8', marginBottom:6 },
  impText:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#3D3D3D', lineHeight:1.6 },
  egresoGrid:{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:10 },
  egresoCard:{ display:'flex', alignItems:'flex-start', gap:10, background:'#F5F5F5', borderRadius:6, padding:'12px 14px' },
  egresoCheck:{ width:22, height:22, background:'#2B4DA8', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 },
  egresoText:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#3D3D3D', lineHeight:1.5 },
  campoGrid:{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 },
  campoCard:{ background:'#F5F5F5', borderRadius:6, padding:'16px', display:'flex', gap:10, alignItems:'flex-start' },
  campoDot:{ width:7, height:7, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:4 },
  campoT:{ fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:700, color:'#1A1A1A', marginBottom:3 },
  campoD:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#5A5A5A', lineHeight:1.5 },
  razonGrid:{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14 },
  razonCard:{ background:'#F5F5F5', borderRadius:8, padding:'20px 16px' },
  razonNum:{ fontFamily:"'Varsity Impact',serif", fontSize:24, fontWeight:800, color:'#C23535', marginBottom:6 },
  razonT:{ fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:700, color:'#1A1A1A', marginBottom:4 },
  razonD:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#5A5A5A', lineHeight:1.55 },
  ctaBanner:{ background:'#0F1E4A', borderRadius:8, padding:'28px 24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:20, flexWrap:'wrap' },
  ctaT:{ fontFamily:"'Varsity Impact',serif", fontSize:22, fontWeight:800, color:'#fff', textTransform:'uppercase', marginBottom:4 },
  ctaSub:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.7)' },
  ctaBtn:{ background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'12px 22px', borderRadius:4, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, flexShrink:0 },
  sideCard:{ background:'#fff', borderRadius:8, boxShadow:'0 2px 12px rgba(0,0,0,0.08)', padding:'20px', position:'sticky', top:88 },
  sideTitle:{ fontFamily:"'Varsity Impact',serif", fontSize:16, fontWeight:700, color:'#1A1A1A', marginBottom:12 },
  sideMetas:{ borderTop:'1px solid #F0F0F0', borderBottom:'1px solid #F0F0F0', marginBottom:14 },
  sideMeta:{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #F8F8F8', gap:8 },
  sideML:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A', flexShrink:0 },
  sideMV:{ fontFamily:"'Figtree',sans-serif", fontSize:12, fontWeight:600, color:'#1A1A1A', textAlign:'right' },
  sideWa:{ width:'100%', background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:13, padding:'11px 0', borderRadius:4, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:6, marginBottom:14, boxSizing:'border-box' },
  sideContact:{ borderTop:'1px solid #F0F0F0', paddingTop:12, display:'flex', flexDirection:'column', gap:4 },
  sideCI:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A' },
};

const prepS = {
  card:{ background:'#fff', borderRadius:8, boxShadow:'0 2px 12px rgba(0,0,0,0.08)', overflow:'hidden' },
  cardHeader:{ padding:'28px 24px', color:'#fff' },
  cardBadge:{ display:'inline-block', background:'rgba(255,255,255,0.15)', fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:'#fff', padding:'4px 10px', borderRadius:3, marginBottom:10 },
  cardTitle:{ fontFamily:"'Varsity Impact',serif", fontSize:26, fontWeight:800, color:'#fff', marginBottom:6, lineHeight:1.1 },
  cardSub:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'rgba(255,255,255,0.75)' },
  cardBody:{ padding:'20px 24px 28px' },
  infoRow:{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #F5F5F5' },
  infoL:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#8A8A8A' },
  infoV:{ fontFamily:"'Figtree',sans-serif", fontSize:13, fontWeight:600, color:'#1A1A1A' },
  feat:{ display:'flex', alignItems:'flex-start', gap:9, padding:'7px 0', fontFamily:"'Figtree',sans-serif", fontSize:14, color:'#3D3D3D' },
  featDot:{ width:7, height:7, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:5 },
  waBtn:{ marginTop:16, width:'100%', background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'12px 0', borderRadius:4, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:8, boxSizing:'border-box' },
  reqSection:{ background:'#fff', borderRadius:8, padding:'32px', boxShadow:'0 2px 12px rgba(0,0,0,0.07)' },
  h2:{ fontFamily:"'Varsity Impact',serif", fontSize:28, fontWeight:700, color:'#1A1A1A', marginBottom:20 },
  reqCard:{ background:'#F5F5F5', borderRadius:8, padding:'20px' },
  reqTitle:{ fontFamily:"'Figtree',sans-serif", fontSize:14, fontWeight:700, color:'#1A1A1A', marginBottom:12 },
  reqItem:{ display:'flex', alignItems:'flex-start', gap:9, padding:'5px 0', fontFamily:"'Figtree',sans-serif", fontSize:14, color:'#3D3D3D' },
  reqDot:{ width:6, height:6, borderRadius:'50%', background:'#2B4DA8', flexShrink:0, marginTop:5 },
};

const admS = {
  step:{ background:'#fff', borderRadius:8, padding:'22px 18px', boxShadow:'0 2px 12px rgba(0,0,0,0.07)' },
  stepNum:{ fontFamily:"'Varsity Impact',serif", fontSize:34, fontWeight:800, color:'#C23535', lineHeight:1, marginBottom:8 },
  stepTitle:{ fontFamily:"'Figtree',sans-serif", fontSize:15, fontWeight:700, color:'#1A1A1A', marginBottom:5 },
  stepDesc:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A', lineHeight:1.55 },
  infoCard:{ background:'#fff', borderRadius:8, padding:'22px', boxShadow:'0 2px 12px rgba(0,0,0,0.07)' },
  infoTitle:{ fontFamily:"'Figtree',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'#1A1A1A', marginBottom:14 },
  infoRow:{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #F5F5F5', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#3D3D3D' },
  infoPrice:{ fontWeight:700, color:'#2B4DA8' },
  infoNote:{ fontFamily:"'Figtree',sans-serif", fontSize:12, color:'#8A8A8A', marginTop:8, lineHeight:1.5 },
  docItem:{ display:'flex', alignItems:'center', gap:8, padding:'5px 0', fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A' },
  docDot:{ width:6, height:6, borderRadius:'50%', background:'#2B4DA8', flexShrink:0 },
  contactLine:{ fontFamily:"'Figtree',sans-serif", fontSize:13, color:'#5A5A5A', padding:'3px 0', lineHeight:1.5 },
  waBtn:{ marginTop:12, width:'100%', background:'#25D366', color:'#fff', fontFamily:"'Figtree',sans-serif", fontWeight:600, fontSize:14, padding:'11px 0', borderRadius:4, textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center', gap:8, boxSizing:'border-box' },
};

Object.assign(window, { MaestriasPage, MBAPage, MIEPage, PreparatoriaPage, AdmisionesPage, LicenciaturasPage, IngenieriasPage });
