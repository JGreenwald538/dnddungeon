import Image from "next/image";

export default function ItemPoster({imageSrc, name}: {imageSrc: string, name: string}) {
    return (
        <div className="flex flex-col justify-center">
            <Image src={imageSrc} width={1000} height={1000} alt={""} className=" w-6"/>
            <div>{name}</div>
        </div>
    )
}