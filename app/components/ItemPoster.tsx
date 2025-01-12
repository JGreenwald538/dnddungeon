import Image from "next/image";

export default function ItemPoster({imageSrc, name}: {imageSrc: string, name: string}) {
    return (
        <button className="flex flex-col items-center border-2 border-indigo-800 rounded-lg p-4">
            <Image src={imageSrc} width={1000} height={1000} alt={""} className="w-96"/>
            <div className="text-4xl mt-4">{name}</div>
        </button>
    )
}