import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cream-dark">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-lg">Vipp &amp; Vapp</p>
          <p className="mt-1 text-sm text-foreground/70">Vippeextensions</p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-foreground/70">
          <a href="tel:+4745111740" className="hover:text-gold">
            +47 45 11 17 40
          </a>
          <a href="mailto:Anuthida94@me.com" className="hover:text-gold">
            Anuthida94@me.com
          </a>
          <p>Flaenbakken 2, 2070 Råholt</p>
          <p>Facebook: Vipp&amp;vapp</p>
          <a
            href="https://instagram.com/vipp_vapp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Instagram: Vipp_vapp
          </a>
        </div>

        <nav className="flex gap-5 text-sm">
          <Link href="/om" className="hover:text-gold">
            Om
          </Link>
          <Link href="/priser" className="hover:text-gold">
            Priser
          </Link>
          <Link href="/kontakt" className="hover:text-gold">
            Kontakt
          </Link>
        </nav>
      </div>
      <p className="border-t border-gold/10 py-4 text-center text-xs text-foreground/50">
        &copy; {new Date().getFullYear()} Vipp &amp; Vapp. Alle rettigheter reservert.
      </p>
    </footer>
  );
}
