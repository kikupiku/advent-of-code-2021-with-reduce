import fs from 'fs';
import { dirname } from 'path/posix';

console.log(__dirname);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

console.log(input);