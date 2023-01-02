import Link from "next/link";

export default function VuzCard({
  rating,
  img,
  title,
  city,
  desc,
  url,
  money,
  hostel,
  state,
  arm,
}) {
  return (
    <>
      <div className="bg-white rounded-xl mb-2 pt-1">
        <Link href={`/vuz/${url}`}>
          <div className="flex justify-between items-center px-2 pb-4">
            <div className="flex-none w-14 font-medium text-center">
              <span className="text-sm">#</span> {rating}
            </div>
            <img className="w-14  flex-none mx-4" src={img} alt="LogoVuz" />
            <div className="flex-1">
              <div className="flex justify-between  items-center">
                <div className="flex items-end">
                  <h2 className="font-medium text-xl mr-2">{title}</h2>
                  <div className="text-slate-500">г. {city}</div>
                </div>

                <div className="flex hidden">
                  <div>Перейти</div>
                </div>
              </div>
              <p>{desc}</p>
            </div>
          </div>
          <div className="flex px-1">
            <div className="flex-1 pl-4 py-1">
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
            <div className="flex-1 pl-4 py-1 border-l-2">
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
                  от <span className="font-medium">{money}</span> ₽
                </li>
              </ul>
            </div>
            <div className="flex-1 pl-2 py-1 border-l-2 hidden sm:block">
              <ul className="my-auto">
                {hostel === true && (
                  <li className="flex items-center">
                    <img src="img/house.svg" alt="SortDown" className="mr-2" />
                    Общежитие
                  </li>
                )}
                {arm === true && (
                  <li className="flex items-center">
                    <img src="img/arm.svg" alt="SortDown" className="mr-2" />
                    Военная кафедра
                  </li>
                )}
                {state === true && (
                  <li className="flex items-center">
                    <img src="img/ru.svg" alt="SortDown" className="mr-2" />
                    Государственный
                  </li>
                )}
              </ul>
            </div>
            <div className="flex-1 pl-4 py-1 border-l-2 hidden md:block">
              <ul>
                <li>
                  <span className="font-medium">Контакты:</span>
                </li>
                <li>kfu.ru</li>
                <li>+7 (999) 999 99 99</li>
                <li>help@kfu.ru</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
