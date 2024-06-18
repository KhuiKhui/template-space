"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useSetAtom } from "jotai";
import { settingsClickedAtom } from "@/atoms";
function Header() {
  const [settingsClicked, setSettingsClicked] = useAtom(settingsClickedAtom);
  return (
    <div className="flex justify-between p-[5px]">
      <span>[ Template _ ]</span>
      <button
        className="h-fit"
        onClick={() => setSettingsClicked(!settingsClicked)}
      >
        <FontAwesomeIcon
          icon={faGear}
          className="w-[20px] h-[20px]"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Header;
