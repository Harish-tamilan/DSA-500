function method1(x, y) {
  x.sort((a, b) => b - a);
  y.sort((a, b) => b - a);
  console.log("x is ", x);
  console.log("y is ", y);
  let m = x.length,
    n = y.length;
  let count = 0,
    i = 0,
    j = 0,
    hz = 1,
    vc = 1;
  while (i < m && j < n) {
    if (x[i] > y[j]) {
      count += x[i] * vc;
      hz++;
      i++;
    } else {
      count += y[j] * hz;
      vc++;
      j++;
    }
  }
  while (i < m) {
    count += x[i] * vc;
    i++;
  }
  while (j < n) {
    count += y[j] * hz;
    j++;
  }
  return count;
}

let m = 6,
  n = 4;
let X = [2, 1, 3, 1, 4];
let Y = [4, 1, 2];
console.log(method1(X, Y));
