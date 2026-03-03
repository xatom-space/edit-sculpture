import Image from "next/image";
import Link from "next/link";

const works = [
  { src: "/p2.jpg", alt: "Work 2" },
  { src: "/p3.jpg", alt: "Work 3" },
  { src: "/p4.jpg", alt: "Work 4" },
  { src: "/p5.jpg", alt: "Work 5" },
  { src: "/p6.jpg", alt: "Work 6" },
  { src: "/p7.jpg", alt: "Work 7" },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* Left sidebar */}
        <aside className="w-[280px] px-10 pt-10">
          <div className="text-xl font-semibold tracking-wide">
            EDIT SCULPTURE
          </div>
          <div className="mt-1 text-xs tracking-[0.22em] text-black/70">
            DAEVINCI
          </div>

          <nav className="mt-24 space-y-2 text-sm tracking-wide text-black/55">
            <Link className="block hover:text-black" href="/">
              HOME
            </Link>
            <Link className="block hover:text-black" href="/works">
              WORKS
            </Link>
            <Link className="block hover:text-black" href="/behind-the-scenes">
              BEHIND THE SCENES
            </Link>
            <Link className="block hover:text-black" href="/about">
              ABOUT
            </Link>
            <Link className="block hover:text-black" href="/buy-prints">
              BUY PRINTS
            </Link>
          </nav>
        </aside>

        {/* Right grid */}
        <section className="flex-1 px-10 pt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((w) => (
              <div key={w.src} className="relative w-full aspect-[16/10]">
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
                  priority={w.src === "/p2.jpg"}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}