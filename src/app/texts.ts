// ============================================================
// ONUS EXPRESS – CMR Group Presentation Texts
// Centralised copy file: edit here to update all slides
// ============================================================

// --------------- SLIDE 1 ---------------
export const slide1 = {
  subtitle: "Propuesta Estratégica para Dirección de Operaciones – CMR Group",
  cta: "Convierte tu logística en una ventaja competitiva",
  separatorLabel: "para",
};

// --------------- SLIDE DISCLAIMER ---------------
export const slideDisclaimer = {
  badge: "",
  title: "Propuesta DEMO para CMR Group",
  intro: "Esta propuesta es demostrativa y se ha elaborado con estimaciones basadas en información pública, benchmarks sectoriales y parámetros estándar de organizaciones comparables. No utiliza datos reales de CMR Group ni pretende reflejar su situación actual.",
  purposeTitle: "El objetivo es ilustrar una metodología de trabajo estructurada para:",
  purposes: [
    "Identificar posibles áreas de optimización",
    "Detectar oportunidades de mejora operativa y financiera",
    "Estimar impactos potenciales en eficiencia o rentabilidad",
  ],
  phasesTitle: "Enfoque metodológico — 3 fases",
  phases: [
    { num: "01", title: "Análisis preliminar hipotético", desc: "Construcción de un escenario estimado con fuentes públicas y referencias sectoriales." },
    { num: "02", title: "Palancas de mejora", desc: "Simulación de áreas donde suelen aparecer oportunidades en compañías similares." },
    { num: "03", title: "Proyección de impacto", desc: "Modelización orientativa basada en hipótesis explícitas y revisables." },
  ],
  footer: "Las cifras son estimativas e hipótesis ajustables con información interna validada. El propósito es abrir conversación, no emitir conclusiones definitivas.",
};

// --------------- SLIDE 2 ---------------
export const slide2 = {
  title: "Diagnostico Teorico",
  visionTitle: "Visión",
  visionText:
    "La logística nacional impacta directamente en el margen y la vida útil de los productos. La operación es una palanca financiera, no solo un coste.",
  factsTitle: "Hechos Observados",
  facts: [
    {
      text: "Entre el 60-80% de las incidencias se originan en el tramo interno; el foco de mejora debe ser el transporte nacional.",
    },
    {
      text: "Existe una falta de visibilidad térmica en la última milla, lo que reduce la capacidad de defensa ante reclamaciones.",
    },
    {
      text: "La variabilidad operativa genera imprevisibilidad financiera y presión en el margen.",
    },
  ],
  implication:
    "La optimización nacional representa una ventaja competitiva estructural sostenible.",
  implicationPrefix: "Implicación Estratégica:",
};

// --------------- SLIDE 3 ---------------
export const slide3 = {
  title: "Flujo Operativo Actual vs. Arquitectura ONUS",
  currentTitle: "Flujo Actual (Reactivo)",
  currentItems: [
    "Gestión documental reactiva",
    "Control térmico limitado",
    "FEFO estándar",
    "Gestión correctiva de incidencias",
  ],
  currentWarning: "⚠️ Sin control en tiempo real",
  onusTitle: "Arquitectura ONUS (Evolución)",
  onusItems: [
    "✓ Validación documental preventiva",
    "✓ Visibilidad termica 24/7 en tiempo real",
    "✓ Protocolos FEFO dinámicos",
    "✓ Análisis predictivo de riesgo",
  ],
  onusPositive: "✓ Control y análisis en tiempo real",
  cta: "Flujo integrado con capa de control",
};

// --------------- SLIDE 4 ---------------
export const slide4 = {
  title: "Ingeniería Técnica de Cadena de Frío",
  capTitle: "Capacidad Técnica",
  capabilities: [
    {
      title: "Monitorización Continua",
      desc: "Control por unidad en tiempo real",
    },
    {
      title: "Alertas Tempranas",
      desc: "Desviaciones de ±0,5°C detectadas al instante",
    },
    {
      title: "Modelos de Degradación",
      desc: "Por categoría de producto",
    },
  ],
  impactTitle: "Impacto Estratégico",
  impacts: [
    {
      title: "Reducción de Mermas",
      desc: "Control preciso que minimiza pérdidas",
    },
    {
      title: "Optimización de Vida Útil",
      desc: "Más días de producto en el lineal",
    },
    {
      title: "Registro Digital Trazable",
      desc: "Soporte en seguros y reclamaciones",
    },
  ],
  footer: "Protección directa del margen operativo",
};

