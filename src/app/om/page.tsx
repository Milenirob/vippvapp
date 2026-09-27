import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Vipp & Vapp",
  description:
    "Bli kjent med Vipp & Vapp – vårt studio for vippeextensions og filosofien bak arbeidet vårt.",
};

export default function OmPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl">Om Vipp &amp; Vapp</h1>
      <div className="mt-8 space-y-6 text-foreground/80">
        <p>
          Vipp &amp; Vapp er et studio dedikert til vippeextensions, hvor
          presisjon og god kundeopplevelse står i sentrum. Vi brenner for
          faget og legger vekt på at hvert sett skal se naturlig og levende
          ut – tilpasset akkurat ditt øyeparti.
        </p>
        <p>
          Vi jobber med classic-, hybrid- og volumteknikk, og bruker kun
          produkter av høy kvalitet som er skånsomme mot både din naturlige
          vipp og huden rundt øynene. Hygiene og trygghet er en selvfølge i
          alt vi gjør.
        </p>
        <p>
          Enten du ønsker et diskré, naturlig løft eller et mer dramatisk
          uttrykk, tar vi oss tid til en grundig konsultasjon før behandling,
          slik at resultatet blir akkurat slik du ønsker.
        </p>
      </div>
    </section>
  );
}
