import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const directions = input
  .split('\n')
  .filter((datum) => Boolean(datum))
  .map((pair) =>
    pair
      .split(' ')
      .map((datum, index) => (index === 1 ? parseInt(datum) : datum))
  );

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
    const [currentHorizontal, currentDepth, currentAim] = accArr;
    if (direction === 'down') {
      return [currentHorizontal, currentDepth, currentAim + num];
    }
    if (direction === 'up') {
      return [currentHorizontal, currentDepth, currentAim - num];
    }
    if (direction === 'forward') {
      return [currentHorizontal + num, currentAim * num, currentAim];
    }
  },
  [0, 0, 0]
);

console.log('newTotal', newTotal);
