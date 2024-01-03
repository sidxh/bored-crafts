import Link from "next/link";

export default function Home() {
  return (
    <main className="border-2 border-red-400 max-w-screen-xl mx-auto py-10">
      <h1 className="text-6xl font-bold mt-12 mb-4">UI Crafts By Siddhant</h1>
      <p>currently in progress, crafting one experience at a time</p>
      <div className="my-12 border-2 border-blue-400 grid grid-cols-2 text-left text-lg font-bold underline">
        <ul>
          <Link href='/button'><li className="mb-4 hover:text-yellow-600">button</li></Link>
          <Link href='/dropdown'><li className="mb-4 hover:text-yellow-600">dropdown</li></Link>
          <Link href='/navbar'><li className="mb-4 hover:text-yellow-600">navbar</li></Link>
          <Link href='/checkbox'><li className="mb-4 hover:text-yellow-600">checkbox</li></Link>
          <Link href='/chatbox'><li className="mb-4 hover:text-yellow-600">chatbox</li></Link>
        </ul>
        <ul>
          <Link href='/button'><li className="mb-4 hover:text-yellow-600">button</li></Link>
          <Link href='/dropdown'><li className="mb-4 hover:text-yellow-600">dropdown</li></Link>
          <Link href='/navbar'><li className="mb-4 hover:text-yellow-600">navbar</li></Link>
          <Link href='/checkbox'><li className="mb-4 hover:text-yellow-600">checkbox</li></Link>
          <Link href='/chatbox'><li className="mb-4 hover:text-yellow-600">chatbox</li></Link>
        </ul>
      </div>
    </main>
  )
}
