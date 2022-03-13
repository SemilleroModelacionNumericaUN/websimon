const HEADER = {
  name: "SIMON",
  logo: "images/logo.svg"
};

const NAVBAR_DATA = [
  { url: "#about-us", label: "Nosotros" },
  { url: "#projects", label: "Proyectos" },
  { url: "#developpers", label: "Desarrolladores" },
  { url: "#team", label: "Equipo" },
  { url: "#tools", label: "Herramientas" },
  { url: "#network", label: "Red" },
  { url: "#footer", label: "Contacto" },
];

const BANNER_DATA = {
  description: "Semillero de Investigación en MOdelación Numérica",
  institution: "Universidad Nacional de Colombia",
  image: "images/simon-logo.svg"
};

const ABOUT_DATA = {
  heading: "Nosotros",
  image: "images/about-img.svg",
  description_list: [
    "El semillero de investigación en Modelación Numérica fue creado en el año 2019.",
    "Participan estudiantes y profesores del Departamento de Ingeniería Civil y Agrícola de la Universidad Nacional de Colombia.",
    "Nace como una respuesta a la necesidad de los estudiantes por resolver problemas de ingeniería mediante métodos computacionales avanzados.",
    "Es un espacio extracurricular de formación académica para el fortalecimiento de competencias investigativas.",
    "Se pretende indagar y formular problemas de ingeniería, cuya solución se plantea mediante la aplicación de métodos numéricos y simulaciones en computador.",
    "En SIMON nos gusta programar y desarrollar colaborativamente."
  ]
};

const PROJECTS_DATA = {
  heading: "Proyectos",
  projects_list: [
    {
      label: "GeoDB",
      description: "Base de datos en geotecnia. Información de perforaciones de todos y para todos.",
      image: "images/geodb-logo.svg",
      github_url: "https://github.com/SemilleroModelacionNumericaUN/geoDB"
    },
    {
      label: "BIM",
      description: "Conectividad y transferencia de información en proyectos de construcción.",
      image: "images/bim-logo.svg",
      github_url: "https://github.com/SemilleroModelacionNumericaUN/ifc-processing"
    },
    {
      label: "PEFiCA",
      description: "Programa de elementos finitos a código abierto, centrado en mecánica de sólidos.",
      image: "images/pefica-logo.svg",
      github_url: "https://github.com/SemilleroModelacionNumericaUN/pefica"
    },
    {
      label: "pyFEM",
      description: "Programa de análisis matricial para estructuras reticulares tridimensionales.",
      image: "images/pyfem-logo.svg",
      github_url: "https://github.com/rvcristiand/pyFEM"
    }
  ]
};

const DEVELOPPERS_DATA = {
  heading: "Escuela de desarrolladores",
  developpers_list: [
    {
      label: "Programación visual en JavaScript 2020 07 24",
      description: "Cristian Ramíez nos presentará una implementación de interfaz de usuario (frontend) utilizando librerías JavaScript, para un programa de análisis estructural. La charla se concentre en la arquitectura interna de los objetos que se muestran en pantalla y la manera como el usuario transfiere datos mediante comendos o archivos de texto.",
      img: "images/ed-20200724-visual.png",
      github_url: "https://github.com/rvcristiand/FEM.js.git",
      youtube_url: "https://youtu.be/BepIjm31ITk"
    },
    {
      label: "¿Linux en Windows? - WSL 2020 10 02",
      description: "Sistemas operativos, Windows, Linux, Python, Anaconda, Emulador de terminal, etc.",
      img: "images/ed-20201002-wsl.png",
      // github_url: "",
      youtube_url: "https://youtu.be/JhMS2M7mqqY"
    },
    {
      label: "Trabajo colaborativo con Git y Github 2021 02 23",
      description: "Estamos retomando las actividades del semillero de investigación en modelación numérica - SIMON. Como primera actividad del semestre, queremos invitarlos a una de las charlas del espacio 'escuela de desarrolladores'.  Estaremos conversando sobre las experiencias recogidas durante el trabajo colaborativo de los muchachos al participar continuamente en diferentes proyectos desde sus computadores personales, utilizando las herramientas de control de versiones Git y Github.",
      img: "images/ed-20210223-github.png",
      // github_url: "",
      youtube_url: "https://youtu.be/moUh13NQIk8"
    },
    {
      label: "Rehaciendo la página web del semillero",
      description: "Una breve introducción a Svelte para desarrollo de páginas y aplicaciones web. Usamos la creación de una página web sencilla como pretexto para comenzar a aprender el uso de Svelte.",
      img: "images/ed-20210426-webpage.png",
      // github_url: "",
      youtube_url: "https://youtu.be/qY1qVYg4AGc"
    }

  ]
};

