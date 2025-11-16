"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        background: {
          color: "0e0e0e",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: true, force: 40, smooth: 80 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#fff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 50,
          },
          opacity: {
            animation: {
              count: 0,
              enable: true,
              speed: 2.22,
              decay: 0,
              delay: 0,
              sync: true,
              mode: "auto",
              startValue: "random",
              destroy: "none",
              minimumValue: 0,
            },
            value: {
              min: 0,
              max: 1,
            },
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
