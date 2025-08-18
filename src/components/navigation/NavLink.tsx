import React from 'react';

interface NavLinkProps {
  label: string;
  onClick: () => void;
  isHighlighted?: boolean;
  isActive?: boolean;
}

export default function NavLink({ label, onClick, isHighlighted, isActive }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`
        transition-all duration-300 py-2 text-left relative
        ${isActive 
          ? 'text-rose-400 font-medium' 
          : isHighlighted 
            ? 'text-rose-600 hover:text-rose-700 font-medium' 
            : 'text-white hover:text-rose-400'
        }
        ${isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400 after:rounded-full' : ''}
      `}
    >
      {label}
    </button>
  );
}