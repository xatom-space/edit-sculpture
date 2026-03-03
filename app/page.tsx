import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 배경 사진 */}
      <Image
        src="/p1.jpg"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* 사진 위에 어둡게 덮는 막 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 왼쪽 위 글자 */}
      <div className="relative z-10 pl-10 pt-28">
        <Link href="/works" className="text-sky-300 text-2xl font-semibold">
          EDIT SCULPTURE
        </Link>

        <div className="mt-2 text-white/80 tracking-widest text-sm">DAEVINCI</div>

        <p className="mt-4 text-white/70 text-sm max-w-md">
          Fragments of reality, reconstructed into a single constructed moment
        </p>
      </div>
    </main>
  );
}