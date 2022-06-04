function method1(arr, arr2) {
  let n = arr.length,
    n2 = arr2.length;
  let sum = n + n2;
  let i = 0,
      j = 0;
  while (i < n && j < n2) {
    if (i + j == sum / 2) {
      if (i > j) return (arr[i - 1] + arr2[j]) / 2;
      else return (arr[i] + arr2[j - 1]) / 2;
    }
    if (arr[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
}

let arr = [1, 12, 15, 26, 38];
let arr2 = [2, 13, 17, 30, 45];
//[1,2,3,4,6,6,8,10]
console.log(method1(arr, arr2));
