import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Skreddersydd look",
    text: "Vi tilpasser lengde, kurvatur og tetthet til din naturlige vippe og ønsket stil.",
  },
  {
    title: "Skånsomme produkter",
    text: "Kun lim og produkter av høy kvalitet, utviklet for sensitive øyne.",
  },
  {
    title: "Lang holdbarhet",
    text: "Med riktig stell varer settet 3–4 uker mellom hver påfylling.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
        <Image
          src="/logo.png"
          alt="Vipp & Vapp"
          width={280}
          height={256}
          priority
        />
        <h1 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Vippeextensions med naturlig glød
        </h1>
        <p className="max-w-xl text-foreground/70">
          Vipp &amp; Vapp er ditt studio for vippeextensions i klassisk, hybrid
          og volum-teknikk. Vi skaper et blikk som er skreddersydd for deg.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-light"
          >
            Book time
          </Link>
          <Link
            href="/priser"
            className="rounded-full border border-gold px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-cream-dark"
          >
            Se priser
          </Link>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-cream-dark">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center sm:text-left">
              <h2 className="font-serif text-xl">{f.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">Klar for et nytt blikk?</h2>
        <p className="max-w-md text-foreground/70">
          Les mer om oss og vår filosofi, eller ta kontakt for å bestille time.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/om"
            className="rounded-full border border-gold px-8 py-3 text-sm font-medium transition-colors hover:bg-cream-dark"
          >
            Om oss
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-light"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  );
}
