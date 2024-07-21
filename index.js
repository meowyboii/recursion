//Fibonacci using iteration
const fibs = (n) => {
  const fibsArray = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return fibsArray;
  for (let i = 2; i < n; i++) {
    fibsArray.push(fibsArray[i - 1] + fibsArray[i - 2]);
  }
  return fibsArray;
};

//Fibonacci using iteration
const fibsRec = (n, index = 2, fibsArray = [0, 1]) => {
  if (n === 1) return [0];
  if (n === 2) return fibsArray;
  if (index === n) return fibsArray;
  fibsArray.push(fibsArray[index - 1] + fibsArray[index - 2]);
  return fibsRec(n, index + 1, fibsArray);
};

//Merge two given arrays while sorting
const merge = (leftArray, rightArray) => {
  const mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  while (
    leftArrayIndex < leftArray.length &&
    rightArrayIndex < rightArray.length
  ) {
    if (leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
      mergedArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex++;
    } else {
      mergedArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex++;
    }
  }
  while (leftArrayIndex < leftArray.length) {
    mergedArray.push(leftArray[leftArrayIndex]);
    leftArrayIndex++;
  }
  while (rightArrayIndex < rightArray.length) {
    mergedArray.push(rightArray[rightArrayIndex]);
    rightArrayIndex++;
  }
  return mergedArray;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const midpoint = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, midpoint));
  const rightHalf = mergeSort(array.slice(midpoint));
  return merge(leftHalf, rightHalf);
};

//Main
const n = 8;
const array = [2, 8, 0, 0, 4, 3, -1];
const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log("Fibonacci Iteration: ", fibs(n));
console.log("Fibonacci Recursion: ", fibsRec(n));
console.log("Merge Sort: ", mergeSort(array));
console.log("Merge Sort: ", mergeSort(array1));
console.log("Merge Sort: ", mergeSort(array2));
