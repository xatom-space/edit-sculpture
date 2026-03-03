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
        {/* LEFT SIDEBAR (고정) */}
        <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white px-10 pt-10">
          <div className="text-xl font-semibold">
            EDIT SCULPTURE
          </div>
          <div className="text-xs tracking-[0.25em] text-black/60">
            DAEVINCI
          </div>

          <nav className="mt-20 space-y-3 text-sm text-black/60">
            <Link href="/" className="block hover:text-black">HOME</Link>
            <Link href="/works" className="block hover:text-black">WORKS</Link>
            <Link href="/behind-the-scenes" className="block hover:text-black">BEHIND THE SCENES</Link>
            <Link href="/about" className="block hover:text-black">ABOUT</Link>
            <Link href="/buy-prints" className="block hover:text-black">BUY PRINTS</Link>
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="ml-[260px] flex-1 px-6 pt-8">
          <div
            className="
              grid
              gap-2
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {works.map((src) => (
              <div
                key={src}
                className="relative w-full aspect-[4/3]"
              >
                <Image
                  src={src}
                  alt="work"
                  fill
                  className="object-cover"
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    (max-width: 1280px) 33vw,
                    25vw
                  "
                  priority={src === "/p2.jpg"}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}