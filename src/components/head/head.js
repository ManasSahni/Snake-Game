import React from 'react';
import {View} from 'react-native';
import MainStyles from '../../styles/MainStyles';

const Head = ({position, size}) => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'red',
        width: size,
        height: size,
        left: position[0] * size,
        top: position[1] * size,
      }}
    />
  );
};

export default Head;
