import useLogoEyes from "./hooks/useLogoEyes";
import Router from "./Router";

function App() {
  const { handleMouseMove } = useLogoEyes();

  return (
    <div onMouseMove={handleMouseMove}>
      <Router />;
    </div>
  );
}

export default App;
