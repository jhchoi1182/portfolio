import ParticlesComponent from "./components/common/ParticlesBackground";
import StartupLoading from "./components/common/StartupLoading";
import useLogoEyes from "./hooks/useLogoEyes";
import RootRouter from "./shared/RootRouter";
import { REACTIVE_COLOR } from "./styles/colors";

function App() {
  const { handleMouseMove } = useLogoEyes();
  return (
    <div className={`${REACTIVE_COLOR.primaryText}`} onMouseMove={handleMouseMove}>
      <StartupLoading />
      <ParticlesComponent />
      <RootRouter />
    </div>
  );
}

export default App;
