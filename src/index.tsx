import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">
      {/* 상단 로고 영역 */}
      <div className="flex items-center gap-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-12 w-12 hover:scale-105 transition-transform"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-12 w-12 hover:scale-105 transition-transform"
          />
        </a>
      </div>

      {/* 타이틀 / 서브타이틀 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Vite + React + Tailwind + shadcn
        </h1>
        <p className="text-sm text-slate-500">
          UI Vibe Lab
        </p>
      </div>

      {/* 버튼 / 설명 */}
      <div className="flex flex-col items-center gap-3">
        <Button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6"
        >
          count is {count}
        </Button>
        <p className="text-xs text-slate-500">
          Edit <code className="font-mono text-slate-700">src/index.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;
