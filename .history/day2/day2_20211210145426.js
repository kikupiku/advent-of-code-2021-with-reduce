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

const getTotal = (data, direction) => {
  data.reduce((total, current, i, array) => {
    if 
}, 0)};

console.log(directions);
console.log(getTotal('horizontal'));
console.log(getTotal('vertical'));
console.log(getTotal('horizontal') * getTotal('vertical'));
