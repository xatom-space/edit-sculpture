import Image from "next/image";
import Link from "next/link";

const works = [
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* 왼쪽 메뉴 (고정) */}
        <aside className="w-[260px] px-10 pt-10 fixed left-0 top-0 h-screen bg-white">
          <div className="text-xl font-semibold">
            EDIT SCULPTURE
          </div>
          <div className="text-xs tracking-[0.25em] text-black/60">
            DAEVINCI
          </div>

          <nav className="mt-20 space-y-3 text-sm text-black/60">
            <Link href="/">HOME</Link>
            <Link href="/works">WORKS</Link>
            <Link href="/behind-the-scenes">BEHIND THE SCENES</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/buy-prints">BUY PRINTS</Link>
          </nav>
        </aside>

        {/* 오른쪽 이미지 영역 */}
        <section className="ml-[260px] flex-1 px-8 pt-10">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              xl:grid-cols-4
              gap-4
            "
          >
            {works.map((src) => (
              <div
                key={src}
                className="relative w-full aspect-[16/11]"
              >
                <Image
                  src={src}
                  alt="work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1280px) 33vw,
                         25vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}