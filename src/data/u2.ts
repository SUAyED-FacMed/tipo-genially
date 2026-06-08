import type { PresentationData } from '../types/presentation';

export const u2: PresentationData = {
  title: '¿Qué es un modelo médico? — Unidad 2',
  description: 'Presentación interactiva sobre modelos médicos en la historia. Recursos educativos de historia de la medicina.',
  totalSlides: 11,
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
    { num: 5, label: 'Diacronía y sincronía en la actualidad', slideIndex: 8 },
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
    badge: '4 - Perspectiva diacrónica/sincrónica',
    heading: 'Línea del tiempo de los modelos médicos',
    text: 'Cuando se estudian los modelos médicos más representativos, se suelen asociar con una etapa histórica. Observa las siguientes líneas del tiempo:',
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
  timelineContinuation: {
    badge: '4.1 - Perspectiva diacrónica/sincrónica',
    heading: '',
    intro: 'Es importante subrayar que, aunque un modelo caracterice una época, nunca es el único ni elimina al anterior, ni desaparece completamente en la siguiente etapa. Regresando a la línea del tiempo, se podría resaltar la idea de <strong>continuidad</strong>; es decir, de una práctica médica que tiene un desarrollo progresivo y lineal que lo lleva de un punto de origen a otro más reciente.',
    animatedText: 'Este enfoque es muy útil porque, por ejemplo, permite estudiar cómo ha cambiado el conocimiento anatómico a lo largo del tiempo, cómo se han transformado los hospitales, etc. Esta perspectiva se llama <strong>diacrónica</strong>; es decir, a lo largo del tiempo; sin embargo, se debe completar con otra perspectiva llamada <strong>sincrónica</strong>, a través de la cual se examina, de manera más detenida, un momento histórico, para tener una representación más detallada de la manera en la que interactúan diversos factores, ya sean científicos, sociales, culturales, artísticos, entre otros; es decir, al tener una perspectiva sincrónica, es posible reconocer que más de un aspecto o, en este caso, más de un modelo médico, están ocurriendo al mismo tiempo.',
  },
  sync: {
    badge: '4.2 — Ejemplo de sincronía histórica',
    comparisons: [
      { icon: '→', title: 'Ejemplo', text: 'La perspectiva sincrónica se puede ejemplificar citando las explicaciones que se le daban a la enfermedad durante la Edad Media; por ejemplo, la peste. En las crónicas, se refiere que los médicos y las personas consideraron que la causa eran humores alterados, pero también se habló de un castigo divino, de miasmas o emanaciones pútridas de cementerios o aguas estancadas e, incluso, se atribuyó a la influencia de los astros.', variant: 'primary' },
      { icon: '⊙', title: 'Sincrónica', text: 'Cuando cada uno de esos factores confluyen para explicar un fenómeno, no se trata de determinar cuál era la postura correcta; lo que se intenta es comprender la complejidad de los factores que inciden en la vivencia de un episodio histórico y en el proceder de los involucrados, sean expertos o no.', variant: 'accent' },
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
    intro: 'Esta mirada que va de lo diacrónico a lo sincrónico permite entender no sólo la complejidad de la historia de la medicina. También ayuda a explicar la dinámica compleja de la práctica médica en la actualidad.',
    bgImage: '/images/sala_espera.jpg',
    boxes: [
      {
        image: '/images/capilla_hospital.jpg',
        title: 'Hospital tecnológico + espacio sagrado',
        text: 'Para ilustrar el punto, pensemos en un hospital que, al mismo tiempo que aloja quirófanos con alta tecnología médica, atendido por personal especializado, da cabida a un espacio para la oración que otorga alivio a familiares de una persona enferma.',
        delay: '1s',
      },
      {
        image: '/images/pulsera.jpg',
        title: 'Pulsera protectora + revisión médica',
        text: 'O bien, piensa en un pequeño paciente cuya madre protege con una pulsera con “ojo de venado” y que, puntualmente, lo lleva a su revisión médica.',
        delay: '1.5s',
      },
      {
        image: '/images/complejo.jpg',
        title: 'Sincronía compleja',
        text: 'No se puede decir, en el caso del primer ejemplo, que una institución retroceda a la época de la medicina medieval o que, en el segundo caso, la madre tenga pensamiento mágico mezclado con el científico. Se trata más bien de la realidad compleja en la que, de manera sincrónica, ocurre más de un fenómeno al conjuntarse prácticas institucionales, creencias personales y la herencia cultural.',
        delay: '2s',
      },
    ],
  },
  conclusion: {
    badge: 'CONCLUSIÓN',
    heading: 'Una comprensión<br/>más completa',
    paragraphs: [
      'Al abordar el cambio y las diferentes perspectivas, no estamos pensando en complicar el panorama histórico; al contrario, consideramos que con tales herramientas se revela la riqueza multifacética de la medicina, de su ejercicio, de sus protagonistas, todo con el propósito de ofrecer una comprensión más completa de la manera en la que ha evolucionado a lo largo del tiempo.',
    ],
    tags: [
      { text: 'Perspectiva diacrónica →', variant: 'primary-bg' },
      { text: 'Perspectiva sincrónica →', variant: 'accent-bg' },
      { text: 'Comprensión compleja ✓', variant: 'primary-solid' },
    ],
    image: '/images/conclusiones.jpg',
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
