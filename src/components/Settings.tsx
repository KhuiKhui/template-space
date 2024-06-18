"use client";
import { settingsAtom, settingsClickedAtom } from "@/atoms";
import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import React from "react";

function Settings() {
  const [settings, setSettings] = useAtom(settingsAtom);

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-left w-[350px] h-[450px] border-black border-2 flex flex-col items-center p-[8px]">
      <div className="flex flex-row justify-center items-center w-full">
        <b className="text-center">Settings</b>
      </div>

      <br></br>
      <div className="grid grid-rows-5 grid-cols-2 gap-3 w-full">
        <span className="justify-self-end">Show time: </span>
        <button
          onClick={() =>
            setSettings({ ...settings, toggleTime: !settings.toggleTime })
          }
          className="border-[black] border-dashed border-2 w-[50px] hover:bg-[#F5F5F5] justify-self-center"
        >
          {settings.toggleTime ? "On" : "Off"}
        </button>
        <span className="justify-self-end">Show footer: </span>
        <button
          onClick={() =>
            setSettings({ ...settings, toggleFooter: !settings.toggleFooter })
          }
          className="border-[black] border-dashed border-2 w-[50px] h-fit hover:bg-[#F5F5F5] justify-self-center"
        >
          {settings.toggleFooter ? "On" : "Off"}
        </button>
      </div>
      <br></br>
      <div>
        <div>
          Template Space is a monotone environment, designed for staring at your
          screen and thinking when you don{"'"}t know what tab to open. This
          website is heavily inspired by OMORI, you can check them out{" "}
          <a
            className="underline"
            href="https://www.omori-game.com/en"
            target="_blank"
          >
            here
          </a>
          .
        </div>
        <br></br>
        <div>Reach me here: khoikhuat0807@gmail.com</div>
      </div>
    </div>
  );
}

export default Settings;
