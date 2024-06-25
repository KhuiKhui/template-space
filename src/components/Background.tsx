"use client";
import { darkAtom } from "@/atoms";
import { useAtomValue } from "jotai";

function Background() {
  const toggleDark = useAtomValue(darkAtom);
  return (
    <>
      {!toggleDark ? (
        <div className="z-[5] flex flex-row items-center justify-center absolute w-screen top-[65%]">
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/black-cat-idle.gif)] hover:bg-[url(/black-cat-sleep.gif)]" />
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/penguin-idle.gif)] hover:bg-[url(/penguin-explode.gif)]" />
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/ice-idle.gif)] hover:bg-[url(/ice-melt.gif)]" />
        </div>
      ) : (
        <div className="z-[5] flex flex-row items-center justify-center absolute w-screen top-[65%]">
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/ghost-idle.gif)] hover:bg-[url(/ghost-sleep.gif)]" />
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/pixar-idle.gif)] hover:bg-[url(/pixar-off.gif)]" />
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/fire-idle.gif)] hover:bg-[url(/fire-burn-out.gif)]" />
        </div>
      )}
    </>
  );
}

export default Background;
