function method1(arr, k) {
  let i,
    j,
    n = arr.length;
  let res = [];
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == k) {
        res.push(arr[i]);
        res.push(arr[j]);
        return res;
      }
    }
  }
  return res;
}

function method2(arr, k) {
  let i,
    j,
    n = arr.length;
  arr.sort((a, b) => a - b);
  (i = 0), (j = n - 1);
  let res = [];
  while (i < j) {
    if (arr[i] + arr[j] == k) {
      res.push(arr[i]);
      res.push(arr[j]);
      return res;
    } else if (arr[i] + arr[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return res;
}

function method3(arr, k){
    let set = new Set();
    for(let no of arr){
        set.add(no);
    }
    let res = [];
    for(let no of arr){
        if(set.has(k-no)){
            res.push(no);
            res.push(k-no);
            return res;
        }
    }
    return res;
}

let arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];

console.log(method1([...arr], 11));
console.log(method2([...arr], 11));
console.log(method3([...arr], 11));