// --------------- SLIDE 5 ---------------
export const slide5 = {
  title: "Impacto Financiero Potencial",
  subTitle: "Palancas de Mejora",
  improvements: [
    { title: "Reducción de merma", range: "0,8% – 1,5%" },
    { title: "Disminución de reclamaciones", range: "15% - 25%" },
    { title: "Mejora del OTIF", range: "+3% - +6%" },
  ],
  effectTitle: "Efecto Financiero",
  effectItems: [
    { label: "Protección directa del margen", badge: "✓ Menos mermas" },
    { label: "Reducción de penalizaciones retail", badge: "✓ Mejor OTIF" },
    { label: "Optimización de costes invisibles", badge: "✓ Menos reprocesos" },
  ],
  footer: "Impacto directo en el",
  footerHighlight: "EBITDA logístico",
};

// --------------- SLIDE 6 ---------------
export const slide6 = {
  title: "Riesgos Operativos y Ventaja Estructural",
  riskLabel: "RIESGO",
  solutionLabel: "SOLUCIÓN ONUS",
  risks: [
    { problem: "Roturas de frío", solution: "Telemetría 24/7" },
    { problem: "Errores documentales", solution: "Validación preventiva" },
    {
      problem: "Incumplimiento de ventanas horarias",
      solution: "Optimización dinámica de rutas",
    },
    {
      problem: "Reclamaciones por calidad",
      solution: "Protocolos de control con evidencia digital",
    },
  ],
  footer: "Gestión activa de riesgos =",
  footerBold: "Protección del margen",
};

// --------------- SLIDE 7 ---------------
export const slide7 = {
  title: "Resolución de Incidencias de Margen",
  problemLabel: "Problema",
  solutionLabel: "SOLUCIÓN",
  solutions: [
    { problem: "Retrasos", solution: "Optimización de rutas" },
    { problem: "Faltantes o golpes", solution: "Checklist de salida y POD digital" },
    {
      problem: "Esperas en descarga",
      solution: "Gestión activa de clientes y ETA proactiva",
    },
    {
      problem: "Cadena de frío irregular",
      solution: "Protocolo de frío trazable",
    },
  ],
  cta: "✓ Cada incidencia resuelta = Margen protegido",
};

// --------------- SLIDE 8 ---------------
export const slide8 = {
  title: "Impacto Económico Cuantificado",
  scenarioTitle: "Escenario Base",
  scenarioSubtitle: "Datos representativos del sector",
  tons: "25.000",
  tonsLabel: "Toneladas",
  totalValue: "45M€",
  totalValueLabel: "Valor Total",
  savingsTitle: "Ahorros Proyectados",
  savings: [
    { value: "450.000€", label: "Reducción de merma" },
    { value: "120.000€", label: "Menos reclamaciones" },
    { value: "170-270k€", label: "Mejora OTIF + costes invisibles" },
  ],
  totalLabel: "Impacto Total Anual Estimado",
  totalRange: "740.000€ - 840.000€",
  potential: "Potencial aproximado:",
  potentialValue: "~1.000.000€ / año",
};

// --------------- SLIDE 9 ---------------
export const slide9 = {
  title: "Impacto Económico Personalizado",
  subtitle: "Introduce tus datos para calcular el impacto en CMR Group",
  inputTitle: "Datos de CMR Group",
  volumeLabel: "Volumen Anual (Toneladas)",
  volumeExample: "Ejemplo: 25.000 Tn",
  valueLabel: "Valor Total (Millones €)",
  valueExample: "Ejemplo: 45 M€",
  disclaimer:
    "💡 Los cálculos se basan en las mejoras promedio del sector: reducción de merma (1%), reclamaciones (0.27%) y mejora de OTIF (0.5%)",
  resultsTitle: "Ahorro Proyectado",
  mermaLabel: "Reducción de Merma",
  claimsLabel: "Menos Reclamaciones",
  otifLabel: "Mejora OTIF + Costes Invisibles",
  totalImpactLabel: "IMPACTO TOTAL ANUAL",
  totalImpactSub: "Ahorro estimado para CMR Group",
  // default values
  defaultVolume: 25000,
  defaultValue: 45,
};

