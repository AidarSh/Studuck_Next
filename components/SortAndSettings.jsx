import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  setSettingsWindow,
  setSearch,
  setBtn,
} from "../redux/slices/settingsSlice";
import { setSort, setSortWindow } from "../redux/slices/sortSlice";
import Settings from "./Settings";

export default function SortAndSetting() {
  const sort = useSelector((state) => state.sort);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(setSearch(name));
  // };
  return (
    <div className="bg-white p-2 mb-2 rounded-xl">
      <div className="flex items-stretch ">
        <div className="flex items-center flex-1 md:mr-12 mr-5">
          {/* <form className="flex w-full"> */}
          <input
            className="w-full rounded-md mr-2 bg-[#f2f2f2] py-2 px-4 outline-0"
            placeholder="Поиск"
            type="text"
            value={settings.search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <button
            className="border-2 rounded-md px-2 py-1 cursor-pointer h-full"
            // type="submit"
            onClick={() => dispatch(setBtn())}
          >
            <img className="w-6" src="img/search.png" alt="SortDown" />
          </button>
          {/* </form> */}
          {/* <div className="border-2 rounded-md px-2 py-1 cursor-pointer">
            <img className="w-6" src="img/search.png" alt="SortDown" />
          </div> */}
        </div>
        <div
          className="border-2 rounded-md px-2 py-1 cursor-pointer"
          onClick={() => dispatch(setSettingsWindow())}
        >
          <img className="w-6" src="img/filter.png" alt="SortDown" />
        </div>
        {/* <div className="sort">
          <img
            src="img/filter.svg"
            alt=""
            onClick={() => {
              dispatch(setSortWindow());
            }}
            className="border border-2 p-1 rounded w-7 text-red"
          />
          {sort.sortWindow && (
            <div className="sort_window">
              <ul>
                <li onClick={() => dispatch(setSort("По рейтингу"))}>
                  По рейтингу
                </li>
                <li onClick={() => dispatch(setSort("По баллам"))}>
                  По баллам
                </li>
                <li onClick={() => dispatch(setSort("По стоимости обучения"))}>
                  По стоимости обучения
                </li>
              </ul>
            </div>
          )}
        </div> */}
      </div>
      {settings.settingsWindow && <Settings />}
    </div>
  );
}
