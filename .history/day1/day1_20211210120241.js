import fs from 'fs';
import { dirname } from 'path/posix';

const input = fs.readFileSync(`${dirname}/input.txt`).toString();

console.log(input);