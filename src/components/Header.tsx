import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="flex justify-end">
      <button className="h-fit">
        <FontAwesomeIcon
          icon={faGear}
          className="w-[20px] h-[20px] m-[5px]"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Header;
