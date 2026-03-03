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
        <aside className="w-[340px] px-10 pt-10 relative">
          <Link href="/" className="block">
            <div className="text-xl font-semibold hover:opacity-70 transition">
              EDIT SCULPTURE
            </div>
            <div className="text-xs tracking-[0.25em] text-black/60">
              DAEVINCI
            </div>
          </Link>

          <div className="mt-16">
            <div className="text-sm font-semibold">{work.title}</div>
            <div className="mt-2 text-[11px] text-black/60">
              {work.year}
            </div>

            <div className="mt-8 space-y-4 text-[12px] leading-relaxed text-black/75">
              {work.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <nav className="mt-10 space-y-2 text-sm text-black/45">
            <Link href="/">HOME</Link>
            <Link href="/works">WORKS</Link>
            <Link href="/behind-the-scenes">BEHIND THE SCENES</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/buy-prints">BUY PRINTS</Link>
          </nav>

          {/* Editions */}
          <div className="absolute left-10 bottom-10 w-[300px] text-[11px]">
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
        {/* works 썸네일 시작점과 동일 */}
        <section className="flex-1 px-8 pt-10 pr-16">
          <div className="h-[calc(100vh-2.5rem)] flex items-center">
            {/* 높이를 줄여 위/아래 여백 동일하게 */}
            <div className="relative w-full h-[80vh]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority
                className="object-contain object-right"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}