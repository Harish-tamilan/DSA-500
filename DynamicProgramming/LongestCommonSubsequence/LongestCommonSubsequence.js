function method1(arr, arr2) {
  let n = arr.length;
  let m = arr2.length;
  let mat = new Array(n + 1);
  let i, j;
  for (i = 0; i <= n; i++) {
    mat[i] = new Array(m + 1);
    mat[i].fill(0);
  }
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      if (arr[i - 1] == arr2[j - 1]) {
        mat[i][j] = mat[i - 1][j - 1] + 1;
      } else {
        mat[i][j] = Math.max(mat[i - 1][j], mat[i][j - 1]);
      }
    }
  }
  return mat[n][m];
}

function method2(str, str2, i, j, map) {
  //console.log('map is ', map);
  if (i < 0 || j < 0) {
    return 0;
  }
  if (map.get(i + ":" + j)) {
    return map.get(i + ":" + j);
  }
  console.log("i : ", i, ", j : ", j);
  if (str[i] == str2[j]) {
    let num  = method2(str, str2, i - 1, j - 1, map) + 1;
    map.set(i + ":" + j, num);
    return num;
  }
  let num = Math.max(
    method2(str, str2, i - 1, j, map),
    method2(str, str2, i, j - 1, map)
  );
  map.set(i + ":" + j, num);
  return num;
}

let str = "AGGTAB";
let str2 = "GXTXAYB";
console.log(method1(str.split(""), str2.split("")));
let mp = new Map();
console.log(
  method2(str.split(""), str2.split(""), str.length - 1, str2.length - 1, mp)
);
