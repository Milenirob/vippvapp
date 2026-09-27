import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Vipp & Vapp",
  description: "Ta kontakt med Vipp & Vapp for å bestille time.",
};

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl">Kontakt</h1>
      <p className="mt-4 text-foreground/70">
        Ønsker du å bestille time eller har spørsmål? Ta kontakt på telefon,
        e-post eller Instagram, så svarer vi så fort vi kan.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl">Telefon</h2>
          <a href="tel:+4745111740" className="mt-1 block text-gold hover:underline">
            +47 45 11 17 40
          </a>
        </div>
        <div>
          <h2 className="font-serif text-xl">E-post</h2>
          <a
            href="mailto:Anuthida94@me.com"
            className="mt-1 block text-gold hover:underline"
          >
            Anuthida94@me.com
          </a>
        </div>
        <div>
          <h2 className="font-serif text-xl">Adresse</h2>
          <p className="mt-1 text-foreground/70">Flaenbakken 2, 2070 Råholt</p>
        </div>
        <div>
          <h2 className="font-serif text-xl">Åpningstider</h2>
          <p className="mt-1 text-foreground/70">Kun etter avtale</p>
        </div>
        <div>
          <h2 className="font-serif text-xl">Sosiale medier</h2>
          <p className="mt-1 text-foreground/70">Facebook: Vipp&amp;vapp</p>
          <a
            href="https://instagram.com/vipp_vapp"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gold hover:underline"
          >
            Instagram: Vipp_vapp
          </a>
        </div>
      </div>
    </section>
  );
}
