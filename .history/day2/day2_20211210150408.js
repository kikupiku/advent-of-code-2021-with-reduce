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
  );

const horizontalTotal = (data) => {
  return data.reduce((total, current) => {
    if (current[0] === 'forward') {
      return total + current[1];
    }
    return total;
  }, 0);
};

const verticalTotal = (data) => {
  return data.reduce((total, current, i, array) => {
    if (current[0] === 'down') 
  }, 0)
}

console.log(horizontalTotal(directions));
