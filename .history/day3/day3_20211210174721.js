import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const diagnosticReport = input.split('\n').filter((datum) => Boolean(datum));

const getDecodedColumnOfData = (array, index) => {
  const columnOfData = array.map((el) => el.charAt(index));
  const reduced = columnOfData.reduce((accArr, currentBinary) => {
    const [zeros, zeros] = accArr;
    if (currentBinary === 0) {
      return []
    }
  }, [0, 0]);
};

const getGamma;

const getEpsilon;

// console.log(diagnosticReport)
