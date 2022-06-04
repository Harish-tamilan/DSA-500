function method1(arr, start, end, n) {
  let first, last;
  let ind = binarySearch(arr, start, end, n);
  if (ind > 0 && arr[ind - 1] == n)
    first = binarySearch(arr, start, ind - 1, n, true, false);
  else first = ind;
  if (ind < arr.length - 1 && arr[ind + 1] == n)
    last = binarySearch(arr, ind + 1, end, n, false, true);
  else last = ind;
  return {
    first,
    last,
  };
}

function binarySearch(arr, start, end, n, isStart, isEnd) {
  let mid;
  while (start <= end) {
    mid = parseInt(start + (end - start) / 2);
    if (arr[mid] == n) {
      if (isStart) {
        if (mid > 0 && arr[mid - 1] == n)
          return binarySearch(arr, start, mid - 1, n, isStart, isEnd);
        else {
          return mid;
        }
      } else if (isEnd) {
        if (mid < arr.length - 1 && arr[mid + 1] == n)
          return binarySearch(arr, mid + 1, end, n, isStart, isEnd);
        else return mid;
      } else {
        return mid;
      }
    } else if (arr[mid] > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 3, 5, 5, 5, 5, 7, 123, 125];
console.log(arr);
console.log(method1(arr, 0, arr.length - 1, 5));
