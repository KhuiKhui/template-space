"use client";
import { settingsClickedAtom } from "@/atoms";
import Clock from "@/components/Clock";
import Settings from "@/components/Settings";
import { useAtomValue } from "jotai";

export default function Home() {
  const settingsClicked = useAtomValue(settingsClickedAtom);
  return (
    <>
      <div className="flex flex-col items-center">
        {settingsClicked ? <Settings /> : <Clock />}
      </div>
    </>
  );
}
