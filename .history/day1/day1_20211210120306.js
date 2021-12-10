import fs from 'fs';
import { dirname } from 'path/posix';

const input = fs.readFileSync(`input.txt`).toString();

console.log(input);