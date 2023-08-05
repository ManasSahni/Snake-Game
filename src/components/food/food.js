import React from 'react';
import {View} from 'react-native';
import MainStyles from '../../styles/MainStyles';

const Food = ({position, size}) => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'green',
        width: size,
        height: size,
        left: position[0] * size,
        top: position[1] * size,
        borderRadius: 50,
      }}
    />
  );
};

export default Food;
