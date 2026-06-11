"use client";

import L from "leaflet";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const defaultCityCenter: [number, number] = [-6.2548, -36.5146];

const curraisNovosBounds: [[number, number], [number, number]] = [
    [-6.2925, -36.565],
    [-6.215, -36.455],
];

const testMarkers = [
    {
        position: [-6.2582, -36.5118] as [number, number],
        label: "Centro de Currais Novos",
        description: "Ponto de teste para validar o pin no mapa.",
    },
    {
        position: [-6.2473, -36.5228] as [number, number],
        label: "Entrada oeste",
        description: "Segundo marcador estático para conferir a renderização.",
    },
];

const staticMarkerIcon = L.divIcon({
    className: "custom-map-pin",
    html: `
    <div style="
      width: 22px;
      height: 22px;
      border-radius: 9999px 9999px 9999px 0;
      background: linear-gradient(180deg, #22d3ee 0%, #0284c7 100%);
      transform: rotate(-45deg);
      border: 2px solid rgba(255,255,255,0.95);
      box-shadow: 0 10px 24px rgba(2, 132, 199, 0.45);
      position: relative;
    ">
      <span style="
        position: absolute;
        inset: 5px;
        border-radius: 9999px;
        background: rgba(255,255,255,0.96);
      "></span>
    </div>
  `,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -20],
});

export default function MapaCidade() {
    const [painelAberto, setPainelAberto] = useState(true);

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%)]" />

            <div className="absolute left-4 right-4 top-4 z-[1000] rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-slate-100 shadow-2xl backdrop-blur md:max-w-sm md:right-auto">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                            Currais Novos - RN
                        </p>
                        {painelAberto && (
                            <>
                                <h1 className="mt-2 text-2xl font-semibold leading-tight">
                                    Visualização inicial de Currais Novos
                                </h1>
                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Interface pronta para navegação. O mapa está restrito a Currais Novos e os pins abaixo são estáticos para teste.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                                    <span className="rounded-full bg-white/10 px-3 py-1">Mapa centralizado</span>
                                    <span className="rounded-full bg-white/10 px-3 py-1">Responsivo</span>
                                    <span className="rounded-full bg-white/10 px-3 py-1">2 marcadores</span>
                                </div>
                            </>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setPainelAberto((current) => !current)}
                        aria-label={painelAberto ? "Recolher painel" : "Expandir painel"}
                        aria-expanded={painelAberto}
                        className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 transition hover:bg-white/10"
                    >
                        {painelAberto ? "Recolher" : "Abrir"}
                    </button>
                </div>
            </div>

            <MapContainer
                center={defaultCityCenter}
                zoom={14}
                minZoom={13}
                maxZoom={18}
                maxBounds={curraisNovosBounds}
                maxBoundsViscosity={1.0}
                scrollWheelZoom={true}
                zoomControl={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {testMarkers.map((marker) => (
                    <Marker
                        key={marker.label}
                        position={marker.position}
                        icon={staticMarkerIcon}
                    >
                        <Popup>
                            <strong>{marker.label}</strong>
                            <br />
                            {marker.description}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    );
}