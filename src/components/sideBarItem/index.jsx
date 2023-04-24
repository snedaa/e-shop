import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./styles.module.css";

function SideBarItem({ category }) {
  const [dropDownActive, setdropDownActive] = useState(false);

  const handleDropdown = () => {
    setdropDownActive(!dropDownActive);
  };

  return (
    <div>
      <Link
        to={`shop/${category.name}`.toLowerCase()}
        className={styles.responMenuItem}
      >
        {category.name}
        <RiArrowDropDownLine className="text-2xl" onClick={handleDropdown} />
      </Link>

      <div
        className={styles.responMenuList}
        style={{
          width: dropDownActive ? "100%" : "0",
          height: dropDownActive ? "150px" : "0",
        }}
      >
        {category.subCategories.map((subCategory) => (
          <Link
            key={subCategory.id}
            to={`/shop/${category.name}/${subCategory.name}`.toLowerCase()}
          >
            {subCategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBarItem;
