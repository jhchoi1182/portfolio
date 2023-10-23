import FirstBuildLoading from "./components/common/index/FirstBuildLoading";
import ParticlesComponent from "./components/common/index/ParticlesBackground";
import useLogoEyes from "./hooks/useLogoEyes";
import Router from "./Router";

function App() {
  const { handleMouseMove } = useLogoEyes();

  return (
    <div
      className="text-black dark:text-white scroll-hidden"
      onMouseMove={handleMouseMove}
    >
      <FirstBuildLoading />
      <ParticlesComponent />
      <Router />
    </div>
  );
}

export default App;
