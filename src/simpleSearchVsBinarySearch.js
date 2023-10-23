const ARRAY_SIZE = 1000000;

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

function binarySearch(arr, num) {
	let findedIndex = undefined;
	let countOperations = 0;

	let lowestElm = 0;
	let highestElm = arr.length - 1;

	while (lowestElm <= highestElm) {
		countOperations++;

		const middleElmIndex = parseInt((lowestElm + highestElm) / 2);

		if (num === arr[middleElmIndex]) {
			findedIndex = middleElmIndex;
			break;
		}

		if (arr[middleElmIndex] < num) {
			lowestElm = middleElmIndex + 1;
		} else {
			highestElm = middleElmIndex - 1;
		}
	}

	console.log("Operations: ", countOperations);

	return findedIndex;
}

console.log("Searching for: ", lastArrayItem);

console.log(">>> Simple search <<<");
console.log("The index of the given number is: ", simpleSearch(bigArray, lastArrayItem));

console.log(">>> Binary search <<<");
console.log("The index of the given number is: ", binarySearch(bigArray, lastArrayItem));