import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create worker
    const worker = new Worker(new URL("../src/worker.js", import.meta.url), {
      type: "module",
      name: "worker",
    });
  }, []);

  return <div></div>;
}
