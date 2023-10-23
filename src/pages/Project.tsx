import { useEffect, useState } from "react";
import MountLoading from "../components/common/index/MountLoading";

function Project() {
  const [toggleLoading, setToggleLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleLoading((prev) => !prev);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return <div>{toggleLoading && <MountLoading />}</div>;
}

export default Project;
