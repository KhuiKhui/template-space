"use client";
import React, { useEffect, useRef, useState } from "react";

function Clock() {
  const [time, setTime] = useState<Date>();
  const timeRef = useRef<any>(null);
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
    <div className="mt-[50px]">
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
        <div />
      )}
    </div>
  );
}

export default Clock;
