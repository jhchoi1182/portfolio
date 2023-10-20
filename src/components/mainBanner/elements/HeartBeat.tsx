import { useRecoilValue } from "recoil";
import { darkModeAtom } from "../../../libs/atoms";

function HeartBeat() {
  const isDark = useRecoilValue(darkModeAtom);

  return (
    <svg
      className="absolute inset-0 w-full z-0 overflow-hidden heartbeat"
      width="1919"
      height="531"
      viewBox="0 0 1919 531"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isDark ? (
        <>
          <path
            d="M0 323.805H980.555L1047.73 80.5745L1136.96 529L1244.74 2L1317.43 430.907L1381.6 219.206L1426.72 323.805H1919"
            stroke="url(#paint0_radial_49_41)"
            stroke-width="20"
          />
          <defs>
            <radialGradient
              id="paint0_radial_49_41"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-0.501279 529.5) scale(1920 6968.26)"
            >
              <stop stop-color="#778DFF" />
              <stop offset="0.536458" stop-color="#0D0B97" />
              <stop offset="0.692708" stop-color="#0D0B97" />
              <stop offset="1" stop-color="#778DFF" />
            </radialGradient>
          </defs>
        </>
      ) : (
        <>
          <path
            d="M0 323.805H980.555L1047.73 80.5745L1136.96 529L1244.74 2L1317.43 430.907L1381.6 219.206L1426.72 323.805H1919"
            stroke="url(#paint0_radial_12_7)"
            stroke-width="20"
          />
          <defs>
            <radialGradient
              id="paint0_radial_12_7"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-0.501279 529.5) scale(1920 6968.26)"
            >
              <stop stop-color="#107557" />
              <stop offset="0.604945" stop-color="#70FFD4" />
              <stop offset="0.679836" stop-color="#70FFD4" />
              <stop offset="1" stop-color="#107557" />
            </radialGradient>
          </defs>
        </>
      )}
    </svg>
  );
}

export default HeartBeat;
