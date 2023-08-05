import React from 'react';
import {View} from 'react-native';

const Tail = ({element, position, size}) => {
  const renderTailList = (
    <>
      {element && element?.length > 0 ? (
        <>
          {element.map((item, i) => (
            <View
              key={i}
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                width: size,
                height: size,
                left: item[0] * size,
                top: item[1] * size,
              }}
            />
          ))}
        </>
      ) : null}
    </>
  );
  return <View>{renderTailList}</View>;
};

export default Tail;
