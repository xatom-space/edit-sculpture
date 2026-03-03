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
        <p className="text-lg">Work not found.</p>
        <Link className="underline" href="/works">
          Back to works
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* LEFT INFO COLUMN */}
        <aside className="w-[340px] px-10 pt-10 relative">
          <Link href="/" className="block">
            <div className="text-xl font-semibold hover:opacity-70 transition">
              EDIT SCULPTURE
            </div>
            <div className="text-xs tracking-[0.25em] text-black/60">DAEVINCI</div>
          </Link>

          <div className="mt-16">
            <div className="text-sm font-semibold tracking-wide">{work.title}</div>
            <div className="mt-2 text-[11px] tracking-wide text-black/60">
              {work.year}
            </div>

            <div className="mt-8 space-y-4 text-[12px] leading-relaxed text-black/75">
              {work.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <nav className="mt-10 space-y-2 text-sm text-black/45">
            <Link className="block hover:text-black" href="/">HOME</Link>
            <Link className="block hover:text-black" href="/works">WORKS</Link>
            <Link className="block hover:text-black" href="/behind-the-scenes">BEHIND THE SCENES</Link>
            <Link className="block hover:text-black" href="/about">ABOUT</Link>
            <Link className="block hover:text-black" href="/buy-prints">BUY PRINTS</Link>
          </nav>

          {/* ✅ Editions: 화면 아래에서 살짝 위 */}
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
        <section className="flex-1 px-8 pt-10">
          {/* ✅ 화면 높이 전체를 쓰되, 내부 박스를 "세로 가운데"로 배치 */}
          <div className="h-[calc(100vh-2.5rem)] w-full flex items-center">
            {/* ✅ 이미지 박스 높이를 줄여서 위/아래 여백이 '같아지게' */}
            <div className="relative w-full h-[82vh]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                priority
                className="object-contain object-right"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}