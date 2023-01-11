import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCloseMenu } from "../redux/slices/menuSlice";
import { useState } from "react";
import { menuBtn } from "../data";

export default function Menu({}) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const menuValue = useSelector((state) => state.menu.value);

  const menuSelect = (id) => {
    dispatch(setCloseMenu());
    setCount(id);
  };
  return (
    <>
      <div className={menuValue ? "menu" : "menu d-none"}>
        <div className="menu_header">
          <div className="menu_header_btn">
            <img
              onClick={() => dispatch(setCloseMenu())}
              src="../img/menu.png"
              alt="DuckLogo"
              className="w-6"
            />
          </div>
          <div className="menu_header_logo">
            <img src="../img/DuckLogo.svg" alt="DuckLogo" />
            <h1>Studuck</h1>
          </div>
        </div>
        <ul>
          {menuBtn.map((obj, id) => (
            <li key={id} className={id === count ? "bg-white rounded-lg" : ""}>
              <Link onClick={() => menuSelect(id)} href={obj.link}>
                {obj.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu_desc">
          <Link onClick={() => dispatch(setCloseMenu())} href="/about-us">
            О нас
          </Link>
          <Link onClick={() => dispatch(setCloseMenu())} href="/">
            Помощь
          </Link>
          <Link onClick={() => dispatch(setCloseMenu())} href="/">
            Реклама
          </Link>
        </div>
      </div>
      <div className={menuValue ? "bg-shadow" : "bg-shadow d-none"}></div>
    </>
  );
}
