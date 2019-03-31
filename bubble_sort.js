// Пузырьковая сортировка
function bubbleSort(arr) {
  console.log(`Переданный массив: [${arr}], длина массива =  ${arr.length}.`);
  console.log(" ");

  let noSwap = true;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {

      console.log(`i = arr.length = ${i}, j = ${j}`);
      console.log(`arr[j] = ${arr[j]} сравниваем с arr[j + 1] = ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false; // цикл будет повторяться пока будет выполняться текущее условие.

        console.log(`Цикл пройден! Получившийся массив: [${arr}].`);
      }
    }
    if (noSwap) break;
    console.log('break!');
    console.log(" ");
  }
  return arr;
}

let res = bubbleSort([8, 7, 26, 5, 9, 10, 11]);
// let res = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(res);
