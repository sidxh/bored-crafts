"use client"

import React, { useState } from 'react'
import { SpotifyLibraryContainer, SpotifyLibraryNavbar, SpotifyLibraryPlaylist, SpotifyNavigation, SpotifyNavigationLibraryContainer, FilterType } from '../(specificSubComponents)/spotify-playlists/SpotifyPlaylistsAll'

const SpotifyPlaylists = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType | null>(null);
  const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(null);

  return (
    <div className='flex justify-center bg-black text-white h-[100vh] items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
      <SpotifyNavigationLibraryContainer>
        <SpotifyNavigation />
        <SpotifyLibraryContainer>
          <SpotifyLibraryNavbar 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedSubFilter={selectedSubFilter}
            setSelectedSubFilter={setSelectedSubFilter}
          />
          <SpotifyLibraryPlaylist 
            selectedFilter={selectedFilter}
            selectedSubFilter={selectedSubFilter}
          />
        </SpotifyLibraryContainer>
      </SpotifyNavigationLibraryContainer>
    </div>
  )
}

export default SpotifyPlaylists