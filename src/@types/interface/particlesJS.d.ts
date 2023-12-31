// particlesJS 타입

export interface ParticlesConfig {
  particles: Particles;
  interactivity: Interactivity;
  retina_detect: boolean;
}

interface ParticlesNumber {
  value: number;
  density: {
    enable: boolean;
    value_area: number;
  };
}

interface ParticlesColor {
  value: string;
}

interface ParticlesShape {
  type: string;
  stroke: {
    width: number;
    color: string;
  };
  polygon: {
    nb_sides: number;
  };
  image: {
    src: string;
    width: number;
    height: number;
  };
}

interface ParticlesOpacity {
  value: number;
  random: boolean;
  anim: {
    enable: boolean;
    speed: number;
    opacity_min: number;
    sync: boolean;
  };
}

interface ParticlesSize {
  value: number;
  random: boolean;
  anim: {
    enable: boolean;
    speed: number;
    size_min: number;
    sync: boolean;
  };
}

interface ParticlesLineLinked {
  enable: boolean;
  distance: number;
  color: string;
  opacity: number;
  width: number;
}

interface ParticlesMove {
  enable: boolean;
  speed: number;
  direction: string;
  random: boolean;
  straight: boolean;
  out_mode: string;
  bounce: boolean;
  attract: {
    enable: boolean;
    rotateX: number;
    rotateY: number;
  };
}

interface Particles {
  number: ParticlesNumber;
  color: ParticlesColor;
  shape: ParticlesShape;
  opacity: ParticlesOpacity;
  size: ParticlesSize;
  line_linked: ParticlesLineLinked;
  move: ParticlesMove;
}

interface InteractivityEvents {
  onhover: {
    enable: boolean;
    mode: string;
  };
  onclick: {
    enable: boolean;
    mode: string;
  };
  resize: boolean;
}

interface InteractivityModes {
  grab: {
    distance: number;
    line_linked: {
      opacity: number;
    };
  };
  bubble: {
    distance: number;
    size: number;
    duration: number;
    opacity: number;
    speed: number;
  };
  repulse: {
    distance: number;
    duration: number;
  };
  push: {
    particles_nb: number;
  };
  remove: {
    particles_nb: number;
  };
}

interface Interactivity {
  detect_on: string;
  events: InteractivityEvents;
  modes: InteractivityModes;
}
