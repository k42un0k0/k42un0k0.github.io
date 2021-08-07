import { useEffect } from "react";
import { DemoCubesWorld } from "../pagesComponents/index/anime";

export default function Home() {
  useEffect(() => {
    new DemoCubesWorld();
  }, []);
  return <div></div>;
}
