import React from 'react';

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle, label }) => {
  return (
    <div className="flex items-center justify-between w-full mb-2">
      <span className="mr-4">{label}</span>
      <button
        onClick={onToggle}
        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none ${
          isOn ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
            isOn ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;

