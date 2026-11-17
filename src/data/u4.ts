import type { WebUnit } from '../types/web';

// Prototipo: 5 de los 15 apartados del guion (docs/medicinasigloXX_u4.docx).
export const u4: WebUnit = {
  title: 'El desarrollo de la medicina en el siglo XX',
  subtitle: 'Unidad 4',
  description: 'Grandes avances y grandes retos de la medicina en el siglo XX.',
  cover: {
    src: '/images/u4/portada_fetos.jpg',
    alt: 'Dos fetos preservados en frascos de vidrio dentro de una vitrina de museo',
    credit: 'Gemini. (2026). Imagen de fetos preservados en vitrinas de exhibición [imagen]. Generada por inteligencia artificial de https://gemini.google.com/',
  },
  sections: [
    {
      id: 'introduccion',
      label: 'Introducción. Los grandes cambios de la medicina',
      title: 'Los grandes cambios de la medicina',
      screens: [[
        {
          type: 'stats',
          items: [
            { value: '34 años', label: 'Esperanza de vida al comenzar el siglo XX' },
            { value: '73 años', label: 'Esperanza de vida al concluir el siglo XX' },
          ],
        },
        {
          type: 'text',
          columns: 2,
          paragraphs: [
            'Entre la medicina del siglo XX y la de los siglos anteriores, existe un abismo, producto de hallazgos, descubrimientos e invenciones que se fueron acumulando. Los avances del siglo XX contribuyeron a la consolidación de la medicina científica occidental como un sistema médico de alcance global.',
            'El ejercicio médico incorporó nuevas herramientas diagnósticas y terapéuticas y robusteció sus fundamentos científicos mediante el estudio del cuerpo humano, en niveles progresivamente más complejos: desde los órganos y los tejidos hasta las estructuras moleculares como el ADN, el ARN y, finalmente, el genoma humano, que permitió conocer la esencia misma de la herencia, dejó de sustentarse exclusivamente en la observación clínica y comenzó a apoyarse en el trabajo de laboratorio, integrándose con la biología molecular, la genética, la farmacología y la tecnología.',
          ],
        },
      ]],
    },
    {
      id: 'diagnostico',
      label: 'Diagnóstico e imagenología',
      title: 'Diagnóstico e imagenología',
      screens: [[
        {
          type: 'hotspots',
          image: {
            src: '/images/u4/resonancia_philips.jpg',
            alt: 'Equipo de resonancia magnética en una sala de hospital',
            credit: 'Ainali, J. (2008). Resonancia magnética [imagen]. CC BY 3.0. Tomada de https://commons.wikimedia.org/w/index.php?curid=3546051',
          },
          points: [
            {
              x: 22, y: 62,
              title: 'Inicio del siglo: rayos X',
              text: 'La visualización del interior del organismo fue posible gracias al desarrollo tecnológico. El siglo comenzó con los rayos X, descubiertos por el físico alemán Wilhelm Conrad Röntgen, que inauguraron el área de imagenología y transformaron el diagnóstico médico de forma no invasiva.',
              image: {
                src: '/images/u4/cirujano_ww1.jpg',
                alt: 'Cirujano operando en un hospital de campaña con un equipo de rayos X',
                credit: 'Gemini. (2026). Imagen de cirujano operando durante la Primera Guerra Mundial [imagen]. Generada por inteligencia artificial de https://gemini.google.com/',
              },
            },
            {
              x: 66, y: 42,
              title: 'Final del siglo: PET',
              text: 'El siglo cerró con la imagenología precisa que revela la tomografía por emisión de positrones (PET, por sus siglas en inglés), capaz de mostrar procesos metabólicos y moleculares en tiempo real. Este salto tecnológico ejemplifica cómo el diagnóstico pasó de ser morfológico a ser funcional y molecular, con alta precisión y sin ser invasivo.',
            },
          ],
        },
      ]],
    },
    {
      id: 'antibioticos',
      label: 'Terapéutica. La era de los antibióticos',
      title: 'Terapéutica. La era de los antibióticos',
      screens: [[
        {
          type: 'split',
          title: 'La penicilina',
          image: {
            src: '/images/u4/fleming_penicilina.jpg',
            alt: 'Alexander Fleming en su laboratorio, sentado frente a cultivos bacterianos',
            credit: 'Wikimedia. (1943). Synthetic production of penicillin; professor Alexander Fleming [fotografía]. Dominio público. Tomada de https://commons.wikimedia.org/w/index.php?curid=24436974',
          },
          blocks: [{ type: 'text', paragraphs: [
            'El escocés Alexander Fleming descubrió la penicilina al observar casualmente sus efectos antibióticos sobre un cultivo bacteriano. Para la década de 1940, se inició la era de los antibióticos; aunque el descubrimiento ocurrió en el Reino Unido, durante la Segunda Guerra Mundial, fue Estados Unidos el país que desempeñó un papel decisivo en la producción masiva del fármaco, que salvó millones de vidas.',
          ] }],
        },
      ]],
    },
    {
      id: 'modelo-biomedico',
      label: 'El modelo biomédico',
      title: 'El modelo biomédico',
      screens: [[
        {
          type: 'text',
          paragraphs: [
            'El siglo XX dio inicio con el paradigma científico natural de la patología, que fue el soporte de los subparadigmas: el anatomoclínico, de orientación morfológica; el fisiopatológico, fundado en la noción de los procesos; el etiopatológico, con enfoque causal; y, como diría Ortiz Quesada, la síntesis de todos, el modelo biomédico, con bases en la biología molecular.',
          ],
        },
        {
          type: 'cards',
          items: [
            {
              title: 'Concepción de la enfermedad',
              text: 'Concibe la enfermedad como una alteración biológica localizada en un órgano, tejido, célula o sistema; por tanto, explica el padecimiento exclusivamente a partir de causas físicas, químicas o genéticas, dejando al margen las dimensiones psicológicas, sociales o culturales.',
            },
            {
              title: 'Diagnóstico',
              text: 'Se encauza el diagnóstico mediante pruebas objetivas —análisis, radiografías o biopsias—; además, se recurre a terapias farmacológicas, quirúrgicas o tecnológicas y se elimina o se controla la causa biológica de la enfermedad; su eje es la curación.',
            },
            {
              title: 'Especialidades',
              text: 'El modelo biomédico permitió el desarrollo de varias especialidades: la bacteriología, la cirugía moderna, la farmacología y la medicina basada en evidencia, lo que favoreció grandes avances en vacunas, antibióticos, anestesia, trasplantes, etc., y transformó la medicina en una ciencia altamente técnica y especializada.',
            },
          ],
        },
      ]],
    },
    {
      id: 'salud-enfermedad',
      label: 'Salud-enfermedad. Fenómenos sociales',
      title: 'Salud-enfermedad. Fenómenos sociales',
      screens: [[
        {
          type: 'text',
          paragraphs: [
            'Otra característica del saber médico en el siglo XX fue el estudio de la interacción del proceso salud-enfermedad con los fenómenos sociales. Ante las condiciones insalubres y la alta morbilidad y mortalidad por enfermedades infectocontagiosas, los gobiernos instituyeron programas de salud pública enfocados fundamentalmente a la población de escasos recursos económicos; de esta forma, se implementaron programas de vivienda, alimentación, campañas de vacunación preventivas y tratamientos médicos que modificaron las estadísticas.',
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '266', label: 'Inicios del siglo XX', note: 'Muertes por tuberculosis por millón de habitantes en Inglaterra.' },
            { value: '92', label: '1962', note: 'Muertes por tuberculosis por millón de habitantes en Inglaterra.' },
            { value: '47 → 72', label: 'Finales del siglo XX', note: 'Años de esperanza de vida en Estados Unidos.' },
          ],
        },
      ], [
        {
          type: 'split',
          title: 'Salud pública en México y creación de instituciones',
          image: {
            src: '/images/u4/doctor_estetoscopio.jpg',
            alt: 'Mano de un médico sosteniendo un estetoscopio sobre un escritorio',
            credit: 'Gemini. (2026). Imagen de un doctor sosteniendo un estetoscopio [imagen]. Generada por inteligencia artificial de https://gemini.google.com/',
          },
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'El siglo XX mexicano fue el de la salubridad pública y el de la creación de instituciones de salud. El año 1943, bajo la presidencia de Manuel Ávila Camacho, trajo consigo la fundación de la Secretaría de Salubridad y Asistencia, transformada en 1982 en Secretaría de Salud, como institución rectora de la medicina.',
              ],
            },
            {
              type: 'stats',
              items: [
                { value: '1943', label: 'IMSS', note: 'Se fundó el IMSS y empezó la creación de hospitales especializados que, después, conformarían los institutos nacionales de salud.' },
                { value: '1960', label: 'ISSSTE', note: 'El 1 de enero, el Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado empezó a dar atención a trabajadores públicos.' },
              ],
            },
          ],
        },
      ]],
    },
  ],
};
