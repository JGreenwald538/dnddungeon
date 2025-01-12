"use client"

import { useState } from "react";
import FilterButton from "./FilterButton";

export default function FilterBar() {
    const [search, setSearch] = useState("");
    return (
			<div className="flex flex-col items-center">
				<div className="mt-4">
					<input
						onChange={(text) => {
							setSearch(text.target.value);
						}}
						value={search}
						className="text-black font-sans px-1 mr-4"
					/>
					<button className="bg-indigo-800 text-white border-2 border-indigo-800 rounded-lg px-4 mx-2">
						Search
					</button>
				</div>
				<div className="flex justify-center my-4">
					<FilterButton text={"All"} />
					<FilterButton text={"Dice"} />
					<FilterButton text={"Books"} />
					<FilterButton text={"Maps"} />
					<FilterButton text={"Minis"} />
					<FilterButton text={"Misc"} />
				</div>
			</div>
		);
}
