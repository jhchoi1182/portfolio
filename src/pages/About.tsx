import Experience from "../components/experience/index/Experience";
import Banner from "../components/mainBanner/index/Banner";
import Overview from "../components/mainBanner/index/Overview";
import Skill from "../components/skill/index/Skill";

function About() {
  return (
    <main className="select-none">
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
      <div className="h-screen">안녕</div>
    </main>
  );
}

export default About;
