"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { settingsAtom } from "@/atoms";
function Footer() {
  const settings = useAtomValue(settingsAtom);
  return (
    <div
      className={clsx("flex flex-row self-end justify-between", {
        block: settings.toggleFooter,
        hidden: !settings.toggleFooter,
      })}
    >
      <div className="self-end ml-[5px] text-[10px]">
        © 2024 Khuat Dang Khoi. All rights reserved.
      </div>
      <div className="flex flex-row items-end justify-end">
        <Link href="https://www.facebook.com/khoi.khuatdang">
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-[20px] h-[20px] mr-3 mt-[5px]"
          ></FontAwesomeIcon>
        </Link>
        <Link href="https://www.linkedin.com/in/dang-khoi-khuat-4b5847281/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-[20px] h-[20px] mr-3 mt-[5px]"
          ></FontAwesomeIcon>
        </Link>
        <Link href="https://github.com/KhuiKhui">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-[20px] h-[20px] mr-3 mt-[5px]"
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
