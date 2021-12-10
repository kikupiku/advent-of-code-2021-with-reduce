import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const directions = input
  .split('\n')
  .map((pair) =>
    pair
      .split(' ')
      .map((datum, index) => (index === 1 ? parseInt(datum) : datum))
  ).pop();

const horizontalTotal = directions.reduce((total, current) => {
  if (current[0] === 'forward') {
    return total + current[1];
  }
  return total;
}, 0);

const verticalTotal = directions.reduce((total, current) => {
  if (current[0] === 'down') {
    return total + current[1];
  }
  if (current[0] === 'up') {
    return total - current[1];
  }
  return total;
}, 0);

const newTotal = directions.reduce(
  (accArr, current, i) => {
    const [direction, num] = current;
    if (i < 3) {
      console.log('current: ', current, direction, num)
    }
    if (direction === 'down') {
      return [accArr[0], accArr[1], (accArr[2] + num)];
    }
    if (direction === 'up') {
      return [accArr[0], accArr[1], accArr[2] - num];
    }
    if (direction === 'forward') {
      return [accArr[0] + num, accArr[2] * num, accArr[2]];
    }
  },
  [0, 0, 0]
); // horizontal, depth, aim

console.log('newTotal', newTotal);
