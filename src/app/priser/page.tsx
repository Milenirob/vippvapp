import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser | Vipp & Vapp",
  description: "Se priser og behandlinger for vippeextensions hos Vipp & Vapp.",
};

const priceGroups = [
  {
    title: "Klassisk & Mix",
    items: [
      {
        name: "Klassisk 1:1",
        description:
          "Én extension på én naturlig vippe. Gir et naturlig, rent og elegant resultat.",
        newSet: "780 kr",
        refill: "650 kr",
      },
      {
        name: "Klassisk+ 2:1",
        description:
          "To extensions på én naturlig vippe. Litt fyldigere enn klassisk, men fortsatt naturlig.",
        newSet: "850 kr",
        refill: "700 kr",
      },
      {
        name: "Mix / Hybrid",
        description:
          "En blanding av klassiske vipper og volumvipper. Gir både definisjon og fylde.",
        newSet: "880 kr",
        refill: "750 kr",
      },
      {
        name: "Wispy",
        description:
          "Vipper med varierende lengder og tydelige «spikes». Gir et luftig, teksturert og trendy uttrykk.",
        newSet: "950 kr",
        refill: "800 kr",
      },
      {
        name: "Wet Look",
        description:
          "Vippene samles i smale, tydelige «spikes» som gir en blank og våt mascara-effekt. Passer for deg som ønsker et markert, moderne og elegant uttrykk.",
        newSet: "950 kr",
        refill: "800 kr",
      },
    ],
  },
  {
    title: "Volume",
    items: [
      {
        name: "Volume YY",
        description:
          "YY-vipper gir mer fylde enn klassisk, samtidig som resultatet er mykt og naturlig.",
        newSet: "850 kr",
        refill: "700 kr",
      },
      {
        name: "Volume W-shape 3D, 4D, 5D",
        description:
          "Ferdige W-formede vifter med 3–5 vipper. Gir et jevnt, fluffy og fyldig resultat.",
        newSet: "890 kr",
        refill: "750 kr",
      },
      {
        name: "Volume V-shape 4D, 5D",
        description:
          "V-formede vifter som gir tydelig definisjon og et fyldig, elegant uttrykk.",
        newSet: "950 kr",
        refill: "800 kr",
      },
      {
        name: "Volume W-shape 6D, 7D",
        description:
          "Tettere W-formede vifter med 6–7 vipper. Gir ekstra fylde, mørkere vippelinje og et mer dramatisk resultat.",
        newSet: "985 kr",
        refill: "850 kr",
      },
      {
        name: "Mega Volume",
        description:
          "Håndlagde vifter med flere ultratynne vipper. Gir maksimal fylde, en mørkere vippelinje og et dramatisk resultat.",
        newSet: "1099 kr",
        refill: "950 kr",
      },
    ],
  },
  {
    title: "Annet",
    items: [
      {
        name: "Fjerning av vippeextensions",
        description: "Skånsom fjerning av eksisterende vippeextensions.",
        newSet: "150 kr",
        refill: null,
      },
    ],
  },
];

export default function PriserPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl">Priser</h1>
      <p className="mt-4 text-foreground/70">
        Priser er veiledende og kan variere noe ut fra ønsket resultat og tid
        siden forrige behandling. Ta gjerne kontakt om du er usikker på hva
        som passer deg.
      </p>

      <div className="mt-10 space-y-12">
        {priceGroups.map((group) => (
          <div key={group.title}>
            <div className="flex items-baseline justify-between border-b border-gold/20 pb-2">
              <h2 className="font-serif text-2xl">{group.title}</h2>
              <div className="hidden gap-8 text-xs uppercase tracking-wide text-foreground/50 sm:flex">
                <span className="w-16 text-right">Nytt sett</span>
                <span className="w-16 text-right">Påfyll</span>
              </div>
            </div>
            <ul className="divide-y divide-gold/20">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 max-w-md text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex gap-8 text-sm sm:shrink-0">
                    <span className="w-16 text-left font-medium text-gold sm:text-right">
                      {item.newSet}
                    </span>
                    <span className="w-16 text-left font-medium text-gold sm:text-right">
                      {item.refill ?? "–"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
