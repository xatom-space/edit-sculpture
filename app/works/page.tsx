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
        {/* 왼쪽 메뉴 고정 */}
        <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white px-10 pt-10">
          <div className="text-xl font-semibold">EDIT SCULPTURE</div>
          <div className="text-xs tracking-[0.25em] text-black/60">DAEVINCI</div>

          <nav className="mt-20 space-y-3 text-sm text-black/60">
            <Link href="/" className="block hover:text-black">HOME</Link>
            <Link href="/works" className="block hover:text-black">WORKS</Link>
            <Link href="/behind-the-scenes" className="block hover:text-black">BEHIND THE SCENES</Link>
            <Link href="/about" className="block hover:text-black">ABOUT</Link>
            <Link href="/buy-prints" className="block hover:text-black">BUY PRINTS</Link>
          </nav>
        </aside>

        {/* 오른쪽 영역 */}
        <section className="ml-[260px] flex-1 px-8 pt-10">
          <div
            className="
              grid
              gap-2
              grid-cols-1
              min-[1000px]:grid-cols-2
              min-[1600px]:grid-cols-3
              min-[2200px]:grid-cols-4
              min-[2200px]:grid-rows-4
              min-[2200px]:h-[calc(100vh-80px)]
            "
          >
            {works.map((src) => (
              <div
                key={src}
                className="relative w-full h-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt="work"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}