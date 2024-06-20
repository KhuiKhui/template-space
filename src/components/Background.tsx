"use client";
import { darkAtom } from "@/atoms";
import { useAtomValue } from "jotai";

function Background() {
  const toggleDark = useAtomValue(darkAtom);
  return (
    <div className="z-[2] absolute top-[65%] left-[50%]">
      {!toggleDark ? (
        <div>
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/black-cat-idle.gif)] hover:bg-[url(/black-cat-sleep.gif)]"></div>
        </div>
      ) : (
        <div>
          <div className="-z-10 scale-[0.2] w-[160px] h-[160px] bg-[url(/ghost-idle.gif)] hover:bg-[url(/ghost-sleep.gif)]"></div>
        </div>
      )}
    </div>
  );
}

export default Background;
