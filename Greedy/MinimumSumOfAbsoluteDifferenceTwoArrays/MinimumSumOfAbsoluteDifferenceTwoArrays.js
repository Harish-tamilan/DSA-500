function method1(arr, arr2) {
  arr.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.abs(arr[i] - arr2[i]);
  }
  return sum;
}

let arr = [];
let arr2 = [];
console.log(method1(arr, arr2));
