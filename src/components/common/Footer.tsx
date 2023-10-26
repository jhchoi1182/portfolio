import { useRecoilValue } from "recoil";
import logoDark from "../../assets/images/logo_dark.png";
import logoLight from "../../assets/images/logo_light.png";
import { darkModeAtom } from "../../libs/atoms";

const styles = {
  subheading: `flex text-sm text-[#95918c] mb-7 font-normal font-notoSans`,
};

function Footer() {
  const isDark = useRecoilValue(darkModeAtom);

  return (
    <div className="w-full h-[450px] px-[5%] pb-10 select-text font-chosunilbo">
      <div className="flex h-full justify-between">
        <div className="relative my-auto pb-20 z-20 text-5xl font-bold">
          <span className={styles.subheading}>PORTFOLIO</span>
          <h1>CHOI</h1>
          <h1>JI</h1>
          <h1>HYEON</h1>
        </div>
        <div className="ml-48 mt-auto">
          <div className="relative z-20 mb-20 text-2xl font-bold">
            <span className={styles.subheading}>FOLLOW</span>
            <a
              href="https://jhchoi1182.tistory.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
            >
              <h3>BLOG</h3>
            </a>
            <a
              href="https://github.com/jhchoi1182"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
            >
              <h3>GITHUB</h3>
            </a>
          </div>
          <div className="relative z-20 text-2xl font-bold">
            <span className={styles.subheading}>CONTACT</span>
            <h3>jhchoi1182@gmail.com</h3>
            <h3>+82-10-6262-1182</h3>
          </div>
        </div>
        <div className="relative z-20 mt-auto">
          <img className="w-6" src={isDark ? logoDark : logoLight} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
