function getMin(arr) {
  var minInd = 0;
  let n=arr.length
  for (i = 1; i < n; i++) if (arr[i] < arr[minInd]) minInd = i;
  return minInd;
}

function getMax(arr) {
  var maxInd = 0;
  let n=arr.length;
  for (i = 1; i < n; i++) if (arr[i] > arr[maxInd]) maxInd = i;
  return maxInd;
}

function minimize(arr) {
  let min = getMin(arr);
  let max = getMax(arr);
  if (arr[min] == 0 && arr[max] == 0) {
    return;
  }
  let minOfTwo = Math.min(-arr[min], arr[max]);
  arr[max] -= minOfTwo;
  arr[min] += minOfTwo;
  console.log(" Person ", min, ", gives ", minOfTwo, " to person ", max);
  minimize(arr);
}

function minimizeCashFlow(arr) {
  let n = arr.length;
  let sum = new Array(n);
  sum.fill(0);
  //console.log("arr is ", arr);
  let i,j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      sum[i] += arr[j][i] - arr[i][j];
    }
  }
  minimize(sum);
  console.log("sum is ", sum);
}

let mat = [ [0, 1000, 2000],
[0, 0, 5000],
[0, 0, 0]];

minimizeCashFlow(mat);