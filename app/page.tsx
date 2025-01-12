import ItemPoster from "./components/ItemPoster";

export default function Home() {
  return (
    <div>
      <div className="w-screen border-b-4 border-purple-600">
        <div className="text-center text-5xl py-6">DNDungeon</div>
      </div>
      <div className="grid grid-cols-3">
        <ItemPoster imageSrc="/image.png" name={"Dice"}/>
      </div>
    </div>
  );
}
