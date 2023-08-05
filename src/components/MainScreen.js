import React, {useEffect, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import Constants from '../utils/Constant';
import Food from './food/food';
import Head from './head/head';
import GameLoop from './system/GameLoop';
import Tail from './tail/tail';
import Sound from 'react-native-sound';

const MainScreen = () => {
  const engine = useRef(null);
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const [isGameRunning, setGameRunning] = useState(true);
  const [score, setScore] = useState(0);

  // var sound1 = new Sound(
  //   require('../assets/sounds/mario.mp3'),
  //   (error, sound) => {
  //     if (error) {
  //       alert('error' + error.message);
  //       return;
  //     }
  //     sound1.play(() => {
  //       sound1.release();
  //     });
  //   },
  // );

  const renderScores = () => {
    setScore(score + 1);
  };

  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    resetGame();
    // sound1.stop(() => {
    //   console.log('Stop');
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetGame = () => {
    engine.current.swap({
      head: {
        position: [0, 0],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Head />,
      },
      food: {
        position: [
          randomPositions(0, Constants.GRID_SIZE - 1),
          randomPositions(0, Constants.GRID_SIZE - 1),
        ],
        size: Constants.CELL_SIZE,
        updateFrequency: 10,
        nextMove: 10,
        xspeed: 0,
        yspeed: 0,
        renderer: <Food />,
      },
      tail: {
        size: Constants.CELL_SIZE,
        element: [],
        renderer: <Tail />,
      },
    });
    setScore(0);
    setGameRunning(true);
  };

  return (
    <View style={styles.canvas}>
      {!isGameRunning && (
        <TouchableOpacity
          onPress={resetGame}
          style={{backgroundColor: 'seagreen', padding: 10, borderRadius: 10}}>
          <Text style={{color: 'cyan'}}>Start New Game</Text>
        </TouchableOpacity>
      )}
      <View style={{alignSelf: 'flex-end', marginRight: '10%'}}>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>Score: {score}</Text>
      </View>
      <Text style={styles.textStyle}>Snake Game</Text>
      <GameEngine
        ref={engine}
        systems={[GameLoop]}
        style={{
          height: BoardSize,
          width: BoardSize,
          backgroundColor: 'white',
          flex: 0,
          borderWidth: 1,
          borderColor: 'orange',
        }}
        running={isGameRunning}
        onEvent={e => {
          switch (e) {
            case 'game-over':
              setGameRunning(false);
              Alert.alert('', 'GAME OVER!');
              return;
            case 'eaten':
              return renderScores();
            default:
              return;
          }
        }}
        entities={{
          head: {
            position: [0, 0],
            size: Constants.CELL_SIZE,
            updateFrequency: 10,
            nextMove: 1,
            xspeed: 0,
            yspeed: 1,
            renderer: <Head />,
          },
          food: {
            position: [
              randomPositions(0, Constants.GRID_SIZE - 1),
              randomPositions(0, Constants.GRID_SIZE - 1),
            ],
            size: Constants.CELL_SIZE,
            renderer: <Food />,
          },
          tail: {
            size: Constants.CELL_SIZE,
            element: [],
            renderer: <Tail />,
          },
        }}
      />

      <TouchableOpacity
        onPress={() => engine.current.dispatch('move-up')}
        style={{
          backgroundColor: 'orange',
          paddingHorizontal: 24,
          paddingVertical: 10,
          borderRadius: 5,
          marginTop: '20%',
        }}>
        <View>
          <Text style={{fontSize: 22}}>▲</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => engine.current.dispatch('move-left')}
          style={{
            backgroundColor: 'orange',
            paddingHorizontal: 20,
            paddingVertical: 6,
            borderRadius: 5,
            marginRight: 80,
          }}>
          <View>
            <Text style={{fontSize: 32}}>◄</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => engine.current.dispatch('move-right')}
          style={{
            backgroundColor: 'orange',
            paddingHorizontal: 20,
            paddingVertical: 6,
            borderRadius: 5,
          }}>
          <View>
            <Text style={{fontSize: 32}}>►</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => engine.current.dispatch('move-down')}
        style={{
          backgroundColor: 'orange',
          paddingHorizontal: 24,
          paddingVertical: 10,
          borderRadius: 5,
          margin: 4,
        }}>
        <View>
          <Text style={{fontSize: 22}}>▼</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'orange',
    fontSize: 25,
    marginBottom: 10,
  },
});

export default MainScreen;
