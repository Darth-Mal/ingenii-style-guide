"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    type: "intro",
    title: "Ingenii '24 FYW Dinner Style Guide",
    subtitle:
      "A style guide celebrating bold colors, culture & vibes. An Evening of Cultured Form",
    bg: "/male1.jpeg",
    overlay: (
      <div className="w-full h-full absolute bottom-0 -z-10 bg-black/70"></div>
    ),
    img: "/Silver header.png",
  },

  {
    type: "image",
    title: (
      <p className="text-white">
        This year’s Final Year Dinner is envisioned as a formal evening{" "}
        <span className="text-[#4eb2e5]">shaped by African influence,</span>{" "}
        expressed through refined silhouettes, elevated styling, and intentional
        detail.
      </p>
    ),
    img: "/male2.jpeg",
    overlay: (
      <div className="w-full h-[600px] absolute bottom-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    ),
  },
  {
    type: "image",
    title: (
      <p className="text-white">
        <span className="text-[#4eb2e5]">
          Afro Fusion — Defined for This Occasion
        </span>{" "}
        Afro Fusion refers to modern formal eveningwear subtly informed by
        African identity — through fabric choice, craftsmanship, texture,
        colour, or detail. The emphasis is on silhouette, polish, and elegance,
        not traditional ceremonial dress.
      </p>
    ),
    img: "/female1.jpeg",
    overlay: (
      <div className="w-full h-[600px] absolute bottom-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    ),
  },
  {
    type: "image",
    title: (
      <p className="text-white">
        It is a formal event. Traditional garments such as iro & buba, agbada,
        regular kaftans, senator wear, and full ethnic regalia do not align with
        the aesthetic of this evening.
        <span className="text-[#4eb2e5]">
          African influence is welcomed — traditional silhouettes are not.
        </span>{" "}
        Fabric choice is not limited to just ankara and aso-oke. Akwete, kente,
        Adire, Batik and others are also welcomed.
      </p>
    ),
    img: "/male4.jpeg",
    overlay: (
      <div className="w-full h-[600px] absolute bottom-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
    ),
  },

  {
    type: "image",
    title: <h1 className="text-[#10587c] text-[60px]">FOR MEN</h1>,
    img: "",
  },

  { type: "image", title: "", img: "/male3.jpeg" },
  { type: "image", title: "", img: "/male5.jpeg" },
  { type: "image", title: "", img: "/male6.jpeg" },
  { type: "image", title: "", img: "/male7.jpeg" },
  { type: "image", title: "", img: "/male8.jpeg" },
  { type: "image", title: "", img: "/male9.jpeg" },
  { type: "image", title: "", img: "/male10.jpeg" },
  { type: "image", title: "", img: "/male11.jpeg" },
  { type: "image", title: "", img: "/male12.jpeg" },
  { type: "image", title: "", img: "/male13.jpeg" },
  { type: "image", title: "", img: "/male14.jpeg" },
  { type: "image", title: "", img: "/male15.jpeg" },
  { type: "image", title: "", img: "/male16.jpeg" },

  {
    type: "image",
    title: <h1 className="text-[#10587c] text-[60px]">FOR WOMEN</h1>,
    img: "",
  },

  { type: "image", title: "", img: "/female2.jpeg" },
  { type: "image", title: "", vid: "/vid5.mp4" },
  { type: "image", title: "", img: "/female3.jpeg" },
  { type: "image", title: "", img: "/female4.jpeg" },
  { type: "image", title: "", vid: "/vid1.mov" },
  { type: "image", title: "", img: "/female5.jpeg" },
  { type: "image", title: "", img: "/female6.jpeg" },
  { type: "image", title: "", vid: "/vid2.mov" },
  { type: "image", title: "", img: "/female7.jpeg" },
  { type: "image", title: "", vid: "/vid3.mp4" },
  { type: "image", title: "", img: "/female8.jpeg" },
  { type: "image", title: "", img: "/female9.jpeg" },
  { type: "image", title: "", vid: "/vid4.mov" },
  { type: "image", title: "", img: "/female10.jpeg" },
  { type: "image", title: "", img: "/female11.jpeg" },

  {
    type: "end",
  },
];

const tiktoks = [
  {
    title: "Afro-Fusion Suit Inspiration",
    url: "https://vt.tiktok.com/ZSaRGsCPA/",
  },
  {
    title: "Elegant Afro Eveningwear",
    url: "https://vt.tiktok.com/ZSaRtP4o6/",
  },
  {
    title: "Luxury African Formal Style",
    url: "https://vt.tiktok.com/ZSaLF7a6Y/",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => {
        if (prev >= slides.length - 1) return prev;
        return prev + 1;
      }),

    onSwipedRight: () =>
      setCurrent((prev) => {
        if (prev <= 0) return prev;
        return prev - 1;
      }),

    trackMouse: true,
  });

  const slide = slides[current] ?? slides[0];

  if (!slide) return null;

  return (
    <main {...handlers} className="w-screen h-screen overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full absolute"
        >
          {/* ENDING SLIDE */}

          {slide.type === "end" ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-black text-center px-6">
              <h2 className="text-white text-3xl mb-10">
                Inspiration — not instruction
              </h2>

              <div className="grid gap-6 md:grid-cols-3 max-w-4xl">
                {tiktoks.map((t, i) => (
                  <a
                    key={i}
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#4eb2e5] transition-all duration-300 hover:scale-105">
                      <div className="text-[#4eb2e5] text-lg font-semibold mb-2">
                        TikTok
                      </div>

                      <div className="text-white text-sm opacity-80 group-hover:opacity-100">
                        {t.title}
                      </div>

                      <div className="mt-4 text-[#4eb2e5] text-xs">
                        Tap to view →
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <button
                onClick={() => setCurrent(0)}
                className="mt-12 px-6 py-3 bg-[#4eb2e5] text-black rounded-full hover:scale-105 transition"
              >
                Restart Guide
              </button>
            </div>
          ) : slide.type === "intro" ? (
            <div
              className="w-full h-full bg-black bg-cover bg-center flex flex-col justify-center items-center text-center p-4 relative"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {slide.overlay && (
                <div className="absolute inset-0 z-10">{slide.overlay}</div>
              )}

              <div className="relative z-20 flex flex-col items-center">
                <img src={slide.img} alt="" />

                <h1 className="text-6xl text-[#4eb2e5] drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="mt-4 text-md md:text-2xl text-white drop-shadow-lg">
                  {slide.subtitle}
                </p>

                <p className="mt-8 text-white opacity-80">
                  Swipe left to see the gallery →
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative">
              {slide.img && (
                <img src={slide.img} className="w-full h-full object-cover" />
              )}

              {slide.vid && (
                <video
                  src={slide.vid}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {slide.overlay && slide.overlay}

              <div className="absolute bottom-10 left-4 text-white drop-shadow-lg z-20">
                <h2 className="text-lg">{slide.title}</h2>
              </div>

              <ArrowRightIcon className="w-10 h-10 text-white absolute right-4 top-1/2 -translate-y-1/2 animate-bounce z-20" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION DOTS */}

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-2 rounded-full ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
