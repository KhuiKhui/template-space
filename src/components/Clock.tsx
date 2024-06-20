"use client";
import { settingsAtom } from "@/atoms";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import React, { useEffect, useRef, useState } from "react";

function Clock() {
  const [time, setTime] = useState<Date>();
  const timeRef = useRef<any>(null);
  const settings = useAtomValue(settingsAtom);
  useEffect(() => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
    const inter = setInterval(() => {
      setTime(new Date());
    }, 1000);
    timeRef.current = inter;
  });

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center z-[1] opacity-[0.99] mt-[50px] font-display",
        {
          block: settings.toggleTime,
          hidden: !settings.toggleTime,
        }
      )}
    >
      {time ? (
        <div className="flex flex-col items-center justify-center">
          <div className="text-[150px]">
            {time?.getHours()! < 10 ? `0${time?.getHours()}` : time?.getHours()}
            :
            {time?.getMinutes()! < 10
              ? `0${time?.getMinutes()}`
              : time?.getMinutes()}
          </div>
          <div className="text-[25px]">
            {time?.toString().slice(0, 3)}, {time?.toString().slice(3, 15)}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="text-[150px]">--:--</div>
          <div className="text-[25px]">---, --- -- ----</div>
        </div>
      )}
    </div>
  );
}

export default Clock;
