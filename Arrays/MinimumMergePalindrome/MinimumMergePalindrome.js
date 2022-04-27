function method1(arr) {
  let i = 0,
    j = (arr.length - 1),
    count = 0;
  while (i < j) {
    if (arr[i] == arr[j]) {
      i++;
      j--;
    }
    else if (arr[i] > arr[j]) {
      arr[j - 1] += arr[j];
      j--;
      count++;
    } else {
      arr[i + 1] += arr[i];
      i++;
      count++;
    }
  }
  return count;
}

let arr = [111, 222, 333, 444, 555];
console.log(method1(arr));
