"use client";

import dynamic from "next/dynamic";

const MapaCidade = dynamic(() => import("../components/MapaCidade"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
        Carregando mapa da cidade...
      </p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <MapaCidade />
    </main>
  );
}