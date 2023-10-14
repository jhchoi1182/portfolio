import Developer from "../elements/Developer";
import End from "../elements/End";
import Front from "../elements/Front";

function MainBanner() {
  return (
    <section className="flex flex-col items-center">
      <Front />
      <End />
      <Developer />
    </section>
  );
}

export default MainBanner;
