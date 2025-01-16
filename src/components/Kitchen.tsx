import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleLight, toggleBothLights } from '../store/roomSclice'
import { emitRoomUpdate } from '../services/socket';
import Light from './Light';
import MyButton from './MyButton';

const Kitchen = () => {
  const dispatch = useDispatch();
  const roomState = useSelector((state: RootState) => state.room);

  const handleToggleLight = (light: 'light1' | 'light2') => {
    dispatch(toggleLight({ room: 'kitchen', light }));
    const updatedState = {
      ...roomState,
      kitchen: {
        ...roomState.kitchen,
        [light]: !roomState.kitchen[light],
      },
    };
    emitRoomUpdate(updatedState);
  };

  const handleToggleBothLights = () => {
    dispatch(toggleBothLights('kitchen'));
    const updatedState = {
      ...roomState,
      kitchen: {
        light1: true,
        light2: true,
      },
    };
    emitRoomUpdate(updatedState);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Kitchen</h2>
      <div className="flex space-x-4 mb-4">
        <Light isOn={roomState.kitchen.light1} onClick={() => handleToggleLight('light1')} label="Light 1" />
        <Light isOn={roomState.kitchen.light2} onClick={() => handleToggleLight('light2')} label="Light 2" />
      </div>
      <MyButton onClick={handleToggleBothLights}>Both On</MyButton>
    </div>
  );
};

export default Kitchen;

