import ParticlesComponent from "./components/common/ParticlesComponent";
import useLogoEyes from "./hooks/useLogoEyes";
import Router from "./Router";

function App() {
  const { handleMouseMove } = useLogoEyes();

  return (
    <div
      className="bg-[#f1f1f1] dark:bg-[#0E0E0E] text-black dark:text-white scroll-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParticlesComponent />
      <Router />
    </div>
  );
}

export default App;
