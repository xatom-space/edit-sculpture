import Image from "next/image";
import Link from "next/link";

const processSteps = [
  { title: "01 Concept", desc: "Define the\nCore Idea" },
  { title: "02 Sketch", desc: "Visualize\nthe Scene" },
  { title: "03 Location\nResearch", desc: "Select &\nStudy Locations" },
  { title: "04 Revisit & Refinement", desc: "Refine Light &\nPerspective" },
  { title: "05 Precision\nCapture", desc: "Capture Each\nElement Precisely" },
  { title: "06 Structural\nAssembly", desc: "Assemble\nAll Elements\nInto One\nConstructed Image" },
  { title: "07 Final Production", desc: "Polish & Prepare\nfor Print" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <div className="px-10 pt-10 pb-16">
        <header className="flex items-start justify-between">
          <Link href="/" className="block">
            <div className="text-[2.25rem] font-semibold leading-none hover:opacity-70 transition">
              EDIT SCULPTURE
            </div>
            <div className="text-[1.35rem] tracking-[0.25em] text-black/70">
              DAEVINCI
            </div>
          </Link>

          <nav className="mr-8 mt-2 flex items-center gap-16 text-[1.05rem] text-black/70">
            <Link href="/" className="hover:text-black transition">
              HOME
            </Link>
            <Link href="/works" className="hover:text-black transition">
              WORKS
            </Link>
            <Link href="/behind-the-scenes" className="hover:text-black transition">
              BEHIND THE SCENES
            </Link>
            <Link href="/about" className="text-black">
              ABOUT
            </Link>
          </nav>
        </header>

        <section className="mt-28 grid grid-cols-1 gap-14 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[1.575rem] text-sky-500">ABOUT</h2>

            <div className="mt-10 max-w-[900px] space-y-8 text-[1.15rem] leading-[1.9] tracking-[0.01em] font-serif">
              <p>
                Daevinci is a visual artist who constructs hyper-real scenes through the
                recomposition of photographed fragments. He approaches photography not as a means
                of capturing moments, but as a way of building them.
              </p>
              <p>
                He envisions new realities and, in order to express them, explores and photographs
                fragments of the existing world. Captured across different times and locations,
                these elements are meticulously assembled into a single, cohesive scene.
              </p>
              <p>
                What he defines as Edit Sculpture is a process of treating reality as material —
                deconstructing and reorganizing it. The final image has never existed as one
                moment, yet every element within it once physically existed.
              </p>
              <p>
                Rather than asking whether an image is real or not, he questions whether the
                reality he imagines can be believed by the viewer. At the boundary between reality
                and the surreal, the constructed scene begins to function as reality the moment it
                is accepted.
              </p>
            </div>
          </div>

          <div className="xl:pt-16">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[780px] overflow-hidden bg-black/10">
              <Image
                src="/p8.jpg"
                alt="Daevinci work process"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-[1.575rem] text-sky-500">WORK PROCESS</h3>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[1200px]">
              <div className="grid grid-cols-7 gap-8 text-[1.7rem] leading-tight font-serif">
                {processSteps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="whitespace-pre-line">{step.title}</div>
                    {i < processSteps.length - 1 && <div className="pt-1 text-black/50">→</div>}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-black/25 pt-6">
                <div className="grid grid-cols-7 gap-8 text-[1.35rem] leading-[1.45] font-serif">
                  {processSteps.map((step) => (
                    <div key={step.title} className="whitespace-pre-line">
                      {step.desc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[980px] space-y-8 text-[1.1rem] leading-[1.9] font-serif">
            <p>Daevinci builds his images from fragments of reality.</p>
            <p>
              Each work begins with a scene he imagines as plausible within the logic of the real
              world. Rather than documenting a moment, he constructs one. To materialize this
              vision, he searches for and photographs each element individually.
            </p>
            <p>
              He places strong emphasis on physical realism. Light, perspective, scale, and spatial
              coherence must align before the image can exist as a believable moment.
            </p>
            <p>
              The process does not rely on computer-generated imagery, stock material, or
              illustrated components. All visual elements originate from his own photographs.
            </p>
            <p>
              Daevinci oversees every stage of production himself from concept and field research to
              photography and post-production.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
