
import InstagramCommentsImplementation from '@/implementation/InstagramCommentsImplementation'
import Link from 'next/link'
import React from 'react'

const InstagramCommentsPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      Check the <Link href={"/preview/instagram-comments"}>Instgram Comments Preview</Link> here
      <InstagramCommentsImplementation />
    </div>
  )
}

export default InstagramCommentsPage
