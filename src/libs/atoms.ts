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

const getCookie = () => {
  const cookies = document.cookie;
  const cookiesArray = cookies.split("; ");
  return cookiesArray.some((cookie) => cookie.includes("JdarkMode"));
};
export const darkModeAtom = atom({
  key: "darkModeAtom",
  default: getCookie() ? true : false,
});

export const toggleLoadingAtom = atom({
  key: "toggleLoadingAtom",
  default: false,
});

export const toggleProjectViewAtom = atom<"GRID" | "LIST">({
  key: "toggleProjectViewAtom",
  default: "GRID",
});
