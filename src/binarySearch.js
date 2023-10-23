function binarySearch(arr, num) {
	let findedIndex = undefined;
	let countOperations = 0;

	let lowestElm = 0;
	let highestElm = arr.length - 1;

	while (lowestElm <= highestElm) {
		countOperations++;

		const middleElmIndex = (lowestElm + highestElm) / 2;


		if (num === arr[middleElmIndex]) {
			findedIndex = middleElmIndex;
			break;
		}

		if (arr[middleElmIndex] < num) {
			highestElm = middleElmIndex - 1;
		} else {
			lowestElm = middleElmIndex + 1;
		}
	}

	console.log("Operations: ", countOperations);

	return findedIndex;
}

console.log(">>> Binary search <<<");
console.log("The index of the given number is: ", binarySearch(bigArray, lastArrayItem));