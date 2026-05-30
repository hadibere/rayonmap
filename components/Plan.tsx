"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const rayonsReference = [
  { id: "1", nom: "Boulangerie", icone: "🥖" },
  { id: "2", nom: "Boucherie", icone: "🥩" },
  { id: "3", nom: "Fruits & Legumes", icone: "🥦" },
  { id: "4", nom: "Surgeles", icone: "🧊" },
  { id: "5", nom: "Boissons", icone: "🥤" },
  { id: "6", nom: "Epicerie", icone: "🛒" },
  { id: "7", nom: "Produits Bio", icone: "🌿" },
  { id: "8", nom: "Hygiene", icone: "🧴" },
  { id: "9", nom: "Entree", icone: "🚪" },
];

type Zone = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rayon?: { nom: string; icone: string };
};

const zonesInitiales: Zone[] = [
  { id: "z1", x: 20, y: 20, width: 150, height: 80 },
  { id: "z2", x: 190, y: 20, width: 150, height: 80 },
  { id: "z3", x: 360, y: 20, width: 150, height: 80 },
  { id: "z4", x: 20, y: 120, width: 150, height: 80 },
  { id: "z5", x: 190, y: 120, width: 150, height: 80 },
  { id: "z6", x: 360, y: 120, width: 150, height: 80 },
  { id: "z7", x: 20, y: 220, width: 490, height: 50 },
];

export default function Plan() {
  const [zones, setZones] = useState<Zone[]>(zonesInitiales);
  const [zoneSelectionnee, setZoneSelectionnee] = useState<Zone | null>(null);
  const [dialogOuvert, setDialogOuvert] = useState(false);

  function handleClickZone(zone: Zone) {
    setZoneSelectionnee(zone);
    setDialogOuvert(true);
  }

  function handleChoisirRayon(rayon: { nom: string; icone: string }) {
    if (!zoneSelectionnee) return;
    setZones(
      zones.map((z) => (z.id === zoneSelectionnee.id ? { ...z, rayon } : z)),
    );
    setDialogOuvert(false);
  }

  return (
    <div>
      <svg width="100%" viewBox="0 0 530 290" className="border rounded-lg">
        <rect x="0" y="0" width="530" height="290" fill="#f9f9f9" />
        {zones.map((zone) => (
          <g
            key={zone.id}
            onClick={() => handleClickZone(zone)}
            className="cursor-pointer"
          >
            <rect
              x={zone.x}
              y={zone.y}
              width={zone.width}
              height={zone.height}
              fill={zone.rayon ? "#E1F5EE" : "#f0f0f0"}
              stroke={zone.rayon ? "#1D9E75" : "#ccc"}
              strokeWidth="1.5"
              strokeDasharray={zone.rayon ? "0" : "6 3"}
              rx="6"
            />
            <text
              x={zone.x + zone.width / 2}
              y={zone.y + zone.height / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="13"
              fill={zone.rayon ? "#0F6E56" : "#999"}
            >
              {zone.rayon
                ? zone.rayon.icone + " " + zone.rayon.nom
                : "+ Signaler"}
            </text>
          </g>
        ))}
      </svg>

      <Dialog open={dialogOuvert} onOpenChange={setDialogOuvert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quel rayon est ici ?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 mt-4">
            {rayonsReference.map((rayon) => (
              <Button
                key={rayon.id}
                variant="outline"
                onClick={() => handleChoisirRayon(rayon)}
              >
                {rayon.icone} {rayon.nom}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
