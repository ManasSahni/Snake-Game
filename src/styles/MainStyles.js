import {StyleSheet} from 'react-native';

const MainStyles = props =>
  StyleSheet.create({
    headStyle: {
      position: 'absolute',
      backgroundColor: 'red',
      width: props.size,
      height: props.size,
      left: props.position[0] * props.size,
      top: props.position[1] * props.size,
      //   borderTopRightRadius: 10,
      //   borderBottomRightRadius: 10,
    },
    tailStyle: {
      position: 'absolute',
      backgroundColor: 'red',
      width: props.size,
      height: props.size,
      left: props.element[0] * props.size,
      top: props.element[1] * props.size,
    },
    foodStyle: {
      position: 'absolute',
      backgroundColor: 'green',
      width: props.size,
      height: props.size,
      left: props.position[0] * props.size,
      top: props.position[1] * props.size,
      borderRadius: 50,
    },
    btnStyle: {
      backgroundColor: 'red',
    },
  });

export default MainStyles;
