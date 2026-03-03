import Image from "next/image";
import Link from "next/link";

const works = [
  { slug: "clear-the-lane", image: "/p2.jpg", title: "CLEAR THE LANE" },
  { slug: "work-3", image: "/p3.jpg", title: "WORK 3" },
  { slug: "work-4", image: "/p4.jpg", title: "WORK 4" },
  { slug: "work-5", image: "/p5.jpg", title: "WORK 5" },
  { slug: "work-6", image: "/p6.jpg", title: "WORK 6" },
  { slug: "work-7", image: "/p7.jpg", title: "WORK 7" },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* LEFT SIDEBAR */}
        <aside className="fixed left-0 top-0 z-10 h-screen w-[260px] bg-white px-10 pt-10">
          <Link href="/" className="block">
            <div className="text-xl font-semibold hover:opacity-70 transition">
              EDIT SCULPTURE
            </div>
            <div className="text-xs tracking-[0.25em] text-black/60">
              DAEVINCI
            </div>
          </Link>

          <nav className="mt-96 space-y-3 text-sm text-black/60">
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
        </aside>

        {/* RIGHT GRID */}
        <section className="ml-[260px] flex-1 px-8 pt-10 relative z-0">
          <div
            className="
              grid
              gap-6
              grid-cols-1
              min-[1000px]:grid-cols-2
              min-[1600px]:grid-cols-3
              min-[1900px]:grid-cols-4
            "
          >
            {works.map((w) => (
              <Link
                key={w.slug}
                href={`/works/${w.slug}`}
                className="block w-full cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden scale-[0.92] origin-center">
                  <Image
                    src={w.image}
                    alt={w.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={w.slug === "clear-the-lane"}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
