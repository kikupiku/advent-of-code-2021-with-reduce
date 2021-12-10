import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const diagnosticReport = input.split('\n').filter((datum) => Boolean(datum));

const getDecodedColumnOfData = (array, index) => {
  const columnOfData = array.map((el) => el.charAt(index));
  console.log()
  return columnOfData.reduce((accArr, currentBinary) => {
    const [zeros, ones] = accArr;
    if (currentBinary === 0) {
      return [zeros + 1, ones]
    }
    return [zeros, ones + 1]
  }, [0, 0]);
};

// const getGamma;

// const getEpsilon;

console.log(getDecodedColumnOfData(diagnosticReport, 0))

// console.log(diagnosticReport)
