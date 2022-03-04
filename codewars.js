const sumZero = (arr) => {
  let zero = false;
  let i = 0;
  let j = arr.length - 1;
  arr.sort((a, b) => a - b);
  let sum = arr[i] + arr[j];
  console.log(arr);
  while (i < j && zero === false) {
      if (sum === 0) zero = true;
      
    if (arr[i + 1] + arr[j] <= sum && arr[i + 1] < 0) {
        sum = arr[i + 1] + arr[j];
        i++;
        console.log(sum, i, j)
    } else if (arr[i] + arr[j - 1] <= sum && arr[j - 1] > 0) {
        sum = arr[i] + arr[j - 1];
      j--;
      console.log(sum, i, j)
    } else {
        sum = arr[i + 1] + arr[j - 1];
        i++;
        j--;
        console.log(sum, i, j)
    }
  }

  return zero;
};

const uniqueChar = (str) => {
  let newStr = Array.from(new Set(str.split(``))).join(``);
  return newStr.length === str.length;
};

const pangram = (str) => {
  str = str
    .replace(/[^0-9a-z]/gi, ``)
    .toLowerCase()
    .split(``);
  str = Array.from(new Set(str));
  return str.length === 26;
};

const longestWord = (arr) => {
  arr.sort((a, b) => a.length - b.length);
  return arr[arr.length - 1].length;
};

console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([1, 2, 3, -2]));

console.log(uniqueChar(`Monday`))
console.log(uniqueChar(`Moonday`))

console.log(pangram("The quick brown fox jumps over the lazy dog!"))
console.log(pangram("I like cats, but not mice"))

console.log(longestWord([`hi`, `yel`, `s`, `hello`]))

// Space Complexity

// sumZero O(1) I hope
// uniqueChar O(1) I hope 
// pangram O(1) I hope
// longestWord O(1) I hope
