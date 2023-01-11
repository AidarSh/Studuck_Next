import { useState } from "react";
import Head from "next/head";

import styles from "../../styles/vuzpage.module.scss";
import FullInfoVuz from "../../components/FullInfoVuz";
import Dev from "../../components/Dev";

export default function Page({ data }) {
  const [count, setCount] = useState(true);

  return (
    <>
      <Head>
        <title>{data.name + ` - ` + data.fullname}</title>
        <meta name="description" content={data.fullname} />
        <meta
          name="keywords"
          content={data.name + `, ` + data.fullname + `, studuck, студак`}
        />
      </Head>
      <div className={styles.vuzpage}>
        <div className="bg-white rounded-2xl pb-2 mb-2">
          <div className="flex justify-between p-3 bg-white mb-2 rounded-2xl">
            <img className="w-16 h-16 mr-2" src={data.logo} alt="LogoVuz" />
            <div className="flex-1">
              <div className="flex items-end">
                <h2 className="font-medium text-xl mr-2">{data.name}</h2>
                <div className="text-slate-500">г. {data.city.name}</div>
                <div className="flex-1 text-right"># {data.rating}</div>
              </div>
              <p>{data.fullname}</p>
            </div>
          </div>
          <div className="flex z-0 relative mx-4 mb-2 border border-4 border-[#f2f2f2] rounded-lg bg-[#f2f2f2]">
            <div
              className={
                count
                  ? "transition ease-in-out duration-300 absolute w-5 h-5 bg-white w-1/2 h-full -z-10 rounded-lg"
                  : "transition ease-in-out duration-300 absolute w-5 h-5 bg-white w-1/2 h-full -z-10 rounded-lg translate-x-full"
              }
            ></div>
            <div
              className="flex-1 cursor-pointer rounded-lg p-1 text-center"
              onClick={() => setCount(true)}
            >
              Полная информация
            </div>
            <div
              className="flex-1 cursor-pointer rounded-lg p-1 text-center"
              onClick={() => setCount(false)}
            >
              Специальности
            </div>
          </div>
        </div>
        {count ? <FullInfoVuz data={data} /> : <Dev />}
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://api.studuck.ru/api/${params.id}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
