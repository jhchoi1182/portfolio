import { atom } from "recoil";

interface EyeRef {
  containerRef?: HTMLDivElement | null;
  eyesRef?: HTMLDivElement | null;
}

export const eyeRefAtom = atom<EyeRef>({
  key: "eyesRefAtom",
  default: {
    containerRef: null,
    eyesRef: null,
  },
});