const NETWORK_DATA = {
  heading: "Red de investigación",
  network_list: [
    {
      // img: "./images/red1.png",
      name: "Semillero de investigación BATALÁ",
      institution: "Universidad Distrital Francisco José de Caldas",
      // url: "http://www.red1.com"
    },
    {
      // img: "./images/red1.png",
      name: "Semillero de investigación (geotecnia?)",
      institution: "Universidad Militar Nueva Granada",
      // url: "http://www.red1.com"
    },
    {
      // img: "./images/red1.png",
      name: "Grupo de investigación GIES",
      institution: "Universidad Nacional de Colombia",
      // url: "http://www.red1.com"
    }
  ]
};

const TEAM_DATA = {
  heading: "Nuestro equipo",
  team_list: [
    {
      name: "Martín Estrada Mejía",
      position: "Docente",
      email: "mestradam@unal.edu.co"
    },
    {
      name: "Dorian Luis Linero Segrera",
      position: "Docente",
      email: "dllineros@unal.edu.co"
    },
    {
      name: "Maritzabel Molina Herrera",
      position: "Docente",
      email: "mmolinah@unal.edu.co"
    },
    {
      name: "Ricardo Parra Arango",
      position: "Docente",
      email: "rparraar@unal.edu.co"
    },
    {
      name: "Mauricio Alberto Tapias Camacho",
      position: "Docente",
      email: "matapiasc@unal.edu.co"
    },
    {
      name: "Néstor Alonso Mancipe Muñoz",
      position: "Docente",
      email: "nmancipe@unal.edu.co"
    },
    {
      name: "Pedro José Romero León",
      position: "Estudiante coordinador",
      email: "promerol@unal.edu.co"
    },
    {
      name: "Cristian Danilo Ramírez Vargas",
      position: "Estudiante coordinador",
      email: "rvcristiand@unal.edu.co"
    },
    {
      name: "Daniel Santiago Vivas Suárez",
      position: "Estudiante coordinador",
      email: "dsvivass@unal.edu.co"
    },
    {
      name: "Óscar Andrés Sánchez Medina",
      position: "Estudiante coordinador",
      email: "osasanchezme@unal.edu.co"
    },
    {
      name: "David Camilo Gómez Medina",
      position: "Estudiante",
      email: "dcgomezme@unal.edu.co"
    },
  ]
};

const TOOLS_DATA = {
  heading: "Herramientas abiertas",
  description: "En el semillero se han desarrollado algunas herramientas de código abierto para apoyar actividades recurrentes en Ingeniería, con herramientas tecnológicas.",
  tools_list: [
    {
      title: "Consolidador para Excel",
      language: "VBA - Visual Basic for Applications",
      description: "Permite consolidar matrices por fila y columna creando la referencia a las celdas de las matrices consolidadas.",
      usage: "Solución de estructuras por el método de la rigidez - Ensamble de la matriz del sistema a partir de las matrices de cada elemento.",
      youtube_url: "https://drive.google.com/file/d/1lGNdNe2h5USaZScSdvM_SUa481VIUwL_/view?usp=sharing",
      live_url: "",
      img: "images/tool-consolidador.png",
      github_url: "https://github.com/osasanchezme/assembler-simon-tools",
    },
    {
      title: "Graficadora de funciones en el espacio",
      language: "Web - Javascript",
      description: "Permite graficar funciones escalares en el espacio utilizando una escala de colores.",
      usage: "Inicialmente se desarrolló como parte de un proyecto para el curso de mecánica estructural avanzanda para visualizar algunas soluciones a problemas fundamentales de la Mecánica del continuo. Sin embargo, se puede generalizar para graficar cualquier función que asigna un valor escalar a cada punto en el espacio.",
      youtube_url: "",
      live_url: "https://osasanchezme.github.io/spatial-graphs-simon-tools/",
      img: "images/tool-graficador.png",
      github_url: "https://github.com/osasanchezme/spatial-graphs-simon-tools",
    },
  ],
};

const FOOTER_DATA = {
  logo: "images/simon-logo.svg",
  description: "Estamos felices por recibir integrantes nuevos permanentemente. Por favor contáctenos por cualquier medio para participar en alguno de los proyectos que tenemos en curso.",
  contact_details: {
    email: "simonfi_bog@unal.edu.co",
    discord: "https://discord.gg/e2VsNuR7gU",
    github: "https://github.com/SemilleroModelacionNumericaUN",
    youtube: "https://www.youtube.com/channel/UCTjqO__jhZ4QKdiYI8Qtytg"
  }
};

const ALL_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  ABOUT_DATA,
  PROJECTS_DATA,
  DEVELOPPERS_DATA,
  NETWORK_DATA,
  TEAM_DATA,
  FOOTER_DATA,
  TOOLS_DATA
};

export default ALL_DATA;
