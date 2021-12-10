import fs from 'fs';
import { dirname } from 'path/posix';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);


console.log(__dirname);

const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

console.log(input);