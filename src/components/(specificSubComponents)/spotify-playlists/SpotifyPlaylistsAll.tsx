"use client"
import Image from 'next/image'
import React, { useState } from 'react'

type SortOption = 'Recents' | 'Recently Added' | 'Alphabetical' | 'Creator';
type ViewOption = 'compact' | 'list' | 'grid';

interface DropdownProps {
  onSortChange: (option: SortOption) => void;
  onViewChange: (option: ViewOption) => void;
  currentSort: SortOption;
  currentView: ViewOption;
}

export function SortViewDropdown({ onSortChange, onViewChange, currentSort, currentView }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions: SortOption[] = ['Recents', 'Recently Added', 'Alphabetical', 'Creator'];
  const viewOptions: ViewOption[] = ['compact', 'list', 'grid'];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 opacity-50 hover:opacity-100"
      >
        {currentSort}
        <svg data-encore-id="icon" role="img" fill='white' aria-hidden="true" viewBox="0 0 16 16" className="w-4">
          <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-md shadow-lg z-10">
          <div className="py-1">
            <p className="px-4 py-2 text-sm text-gray-400">Sort by</p>
            {sortOptions.map((option) => (
              <button
                key={option}
                className="block px-4 py-2 text-sm text-white hover:bg-[#3E3E3E] w-full text-left"
                onClick={() => {
                  onSortChange(option);
                  setIsOpen(false);
                }}
              >
                {option} {currentSort === option && '✓'}
              </button>
            ))}
            <p className="px-4 py-2 text-sm text-gray-400 mt-2">View as</p>
            {viewOptions.map((option) => (
              <button
                key={option}
                className="block px-4 py-2 text-sm text-white hover:bg-[#3E3E3E] w-full text-left"
                onClick={() => {
                  onViewChange(option);
                  setIsOpen(false);
                }}
              >
                {option} {currentView === option && '✓'}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export type FilterType = 'Playlists' | 'Artists' | 'Albums' | 'Podcasts';

export type SubFilterType = {
  [key in FilterType]: string[];
};

export type SongCardItem = {
  title: string;
  image: string;
  songnumber: number;
  entity: 'Playlist' | 'Artist' | 'Album' | 'Podcast';
};

export type LibraryDataType = {
  [key in FilterType]: {
    [subKey: string]: SongCardItem[];
  };
};

export const libraryData: LibraryDataType = {
  Playlists: {
    "By Spotify": [
      { title: "Liked Songs", image: "liked-songs-logo.png", songnumber: 30, entity: 'Playlist' },
      { title: "Kilby Girl Radio", image: "kilby-girl-radio.png", songnumber: 25, entity: 'Playlist' },
    ],
    "By You": [
      { title: "Hopeless", image: "hopeless.jpg", songnumber: 108, entity: 'Playlist' },
      { title: "Many Men Wish Death", image: "many-men-wish-death.jpg", songnumber: 50, entity: 'Playlist' },
    ]
  },
  Artists: {
    "Popular": [
      { title: "Beatles", image: "beatles.jpg", songnumber: 150, entity: 'Artist' },
      { title: "Bob Dylan", image: "bob-dylan.jpg", songnumber: 120, entity: 'Artist' },
    ],
    "New": [
      { title: "The Weeknd", image: "weeknd.png", songnumber: 30, entity: 'Artist' },
      { title: "Sabrina Carpenter", image: "sabrina-carpenter.jpg", songnumber: 25, entity: 'Artist' },
    ]
  },
  Albums: {
    "Recent": [
      { title: "Strange Trails", image: "strange-trails.jpg", songnumber: 14, entity: 'Album' },
      { title: "Wish You Were Here", image: "wish-you-were-here.png", songnumber: 11, entity: 'Album' },
    ],
    "Top Rated": [
      { title: "We Don't Trust You", image: "we-dont-trust-you.png", songnumber: 11, entity: 'Album' },
      { title: "Meet The Vamps", image: "meet-the-vamps.jpg", songnumber: 9, entity: 'Album' },
    ]
  },
  Podcasts: {
    "Subscribed": [
      { title: "The Joe Rogan Experience", image: "jre.jpg", songnumber: 1000, entity: 'Podcast' },
      { title: "Having Said That Show", image: "having-said-that.jpg", songnumber: 200, entity: 'Podcast' },
    ],
    "Trending": [
      { title: "Lex Fridman Podcast", image: "lex-fridman.jpg", songnumber: 50, entity: 'Podcast' },
      { title: "Flagrant", image: "flagrant.jpg", songnumber: 150, entity: 'Podcast' },
    ]
  }
};

export function SpotifyNavigation(){
  return(
    <div className='bg-[#121212] p-4 flex flex-col gap-6 rounded-lg'>
      <p className='flex items-center opacity-50 gap-2 text-md hover:opacity-100 cursor-pointer'><svg role="img" aria-hidden="true" className="w-6" fill='white' viewBox="0 0 24 24"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>Home</p>
      <p className='flex items-center opacity-50 gap-2 text-md hover:opacity-100 cursor-pointer'><svg role="img" aria-hidden="true" className="w-6" fill='white' viewBox="0 0 24 24"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path></svg>Search</p>
    </div>
  )
}

export function SongsCard({ title, image, songnumber, entity }: SongCardItem) {
  const getEntityText = () => {
    switch (entity) {
      case 'Podcast':
        return `${songnumber} episodes`;
      default:
        return `${songnumber} songs`;
    }
  };

  return (
    <div className='flex items-center gap-4 px-4 py-2 hover:bg-[#232323] cursor-pointer'>
      <Image 
        src={`/spotify-playlists/${image}`} 
        alt={title} 
        width={50} 
        height={50} 
      />
      <div>
        <h1>{title}</h1>
        <p className='text-sm text-gray-400'>{entity} • {getEntityText()}</p>
      </div>
    </div>
  );
}

export function SpotifyLibraryNavbar({ 
  selectedFilter, 
  setSelectedFilter, 
  selectedSubFilter, 
  setSelectedSubFilter 
}: {
  selectedFilter: FilterType | null;
  setSelectedFilter: (filter: FilterType | null) => void;
  selectedSubFilter: string | null;
  setSelectedSubFilter: (subFilter: string | null) => void;
}) {
  const filters: FilterType[] = ['Playlists', 'Artists', 'Albums', 'Podcasts'];
  const subFilters: SubFilterType = {
    Playlists: ['By Spotify', 'By You'],
    Artists: ['Popular', 'New'],
    Albums: ['Recent', 'Top Rated'],
    Podcasts: ['Subscribed', 'Trending'],
  };

  const handleFilterClick = (filter: FilterType) => {
    setSelectedFilter(filter);
    setSelectedSubFilter(null);
  };

  const handleSubFilterClick = (subFilter: string) => {
    setSelectedSubFilter(subFilter);
  };

  const resetFilters = () => {
    setSelectedFilter(null);
    setSelectedSubFilter(null);
  };

  const resetSubFilter = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent button
    setSelectedSubFilter(null);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-6'>
        {/* Your existing header content */}
      </div>
      <div className='flex gap-4 flex-wrap'>
        {selectedFilter === null ? (
          filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className='bg-[#232323] rounded-3xl px-3 py-1 text-sm hover:bg-[#2a2a2a]'
            >
              {filter}
            </button>
          ))
        ) : (
          <>
            <button
              onClick={resetFilters}
              className='text-white bg-[#2A2A2A] hover:bg-[#393939] rounded-full p-2 text-sm'
            >
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" fill='white' className="w-3"><path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path></svg>
            </button>
            <button
              onClick={resetFilters}
              className='bg-white text-black rounded-3xl px-3 py-1 text-sm flex items-center gap-1'
            >
              <span>{selectedFilter}</span>
              {selectedSubFilter && (
                <span 
                  className="mx-1 cursor-pointer" 
                  onClick={resetSubFilter}
                >
                  • {selectedSubFilter}
                </span>
              )}
            </button>
            {!selectedSubFilter && subFilters[selectedFilter].map((subFilter) => (
              <button
                key={subFilter}
                onClick={() => handleSubFilterClick(subFilter)}
                className='bg-[#232323] rounded-3xl px-3 py-1 text-sm hover:bg-[#2a2a2a]'
              >
                {subFilter}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export function SpotifyLibraryPlaylist({ 
  selectedFilter, 
  selectedSubFilter 
}: {
  selectedFilter: FilterType | null;
  selectedSubFilter: string | null;
}) {
  const [sortOption, setSortOption] = useState<SortOption>('Recents');
  const [viewOption, setViewOption] = useState<ViewOption>('list');

  const getFilteredItems = (): SongCardItem[] => {
    let items: SongCardItem[];
    if (selectedFilter && selectedSubFilter) {
      items = libraryData[selectedFilter][selectedSubFilter];
    } else if (selectedFilter) {
      items = Object.values(libraryData[selectedFilter]).flat();
    } else {
      items = Object.values(libraryData).flatMap(category => Object.values(category).flat());
    }

    // Apply sorting
    switch (sortOption) {
      case 'Recently Added':
        return [...items].sort((a, b) => b.songnumber - a.songnumber);
      case 'Alphabetical':
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      case 'Creator':
        return [...items].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return items;
    }
  };

  const renderItems = () => {
    const items = getFilteredItems();
    switch (viewOption) {
      case 'compact':
        return items.map((item, index) => (
          <div key={index} className="py-2 px-4 hover:bg-[#232323] cursor-pointer">
            {item.title} • {item.entity}
          </div>
        ));
      case 'grid':
        return (
          <div className="grid grid-cols-3 gap-4 p-4">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image src={`/spotify-playlists/${item.image}`} alt={item.title} width={120} height={120} className="mb-2" />
                <p className="text-sm text-center">{item.title}</p>
                <p className="text-xs text-gray-400">
                  {item.entity} • {item.entity === 'Podcast' ? `${item.songnumber} episodes` : `${item.songnumber} songs`}
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return items.map((item, index) => (
          <SongsCard
            key={index}
            title={item.title}
            image={item.image}
            songnumber={item.songnumber}
            entity={item.entity}
          />
        ));
    }
  };

  return (
    <div className='h-[52vh] overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-medium'>
      <div className='flex items-center justify-between px-4 mb-4'>
        <svg data-encore-id="icon" role="img" aria-hidden="true" className="w-4 opacity-50 hover:opacity-100" fill='white' viewBox="0 0 16 16">
          <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
        </svg>
        <SortViewDropdown
          onSortChange={setSortOption}
          onViewChange={setViewOption}
          currentSort={sortOption}
          currentView={viewOption}
        />
      </div>
      {renderItems()}
    </div>
  );
}

export function SpotifyLibraryContainer({children}:{children:React.ReactNode}){
  return(
    <div className='bg-[#121212] p-4 flex flex-col gap-6 rounded-lg'>
      {children}
    </div>
  )
}

export function SpotifyNavigationLibraryContainer({ children }: { children: React.ReactNode }) {
  return (
      <div className='flex flex-col m-2 gap-2 border-0 border-red-400 w-[30vw] min-w-[380px]'>
        {children}
      </div>
  );
}