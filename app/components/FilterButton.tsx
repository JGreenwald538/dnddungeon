export default function FilterButton ({text}: {text: string}) {
    return (
        <button className="bg-indigo-800 text-white border-2 border-indigo-800 rounded-lg px-4 mx-2">{text}</button>
    )
}