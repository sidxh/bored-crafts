"use client"
import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion"
import { ChevronDown } from 'lucide-react';

// Define the variant type
type DropdownVariant = 'primary' | 'default' | 'secondary';

// Define the DropdownProps including the variant and title
interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  variant?: DropdownVariant; // Make the variant prop optional
  title?: string; // Add the title prop
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  variant = 'default', // Set a default value for the variant prop
  title = 'Select an option', // Set a default value for the title prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("");

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside: any = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Define predefined styles for variants
  const variantStyles = {
    primary: {
      buttonClassName: 'bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none',
      dropdownClassName: 'absolute mt-1 p-2 bg-blue-100 border rounded-md shadow-lg',
    },
    secondary: {
      buttonClassName: 'bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none',
      dropdownClassName: 'absolute mt-1 p-2 bg-red-100 border rounded-md shadow-lg',
    },
    default: {
      buttonClassName: 'bg-gray-500 text-gray-100 px-4 py-2 rounded-md focus:outline-none',
      dropdownClassName: 'absolute mt-1 p-2 bg-gray-100 border rounded-md shadow-lg',
    },
  };

  // Get styles based on the selected variant
  const { buttonClassName, dropdownClassName } = variantStyles[variant];

  return (
    <div className="" ref={dropdownRef}>
      <button
        className={cn(buttonClassName, "flex items-center gap-2")}
        onClick={handleToggle}
      >
        {selectedOption || title}
        <ChevronDown />
      </button>
      {isOpen && (
        <div className={dropdownClassName}>
          {options.map((option) => (
            <motion.p
              layout
              className={cn(
                "relative cursor-pointer px-10 py-1 text-md outline-none transition-colors",
                activeTab === option ? "text-gray-800" : "text-gray-700",
              )}
              tabIndex={0}
              key={option}
              onFocus={() => setActiveTab(option)}
              onMouseOver={() => setActiveTab(option)}
              onMouseLeave={() => setActiveTab("")}
              onClick={() => handleOptionClick(option)}
            >
              {activeTab === option ? (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-black/5"
                />
              ) : null}
              <span className="relative text-inherit">{option}</span>
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;