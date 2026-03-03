import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
  slide19,
  slide20,
  slide21,
  slideDisclaimer,
} from "../texts";

type MobileCard = {
  title?: string;
  description?: string;
  value?: string;
};

type MobileSlide = {
  title: string;
  subtitle?: string;
  badge?: string;
  intro?: string;
  bullets?: string[];
  cards?: MobileCard[];
  quote?: string;
  callout?: string;
};

const mobileSlides: MobileSlide[] = [
  {
    title: "ONUS EXPRESS",
    subtitle: slide1.subtitle,
    callout: slide1.cta,
  },
  {
    title: slideDisclaimer.title,
    badge: slideDisclaimer.badge,
    intro: slideDisclaimer.intro,
    bullets: [...slideDisclaimer.purposes, ...slideDisclaimer.phases.map((phase) => `${phase.num} ${phase.title}`)],
    callout: slideDisclaimer.footer,
  },
  {
    title: slide2.title,
    intro: slide2.visionText,
    bullets: slide2.facts.map((fact) => fact.text),
    callout: `${slide2.implicationPrefix} ${slide2.implication}`,
  },
  {
    title: slide3.title,
    bullets: [...slide3.currentItems, ...slide3.onusItems],
    callout: slide3.cta,
  },
  {
    title: slide4.title,
    cards: [
      ...slide4.capabilities.map((item) => ({ title: item.title, description: item.desc })),
      ...slide4.impacts.map((item) => ({ title: item.title, description: item.desc })),
    ],
    callout: slide4.footer,
  },
  {
    title: slide5.title,
    cards: [
      ...slide5.improvements.map((item) => ({ title: item.title, value: item.range })),
      ...slide5.effectItems.map((item) => ({ title: item.label, description: item.badge })),
    ],
    callout: `${slide5.footer} ${slide5.footerHighlight}`,
  },
  {
    title: slide6.title,
    cards: slide6.risks.map((item) => ({ title: item.problem, description: item.solution })),
    callout: `${slide6.footer} ${slide6.footerBold}`,
  },
  {
    title: slide7.title,
    cards: slide7.solutions.map((item) => ({ title: item.problem, description: item.solution })),
    callout: slide7.cta,
  },
  {
    title: slide8.title,
    cards: [
      { title: slide8.scenarioTitle, value: slide8.tons, description: slide8.tonsLabel },
      { title: slide8.totalValueLabel, value: slide8.totalValue, description: slide8.scenarioSubtitle },
      ...slide8.savings.map((item) => ({ title: item.label, value: item.value })),
      { title: slide8.totalLabel, value: slide8.totalRange, description: slide8.potentialValue },
    ],
    callout: `${slide8.potential} ${slide8.potentialValue}`,
  },
  {
    title: slide9.title,
    subtitle: slide9.subtitle,
    cards: [
      { title: slide9.volumeLabel, value: `${slide9.defaultVolume} Tn`, description: slide9.volumeExample },
      { title: slide9.valueLabel, value: `${slide9.defaultValue} M EUR`, description: slide9.valueExample },
      { title: slide9.mermaLabel, value: "450.000 EUR" },
      { title: slide9.claimsLabel, value: "121.500 EUR" },
      { title: slide9.otifLabel, value: "225.000 EUR" },
      { title: slide9.totalImpactLabel, value: "796.500 EUR", description: slide9.totalImpactSub },
    ],
    callout: slide9.disclaimer,
  },
  {
    title: slide10.title,
    cards: slide10.kpis.map((item) => ({ title: item.title, description: item.desc })),
    callout: `${slide10.footer} ${slide10.footerHighlight}`,
  },
  {
    title: slide11.title,
    intro: slide11.missionText,
    bullets: slide11.promises,
    quote: slide11.quote,
  },
  {
    title: slide12.title,
    intro: slide12.platformDesc,
    cards: slide12.features.map((item) => ({ title: item.title, description: item.desc })),
  },
  {
    title: slide13.title,
    cards: slide13.benefits.map((item) => ({ title: item.title, description: item.desc })),
    callout: `${slide13.footer} ${slide13.footerBold}`,
  },
  {
    title: slide14.title,
    cards: [
      ...slide14.currentModelItems.map((item) => ({ title: "Actual", description: item })),
      ...slide14.onusModelItems.map((item) => ({ title: "ONUS", description: item })),
      ...slide14.timeline.map((item) => ({ title: item.label, value: item.value })),
    ],
  },
  {
    title: slide15.title,
    subtitle: slide15.subtitle,
    cards: slide15.phases.map((item) => ({ title: item.title, description: item.desc })),
    callout: `${slide15.footer} ${slide15.footerBold}`,
  },
  {
    title: slide16.title,
    cards: [
      { title: slide16.volumeLabel, value: slide16.volumeValue },
      { title: slide16.valueLabel, value: slide16.valueValue },
      { title: slide16.savingLabel, value: slide16.savingValue },
      { title: slide16.costLabel, value: slide16.costValue },
      { title: slide16.roiLabel, value: slide16.roiValue, description: slide16.roiSub },
      { title: slide16.paybackLabel, value: slide16.paybackValue, description: slide16.paybackSub },
    ],
  },
  {
    title: slide17.title,
    quote: `${slide17.quoteA} ${slide17.quoteB}`,
    cards: slide17.advantages.map((item) => ({ title: item.title, description: item.desc })),
    callout: slide17.cta,
  },
  {
    title: slide18.title,
    subtitle: slide18.subtitle,
    cards: slide18.services.map((item) => ({ title: item.title, description: item.desc })),
    callout: `${slide18.footerBold} ${slide18.footer}`,
  },
  {
    title: slide19.title,
    subtitle: slide19.subtitle,
    cards: slide19.timeline.flatMap((phase) =>
      phase.items.map((item) => ({
        title: `${phase.phase}: ${phase.title}`,
        description: item,
        value: phase.duration,
      })),
    ),
    callout: `${slide19.footerBold} ${slide19.footer}`,
  },
  {
    title: slide20.title,
    subtitle: slide20.subtitle,
    cards: slide20.benefits.map((item) => ({ title: item.label, value: item.stat })),
    bullets: slide20.bullets,
    callout: slide20.ctaTitle,
  },
  {
    title: "¿Hablamos?",
    subtitle: "Transformemos juntos tu operación logística",
    cards: [
      { title: "Correo", description: "vissler@onusexpress.com" },
      { title: "Web", description: "www.onusexpress.com" },
      { title: "Consulta", description: "Formulario de contacto" },
      { title: "WhatsApp", description: "+34 639 61 11 15" },
    ],
    callout: "ONUS EXPRESS",
  },
];

