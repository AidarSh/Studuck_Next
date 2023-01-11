import Link from "next/link";

export default function Error404() {
  return (
    <>
      <h2 className="mb-3 text-2xl text-center font-medium">
        Упс, такой страницы нет :(
      </h2>
      <h3 className="text-lg text-center">
        Перейти на{" "}
        <Link className="text-lg underline" href={"/"}>
          главную страницу
        </Link>
      </h3>
    </>
  );
}
