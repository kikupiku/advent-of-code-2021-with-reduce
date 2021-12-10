import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const diagnosticReport = input.split('\n').filter((datum) => Boolean(datum));

const getDecodedColumnOfData = (array, index) => {
  return array
    .map((el) => el.charAt(index))
    .reduce(
      (accArr, currentBinary) => {
        const [zeros, ones] = accArr;
        if (currentBinary === '0') {
          return [zeros + 1, ones];
        }
        return [zeros, ones + 1];
      },
      [0, 0]
    );
};

const [gammaBinary, epsilonBinary] = diagnosticReport[0].split('').reduce(
  (accArray, _, index) => {
    console.log('accArray: ', accArray, accArray[0])
    const [zeros, ones] = getDecodedColumnOfData(diagnosticReport, index);
    console.log(zeros, ones)
    if (zeros > ones) {
      return [accArray[0].concat(0), accArray[1].concat(1)];
    }
    return [accArray[0].concat(1), accArray[1].concat(0)];
  },
  ['', '']
);

const gamma = parseInt(gammaBinary, 2)
const epsilon = parseInt(epsilonBinary, 2)
