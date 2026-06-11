"use client";

import dynamic from "next/dynamic";

const MapaCidade = dynamic(() => import("../components/MapaCidade"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <MapaCidade />
    </main>
  );
}