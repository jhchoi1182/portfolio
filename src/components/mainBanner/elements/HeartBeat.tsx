import { useRecoilValue } from "recoil";
import { darkModeAtom } from "../../../libs/atoms";

function HeartBeat() {
  const isDark = useRecoilValue(darkModeAtom);

  return (
    <svg
      className="absolute top-0 left-[30%] w-[1100px] -translate-x-1/2 z-0 overflow-hidden heartbeat xl:left-1/2 lg:w-[1919px] lg:left-[40%] md:w-[1500px] sm:w-[1300px]"
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
            stroke="url(#paint0_linear_52_2)"
            strokeWidth="20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_52_2"
              x1="-1920.5"
              y1="529.5"
              x2="1919.5"
              y2="529.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.197917" stopColor="#0D0B97" />
              <stop offset="0.679836" stopColor="#2EB7E1" />
              <stop offset="0.84375" stopColor="#5D2BB0" />
              <stop offset="1" stopColor="#778DFF" />
            </linearGradient>
          </defs>
        </>
      ) : (
        <>
          <path
            d="M0 323.805H980.555L1047.73 80.5745L1136.96 529L1244.74 2L1317.43 430.907L1381.6 219.206L1426.72 323.805H1919"
            stroke="url(#paint0_radial_12_7)"
            strokeWidth="20"
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
              <stop stopColor="#107557" />
              <stop offset="0.604945" stopColor="#70FFD4" />
              <stop offset="0.679836" stopColor="#70FFD4" />
              <stop offset="1" stopColor="#107557" />
            </radialGradient>
          </defs>
        </>
      )}
    </svg>
  );
}

export default HeartBeat;
