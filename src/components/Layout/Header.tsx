import Button from "../Button";

export default function Header() {
  return (
    <header className="h-[100px] flex fixed top-0 bg-bg-dark lg:px-10">
      <ul className="flex gap-4 text-[0.6rem] items-center md:pl-[200px]">
        <li>Мероприятия</li>
        <li>
          <Button>Войти</Button>
        </li>
      </ul>
    </header>
  );
}
