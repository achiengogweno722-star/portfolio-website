import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (

    <Particles

      id="tsparticles"

      init={particlesInit}

      options={{

        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {

          color: {
            value: "#3b82f6",
          },

          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          collisions: {
            enable: true,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },

          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },

          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },

        },

        detectRetina: true,

      }}

      className="absolute inset-0 -z-10"

    />

  );
}

export default ParticlesBackground;