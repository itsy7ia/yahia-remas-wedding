"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 45,
          },
          color: {
            value: "#ff2d55",
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
          opacity: {
            value: 0.35,
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}