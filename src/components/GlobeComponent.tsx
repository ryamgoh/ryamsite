import { useEffect } from "react";
import { globeConfig } from "@/utils/config.globe";
import { World } from "@/utils/globe";
import React from "react";
import { ArrowDown } from "lucide-react";

export default function GlobeComponent() {
  useEffect(() => {
    if (!document.getElementById("globe-canvas")) {
      const container = document.querySelector("#scene-container");
      const world = new World(container as Element, undefined, globeConfig);
      world.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="scene-container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowDown className="animate-bounce w-20 h-20 text-foreground absolute" />
    </div>
  );
}
