import { useEffect, useState } from "react";
import Footer from "../components/common/index/Footer";
import MountLoading from "../components/common/index/MountLoading";
import Experience from "../components/experience/index/Experience";
import Banner from "../components/mainBanner/index/Banner";
import Overview from "../components/mainBanner/index/Overview";
import Skill from "../components/skill/index/Skill";

function About() {
  const [toggleLoading, setToggleLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleLoading((prev) => !prev);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="select-none">
      {toggleLoading && <MountLoading />}
      <section>
        <Banner />
        <Overview />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Experience />
      </section>
      <section className="pt-[10%]">
        <hr className="relative w-full h-[2px] bg-gray-300 dark:bg-zinc-900 z-20" />
        <Footer />
      </section>
    </main>
  );
}

export default About;
