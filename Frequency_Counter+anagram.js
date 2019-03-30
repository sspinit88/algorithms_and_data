/*
  Проводится сравнение двух числовых массивов, если значения первого массива, возведенные в квадрат, равны
  значениям  второго
  массива, то возвращаем true.
 */

// same([1, 3, 3], [1, 9, 8]); // true
// same([1, 2, 3], [1, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false

// Плохое решение.
/**
 function same(arr1, arr2) {
  // проверяем на совподение длинну введенных массивов
  if (arr1.length !== arr2.length) {
    console.log(false);
    return false;
  }
  // перебираем первый массив
  for (let i = 0; i <= arr1.length; i++) {
    // если возвращается -1, то обрываем
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      console.log(false);
      return false;
    }
    // иначе удаляем соответствующий элемент второго массива
    arr2.splice(correctIndex, 1);
    console.log(arr2);
  }
  console.log(true);
  return true;
}
 /**/

// Хорошее решение
/**/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log('Массивы не совпадают по длине.');
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      console.log(false);
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

/**/

/*
  Проверить являются ли введеные строкии анаграмами
*/

function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < first.length; i++) {
    let counter = first[i];
    obj[counter] ? obj[counter] += 1 : obj[counter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let counter = second[i];
    if (!obj[counter]) {
      return false;
    }
    else {
      obj[counter] -= 1;
    }
  }
  return true;
}

console.log(anagram('asda', 'dsaa'));