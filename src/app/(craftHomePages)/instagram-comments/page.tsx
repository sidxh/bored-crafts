
import InstagramCommentsImplementation from '@/implementation/InstagramCommentsImplementation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InstagramCommentsPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      <Link href={"/preview/instagram-comments"}>
        <Image
          height={1000}
          width={1280}
          className='mx-auto rounded-3xl border-2 border-red-500 mb-20'
          src={"/instagram-comments/cover.png"}
          alt='Cover Preview Spotify Filters'
        />
      </Link>
      <InstagramCommentsImplementation />
    </div>
  )
}

export default InstagramCommentsPage
