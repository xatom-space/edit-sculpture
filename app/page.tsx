import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* 배경 이미지 */}
      <Image
        src="/p1.jpg"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* 우측 상단 메뉴 */}
      <header className="fixed top-0 right-0 z-50 pr-16 pt-10">
        <nav className="flex items-center gap-12 text-[12px] tracking-[0.28em] text-white/80">
          <Link href="/" className="hover:text-white">
            HOME
          </Link>
          <Link href="/works" className="hover:text-white">
            WORKS
          </Link>
          <Link href="/behind-the-scenes" className="hover:text-white">
            BEHIND THE SCENES
          </Link>
          <Link href="/about" className="hover:text-white">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-white">
            CONTACT
          </Link>
        </nav>
      </header>

      {/* 왼쪽 텍스트 */}
      <section className="relative z-10 min-h-screen">
        <div className="pl-14 pt-40">
          <Link
            href="/works"
            className="inline-block text-sky-400 text-2xl font-semibold tracking-[0.12em] hover:text-sky-300"
          >
            EDIT SCULPTURE
          </Link>

          <div className="mt-2 text-[12px] tracking-[0.35em] text-white">
            DAEVINCI
          </div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white">
            Fragments of reality, reconstructed into a single constructed moment
          </p>
        </div>
      </section>
    </main>
  );
}