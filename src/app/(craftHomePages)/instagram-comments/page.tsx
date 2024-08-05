import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const InstagramCommentsPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Instagram Comments <span className="text-indigo-600">Component</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        An in-depth look at the Instagram Comments implementation
      </p>
      <Link href={`preview/instagram-comments`} className="mb-16 transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src="/instagram-comments/demo.gif"
          alt="Instagram Comments Component Demo"
          width={1280}
          height={720}
          className="rounded-lg shadow-lg"
        />
      </Link>
      <div className="mt-20 bg-white rounded-lg shadow-lg p-8 border border-gray-200 prose prose-indigo max-w-none">
        <h2 className="text-3xl font-bold mb-4">Implementation Details</h2>
        <p className="mb-6">This is the technical writeup going in depth on how the Instagram Comments Component works and how it was built.</p>
        
        <h3 className="text-2xl font-semibold mb-4">Table of Contents</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Introduction</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Component Overview</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Key Features</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Implementation</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Usage</a></li>
          <li className="mb-2"><a href="#" className="text-indigo-600 hover:underline">Conclusion</a></li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p className="mb-6">The Instagram Comments Component is a React-based implementation that replicates the core functionality and appearance of Instagram&apos;s comment section.</p>

        <h3 className="text-2xl font-semibold mb-4">Component Overview</h3>
        <p className="mb-6">The component consists of two main parts: the Instagram Post display and the Comments section.</p>

        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Dynamic Comment Loading</li>
          <li className="mb-2">Interactive Elements (like, reply)</li>
          <li className="mb-2">Responsive Design</li>
          <li className="mb-2">Animations</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Implementation</h3>
        <p className="mb-6">The component is implemented using React hooks, Framer Motion for animations, and react-intersection-observer for infinite scrolling.</p>

        <h3 className="text-2xl font-semibold mb-4">Usage</h3>
        <p className="mb-4">To use the Instagram Comments Component in your project, import it and pass the necessary props:</p>
        <pre className="overflow-x-auto whitespace-pre-wrap break-words bg-gray-100 p-4 rounded-md mb-6"><code>{`import InstagramComments from './InstagramComments';

<InstagramComments post={samplePost} />`}</code></pre>

        <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
        <p className="mb-6">The Instagram Comments Component provides a robust and interactive way to display and engage with comments in a familiar Instagram-like interface.</p>
      </div>
    </div>
  )
}

export default InstagramCommentsPage