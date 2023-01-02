import styles from "../styles/Home.module.scss";
import VuzCard from "../components/VuzCard";
import SortAndSettings from "../components/SortAndSettings";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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
  // if (settings.search !== "" && data.length === 0) {
  //   console.log("dwadawdawdwa");
  //   return <h1>Ничего не найдено</h1>;
  // }
  return (
    <>
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
            url={obj.slug}
            state={obj.benefits_univers.state_univers}
            arm={obj.benefits_univers.arm_univers}
            hostel={obj.benefits_univers.hostel_univers}
            money={obj.info_stateandpaid.paid_price}
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
    `http://127.0.0.1:8000/api/?city=${city}${arm}${hostel}${state}${search}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
