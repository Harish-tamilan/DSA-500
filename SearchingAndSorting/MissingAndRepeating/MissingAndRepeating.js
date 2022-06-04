function method1(arr) {
  let missing,
    repeating,
    i,
    n = arr.length;
  let set = new Set();
  for (let no of arr) {
    if (set.has(no)) {
      repeating = no;
    } else {
      set.add(no);
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return {
    missing,
    repeating,
  };
}

function method2(arr) {
  let i,
    j,
    n = arr.length,
    repeating,
    missing;
  for (i = 0; i < n; i++) {
    while(arr[i]-1!=i){
        if(arr[arr[i]-1] == arr[i]){
            break;
        }
        j = arr[i]-1;
        swap(arr, i, j);
        console.log('arr is ', arr);
    }
    
  }
  for (i = 0; i < n; i++) {
    if (arr[i]-1 != i) {
      missing = i + 1;
      repeating = arr[i];
      break;
    }
  }
  console.log('array is ', arr);
  return {
    missing,
    repeating,
  };
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let str = '13 33 43 16 25 19 23 31 29 35 10 2 32 11 47 15 34 46 30 26 41 18 5 17 37 39 6 4 20 27 9 3 8 40 24 44 14 36 7 38 12 1 42 12 28 22 45';
//let str = '4 5 6 3 2 2';
let arr = str.split(' ');
console.log(method1(arr));
console.log(method2(arr));
