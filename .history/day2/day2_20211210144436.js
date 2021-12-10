const input = fs.readFileSync(`${__dirname}/input.txt`).toString();

const directions = input.split('\n').split(' ');

console.log(directions);
