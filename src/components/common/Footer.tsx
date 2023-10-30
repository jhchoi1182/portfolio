import { useRecoilValue } from "recoil";
import logoDark from "../../assets/images/logo_dark.png";
import logoLight from "../../assets/images/logo_light.png";
import { darkModeAtom } from "../../libs/atoms";

const styles = {
  subheading: `flex text-xs text-[#95918c] mb-7 font-normal font-notoSans lg:text-sm`,
};

function Footer() {
  const isDark = useRecoilValue(darkModeAtom);

  return (
    <div className="relative w-full h-[400px] px-[5%] py-10 select-text font-chosunilbo lg:h-[450px] sm:h-[300px]">
      <div className="flex h-full justify-between">
        <div className="relative my-auto pb-[120px] z-20 text-2xl font-bold lg:text-5xl sm:text-4xl">
          <span className={styles.subheading}>PORTFOLIO</span>
          <h1>CHOI</h1>
          <h1>JI</h1>
          <h1>HYEON</h1>
        </div>
        <div className="ml-[25%] mt-8 lg:ml-48 sm:mt-auto">
          <div className="relative z-20 mb-10 text-lg font-bold lg:mb-20 lg:text-2xl sm:text-xl">
            <span className={styles.subheading}>FOLLOW</span>
            <span className="flex">
              <a
                href="https://jhchoi1182.tistory.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                BLOG
              </a>
            </span>
            <span>
              <a
                href="https://github.com/jhchoi1182"
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB
              </a>
            </span>
          </div>
          <div className="absolute bottom-10 left-[5%] z-20 text-lg font-bold lg:text-2xl sm:text-xl sm:relative sm:bottom-0 sm:left-0">
            <span className={styles.subheading}>CONTACT</span>
            <h3>jhchoi1182@gmail.com</h3>
            <h3>+82-10-6262-1182</h3>
          </div>
        </div>
        <div className="absolute bottom-14 right-[10%] z-20 mt-auto -mb-4 sm:relative sm:bottom-0 sm:right-0 sm:block lg:mb-1">
          <img className="w-6" src={isDark ? logoDark : logoLight} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
