const num: number = 5;
const speed: string = "fast";

const position: { x: number; y: number } = {
	x: 10,
	y: 20,
};

const json = '{"x":10, "y":"apple"}';
// const output = JSON.parse(json);
const output: { x: number; y: string } = JSON.parse(json);
console.log(output);

const word = ["red", "green", "black"];
let _found = false;

for (let i = 0; i < word.length; i++) {
	if (word[i] === "green") {
		_found = true;
	}
}

const numbers = [-19, -3, 40];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];
  if (typeof current === 'number' && current > 0) {
    numberAboveZero = current;
  }
  console.log(`numberAboveZero: ${numberAboveZero}`);
}

