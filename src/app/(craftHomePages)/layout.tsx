"use client"

import Footer from "@/components/(utilities)/Footer";
import Navbar from "@/components/(utilities)/Navbar"
import { usePathname } from 'next/navigation'

// Define your components array
const components = ['luma-clone', 'spotify-playlists', 'instagram-comments', 'coupon-redemption'];

// Function to get the component name from the pathname
const getComponentFromPath = (pathname: string) => {
  const path = pathname.split('/')[1]; // This gets the first part of the path after the initial '/'
  return components.find(component => path.includes(component)) || components[0];
}

// Function to format component name for display
const formatComponentName = (name: string) => {
  return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentComponent = getComponentFromPath(pathname)

  // Function to get the next component in the circular list
  const getNextComponent = (current: string, offset: number) => {
    const currentIndex = components.indexOf(current)
    if (currentIndex === -1) return components[0] // Default to first if not found
    return components[(currentIndex + offset + components.length) % components.length]
  }

  const prevComponent = getNextComponent(currentComponent, 1)
  const nextComponent = getNextComponent(currentComponent, 2)

  return (
    <section className="max-w-screen-xl mx-auto text-lg font-bold">
      <Navbar />
      <div className="pb-16">
        {children}
      </div>
      <Footer 
        prevComponent={prevComponent} 
        nextComponent={nextComponent} 
        formatName={formatComponentName}
      />
    </section>
  )
}