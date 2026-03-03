import Image from "next/image";
import Link from "next/link";
import { works } from "../../data/works";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <main className="min-h-screen bg-white text-black p-10">
        <p>Work not found.</p>
        <Link href="/works" className="underline">
          Back to works
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* LEFT COLUMN */}
        <aside className="w-[clamp(420px,30vw,560px)] px-10 pt-10 relative">
          <Link href="/" className="block">
            <div className="text-[2.25rem] font-semibold hover:opacity-70 transition leading-none">
              EDIT SCULPTURE
            </div>
            <div className="text-[1.35rem] tracking-[0.25em] text-black/60">
              DAEVINCI
            </div>
          </Link>

          {/* TITLE / YEAR / DESCRIPTION */}
          <div className="mt-16">
            <div className="text-[1.575rem] font-semibold">{work.title}</div>
            <div className="mt-2 text-[20px] text-black/60">{work.year}</div>

            <div className="mt-8 space-y-4 text-[21px] leading-relaxed text-black/75">
              {work.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          {/* MENU: moved lower than description */}
          <nav className="mt-16 space-y-[0.9rem] text-[1.05rem] text-black/60">
            <Link href="/" className="block hover:text-black">
              HOME
            </Link>
            <Link href="/works" className="block hover:text-black">
              WORKS
            </Link>
            <Link href="/behind-the-scenes" className="block hover:text-black">
              BEHIND THE SCENES
            </Link>
            <Link href="/about" className="block hover:text-black">
              ABOUT
            </Link>
            <Link href="/buy-prints" className="block hover:text-black">
              BUY PRINTS
            </Link>
          </nav>

          {/* Editions */}
          <div className="absolute left-10 bottom-14 w-[calc(100%-5rem)] text-[20px]">
            <div className="text-sky-500">{work.editionsTitle}</div>

            <div className="mt-6 space-y-1 text-black/70">
              {work.editions.map((e) => (
                <div key={e}>{e}</div>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-black/45 italic">
              {work.printInfo.map((i) => (
                <div key={i}>{i}</div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT IMAGE AREA */}
        <section className="flex-1 px-8 pt-10 pb-10 pr-14">
          <div className="relative h-[calc(100vh-5rem)] w-full">
            <Image
              src={work.image}
              alt={work.title}
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
