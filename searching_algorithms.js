let userNames = ["tommy", "the_cat", "dina321", "anna", "les", "paul", "patric", "patric777", "dog_guy", "qwerty", "z_index", "chrome", "juan987", "kira", "heller", "helper", "pi", "tester", "older", "dog", "cat", "tommy-1", "tom", "jd",];

// let res = userNames.indexOf('pie');
// console.log("res", res);

// Линейный поиск - подходит для поиска в массиве с неупорядоченными данными.
function linearSearch(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return 1;
    }
  }
  return -1;
}

// function linearSearchVersion(arr, val) {
//   arr.forEach((elem) => {
//     if (elem === val) return 1;
//   });
//   return -1;
// }

let linearSearchResult = linearSearch(userNames, 'jd');
// console.log(linearSearchResult);

// Бинарный поиск - работает только с отсортированными данными.
const
  binarySearchArray = userNames.sort();

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    }
    else {
      start = middle + 1;
    }
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

// console.log(
//   binarySearch([2, 5, 6, 7, 15, 16 , 18, 20], 21),
//   // binarySearchArray,
//   binarySearch(binarySearchArray, 'jd'),
// );


// Naive String Search
function naiveSearch(string, val) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (val[j] !== string[i + j]) break;
      if (j === val.length - 1) count++;
    }
  }
  return count;
}

let string = 'loremloremipsum' ;

// console.log(
//   naiveSearch(string, 'mip')
// );
