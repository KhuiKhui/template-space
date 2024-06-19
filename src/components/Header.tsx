"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { darkAtom, settingsClickedAtom } from "@/atoms";
function Header() {
  const [settingsClicked, setSettingsClicked] = useAtom(settingsClickedAtom);
  const [toggleDark, setToggleDark] = useAtom(darkAtom);
  return (
    <div className="flex justify-between p-[5px]">
      <span>[ Template _ ]</span>
      <div>
        <button className="h-fit" onClick={() => setToggleDark(!toggleDark)}>
          <FontAwesomeIcon
            icon={toggleDark ? faSun : faMoon}
            className="w-[20px] h-[20px] mr-3"
          ></FontAwesomeIcon>
        </button>

        <button
          className="h-fit"
          onClick={() => setSettingsClicked(!settingsClicked)}
        >
          <FontAwesomeIcon
            icon={faGear}
            className="w-[20px] h-[20px] mr-[5px]"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Header;
