"use client"
// Dropdown.tsx

import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

// Define the variant type
type DropdownVariant = 'PRIMARY' | 'DEFAULT' | 'SECONDARY';

// Define the DropdownProps including the variant and title
interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  variant: DropdownVariant; // Add the variant prop
  title?: string; // Add the title prop
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, variant, title = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
  const getVariantStyles = (variant: DropdownVariant) => {
    switch (variant) {
      case 'PRIMARY':
        return {
          buttonClassName: 'bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none',
          dropdownClassName: 'absolute mt-1 p-2 bg-blue-100 border rounded-md shadow-lg',
        };
      case 'SECONDARY':
        return {
          buttonClassName: 'bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none',
          dropdownClassName: 'absolute mt-1 p-2 bg-gray-100 border rounded-md shadow-lg',
        };
      default:
        return {
          buttonClassName: 'bg-gray-300 text-gray-700 px-4 py-2 rounded-md focus:outline-none',
          dropdownClassName: 'absolute mt-1 p-2 bg-white border rounded-md shadow-lg',
        };
    }
  };

  // Get styles based on the selected variant
  const { buttonClassName, dropdownClassName } = getVariantStyles(variant);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className={buttonClassName}
        onClick={handleToggle}
      >
        {selectedOption || title || 'Select an option'}
      </button>
      {isOpen && (
        <div className={dropdownClassName}>
          {options.map((option) => (
            <div
              key={option}
              className={cn(
                'cursor-pointer hover:bg-gray-100 p-2 rounded-md',
                selectedOption === option && 'bg-gray-200',
              )}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;