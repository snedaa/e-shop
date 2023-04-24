import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import SideBarItem from "../sideBarItem";
import { useFetch } from "../../hooks/useFetch";

import styles from "./styles.module.css";
import { endpoints } from "../../config/api-config";
import { getPaginationQuery } from "../../utils/query-helper";
import ShoppingCart from "../shopping-cart";

function Header() {
  const { data, loading } = useFetch(getPaginationQuery(endpoints.categories));

  const [isActive, setIsActive] = useState(false);

  const [basketActive, setBasketActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  const closeSideBar = () => {
    setIsActive(!isActive);
  };

  const basketHandle = () => {
    setBasketActive(!basketActive);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuBar}>
          <HiMenu className="text-2xl cursor-pointer" onClick={handleMenu} />
        </div>

        <Link to="/home">
          <img
            className={styles.logo}
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/lgh_f6.png?v=1679891172&width=165"
            alt="logo"
          />
        </Link>

        <div className={styles.menu}>
          {loading && <div className="text-black">Loading...</div>}
          <Link to="/home" className={styles.menuItem}>
            Home
          </Link>
          {data &&
            data.items.map((category) => (
              <Link
                key={category.id}
                to={`/shop/${category.name}`.toLowerCase()}
                className={styles.menuItem}
              >
                <span className="flex items-center">
                  {category.name}
                  <RiArrowDropDownLine />
                </span>

                <div className={styles.menuList}>
                  {category.subCategories.map((subCategory) => (
                    <Link
                      key={subCategory.id}
                      to={`/shop/${category.name}/${subCategory.name}`.toLowerCase()}
                    >
                      {subCategory.name}
                    </Link>
                  ))}
                </div>
              </Link>
            ))}
        </div>

        <div className="flex items-center list-none">
          <Link>
            <FiSearch className={styles.icon} />
          </Link>
          <Link>
            <MdPersonOutline className={styles.icon} />
          </Link>
          <Link>
            <BiTimeFive className={styles.icon} />
          </Link>
          <Link className="relative">
            <AiOutlineHeart className={styles.icon} />
            <div className={styles.counter}>0</div>
          </Link>
          <div className="relative cursor-pointer">
            <RiShoppingCartLine
              className={styles.icon}
              onClick={basketHandle}
            />
            <div className={styles.counter}>0</div>
          </div>
          {basketActive && (
            <div>
              <ShoppingCart setBasketActive={setBasketActive} basketActive={basketActive}/>
            </div>
          )}
        </div>
      </header>

      <div
        className="bg-[rgb(0,0,0,.5)]"
        style={{
          width: isActive ? "100%" : "0",
          height: isActive ? "100vh" : "0",
          position: isActive ? "absolute" : "none",
          top: isActive ? "0" : "0",
        }}
      >
        <div
          className={styles.responsiveMenu}
          style={{
            overflow: isActive ? "auto" : "hidden",
            width: isActive ? "24rem" : "0",
          }}
        >
          <h3 className="bg-black text-white h-14 flex justify-center items-center">
            Menu
          </h3>
          {data &&
            data.items.map((category) => (
              <SideBarItem key={category.id} category={category} />
            ))}
        </div>

        <div
          className={styles.close}
          style={{
            display: isActive ? "flex" : "none",
          }}
        >
          <RxCross1 onClick={closeSideBar} />
        </div>
      </div>
    </>
  );
}

export default Header;
