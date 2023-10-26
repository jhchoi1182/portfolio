import Footer from "../components/common/Footer";
import Experience from "../components/experience/index/Experience";
import Banner from "../components/mainBanner/index/Banner";
import Overview from "../components/mainBanner/index/Overview";
import Skill from "../components/skill/index/Skill";

function About() {
  return (
    <main className="select-none pt-[6%]">
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
      <section>
        <div className="relative z-20 pt-[10%]">
          <hr className="w-full h-[2px] bg-gray-300 dark:bg-zinc-900" />
        </div>
        <Footer />
      </section>
    </main>
  );
}

export default About;
