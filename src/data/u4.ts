import type { WebUnit } from '../types/web';

// Los 15 apartados del guion (docs/medicinasigloXX_u4.docx).
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
      id: 'trasplante-corazon',
      label: 'Cirugía. Primer trasplante de corazón',
      title: 'Cirugía. Primer trasplante de corazón',
      screens: [[
        {
          type: 'split',
          image: {
            src: '/images/u4/barnard.jpg',
            alt: 'Retrato en blanco y negro del cirujano Christiaan Barnard',
            credit: 'Commons Wikimedia. (1972). Christiaan Barnard [fotografía]. CC BY 4.0. Tomada de https://commons.wikimedia.org/w/index.php?curid=142422502',
          },
          blocks: [
            {
              type: 'stats',
              items: [{ value: '18 días', label: 'Sobrevivió Louis Washkansky al primer trasplante de corazón' }],
            },
            {
              type: 'text',
              paragraphs: [
                'El cirujano sudafricano Christiaan Barnard realizó con éxito el primer trasplante de corazón humano del mundo en el Hospital Groote Schuur, de Ciudad del Cabo, Sudáfrica. El paciente, Louis Washkansky —53-56 años—, sobrevivió 18 días, pero el hecho transformó la medicina (Lyons y Petrucelli, 1984).',
              ],
            },
          ],
        },
      ]],
    },
    {
      id: 'trasplantes-mexico',
      label: 'Cirugía. Trasplantes en México',
      title: 'Cirugía. Trasplantes en México',
      celebrate: true,
      screens: [[
        {
          type: 'split',
          image: {
            src: '/images/u4/arguero.jpg',
            alt: 'El doctor Rubén Argüero Sánchez, sonriente, con bata de la UNAM y un libro abierto en las manos',
            // shortcut: fuente tomada del Genially anterior sin crédito; diseño instruccional debe confirmarla
            credit: 'Dr. Rubén Argüero Sánchez [fotografía]. Fuente por confirmar.',
          },
          blocks: [
            {
              type: 'stats',
              items: [
                {
                  value: '1963',
                  label: 'Primer trasplante de órganos en México',
                  note: 'El doctor Federico Ortiz Quesada trasplantó un riñón de donante vivo en el Instituto Mexicano del Seguro Social (IMSS).',
                },
                {
                  value: '1988',
                  label: 'Primer trasplante exitoso de corazón en México',
                  note: 'Lo llevó a cabo el doctor Rubén Argüero Sánchez, de la Facultad de Medicina de la Universidad Nacional Autónoma de México (UNAM).',
                },
              ],
            },
          ],
        },
      ]],
    },
    {
      id: 'modelo-biomedico',
      label: 'El modelo biomédico',
      title: 'El modelo biomédico',
      screens: [[
        {
          type: 'callout',
          text: 'El siglo XX dio inicio con el paradigma científico natural de la patología, que fue el soporte de los subparadigmas: el anatomoclínico, de orientación morfológica; el fisiopatológico, fundado en la noción de los procesos; el etiopatológico, con enfoque causal; y, como diría Ortiz Quesada, la síntesis de todos, el modelo biomédico, con bases en la biología molecular.',
        },
      ]],
    },
    {
      id: 'caracteristicas',
      label: 'Características del modelo biomédico',
      title: 'Características del modelo biomédico',
      screens: [[
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
      id: 'ruptura-epistemica',
      label: 'Ruptura epistémica en el conocimiento de la enfermedad',
      title: 'Ruptura epistémica en el conocimiento de la enfermedad',
      screens: [[
        {
          type: 'split',
          image: {
            src: '/images/u4/mind_body.jpg',
            alt: 'Libro Mind and body: psychosomatic medicine, de Flanders Dunbar, sobre un escritorio',
            credit: 'Gemini. (2026). Imagen del libro Mind and body: psychosomatic medicine [imagen]. Generada por inteligencia artificial de https://gemini.google.com/',
          },
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'El siglo XX, caracterizado por su progreso científico y tecnológico, cuyo saber médico centró la visión de la enfermedad en las alteraciones orgánicas a nivel molecular, susceptibles de medición, empezó, como señala Ortiz (2004), con una ruptura epistémica en el conocimiento de la enfermedad, pues, a partir de la teoría psicoanalítica propuesta por el médico austriaco Sigmund Freud —1856-1939—, las personas pacientes empezaron a narrar sus enfermedades y padecimientos ante los médicos que les prestaban atención; fueron pacientes escuchados, visualizados como personas, por lo que la relación médico-persona enferma sobrepasó la rutina de sólo hacer las revisiones físicas.',
              ],
            },
          ],
        },
      ], [
        {
          type: 'cards',
          items: [
            {
              title: 'Psicoanálisis',
              text: 'El psicoanálisis, iniciado a finales del siglo XIX como método terapéutico, siguió vigente durante todo el siglo XX como medicina psicosomática. Entre sus representantes, está Helen Flanders Dunbar —1902-1959—, figura pionera en la medicina psicosomática en Estados Unidos, lo que impulsó la visión integral de que las emociones y la personalidad influyen directamente en la enfermedad física (Ortiz, 2004).',
            },
            {
              title: 'Enfoque antropopatológico',
              text: 'Dio pie a la investigación psique-cuerpo como un todo del sujeto, en contraposición al dualismo mente-cuerpo, planteado por el filósofo francés René Descartes —1596-1650—, quien señalaba que eran entidades distintas.',
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
    {
      id: 'especialistas',
      label: 'Formación de médicos especialistas en México',
      title: 'Formación de médicos especialistas en México',
      screens: [[
        {
          type: 'text',
          columns: 2,
          paragraphs: [
            'El médico del siglo XX empezó prácticamente como médico general, para, de inmediato, transformarse en especialista, como lo fueron exigiendo los tiempos y los avances de la ciencia. Empezó el siglo XX con unos retos y terminó la centuria con otros.',
            'Pedro Laín (1984) señala que, en la historia de la humanidad, nunca hubo un periodo en el que cambiara tanto la realidad del enfermar como en el que siguió a la Primera Guerra Mundial, donde se presentaron enfermedades por malnutrición, infecciosas, metabólicas, neoplásicas y traumatismos. Los desafíos que se enfrentaron al finalizar el siglo XX fueron de otra índole, dolencias cuya causa es fundamentalmente social: estrés, neurosis, violencia, alcoholismo, traumas, entre otras (Laín, 1984).',
          ],
        },
      ], [
        {
          type: 'cards',
          items: [
            {
              title: '1905: Hospital General de México',
              text: 'Se formalizó la atención médica especializada y su enseñanza basada en cuatro áreas básicas, con las que surgieron las escuelas de especialidades hacia 1920, con destacados médicos como el urólogo Aquilino Villanueva, el cardiólogo Ignacio Chávez, el gastroenterólogo Abraham Ayala González, el nutriólogo Salvador Zubirán y el tisiólogo Ismael Cosío Villegas.',
            },
            {
              title: '1942: Modelo de residencias',
              text: 'En el Hospital General, inició el modelo de residencias de especialización. En breve, el modelo se extendió a otras instituciones, entre ellas el Hospital Infantil de México, el de Enfermedades de la Nutrición y el Instituto Nacional de Cardiología. En 1954, inició el mismo modelo en el Centro Médico “La Raza”.',
            },
            {
              title: 'Subespecialización',
              text: 'Una tendencia ya observada a finales del siglo XX fue la subespecialización, que ha sido muy necesaria, pero en la que se debe tener cuidado de no caer en el extremo de “ser un experto en lo particular y un ignorante en lo general” (Fajardo, 2012, p. XX).',
            },
          ],
        },
      ]],
    },
    {
      id: 'bioetica',
      label: 'Comités de bioética',
      title: 'Comités de bioética',
      screens: [[
        {
          type: 'split',
          image: {
            src: '/images/u4/cesarea_equipo.jpg',
            alt: 'Equipo quirúrgico con batas azules realizando una cesárea en un quirófano',
            credit: 'Commons Wikimedia. (2009). Equipo de cesárea [fotografía]. CC BY-SA 4.0. Tomada de https://commons.wikimedia.org/w/index.php?curid=6727623',
          },
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'La bioética emergió en la década de 1970 como un campo interdisciplinario que abarca tanto problemáticas ecológicas como médicas. Su consolidación respondió a una serie de transformaciones e innovaciones tecnológicas, nuevos descubrimientos científicos y prácticas clínicas que, en ocasiones, vulneraron la dignidad de la persona paciente y que hicieron evidente la necesidad de establecer marcos éticos más rigurosos.',
              ],
            },
            {
              type: 'list',
              title: 'Principales temas de la bioética',
              items: ['Eutanasia', 'Aborto', 'Anticoncepción', 'Fertilización in vitro', 'Ingeniería genética', 'Eugenesia', 'Clonación'],
            },
          ],
        },
      ], [
        {
          type: 'split',
          reverse: true,
          image: {
            src: '/images/u4/laboratorio.jpg',
            alt: 'Investigador con bata y guantes manipulando un tubo de ensayo en un laboratorio',
            credit: 'Commons Wikimedia. (2017). Laboratorio [fotografía]. CC BY-SA 4.0. Tomada de https://commons.wikimedia.org/w/index.php?curid=65283243',
          },
          blocks: [
            {
              type: 'callout',
              text: 'Durante la segunda mitad del siglo XX, se impulsó la creación de comités de bioética, los cuales comenzaron a operar en instituciones de investigación y hospitales, con el propósito de regular y orientar la toma de decisiones en ámbitos sensibles.',
            },
          ],
        },
      ]],
    },
    {
      id: 'desafios',
      label: 'Finales del siglo XX y desafíos del siglo XXI',
      title: 'Finales del siglo XX y desafíos del siglo XXI',
      screens: [[
        {
          type: 'text',
          paragraphs: [
            'De manera paralela a los alcances y éxitos de la medicina, es importante mencionar que, al final del siglo, hay cuestiones, aún vigentes, que requieren atención.',
          ],
        },
        {
          type: 'split',
          image: {
            src: '/images/u4/resonancia_funcional.jpg',
            alt: 'Persona entrando a un equipo de resonancia magnética funcional',
            credit: 'Commons Wikimedia. (2019). Resonancia magnética [fotografía]. Thomas Angus, Imperial College London. CC BY-SA 4.0. Tomada de https://commons.wikimedia.org/w/index.php?curid=89222586',
          },
          blocks: [
            {
              type: 'list',
              title: 'Logros de la medicina en la etapa moderna',
              items: [
                'Control de enfermedades infecciosas devastadoras',
                'Medicina altamente especializada y basada en evidencia',
                'Trasplantes, antibióticos, vacunas y cirugía avanzada',
                'Aumento de la esperanza de vida de 34 a 73 años',
                'Creación de instituciones sólidas de salud pública',
                'Imagenología de alta precisión y diagnóstico molecular',
              ],
            },
          ],
        },
      ], [
        {
          type: 'list',
          title: 'Desafíos de la medicina en la actualidad',
          items: [
            '<strong>Deshumanización en la relación médico-paciente:</strong> el médico ha tratado a la persona enferma con menos cortesía, olvidando que, como se cita en Laín (1984), “[…] El primer acto del tratamiento es el acto de dar la mano al enfermo” (p. 21).',
            '<strong>Altos costos:</strong> la tecnología, muy eficiente, resultó inaccesible para un alto porcentaje de la población.',
            '<strong>Enfermedades crónicas no cedentes:</strong> cáncer, sida, diabetes, hipertensión y enfermedades degenerativas.',
            '<strong>Nuevas dolencias de causa social:</strong> estrés, neurosis, violencia, alcoholismo, depresión y traumatismos.',
            'Se debe mejorar la atención a la población mayor y a la violencia familiar.',
          ],
        },
      ]],
    },
    {
      id: 'tendencias',
      label: 'Pregunta interactiva',
      title: 'Tres grandes tendencias del saber médico en el siglo XX',
      screens: [[
        {
          type: 'split',
          image: {
            src: '/images/u4/auscultacion.jpg',
            alt: 'Médico auscultando a una paciente con un estetoscopio',
            credit: 'Commons Wikimedia. (2006). Auscultación en una mujer [fotografía]. Dominio público. Tomada de https://commons.wikimedia.org/w/index.php?curid=6254910',
          },
          blocks: [
            {
              type: 'cards',
              columns: 2,
              items: [
                { title: 'Modelo biomédico', text: '<ul><li>Enfermedad, a nivel de alteración molecular</li><li>Diagnóstico objetivo</li><li>Terapia con fármacos o cirugía</li></ul>' },
                { title: 'Enfoque psicosomático', text: '<ul><li>Psicoanálisis —Freud—</li><li>Psique-cuerpo</li><li>Medicina integral —Helen Flanders Dunbar—</li></ul>' },
                { title: 'Salud pública', text: '<ul><li>Programas de gobierno</li><li>Vacunación masiva</li><li>Vivienda y alimentación</li></ul>' },
                { title: 'Determinantes sociales', text: '<ul><li>Salud como derecho</li><li>Vivienda digna</li><li>Reducción de mortalidad</li></ul>' },
              ],
            },
            {
              type: 'text',
              paragraphs: ['Esas dimensiones no son excluyentes entre sí y representan aspectos complementarios del proceso salud-enfermedad.'],
            },
          ],
        },
      ]],
    },
    {
      id: 'conclusiones',
      label: 'Conclusiones',
      title: 'Perspectivas del profesional de la salud: reflexión final',
      screens: [[
        {
          type: 'text',
          paragraphs: [
            'El recorrido por el siglo XX revela que la medicina es una disciplina en permanente transformación, impulsada por el avance científico y tecnológico, pero también por las demandas sociales, éticas y humanísticas de cada época. El profesional de la salud del siglo XXI hereda tanto los logros como los desafíos no resueltos de la centuria anterior.',
          ],
        },
        {
          type: 'cards',
          items: [
            { title: 'Ciencia y tecnología', text: 'Continuar integrando los avances de la biología molecular, la genética y la imagenología al servicio del diagnóstico y el tratamiento preciso.' },
            { title: 'Humanización', text: 'Recuperar la dimensión humana de la relación médico-paciente, recordando que, como señala Laín (1984), la terapia inicia al darle la mano a la persona en enfermedad.' },
            { title: 'Visión social', text: 'Atender los determinantes sociales de la salud y garantizar el acceso equitativo a una medicina de calidad para toda la población.' },
            { title: 'Ética y bioética', text: 'Fortalecer los marcos éticos ante los nuevos desafíos de la ingeniería genética, la clonación, la eutanasia y las tecnologías emergentes.' },
          ],
        },
      ], [
        {
          type: 'callout',
          text: 'La historia del profesionalismo médico nos enseña que el verdadero avance de la medicina no reside únicamente en sus logros técnicos, sino en su capacidad de integrar ciencia, humanismo y justicia social al servicio del ser humano.',
        },
      ]],
    },
    {
      id: 'cierre',
      label: 'Cierre',
      title: 'Fuentes de información',
      screens: [[
        {
          type: 'list',
          title: 'Bibliografía',
          refs: true,
          items: [
            'Fajardo, Germán. (2012). Introducción. En Germán Fajardo, Enrique Graue, David Kershenobich y Pelayo Vilar (Eds.). <em>Desarrollo de las especialidades médicas en México</em>. Editorial Alfil.',
            'Laín, Pedro. (1984). <em>Historia universal de la medicina</em>. Salvat.',
            'Lavalle, Carlos y Santacruz, Javier. (2014). Conclusiones y lecciones aprendidas de la experiencia internacional. En Germán Fajardo, Javier Santacruz y Carlos Lavalle (Eds.). <em>La formación de médicos especialistas en México</em> (pp. 27-30). Academia Nacional de Medicina de México/Consejo Nacional de Ciencia y Tecnología.',
            'Lyons, Albert Sidney. y Petrucelli, R. Joseph. (1984). <em>Historia de la medicina</em>. Ediciones Doyma.',
            'Ortiz, Fernando. (2004). <em>Principia médica. La medicina y el hombre</em>. Editores de Textos Mexicanos.',
          ],
        },
      ]],
    },
  ],
};
