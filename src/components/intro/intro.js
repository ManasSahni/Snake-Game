import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SnakeImage from '../../assets/snake.png';
import {useNavigation} from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#34eb34', minHeight: '100%'}}>
      <Image
        source={SnakeImage}
        style={{
          height: 200,
          width: 200,
          alignSelf: 'center',
          marginRight: '10%',
          marginTop: '40%',
        }}
      />
      <Text
        style={{
          color: 'green',
          fontFamily: 'cursive',
          fontWeight: 'bold',
          fontSize: 40,
          textAlign: 'center',
          marginTop: 40,
        }}>
        SNAKE GAME
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('MainScreen')}
        style={{
          alignSelf: 'center',
          backgroundColor: 'seagreen',
          marginTop: 40,
          borderRadius: 25,
        }}>
        <Text
          style={{
            fontSize: 28,
            color: '#affaaf',
            paddingHorizontal: 32,
            paddingVertical: 10,
          }}>
          PLAY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;
