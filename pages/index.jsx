import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";

import VuzCard from "../components/VuzCard";
import SortAndSettings from "../components/SortAndSettings";

export default function Home({ data }) {
  const settings = useSelector((state) => state.settings);
  const router = useRouter();
  const query = new URLSearchParams();

  useEffect(() => {
    query.set("city", settings.cityselect);
    settings.armselect !== "" && query.set("arm", settings.armselect);
    settings.hostelselect !== "" && query.set("hostel", settings.hostelselect);
    settings.stateselect !== "" && query.set("state", settings.stateselect);
    settings.search !== "" && query.set("search", settings.search);
    router.push(`?${query}`);
  }, [settings.finallyBtn]);
  console.log(data);
  return (
    <>
      <Head>
        <title>Studuck - сайт для студентов</title>
        <meta
          name="description"
          content="Студак - универсальный помощник для студента"
        />
        <meta
          name="keywords"
          content="studuck, студак, рейтинг вузов, топ вузы, вузы, вузы россии"
        />
        <meta name="yandex-verification" content="e40e9e6f90726afa" />
      </Head>

      <SortAndSettings />

      {settings.search !== "" && data.length === 0 ? (
        <h1>Ничего не найдено</h1>
      ) : (
        data.map((obj) => (
          <VuzCard
            key={obj.id}
            title={obj.name}
            city={obj.city.name}
            rating={obj.rating}
            desc={obj.fullname}
            img={obj.logo}
            img_alt={obj.alt_text}
            url={obj.slug}
            state={obj.benefits_univers.state_univers}
            arm={obj.benefits_univers.arm_univers}
            hostel={obj.benefits_univers.hostel_univers}
            paid_price={obj.info_stateandpaid.paid_price}
            paid_point={obj.info_stateandpaid.paid_point}
            paid_place={obj.info_stateandpaid.paid_place}
            state_price={obj.info_stateandpaid.state_price}
            state_point={obj.info_stateandpaid.state_point}
            state_place={obj.info_stateandpaid.state_place}
          />
        ))
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const city = query.city || "";
  const arm = query.arm === undefined ? "" : `&arm_univers=${query.arm}`;
  const hostel =
    query.hostel === undefined ? "" : `&hostel_univers=${query.hostel}`;
  const state =
    query.state === undefined ? "" : `&state_univers=${query.state}`;
  const search = query.search === undefined ? "" : `&search=${query.search}`;
  const res = await fetch(
    `http://api.studuck.ru/api/?city=${city}${arm}${hostel}${state}${search}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
