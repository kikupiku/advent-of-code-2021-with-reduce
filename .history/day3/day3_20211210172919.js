import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const diagnosticReport = input.split('\n').filter((datum) => Boolean(datum));

const 

const decodedBinary = diagnosticReport.reduce((accArr, currentBinary, i, array) => {
  currentBinary[0]
}, ['', ''])

console.log(diagnosticReport)
