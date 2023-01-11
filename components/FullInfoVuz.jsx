import styles from "../styles/vuzpage.module.scss";
import Link from "next/link";

export default function FullInfoVuz({ data }) {
  return (
    <>
      <div className="flex p-2 bg-white rounded-xl mb-2">
        <div className="flex-1 pl-2">
          <ul>
            <li>
              <span className="font-medium">Бюдж. обучение</span>
            </li>
            <li>
              от <span className="font-medium">173</span> баллов
            </li>
            <li>
              <span className="font-medium">500</span> мест
            </li>
          </ul>
        </div>
        <div className="flex-1 pl-2">
          <ul>
            <li>
              <span className="font-medium">Плат. обучение</span>
            </li>
            <li>
              от <span className="font-medium">125</span> баллов
            </li>
            <li>
              <span className="font-medium">300</span> мест
            </li>
            <li>
              от <span className="font-medium">52 260</span> ₽
            </li>
          </ul>
        </div>
        <div className="flex-1 pl-2 hidden md:block">
          <ul className="">
            <li className="flex items-center mb-1">
              <img
                src="../img/house.svg"
                alt="SortDown"
                className="w-5 h-5 mr-2"
              />
              Общежитие
            </li>
            <li className="flex items-center mb-1">
              <img
                src="../img/arm.svg"
                alt="SortDown"
                className="w-5 h-5 mr-2"
              />
              Военная кафедра
            </li>
            <li className="flex items-center">
              <img
                src="../img/ru.svg"
                alt="SortDown"
                className="w-5 h-5 mr-2"
              />
              Госсударствееный
            </li>
          </ul>
        </div>
      </div>
      <ul className="inline-flex md:hidden">
        <li className="flex flex-col justify-between w-28 h-28 mr-2 bg-white p-2 rounded-xl">
          Общежитие
          <div className="">
            <img src="../img/house.svg" alt="SortDown" className="w-7 h-7" />
          </div>
        </li>
        <li className="flex flex-col justify-between w-28 h-28 mr-2 bg-white p-2 rounded-xl">
          Военная кафедра
          <img src="../img/arm.svg" alt="SortDown" className="w-7 h-7" />
        </li>
        <li className="flex flex-col justify-between w-28 h-28 mr-2 bg-white p-2 rounded-xl">
          Гос
          <img src="../img/ru.svg" alt="SortDown" className="w-7 h-7" />
        </li>
      </ul>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2 className="font-medium text-xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 0H6.99987C5.89685 0 4.99984 0.897 4.99984 2V7.586L0.29279 12.293C0.152979 12.4329 0.0577717 12.611 0.0192037 12.805C-0.0193643 12.9989 0.000438956 13.2 0.0761098 13.3827C0.151781 13.5654 0.279922 13.7215 0.444333 13.8314C0.608745 13.9413 0.802046 14 0.999798 14V19C0.999798 19.2652 1.10516 19.5196 1.29269 19.7071C1.48023 19.8946 1.73459 20 1.99981 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V2C19 0.897 18.103 0 17 0ZM8.99989 18H2.99982V12.414L5.99985 9.414L8.99989 12.414V18ZM17 18H10.9999V14C11.1979 14.0004 11.3915 13.942 11.5562 13.8322C11.721 13.7224 11.8493 13.5662 11.9251 13.3833C12.0008 13.2004 12.0206 12.9991 11.9817 12.805C11.9429 12.6109 11.8472 12.4327 11.7069 12.293L6.99987 7.586V2H17V18Z"
                fill="#121212"
              />
              <path
                d="M8.4 3H10.6V5H8.4V3ZM12.8 3H15V5H12.8V3ZM12.8 7.031H15V9H12.8V7.031ZM12.8 11H15V13H12.8V11ZM4 12H6.2V14H4V12Z"
                fill="#121212"
              />
            </svg>
            Общежитие
          </h2>
          <div className={styles.tabs}>
            {data.hostel_univers.map((obj, id) => (
              <div key={id} className={styles.tab}>
                <input type="checkbox" id={id} />
                <label className={styles.tab_label} for={id}>
                  {obj.name}
                </label>
                <div className={styles.tab_content}>
                  <div>Год основания: {obj.date}</div>
                  <div>Адрес: {obj.address}</div>
                  <Link href={obj.link_address} target="_blank">
                    Помотреть на яндекс картах
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="mt-2">
        <li>
          <span className="font-medium text-lg">Контакты:</span>
        </li>
        <li className="ml-3">kfu.ru</li>
        <li className="ml-3">+7 (999) 999 99 99</li>
        <li className="ml-3">help@kfu.ru</li>
      </ul>
    </>
  );
}
