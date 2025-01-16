import React from 'react';
import MyButton from './MyButton';

interface LightProps {
  isOn: boolean;
  onClick: () => void;
  label: string;
}

const Light: React.FC<LightProps> = ({ isOn, onClick, label }) => {
  return (
    <div className="flex flex-col items-center">
      <MyButton
        onClick={onClick}
        className={`w-20 ${
          isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {isOn ? 'ON' : 'OFF'}
      </MyButton>
      <p className="mt-2">{label}</p>
    </div>
  );
};

export default Light;

