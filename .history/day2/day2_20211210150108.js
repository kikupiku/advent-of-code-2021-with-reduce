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
  data.reduce((total, current) => {
    if () {return total + current[1]};
  }, 0);
};

// const verticalTotal = (data) => {
//   data.reduce
// }

console.log(horizontalTotal);
