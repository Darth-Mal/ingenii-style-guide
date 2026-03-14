"use client";

import { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";

export default function Home() {
  const galleryItems = [
    {
      title: "Outfit 1",
      desc: "Bold & Colorful",
      img: "/placeholder1.jpg",
      arrow: "right",
    },
    {
      title: "Outfit 2",
      desc: "Chill Vibes",
      img: "/placeholder2.jpg",
      arrow: "down",
    },
    {
      title: "Decor",
      desc: "Afro meets Modern",
      img: "/placeholder3.jpg",
      arrow: "right",
    },
    {
      title: "Food",
      desc: "Fusion Flavors",
      img: "/placeholder4.jpg",
      arrow: "down",
    },
  ];

  return (
    <main className="bg-yellow-50 min-h-screen p-4 font-sans">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Ingenii '24</h1>
        <p className="text-lg text-gray-700 mt-1">Afrofusion Style Guide 🎉</p>
      </header>

      {/* Gallery */}
      <section className="grid grid-cols-1 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h2 className="font-bold text-xl text-orange-600">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>

            {/* Arrow */}
            {item.arrow === "right" ? (
              <ArrowRightIcon className="w-8 h-8 text-orange-400 absolute right-2 top-1/2 transform -translate-y-1/2 animate-bounce" />
            ) : (
              <ArrowDownIcon className="w-8 h-8 text-orange-400 absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce" />
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        Made with ❤️ for Ingenii '24
      </footer>
    </main>
  );
}