interface MobilePresentationProps {
  currentSlide: number;
}

export default function MobilePresentation({ currentSlide }: MobilePresentationProps) {
  const slide = mobileSlides[currentSlide - 1] ?? mobileSlides[0];

  return (
    <div className="mx-auto w-full max-w-md px-4 py-4">
      <section className="rounded-[28px] border border-white/15 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-md">
        <div className="mb-5">
          <div className="mb-3 h-1.5 w-16 rounded-full bg-[rgb(var(--onus-turquoise-rgb))]" />
          {slide.badge && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--onus-turquoise-rgb))]">
              {slide.badge}
            </p>
          )}
          <h1 className="text-2xl leading-tight text-white">{slide.title}</h1>
          {slide.subtitle && <p className="mt-2 text-sm leading-relaxed text-white/75">{slide.subtitle}</p>}
        </div>

        {slide.intro && (
          <div className="mb-4 rounded-2xl bg-white/5 p-4">
            <p className="text-sm leading-relaxed text-white/85">{slide.intro}</p>
          </div>
        )}

        {slide.quote && (
          <div className="mb-4 rounded-2xl border border-[rgb(var(--onus-turquoise-rgb))]/30 bg-[rgb(var(--onus-turquoise-rgb))]/10 p-4">
            <p className="text-base font-semibold leading-relaxed text-white">{slide.quote}</p>
          </div>
        )}

        {slide.cards && slide.cards.length > 0 && (
          <div className="mb-4 grid grid-cols-1 gap-3">
            {slide.cards.map((card, index) => (
              <article key={index} className="rounded-2xl bg-white/5 p-4">
                {card.title && <p className="text-xs uppercase tracking-[0.14em] text-white/50">{card.title}</p>}
                {card.value && <p className="mt-1 text-xl font-semibold text-[rgb(var(--onus-turquoise-rgb))]">{card.value}</p>}
                {card.description && (
                  <p className={`text-sm leading-relaxed text-white/80 ${card.value ? "mt-1" : "mt-2"}`}>
                    {card.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}

        {slide.bullets && slide.bullets.length > 0 && (
          <div className="mb-4 space-y-2">
            {slide.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[rgb(var(--onus-turquoise-rgb))]" />
                <p className="text-sm leading-relaxed text-white/85">{bullet}</p>
              </div>
            ))}
          </div>
        )}

        {slide.callout && (
          <div className="rounded-2xl bg-[rgb(var(--onus-turquoise-rgb))] px-4 py-3">
            <p className="text-sm font-semibold leading-relaxed text-white">{slide.callout}</p>
          </div>
        )}
      </section>
    </div>
  );
}
