const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const readings = input.split('\n').map((reading) => parseInt(reading, 10));
