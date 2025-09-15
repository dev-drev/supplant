"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/images/01.jpeg", alt: "Band Photo 1" },
    { src: "/images/34.jpeg", alt: "Band Photo 2" },
    { src: "/images/fn.jpeg", alt: "Band Photo 3" },
    { src: "/images/DSA00003 (1).jpg", alt: "Band Photo 4" },
    { src: "/images/DSA00038.jpg", alt: "Band Photo 5" },
    { src: "/images/DSA00071.jpg", alt: "Band Photo 6" },
    { src: "/images/DSA00222.jpg", alt: "Band Photo 7" },
    { src: "/images/DSA00240.jpg", alt: "Band Photo 8" },
    { src: "/images/DSA09965.jpg", alt: "Band Photo 9" },
  ];

  const playlist = [
    { title: "The Road", duration: "4:32", year: "2024" },
    { title: "Patterns of Denial", duration: "5:18", year: "2024" },
    { title: "Too Low", duration: "3:45", year: "2023" },
    { title: "No Burden Left to Hold", duration: "4:12", year: "2023" },
    { title: "I'm Afraid", duration: "3:56", year: "2023" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play per il carosello
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Cambia immagine ogni 6 secondi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="h-screen flex flex-col md:flex-row">
        {/* Left Side - Carosello */}
        <div className="w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="relative w-full h-[50vh] bg-black overflow-hidden">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                className="object-cover"
                priority
              />

              {/* Frecce di navigazione */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Video Section - 50vh x 50vw */}
            <div className="h-[50vh] w-full md:w-[50vw] bg-black flex items-center justify-center">
              <div className="w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/fwcRn6miwWY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Playlist e Info */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          {/* Descrizione */}
          <div className="bg-black p-6 flex-1">
            <p className="text-white leading-relaxed mb-4">
              <strong>Supplant</strong> is a <strong>Berlin-based</strong> band
              blending <strong>Alternative Rock</strong>,{" "}
              <strong>Stoner</strong>, and <strong>Shoegaze</strong>. The band
              consists of <strong>Andrea Davide</strong> on lead vocals and
              synths, also known as <strong>Velvet May</strong>, more than a
              decade active as live performer and voice whose sound marries{" "}
              <strong>New Wave</strong>, <strong>Industrial</strong>
              and <strong>Rock</strong>.
            </p>
            <p className="text-white leading-relaxed mb-4">
              <strong>Arthur BDT</strong> is on guitar and is a{" "}
              <strong>DJ & Producer</strong> focusing on dark electronics. Under
              his alias <strong>Incendie</strong> and his collaborative projects
              (<strong>ATT Corp</strong>, <strong>Human Spine</strong>), his
              practice spans from
              <strong>post-metal</strong> to <strong>industrial</strong> and
              from <strong>techno-EBM</strong> to <strong>power ambient</strong>
              .
            </p>
            <p className="text-white leading-relaxed mb-6">
              <strong>Guillermo Martinez</strong> is on drums. He is also known
              under his alias
              <strong>Balthazar Martinez</strong> and mainly fuses{" "}
              <strong>Techno</strong>, <strong>House</strong>,{" "}
              <strong>Soulful House</strong>, and percussive rhythms as a{" "}
              <strong>DJ</strong>.
            </p>

            {/* Link Social */}
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">
                Social Links:
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.319.475-.98.82-1.641.82H8.12c-.66 0-1.322-.345-1.641-.82-.319-.475-.319-1.115 0-1.59l4.521-6.34c.319-.475.98-.82 1.641-.82.66 0 1.322.345 1.641.82l4.521 6.34c.319.475.319 1.115 0 1.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className=" text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className=" hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className=" hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="bg-black p-6 h-1/2 overflow-y-auto">
            {/* Now Playing */}
            <div className="bg-red-900/30 rounded-lg p-4 mb-6 border border-red-600/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    {playlist[currentTrack].title}
                  </h3>
                  <p className="text-red-300">{playlist[currentTrack].year}</p>
                </div>
                <div className="text-red-300 font-mono">
                  {playlist[currentTrack].duration}
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-red-900 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Playlist */}
            <div className="space-y-2">
              {playlist.map((track, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrack(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    index === currentTrack
                      ? "bg-red-600/30 border border-red-400/50"
                      : "hover:bg-red-900/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === currentTrack
                            ? "bg-red-600 text-white"
                            : "bg-red-900 text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium">{track.title}</h4>
                        <p className="text-sm text-red-300">{track.year}</p>
                      </div>
                    </div>
                    <span className="text-red-300 font-mono text-sm">
                      {track.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-12 h-12 bg-red-900 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 bg-red-900 hover:bg-red-800 rounded-full flex items-center justify-center transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
