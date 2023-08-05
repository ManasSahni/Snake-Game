import {Dimensions} from 'react-native';

const Constants = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  GRID_SIZE: 15,
  CELL_SIZE: 20,
};

export default {...Constants}; //we are creating a new object and adding all the key value pairs in that object & then exporting it
