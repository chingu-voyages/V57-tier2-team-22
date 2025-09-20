import { useState, useRef } from 'react';
import Button from './Button';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { UseClickOutside } from '../hooks/UseClickOutside';

interface DropdownMenuProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

export default function DropdownMenu({
  label,
  options = [],
  onSelect,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  UseClickOutside(ref, () => setIsOpen(false));

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className='relative inline-block'>
      <Button variant='tertiary' onClick={() => setIsOpen((prev) => !prev)}>
        {selected ? `Filter ${label}: ${selected}` : `Filter ${label}`}
        <MdOutlineKeyboardArrowDown />
      </Button>

      <div
        className={`absolute mt-2 rounded border border-gray-200 bg-white shadow-lg min-w-40 transition-all duration-200 ease-out origin-top z-10 ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <ul>
          {options.length === 0 ? (
            <li className='p-2 text-gray-400 cursor-not-allowed'>
              No {label} available
            </li>
          ) : (
            options.map((option) => (
              <li
                key={option}
                className='px-4 py-2 cursor-pointer 
                m-1
                hover:bg-green hover:text-white hover:rounded

                '
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
