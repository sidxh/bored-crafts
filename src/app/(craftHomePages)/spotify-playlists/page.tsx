import SpotifyPlaylistsImplementation from '@/implementation/SpotifyPlaylistsImplementation'
import Link from 'next/link'
import React from 'react'

const SpotifyPlaylistsPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto text-lg font-bold'>
      Check the <Link href={"/preview/spotify-playlists"}>SpotifyPreview</Link> here
      <SpotifyPlaylistsImplementation />
    </div>
  )
}

export default SpotifyPlaylistsPage
