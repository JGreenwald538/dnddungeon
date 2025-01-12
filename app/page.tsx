import FilterBar from "./components/FilterBar";
import ItemPoster from "./components/ItemPoster";

export default function Home() {
  return (
		<div>
			<div className="w-screen border-b-4 border-purple-600">
				<div className="text-center text-6xl py-6">DNDungeon</div>
			</div>
      <FilterBar />
			<div className="grid grid-cols-3 align-center gap-20 p-4 my-4">
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
				<ItemPoster imageSrc="/image.png" name={"Dice"} />
			</div>
		</div>
	);
}
