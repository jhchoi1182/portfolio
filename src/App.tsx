import Router from "./Router";
import useLogoEyes from "./utils/hook/useLogoEyes";

function App() {
  const { handleMouseMove } = useLogoEyes();

  return (
    <div onMouseMove={handleMouseMove}>
      <Router />;
    </div>
  );
}

export default App;
