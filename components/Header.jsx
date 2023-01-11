import Link from "next/link";
import { useDispatch } from "react-redux";

import { setOpenMenu } from "../redux/slices/menuSlice";

export default function Header({}) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header_menu">
        <img
          onClick={() => dispatch(setOpenMenu())}
          src="../img/menu.png"
          alt="DuckLogo"
          className="w-6"
        />
      </div>
      <Link href="/" className="header_logo">
        <img src="../img/DuckLogo.svg" alt="DuckLogo" />
        <h1>Studuck</h1>
      </Link>
      <div className="header_search hidden">
        <input className="desc_input" placeholder="Поиск" type="text" />
      </div>
    </div>
  );
}
