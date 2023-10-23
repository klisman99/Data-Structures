const ARRAY_SIZE = 10000000;

const bigArray = Array.from(new Array(ARRAY_SIZE).keys());
const lastArrayItem = bigArray.at(-1);

function simpleSearch(arr, num) {
	let findedIndex = undefined;
	let countOperations = 0;

	for (let i = 0; i <= arr.length; i++) {
		countOperations++;

		if (arr[i] === num) {
			findedIndex = i;
			break;
		}
	}

	console.log("Operations: ", countOperations);

	return findedIndex;
}

console.log(">>> Simple search <<<");
console.log("The index of the given number is: ", simpleSearch(bigArray, lastArrayItem));