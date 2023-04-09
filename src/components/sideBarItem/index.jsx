import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css"

function SideBarItem({title}) {
  const [dropDownActive, setdropDownActive] = useState(false);

  const handleDropdown = () => {
    setdropDownActive(!dropDownActive);
  };

  return (
    <div>
      <Link className={styles.responMenuItem}>
        {title}
        <RiArrowDropDownLine className="text-2xl" onClick={handleDropdown} />
      </Link>

      <div
        className={styles.responMenuList}
        style={{
          width: dropDownActive ? "100%" : "0",
          height: dropDownActive ? "150px" : "0",
        }}
      >
        <Link>Item</Link>
        <Link>Item</Link>
        <Link>Item</Link>
        <Link>Item</Link>
        <Link>Item</Link>
        <Link>Item</Link>
      </div>
    </div>
  );
}

export default SideBarItem;
