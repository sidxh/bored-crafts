import Link from "next/link";

const components = [
  { path: 'luma-clone', name: 'Luma Clone' },
  { path: 'coupon-redemption', name: 'Coupon Redemption' },
  { path: 'spotify-playlists', name: 'Spotify Filters' },
  { path: 'instagram-comments', name: 'Instagram Comments' },
];

const ComponentLink = ({ path, name }: { path: string; name: string }) => (
  <Link 
    href={`/${path}`} 
    className="mb-6 w-fit hover:text-indigo-600 transition-colors duration-300 ease-in-out relative group"
  >
    {name}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  </Link>
);

export default function Home() {
  const halfLength = Math.ceil(components.length / 2);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          bored crafts <span className="text-indigo-600">by siddhant</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          currently in progress, crafting one experience at a time
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
            <ul className="space-y-2">
              {components.slice(0, halfLength).map((component) => (
                <li key={component.path}>
                  <ComponentLink {...component} />
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {components.slice(halfLength).map((component) => (
                <li key={component.path}>
                  <ComponentLink {...component} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}