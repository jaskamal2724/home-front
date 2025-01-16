import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleLight, toggleBothLights, toggleAllLights } from '../store/roomSclice';
import { emitRoomUpdate } from '../services/socket';
import Room from './Room'

const User1 = () => {
  const dispatch = useDispatch();
  const roomState = useSelector((state: RootState) => state.room);

  const handleToggleLight = (room: 'bedroom' | 'kitchen', light: 'light1' | 'light2') => {
    dispatch(toggleLight({ room, light }));
    const updatedState = {
      ...roomState,
      [room]: {
        ...roomState[room],
        [light]: !roomState[room][light],
      },
    };
    emitRoomUpdate(updatedState);
  };

  const handleBothLights = (room: 'bedroom' | 'kitchen', value: boolean) => {
    dispatch(toggleBothLights({ room, value }));
    const updatedState = {
      ...roomState,
      [room]: {
        light1: value,
        light2: value,
      },
    };
    emitRoomUpdate(updatedState);
  };

  const handleAllLights = (value: boolean) => {
    dispatch(toggleAllLights(value));
    const updatedState = {
      bedroom: {
        light1: value,
        light2: value,
      },
      kitchen: {
        light1: value,
        light2: value,
      },
    };
    emitRoomUpdate(updatedState);
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
      
      <div className="p-6">
        <h1 className="text-center text-2xl mb-6">USER 1</h1>
        <div className="flex justify-center gap-4">
          <Room
            name="Bed Room"
            lights={roomState.bedroom}
            onToggleLight={(light) => handleToggleLight('bedroom', light)}
            onBothOn={() => handleBothLights('bedroom', true)}
            onBothOff={() => handleBothLights('bedroom', false)}
          />
          <Room
            name="Kitchen"
            lights={roomState.kitchen}
            onToggleLight={(light) => handleToggleLight('kitchen', light)}
            onBothOn={() => handleBothLights('kitchen', true)}
            onBothOff={() => handleBothLights('kitchen', false)}
          />
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleAllLights(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            ALL ON
          </button>
          <button
            onClick={() => handleAllLights(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            ALL OFF
          </button>
        </div>
      </div>
    </div>
  );
};

export default User1;

