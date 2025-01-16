import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleLight, toggleBothLights } from '../store/roomSclice'
import { emitRoomUpdate } from '../services/socket';
import Light from './Light';
import MyButton from './MyButton';

const Bedroom = () => {
  const dispatch = useDispatch();
  const roomState = useSelector((state: RootState) => state.room);

  const handleToggleLight = (light: 'light1' | 'light2') => {
    dispatch(toggleLight({ room: 'bedroom', light }));
    const updatedState = {
      ...roomState,
      bedroom: {
        ...roomState.bedroom,
        [light]: !roomState.bedroom[light],
      },
    };
    emitRoomUpdate(updatedState);
  };

  const handleToggleBothLights = () => {
    dispatch(toggleBothLights('bedroom'));
    const updatedState = {
      ...roomState,
      bedroom: {
        light1: true,
        light2: true,
      },
    };
    emitRoomUpdate(updatedState);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Bedroom</h2>
      <div className="flex space-x-4 mb-4">
        <Light isOn={roomState.bedroom.light1} onClick={() => handleToggleLight('light1')} label="Light 1" />
        <Light isOn={roomState.bedroom.light2} onClick={() => handleToggleLight('light2')} label="Light 2" />
      </div>
      <MyButton onClick={handleToggleBothLights}>Both On</MyButton>
    </div>
  );
};

export default Bedroom;

