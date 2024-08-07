import Link from 'next/link';

interface FooterProps {
  prevComponent: string;
  nextComponent: string;
  formatName: (name: string) => string;
}

const Footer: React.FC<FooterProps> = ({ prevComponent, nextComponent, formatName }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          href={`/${prevComponent}`} 
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 ease-in-out group flex items-center text-sm sm:text-base"
        >
          <span className="mr-1 sm:mr-2 text-base sm:text-lg">←</span>
          <span className="relative">
            <span className="hidden xs:inline">{formatName(prevComponent)}</span>
            <span className="xs:hidden">{formatName(prevComponent).split(' ')[0]}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
        </Link>
        <Link 
          href={`/${nextComponent}`} 
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 ease-in-out group flex items-center text-sm sm:text-base"
        >
          <span className="relative">
            <span className="hidden xs:inline">{formatName(nextComponent)}</span>
            <span className="xs:hidden">{formatName(nextComponent).split(' ')[0]}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
          <span className="ml-1 sm:ml-2 text-base sm:text-lg">→</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;