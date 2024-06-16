import Image from "next/image";
import { Monoton } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="w-full py-56 space-y-20">
        <section className="">
          <div className=" flex gap-3 items-center">
            <div className="w-64 bg-orange-400 h-1"></div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-orange-400 tracking-tighter">
              About{" "}
              <span
                className={`${monoton.className} text-8xl font-medium text-white`}
              >
                musssick <span className=" text-orange-400">.</span>
              </span>{" "}
            </h1>
          </div>
          <div className=" flex gap-3 items-center">
            <div className="w-[40rem] bg-orange-400 h-1"></div>

            <div className="mt-28">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2010 · The Beginning
              </h4>
              <p className=" font-semibold tracking-tighter text-zinc-300 w-1/2 text-lg">
                Our festival was founded in 2010 with a simple yet powerful
                vision: to create a space where people from all walks of life
                could come together to celebrate art, music, and culture. What
                started as a small, local event has since grown into a vibrant,
                internationally recognized festival.
              </p>
            </div>
          </div>

          <div className=" flex gap-3 items-center">
            <div className="w-[20rem] bg-orange-400 h-1"></div>
            <div className="mt-28">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2012 · Expanding Horizons
              </h4>
              <p className=" font-semibold tracking-tighter w-1/2 text-lg">
                By 2012, our festival had begun to attract a wider audience,
                drawing visitors from neighboring cities and states. We expanded
                our lineup to include more diverse performances, workshops, and
                art installations, ensuring there was something for everyone.
              </p>
            </div>
          </div>
          <div className=" flex gap-3 ">
            <div className="w-[45rem] bg-orange-400 h-1 mt-32"></div>
            <div className="mt-24">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2015
              </h4>
            </div>
            <div className=" mt-28">
              <img src={"/assets/images/aboutF.jpg"} width={600} />
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl my-4">
                Going International
              </h4>
              <p className=" font-semibold tracking-tighter w-[59%] text-lg ">
                In 2015, we took a significant step forward by inviting
                international artists and performers to join our festival. This
                infusion of global talent enriched our program and brought a new
                level of excitement to the event, attracting an even larger and
                more diverse crowd.
              </p>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <div className="w-[80rem] bg-orange-400 h-1"></div>
            <div className="mt-28">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2017 · Embracing Sustainability
              </h4>
              <p className=" font-semibold tracking-tighter w-4/5 text-lg">
                Recognizing our responsibility to the environment, we launched
                several sustainability initiatives in 2017. These included
                comprehensive recycling programs, partnerships with eco-friendly
                vendors, and efforts to minimize our carbon footprint. Our
                commitment to sustainability has since become a core value of
                our festival.
              </p>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <div className="w-[10rem] bg-orange-400 h-1 mt-8"></div>
            <div className="mt-28">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2019 · Community and Inclusion
              </h4>
              <p className=" font-semibold tracking-tighter w-3/5 text-lg">
                In 2019, we focused on enhancing the sense of community and
                inclusiveness at our festival. We introduced new programs to
                support local artists, created accessible spaces for all
                attendees, and fostered collaborations with community
                organizations. Our goal was to make everyone feel welcome and
                valued.
              </p>
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <div className="w-[40rem] bg-orange-400 h-1 "></div>
            <div className="mt-28">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2021 · Navigating Challenges
              </h4>
              <p className=" font-semibold tracking-tighter w-3/5 text-lg">
                The global pandemic posed unprecedented challenges in 2021, but
                we adapted by embracing virtual formats and hybrid events.
                Despite the difficulties, our community came together stronger
                than ever, demonstrating resilience and creativity. We learned
                valuable lessons that continue to shape our festival's future.
              </p>
            </div>
          </div>

          <div className=" flex gap-3 items-center">
            <div className="w-[40rem] bg-orange-400 h-1 mb-[63rem]"></div>
            <div className="mt-28 space-y-6">
              <h4 className=" text-orange-400 tracking-tighter font-black text-6xl">
                2023 · Looking Forward
              </h4>
              <img src={"/assets/images/about.jpg"} width={600} />

              <p className=" font-semibold tracking-tighter w-[52%] text-lg">
                The global pandemic posed unprecedented challenges in 2021, but
                we adapted by embracing virtual formats and hybrid events.
                Despite the difficulties, our community came together stronger
                than ever, demonstrating resilience and creativity. We learned
                valuable lessons that continue to shape our festival's future.
              </p>
              <img
                src={"/assets/images/aboutF1.jpg"}
                width={600}
                className="ml-96"
              />
              <p className=" font-semibold tracking-tighter w-[52%] text-lg m-96">
                The global pandemic posed unprecedented challenges in 2021, but
                we adapted by embracing virtual formats and hybrid events.
                Despite the difficulties, our community came together stronger
                than ever, demonstrating resilience and creativity. We learned
                valuable lessons that continue to shape our festival's future.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
