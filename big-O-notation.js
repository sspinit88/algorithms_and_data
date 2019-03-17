// пишим функцию, вычисляющею сумму чисел от 1 до указанного
let testNum = 1000000000;

function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
  total += i;
  }
  return total;
}

function addUpTo2(n) {
  return n * (n + 1) / 2;
}

console.log('Введеное значение: ', testNum);
console.log('appUpTo1: ',  addUpTo1(testNum));
console.log('appUpTo2: ',  addUpTo2(testNum));

let t1 = performance.now();
addUpTo1(testNum);
let t2 = performance.now();
console.log(`Time Elsapsed: ${(t2 - t1) / 1000} seconds (addUpTo1).`);

let time1 = performance.now();
addUpTo2(testNum);
let time2 = performance.now();
console.log(`Time Elsapsed: ${(time2 - time1) / 1000} seconds (addUpTo2).`);