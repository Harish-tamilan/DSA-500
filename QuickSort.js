function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, r) {
  let i = l - 1,
    j,
    pivot = arr[r];
  for (j = l; j < r; j++) {
    if (countSetBits(arr[j]) > countSetBits(pivot)) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, r);
  return i + 1;
}

function quickSort(arr, l, r) {
  if (l < r) {
    let pi = partition(arr, l, r);
    quickSort(arr, l, pi - 1);
    quickSort(arr, pi + 1, r);
  }
}

export {swap, partition, quickSort};
