import Image from "next/image";
import Link from "next/link";
import { works } from "../data/works";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex">
        {/* LEFT SIDEBAR */}
        <aside className="fixed left-0 top-0 h-screen w-[260px] bg-white px-10 pt-10">
          <div className="text-xl font-semibold">EDIT SCULPTURE</div>
          <div className="text-xs tracking-[0.25em] text-black/60">DAEVINCI</div>

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
        <section className="ml-[260px] flex-1 px-8 pt-10">
          <div
            className="
              grid
              gap-2
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
                className="block"
                aria-label={`Open ${w.title}`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={w.image}
                    alt={w.title}
                    fill
                    className="object-cover"
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