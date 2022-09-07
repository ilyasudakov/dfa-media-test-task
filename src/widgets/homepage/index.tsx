import Card from "./components/Card";

export default function Homepage() {
  return (
    <div className="flex flex-wrap items-streth gap-4">
      {Array.from({ length: 50 }).map((data, index) => (
        <Card
          data={{
            level: 3,
            partnersNumber: 133,
          }}
          isActive={index === 0}
          users={Array.from({ length: 20 })}
          key={index}
        />
      ))}
    </div>
  );
}
