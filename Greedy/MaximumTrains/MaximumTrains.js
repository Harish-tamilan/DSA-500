function method1(arr) {
  let nop = 0;
  arr.sort((a1, a2) => {
    nop = Math.max(nop, Math.max(a1[2], a2[2]));
    return a1[1] - a2[1];
  });
  let platform = new Array(nop + 1);
  platform.fill(-1);
  let count = 0;
  for (let ar of arr) {
    if (platform[ar[2]] == -1) {
      count++;
      platform[ar[2]] = ar[1];
    } else {
      if (platform[ar[2]] < ar[0]) {
        count++;
        platform[ar[2]] = ar[1];
      }
    }
  }
  return count;
}

let arr = [
  [1000, 1030, 1],
  [1010, 1030, 1],
  [1000, 1020, 2],
  [1030, 1230, 2],
  [1200, 1230, 3],
  [0900, 1005, 1],
];

console.log(method1(arr));
