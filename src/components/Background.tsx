"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Background() {
  return (
    <div className="-z-10 absolute top-[65%] left-[50%]">
      <div className="-z-10 scale-[0.1] w-[160px] h-[160px] bg-[url(/black-cat-idle.gif)] hover:bg-[url(/black-cat-sleep.gif)]"></div>
    </div>
  );
}

export default Background;
