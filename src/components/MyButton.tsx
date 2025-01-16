import React from 'react';

interface MyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;

