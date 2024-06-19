"use client";
import { darkAtom, settingsClickedAtom } from "@/atoms";
import Background from "@/components/Background";
import Clock from "@/components/Clock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import clsx from "clsx";
import { useAtomValue } from "jotai";

export default function Home() {
  const settingsClicked = useAtomValue(settingsClickedAtom);
  const toggleDark = useAtomValue(darkAtom);
  return (
    <>
      <div
        className={clsx(
          "gap-2 grid grid-rows-layout grid-cols-1 justify-center min-w-screen min-h-screen font-display cursor-default",
          {
            "dark dark:bg-black dark:text-white": toggleDark,
          }
        )}
      >
        <Header></Header>
        <div className="flex flex-col items-center isolate">
          {/* {settingsClicked ? <Settings /> : <Clock />} */}
          <Settings />
          <Clock />
        </div>

        <Footer></Footer>
      </div>
      <div className="absolute top-[50%] left-1/2 -z-10">TEST</div>
    </>
  );
}
