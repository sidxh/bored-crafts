import Link from "next/link";

export default function Home() {
  return (
    <main className="border-0 border-red-400 max-w-screen-xl mx-auto py-10">
      <h1 className="text-6xl font-extrabold mt-12 mb-4">bored crafts by siddhant</h1>
      <p>currently in progress, crafting one experience at a time</p>
      <div className="my-12 border-2 border-blue-400 grid grid-cols-2 text-left text-lg font-bold underline max-h-[500px] overflow-y-scroll">
        <ul className="flex flex-col">
          <Link href='/button' className="mb-4 w-fit hover:text-yellow-600">button</Link>
          <Link href='/luma-clone' className="mb-4 w-fit hover:text-yellow-600">luma clone</Link>
        </ul>
        <ul className="flex flex-col">
          <Link href='/spotify-playlists' className="mb-4 w-fit hover:text-yellow-600">spotify filters</Link>
          <Link href='/instagram-comments' className="mb-4 w-fit hover:text-yellow-600">instagram comments</Link>
        </ul>
      </div>
    </main>
  )
}
