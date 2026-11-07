import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priser | Vipp & Vapp",
  description: "Se priser og behandlinger for vippeextensions hos Vipp & Vapp.",
};

type PriceItem = {
  name: string;
  description: string;
  newSet: string;
  refill: string | null;
  isNew?: boolean;
};

const priceGroups: { title: string; items: PriceItem[] }[] = [
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
        name: "Klassisk+",
        isNew: true,
        description:
          "Utføres med to klassiske vipper i 0,12 mm tykkelse og CC-curl per naturlige vippe. Passer for deg som ønsker et fyldigere og mer markert resultat. Gir en jevn, tett og mørk vippekant som ser ekstra flott ut på bilder.",
        newSet: "860 kr",
        refill: "720 kr",
      },
      {
        name: "Mascara-effekt",
        description:
          "Gir et veldig naturlig, men markert mascarautseende. Vippene får en naturlig bøy, akkurat som når man bruker mascara. Utføres med klassiske vipper i 0,15 mm tykkelse, CC-curl og korte lengder på 8–9–10 mm, med maks lengde på 10 mm. Perfekt for deg som ønsker et naturlig og elegant resultat.",
        newSet: "780 kr",
        refill: "650 kr",
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
        name: "Mini Wet Look uten spikes",
        isNew: true,
        description:
          "Utføres med to klassiske vipper i 0,15 mm tykkelse per naturlige vippe (2:1), helt uten spikes. Gir en mørk, fyldig og markert vippekant med jevnt fordelte vipper.",
        newSet: "899 kr",
        refill: "750 kr",
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
        name: "Volume YY (4D)",
        description:
          "Har en flat base som gir godt feste og lang holdbarhet. Den doble YY-formen skaper en fyldig, mørk og markert vippekant, med fine, spredte tupper som gir en flott effekt.",
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
          "Eyeliner-effekt: V-formede vipper gir en tettere og mørkere vippekant, som skaper en naturlig eyeliner-effekt uten sminke.",
        newSet: "950 kr",
        refill: "800 kr",
      },
      {
        name: "Medium Volume",
        description:
          "Utføres med ferdiglagde W-formede vipper i 6D eller 7D. Gir et fyldig og tett resultat, men ikke like kraftig som Mega Volume. Passer best for deg som har sterke naturlige vipper som tåler ekstra vekt.",
        newSet: "985 kr",
        refill: "850 kr",
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
                    <p className="font-medium">
                      {item.name}
                      {item.isNew && (
                        <span className="ml-2 rounded-full bg-gold px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wide text-white">
                          Ny
                        </span>
                      )}
                    </p>
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
