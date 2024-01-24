import ParticlesComponent from "./components/common/ParticlesBackground";
import StartupLoading from "./components/common/StartupLoading";
import useLogoEyes from "./hooks/useLogoEyes";
import RootRouter from "./shared/RootRouter";

function App() {
  const { handleMouseMove } = useLogoEyes();
  return (
    <div
      className="text-black dark:text-white scroll-hidden"
      onMouseMove={handleMouseMove}
    >
      <StartupLoading />
      <ParticlesComponent />
      <RootRouter />
    </div>
  );
}

export default App;