// --------------- SLIDE 10 ---------------
export const slide10 = {
  title: "KPIs Estratégicos Propuestos",
  kpis: [
    { title: "Nivel de servicio", desc: "OTIF por región" },
    { title: "Control térmico", desc: "Incidencias por cada 1.000 envíos" },
    { title: "Vida útil", desc: "Entregada vs. teórica" },
    { title: "Eficiencia", desc: "Coste por tonelada" },
    { title: "Riesgo", desc: "Índice de reclamación" },
  ],
  footer: "KPIs conectados con la",
  footerHighlight: "dirección estratégica",
};

// --------------- SLIDE 11 ---------------
export const slide11 = {
  title: "Propuesta de Valor",
  missionTitle: "Misión",
  missionText:
    "Ofrecer una operativa logística a medida con rapidez, eficiencia y trazabilidad en tiempo real.",
  promiseTitle: "Promesa",
  promises: [
    "Rutas adaptadas a tus necesidades",
    "Apoyo en picos de demanda",
    "Control de calidad total",
    "Monitorizacion de temperatura 24/7",
  ],
  quote: '"Tu logística, como si fuera nuestra"',
};

// --------------- SLIDE 12 ---------------
export const slide12 = {
  title: "ONUS APP y Tecnología",
  platformTitle: "Plataforma Tecnológica",
  platformDesc:
    "Tecnología propia impulsada por IA para selección y asignación óptima de recursos",
  features: [
    {
      title: "Red de Autónomos",
      desc: "Acceso a mas de 3.200 autonomos cualificados, con documentacion actualizada y en regla",
    },
    {
      title: "Asignación Ágil 24/7",
      desc: "Respuesta inmediata ante cualquier necesidad",
    },
    {
      title: "Trazabilidad Total",
      desc: "Seguimiento en tiempo real de cada envío",
    },
    {
      title: "Flota Propia",
      desc: "Complementaria para garantizar servicio",
    },
    {
      title: "Sostenibilidad",
      desc: "Green Path integrado como palanca de eficiencia sostenible",
    },
  ],
};

// --------------- SLIDE 13 ---------------
export const slide13 = {
  title: "Ventaja Competitiva para CMR Group",
  benefits: [
    {
      title: "Predictibilidad operativa",
      desc: "Control total sobre la cadena logística",
    },
    {
      title: "Menor exposición a penalizaciones retail",
      desc: "Cumplimiento garantizado de OTIF",
    },
    {
      title: "Más días de producto en el lineal",
      desc: "Optimización de vida útil",
    },
    {
      title: "Decisiones conectadas con la dirección",
      desc: "KPIs estratégicos en tiempo real",
    },
  ],
  footer: "Onus = cargo en latin = \"responsabilidad\" =",
  footerBold: "ONUS SE HACE CARGO",
};

// --------------- SLIDE 14 ---------------
export const slide14 = {
  title: "Decisión Estratégica y Plan de Activación",
  currentModelTitle: "Modelo Actual",
  currentModelItems: [
    "❌ Gestión reactiva",
    "❌ Operación variable",
    "❌ Visibilidad limitada",
    "❌ Riesgo no controlado",
  ],
  onusModelTitle: "Modelo ONUS",
  onusModelItems: [
    "✓ Gestión predictiva",
    "✓ Control del margen",
    "✓ Trazabilidad total",
    "✓ Partner estratégico",
  ],
  timelineTitle: "Cronograma de Activación",
  timeline: [
    { value: "30 días", label: "Inicio del piloto" },
    { value: "90 días", label: "Medición de impacto" },
    { value: "Escalado", label: "Según resultados" },
  ],
};

// --------------- SLIDE 15 ---------------
export const slide15 = {
  title: "Piloto Estratégico (90 Días)",
  subtitle: "Validación con riesgo controlado y resultados medibles",
  phases: [
    { title: "Implementación", desc: "En categorías sensibles (berries, aguacate)" },
    { title: "Evaluación", desc: "Financiera comparativa" },
    { title: "Revisión Ejecutiva", desc: "Análisis de resultados" },
    { title: "Despliegue", desc: "Progresivo por regiones" },
  ],
  footer: "✓ Resultados tangibles en",
  footerBold: "menos de 3 meses",
};

