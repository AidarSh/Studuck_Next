import { useSelector, useDispatch } from "react-redux";
import {
  setOpenWindow,
  setCity,
  setArm,
  setHostel,
  setState,
  setBtn,
  setReturn,
} from "../redux/slices/settingsSlice";

import styles from "../styles/settings.module.scss";

export default function SortAndSetting() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const data = [
    { name: "Казань" },
    { name: "Москва" },
    { name: "Елабуга" },
    { name: "Омск" },
    { name: "Киев" },
    { name: "Астана" },
    { name: "Новосибирск" },
    { name: "Челны" },
  ];
  return (
    <div className="settings">
      <div className={styles.city_select}>
        <p>Выбрать город:</p>
        <div
          onClick={() => dispatch(setOpenWindow())}
          className={styles.city_title}
        >
          <div>{settings.cityselect}</div>
          <img src="img/SortDown.png" alt="SortDown" />
        </div>
        {settings.window && (
          <div className={styles.city_window}>
            <ul>
              {data.map((obj, id) => (
                <li onClick={() => dispatch(setCity(obj.name))} key={id}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div class="flex items-center mb-4">
        <input
          id="arm-checkbox"
          type="checkbox"
          value=""
          checked={settings.armselect === "True" ? "checked" : ""}
          class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
          onClick={() => dispatch(setArm())}
        />
        <label for="arm-checkbox" class="ml-2">
          Военная кафедра
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="hostel-checkbox"
          type="checkbox"
          value=""
          checked={settings.hostelselect === "True" ? "checked" : ""}
          class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
          onClick={() => dispatch(setHostel())}
        />
        <label for="hostel-checkbox" class="ml-2">
          Общежитие
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="state-checkbox"
          type="checkbox"
          value=""
          checked={settings.stateselect === "True" ? "checked" : ""}
          class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
          onClick={() => dispatch(setState())}
        />
        <label for="state-checkbox" class="ml-2">
          Государственный
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="state-checkbox"
          type="checkbox"
          value=""
          class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
          onClick={() => dispatch(setState())}
        />
        <label for="state-checkbox" class="ml-2">
          Гуманитарный ВУЗ
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="state-checkbox"
          type="checkbox"
          value=""
          class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
          onClick={() => dispatch(setState())}
        />
        <label for="state-checkbox" class="ml-2">
          Технический ВУЗ
        </label>
      </div>
      <div className="flex w-full  mt-2">
        <button
          className="border-2 rounded-lg mr-2 px-2 py-1"
          onClick={() => dispatch(setReturn(), setBtn())}
        >
          Сбросить
        </button>
        <button
          className="border-2 rounded-lg w-64 py-1"
          onClick={() => dispatch(setBtn())}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}
