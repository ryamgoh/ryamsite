import { useEffect } from "react";
import { globeConfig } from "@/utils/config.globe";
import { World } from "@/utils/globe";
import React from "react";

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
    <div id="scene-container" className="flex items-center justify-center" />
  );
}