// --------------- SLIDE 16 ---------------
export const slide16 = {
  title: "ROI Piloto Estratégico",
  scenarioTitle: "Escenario Piloto",
  volumeLabel: "Volumen",
  volumeValue: "6.000 Tn",
  valueLabel: "Valor",
  valueValue: "10,8 M€",
  impactTitle: "Impacto Financiero",
  savingLabel: "Ahorro Estimado",
  savingValue: "163.000€",
  costLabel: "Coste Implementación",
  costValue: "45-60k€",
  roiLabel: "ROI",
  roiValue: "2,5x - 3x",
  roiSub: "Retorno de inversión",
  paybackLabel: "Payback",
  paybackValue: "< 90 días",
  paybackSub: "Recuperación de inversión",
};

// --------------- SLIDE 17 ---------------
export const slide17 = {
  title: "Diferencial ONUS",
  quoteA: '"No optimizamos envios"',
  quoteB: '"Optimizamos operaciones"',
  advantages: [
    { title: "Estructura de costes variables", desc: "Paga solo lo que necesitas" },
    { title: "Escalabilidad ante picos", desc: "Respuesta inmediata a demanda" },
    { title: "Procesos estandarizados", desc: "Calidad consistente" },
    { title: "Motor de rentabilidad", desc: "Logística que genera valor" },
    { title: "ONUS App", desc: "Tecnologia IA para asignacion, control y decision" },
    { title: "Sostenibilidad", desc: "Green Path como capa activa de eficiencia responsable" },
  ],
  cta: "Enfoque en convertir la logística en rentabilidad",
};

// --------------- SLIDE 18 ---------------
export const slide18 = {
  title: "Compromiso de Servicio",
  subtitle: "Excelencia operativa garantizada",
  services: [
    {
      title: "Equipo Dedicado",
      desc: "Account Manager y equipo operativo exclusivo",
    },
    {
      title: "Soporte 24/7",
      desc: "Atención continua en toda la cadena logística",
    },
    {
      title: "Garantía de Servicio",
      desc: "SLA comprometido con penalizaciones",
    },
    {
      title: "Mejora Continua",
      desc: "Revisiones trimestrales y optimización constante",
    },
  ],
  footer: "más allá de la logística",
  footerBold: "Partnership estratégico",
};

// --------------- SLIDE 19 ---------------
export const slide19 = {
  title: "Posible Plan de Implementacion",
  subtitle: "Roadmap estructurado para una transición sin fricciones",
  timeline: [
    {
      phase: "Fase 1",
      title: "Kick-off y Onboarding",
      duration: "Semana 1-2",
      items: [
        "Reunión inicial y alineación de objetivos",
        "Configuración de sistemas y accesos",
        "Training equipos CMR",
      ],
    },
    {
      phase: "Fase 2",
      title: "Inicio Operativo",
      duration: "Semana 3-4",
      items: [
        "Primera consolidación",
        "Monitorización intensiva",
        "Ajustes operativos",
      ],
    },
    {
      phase: "Fase 3",
      title: "Estabilización",
      duration: "Mes 2-3",
      items: [
        "Optimización de rutas",
        "Análisis de resultados",
        "Revisión ejecutiva",
      ],
    },
  ],
  footer: "en menos de 30 días",
  footerBold: "Go-live",
};

// --------------- SLIDE 20 ---------------
export const slide20 = {
  title: "Beneficios Cuantificables",
  subtitle: "Impacto medible desde el primer día",
  benefits: [
    { stat: "15-25%", label: "Reducción de costes logísticos" },
    { stat: "2-3 días", label: "Mejora en tiempos de tránsito" },
    { stat: "100%", label: "Visibilidad end-to-end" },
    { stat: "< 90 días", label: "ROI demostrable" },
  ],
  ctaTitle: "Transformación logística con resultados inmediatos",
  bullets: ["Costes optimizados", "Operación eficiente", "Control total"],
};

// --------------- SLIDE 21 ---------------
export const slide21 = {
  title: "",
  subtitle: "Transformemos juntos tu operación logística",
  contact: [
    { label: "Email", value: "info@onus.es" },
    { label: "Teléfono", value: "+34 900 000 000" },
    { label: "Web", value: "www.onus.es" },
    { label: "Consulta", value: "Contacto directo" },
  ],
  brand: "ONUS EXPRESS",
  brandTagline: "Nos Hacemos Cargo",
  closing: "Gracias por su atención",
};
