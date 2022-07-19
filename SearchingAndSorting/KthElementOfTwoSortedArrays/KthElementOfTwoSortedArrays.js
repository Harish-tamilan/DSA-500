function kthElement(arr, arr2) {
  let n = arr.length,
    m = arr2.length;
  let gap = Math.ceil((n + m) / 2);
  let i, j;
  while (gap > 0) {
    i = 0;
    j = gap;
    while (j < m + n) {
      if (j < n && arr[i] > arr[j]) {
        // console.log(' i : ',i,', j : ', j);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else if (j >= n && i < n && arr[i] > arr2[j - n]) {
        // console.log(' i : ',i,', j : ', j);
        temp = arr[i];
        arr[i] = arr2[j - n];
        arr2[j - n] = temp;
      } else if (j >= n && i >= n && arr2[i - n] > arr2[j - n]) {
        //console.log(' i : ',i,', j : ', j);
        temp = arr2[i - n];
        arr2[i - n] = arr2[j - n];
        arr2[j - n] = temp;
      }
      i++;
      j++;
    }
    if (gap == 1) {
      gap = 0;
    } else {
      gap = Math.ceil(gap / 2);
    }
  }
  // console.log("arr is ", arr);
  // console.log("arr2 is ", arr2);
  if (k <= n) {
    return arr[k - 1];
  } else {
    return arr2[k - n - 1];
  }
}

let arr = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];
let k = 7;
console.log(kthElement(arr, arr2, k));
