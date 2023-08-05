import {useState} from 'react';
import {Text, View} from 'react-native';
import Constant from '../../utils/Constant';

const GameLoop = (entities, {events, dispatch}) => {
  const head = entities.head;
  const tail = entities.tail;
  const food = entities.food;

  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const growTail = () => {
    tail.element = [[head.position[0], head.position[1]], ...tail.element];
    dispatch('eaten');
  };

  if (events.length) {
    events.forEach(e => {
      switch (e) {
        case 'move-up':
          if (head.yspeed === 1) {
            return;
          }
          head.yspeed = -1;
          head.xspeed = 0;
          return;
        case 'move-down':
          if (head.yspeed === -1) {
            return;
          }
          head.yspeed = 1;
          head.xspeed = 0;
          return;
        case 'move-left':
          if (head.xspeed === 1) {
            return;
          }
          head.yspeed = 0;
          head.xspeed = -1;
          return;
        case 'move-right':
          if (head.xspeed === -1) {
            return;
          }
          head.yspeed = 0;
          head.xspeed = 1;
          return;
      }
    });
  }

  // Moving the snake :
  head.nextMove -= 1;
  if (head.nextMove === 0) {
    head.nextMove = head.updateFrequency;
    if (
      head.position[0] + head.xspeed < 0 ||
      head.position[0] + head.xspeed >= Constant.GRID_SIZE ||
      head.position[1] + head.yspeed < 0 ||
      head.position[1] + head.yspeed >= Constant.GRID_SIZE
    ) {
      dispatch('game-over');
    } else {
      tail.element = [[head.position[0], head.position[1]], ...tail.element];
      tail.element.pop();

      // when snake eats the food, tail grows
      if (
        head.position[0] === food.position[0] &&
        head.position[1] === food.position[1]
      ) {
        growTail();

        // when snake eats the food then food's position will change to a random position
        food.position = [
          randomPositions(0, Constant.GRID_SIZE - 1),
          randomPositions(0, Constant.GRID_SIZE - 1),
        ];
      }

      head.position[0] += head.xspeed;
      head.position[1] += head.yspeed;

      tail.element.forEach((item, i) => {
        if (head.position[0] === item[0] && head.position[1] === item[1]) {
          dispatch('game-over');
        }
      });
    }
  }
  return entities;
};

export default GameLoop;
