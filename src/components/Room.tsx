import React from 'react';
import Toggle from './Toggle';

interface RoomProps {
  name: string;
  lights: {
    light1: boolean;
    light2: boolean;
  };
  onToggleLight: (light: 'light1' | 'light2') => void;
  onBothOn: () => void;
  onBothOff: () => void;
}

const Room: React.FC<RoomProps> = ({ name, lights, onToggleLight, onBothOn, onBothOff }) => {
  return (
    <div className="border border-black p-4 m-2 w-48">
      <h2 className="text-center mb-4">{name}</h2>
      <Toggle
        isOn={lights.light1}
        onToggle={() => onToggleLight('light1')}
        label="Light 1"
      />
      <Toggle
        isOn={lights.light2}
        onToggle={() => onToggleLight('light2')}
        label="Light 2"
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={onBothOn}
          className="bg-green-500 text-white px-2 py-1 text-sm rounded"
        >
          Both ON
        </button>
        <button
          onClick={onBothOff}
          className="bg-gray-500 text-white px-2 py-1 text-sm rounded"
        >
          Both OFF
        </button>
      </div>
    </div>
  );
};

export default Room;

