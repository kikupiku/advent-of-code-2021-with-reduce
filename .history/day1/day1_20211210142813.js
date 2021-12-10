import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const readings = input.split('\n').map(reading => parseInt(reading, 10));

const depthIncreases = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] > data[i]) {
      total += 1;
    }
  }
  return total;
}

const depthIncreasesWithReduce = readings.reduce((total, reading, i, array) => {
  if (i > 0 && reading > array[i - 1]) {
    return total + 1;
  }
  return total;
}, 0)

const readingTriads = readings.map((reading, index, readings) => {
  if (index !== readings.length -1)
});

console.log(depthIncreases(readings));
console.log(depthIncreasesWithReduce)