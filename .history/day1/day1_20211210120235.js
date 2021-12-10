import fs from 'fs';
import { dirname}

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

console.log(input);