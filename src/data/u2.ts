import type { PresentationData } from '../types/presentation';

export const u2: PresentationData = {
  title: '¿Qué es un modelo médico? — Unidad 2',
  description: 'Presentación interactiva sobre modelos médicos en la historia. Recursos educativos de historia de la medicina.',
  totalSlides: 10,
  cover: {
    title: '¿Qué es un<br/>modelo<br/>médico?',
    author: 'Alba Dolores Morales Cosme',
    image: '/images/portada.jpg',
    imageAlt: 'Médico romano atendiendo a un soldado herido, fresco antiguo',
  },
  indexItems: [
    { num: 1, label: '¿Qué es un modelo médico?', slideIndex: 2 },
    { num: 2, label: 'Elementos que reconstruyen un modelo médico', slideIndex: 3 },
    { num: 3, label: 'Modelos médicos más estudiados', slideIndex: 4 },
    { num: 4, label: 'Perspectiva diacrónica/sincrónica', slideIndex: 5 },
    { num: 5, label: 'Diacronía y sincronía en la actualidad', slideIndex: 7 },
  ],
  definition: {
    badge: '1 — DEFINICIÓN',
    heading: '¿Qué es un<br/>modelo médico?',
    blocks: [
      {
        content: 'Un modelo médico es un marco que se construye para abordar la manera en la que una sociedad explica qué es la enfermedad, cómo se reconoce en el cuerpo, quién la atiende, con qué se trata y qué relaciones establecen quienes son pacientes con las sanadoras o los sanadores.',
        variant: 'primary',
      },
      {
        content: 'Es importante establecer que este concepto no es igual al de sistema médico; un modelo es una categoría de análisis que se usa en una disciplina como la historia para reconstruir diversas explicaciones, prácticas y valores, en este caso, en torno a la medicina. Un sistema médico implica una estructura social, cultural e institucional donde se articulan saberes, prácticas, actores, legitimidades y tecnologías, que una sociedad organiza y utiliza para atender las enfermedades y para establecer los requisitos a través de los cuales se legitimen tanto los saberes como quienes fungen como profesionales que intervienen en esos procesos.',
        variant: 'accent',
      },
    ],
    image: '/images/modelos.jpg',
    imageAlt: 'Atención médica en diferentes contextos históricos',
  },
  elements: {
    badge: '2 — ELEMENTOS',
    heading: 'Elementos que reconstruyen un modelo médico',
    intro: 'Al abordar, desde la historia, las características de un modelo médico se pueden reconocer aspectos relacionados con el conocimiento, así como elementos culturales y sociales. Por ejemplo, los siguientes:',
    elements: [
      {
        num: '01',
        title: 'Conceptual',
        question: '¿Qué es la enfermedad?',
        color: 'var(--color-card-ochre)',
        items: ['Un castigo divino', 'Un desequilibrio humoral', 'Una lesión en un órgano', 'Una carga genética'],
      },
      {
        num: '02',
        title: 'Diagnóstica',
        question: '¿Cómo se reconoce la enfermedad?',
        color: 'var(--color-card-mauve)',
        items: ['Descripción del pulso', 'Narrativa de la persona paciente', 'Exámenes de laboratorio'],
      },
      {
        num: '03',
        title: 'Terapéutica',
        question: '¿Cómo y con qué se interviene?',
        color: 'var(--color-card-slate)',
        items: ['Sangrías y dieta', 'Rituales', 'Medicamentos', 'Cirugía', 'Psicoterapia'],
      },
      {
        num: '04',
        title: 'Profesional',
        question: '¿Quién es el sanador o experto?',
        color: 'var(--color-card-moss)',
        items: ['Un sacerdote acompañante', 'Médica o médico reconocido oficialmente', 'Algún especialista'],
      },
    ],
    footnote: 'Además, también se implican los <strong>recursos y espacios de atención</strong>: templo, botica, hospital o plataforma digital.',
  },
  models: {
    badge: '3 — MODELOS',
    heading: 'Modelos médicos más estudiados',
    subtitle: 'Se puede reconocer que los modelos médicos son construcciones históricas porque cada uno surge en un contexto particular y se va transformando en circunstancias diversas. A lo la largo de la historia, son reconocidos distintos modelos; los más estudiados son los siguientes: ',
    models: [
      { title: 'Modelo de las medicinas antiguas', desc: '', icon: '🌿', color: '#C9A87C' },
      { title: 'Modelo Humoral', desc: '', icon: '⚕️', color: '#8BA4C4' },
      { title: 'Modelo humoral-teocéntrico', desc: 'De la Edad Media.', icon: '✝️', color: '#9C8AB5' },
      { title: 'Modelo anatomopatológico', desc: 'Primer antecedente del modelo biomédico', icon: '🔬', color: '#7EA88A' },
      { title: 'Modelo Biomédico', desc: '', icon: '🧬', color: '#C47E7E' },
    ],
    emergent: {
      icon: '🤖',
      label: 'MODELO EMERGENTE',
      title: 'Modelo Digital-Tecnológico',
      summary: '',
      detail: 'Recientemente, se ha reconocido que se está conformando un modelo que podría llamarse digital-tecnológico.',
    },
  },
  timeline: {
    badge: '4 — PERSPECTIVA DIACRÓNICA',
    heading: 'Línea del tiempo de los modelos médicos',
    hint: 'Haz clic en cada época para ver más información',
    entries: [
      { model: 'Medicinas Antiguas', era: 'Culturas Antiguas', dates: 'Prehistoria — culturas antiguas', emoji: '🏺' },
      { model: 'Modelo Humoral', era: 'Etapa Greco-romana', dates: 'Siglos IV a.C. — V d.C.', emoji: '🏛️' },
      { model: 'Humoral Teocéntrico', era: 'Edad Media', dates: 'Siglo V — XV', emoji: '⛪' },
      { model: 'Anatomopatológico', era: 'Etapa Moderna', dates: 'Siglo XV — XIX', emoji: '🔭' },
      { model: 'Modelo Biomédico', era: 'Etapa Contemporánea', dates: 'Siglo XX — Actualidad', emoji: '🏥' },
    ],
    tableRows: [
      { model: 'Medicinas Antiguas', era: 'Prehistoria / Culturas Antiguas', chars: 'Modelo mágico, empírico y teúrgico. Médico-sacerdote o chamán.', period: 'Prehistoria — Culturas antiguas' },
      { model: 'Humoral', era: 'Época Antigua', chars: 'Hipócrates a Galeno. Esculapio. Templos-escuela.', period: 'Siglos IV a. C. — IV d. C.' },
      { model: 'Humoral-Teúrgico', era: 'Edad Media', chars: 'Medicina cristiana y medieval. Medicina monástica. Hospitales (s. IV). Universidades (s. XI).', period: 'S. V — XV' },
      { model: 'Anatomopatológico', era: 'Moderna / Renacimiento', chars: 'Revaloración anatómica. Primeros instrumentos. Enseñanza clínica. Cirujano.', period: 'Siglos XIV — XIX' },
      { model: 'Biomédico', era: 'Contemporánea', chars: 'Teoría bacteriológica. Medicina de laboratorio. Medicina de patente.', period: 'Siglo XX — hoy' },
    ],
  },
  sync: {
    badge: '4 — PERSPECTIVA SINCRÓNICA',
    comparisons: [
      { icon: '→', title: 'Diacrónica', text: 'A lo largo del tiempo. Permite estudiar cómo ha cambiado el conocimiento anatómico, los hospitales, etc. Perspectiva de continuidad y desarrollo lineal.', variant: 'primary' },
      { icon: '⊙', title: 'Sincrónica', text: 'Un momento histórico en detalle. Reconoce que más de un modelo médico puede estar ocurriendo <em>al mismo tiempo</em>, con múltiples factores: científicos, sociales, culturales y artísticos.', variant: 'accent' },
    ],
    important: 'Aunque un modelo caracterice una época, <strong>nunca es el único, ni elimina al anterior, ni desaparece completamente</strong> en la siguiente etapa.',
    example: {
      label: 'EJEMPLO DE SINCRONÍA HISTÓRICA — EDAD MEDIA',
      text: 'Durante la <strong>Peste Negra</strong>, médicos y personas consideraron que las causas eran: <strong>humores alterados</strong>, un <strong>castigo divino</strong>, <strong>miasmas</strong> de cementerios o aguas estancadas e, incluso, la <strong>influencia de los astros</strong>.',
      footnote: 'No se busca determinar cuál era "correcta", sino comprender la complejidad de los factores que inciden en la vivencia de un episodio histórico.',
    },
    image: '/images/sincronia.png',
    imageAlt: 'Doctor de la plaga medieval, grabado histórico del siglo XVII',
  },
  actuality: {
    badge: '5 — ACTUALIDAD',
    heading: 'Diacronía-sincronía en la actualidad',
    intro: 'Esta mirada que va de lo diacrónico a lo sincrónico permite entender no sólo la complejidad de la historia de la medicina, sino también la dinámica compleja de la práctica médica en la actualidad.',
    bgImage: '/images/sala_espera.png',
    boxes: [
      {
        image: '/images/capilla_hospital.png',
        title: 'Hospital tecnológico + espacio sagrado',
        text: 'Un hospital que, al mismo tiempo que aloja quirófanos con alta tecnología médica, da cabida a un espacio para la oración que otorga alivio a familiares de una persona enferma.',
        delay: '0.1s',
      },
      {
        icon: '🧿',
        title: 'Pulsera protectora + revisión médica',
        text: 'Un pequeño paciente cuya madre lo protege con una pulsera de "ojo de venado" y que, puntualmente, lo lleva a su revisión médica.',
        delay: '0.25s',
      },
      {
        icon: '🔄',
        title: 'Sincronía compleja',
        text: 'No es que la institución "retroceda" ni que la madre tenga pensamiento mágico. Se trata de la realidad compleja donde, de manera sincrónica, ocurre más de un fenómeno: prácticas institucionales, creencias personales y herencia cultural.',
        delay: '0.4s',
      },
    ],
  },
  conclusion: {
    badge: 'CONCLUSIÓN',
    heading: 'Una comprensión<br/>más completa',
    paragraphs: [
      'Al abordar el cambio y las diferentes perspectivas, no estamos pensando en complicar el panorama histórico; al contrario, consideramos que con tales herramientas se revela la <strong>riqueza multifacética de la medicina</strong>, de su ejercicio y de sus protagonistas.',
      'Todo con el propósito de ofrecer una comprensión más completa de la manera en la que ha <strong>evolucionado a lo largo del tiempo</strong>.',
    ],
    tags: [
      { text: 'Perspectiva diacrónica →', variant: 'primary-bg' },
      { text: 'Perspectiva sincrónica →', variant: 'accent-bg' },
      { text: 'Comprensión compleja ✓', variant: 'primary-solid' },
    ],
    image: '/images/modelos.png',
  },
  sources: {
    heading: 'Fuentes de información',
    sources: [
      { type: 'book', text: 'Echavarría, Ruy. (2021). Revolución científica y medicina. El gran cambio de paradigma. En Martha Eugenia Rodríguez y Ruy Echavarría (Eds.). <em>La medicina en la historia</em> (pp. 163–176). Médica Panamericana.' },
      { type: 'book', text: 'Laín, Pedro. (1972). <em>Historia universal de la medicina.</em> Salvat.' },
      { type: 'book', text: 'Lock, Margaret y Nguyen, Vinh-Kim. (2018). <em>An anthropology of biomedicine.</em> Wiley Blackwell.' },
      { type: 'electronic', text: 'Fuller, Jonathan. (2025). The new medical model. En <em>The new modern medicine. Disease, evidence, and epidemiological medicine</em> (pp. 21–68). Oxford University Press. ', url: 'https://doi.org/10.1093/9780190066178.003.0002' },
    ],
  },
};
