import Image from "next/future/image";

export default function Card({
  users,
  data,
  isActive = false,
}: {
  users: never[];
  data: { level: number; partnersNumber: number };
  isActive: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-4 max-w-[120px] bg-bg-dark rounded-[1rem] p-3 ${
        isActive ? "drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <div className="grid grid-cols-2 text-[0.5rem]">
        <div className="text-[0.6rem]">{data.level}</div>
        <div className="text-[0.6rem]">{data.partnersNumber}</div>
        <div className="bg-secondary-grey w-full h-[1px] col-span-2"></div>
        <div>Уровень выплат</div>
        <div>Активных партнёров</div>
      </div>
      <ul className="text-[0.4rem] max-h-[180px] overflow-auto scrollbar grid gap-2">
        {users.map((_, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <div
              className={`w-[25px] h-[25px] bg-white rounded-full ${
                idx === 1 ? "opacity-100" : "opacity-50"
              }`}
            >
              <Image
                width={25}
                height={25}
                src="/avatar.png"
                alt="test-image"
              />
            </div>
            <span className="text-white/50">kris_anfalova</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
