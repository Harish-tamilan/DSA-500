function countSetBits(num) {
  let count = 0;
  while (num) {
    num = num & (num - 1);
    count++;
  }
  return count;
}

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

function nextGap(gap) {
  if (gap <= 1) return 0;
  return Math.floor(Math.ceil(gap / 2.0));
}

function mergeSortedArrays(nums, start, end) {
  let gap = end - start + 1;
  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
    for (let i = start; i + gap <= end; i++) {
      let j = i + gap;
      if (countSetBits(nums[i]) < countSetBits(nums[j])) swap(nums, i, j);
    }
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    mergeSortedArrays(arr, l, r);
  }
}

function method1(arr) {
  quickSort(arr, 0, arr.length - 1);
}

let arr = [5, 2, 3, 9, 4, 6, 7, 15, 32];
//method1(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("arr after sorting by set bits is ");
console.log(arr);

// let arr2 = [1,2,3,4,5,6,7,8];
// mergeSortedArrays(arr2, 0, 3, arr2.length);
// console.log('arr2 is ', arr2);
