import { useEffect } from "react";
import { globeConfig } from "@/utils/config.globe";
import { World } from "@/utils/globe";
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

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
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowDown
        className="absolute h-20 w-20 animate-bounce text-foreground transition-all duration-500 ease-in-out hover:scale-110 hover:animate-spin hover:cursor-pointer hover:text-teal-500"
        onClick={() => {}}
      />
    </div>
  );
}
