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

const binaries = diagnosticReport.reduce((_, curr, __, arr) => {
  const [gammaBinary, epsilonBinary] = curr.split('').reduce((accArray, ___, index) => {
    console.log(accArray)
    const [gammaBit, epsilonBit] = getDecodedColumnOfData(arr, index);
    return [accArray.concat(gammaBit), accArray.concat(epsilonBit)]
  }, [0, 0])
  return [gammaBinary, epsilonBinary];
}, [0, 0]);

// const binaryLength = diagnosticReport[0].length;

console.log(binaries);

// console.log(diagnosticReport)
