function method1(str, tar) {
  let n = str.length,
    m = tar.length,
    i,
    j;
  let mat = new Array(n + 1);
  for (i = 0; i <= n; i++) {
    mat[i] = new Array(m + 1);
    mat[i].fill(0);
  }
  for (i = 0; i <= m; i++) {
    mat[0][i] = i;
  }
  for (i = 0; i <= n; i++) {
    mat[i][0] = i;
  }
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= m; j++) {
      if (str.charAt(i - 1) != tar.charAt(j - 1)) {
        mat[i][j] =
          Math.min(mat[i - 1][j], Math.min(mat[i - 1][j - 1], mat[i][j - 1])) +
          1;
      } else {
        mat[i][j] = mat[i - 1][j - 1];
      }
    }
  }
  //console.log("mat is ", mat);
  return mat[n][m];
}

function method2(str, tar) {
  let i,
    n = str.length,
    m = tar.length,
    j;
  let prev = new Array(m + 1);
  let cur = new Array(m + 1);
  for (i = 0; i <= m; i++) {
    prev[i] = i;
  }
  for (i = 1; i <= n; i++) {
    cur[0] = i;
    for (j = 1; j <= m; j++) {
      if (str.charAt(i - 1) != tar.charAt(j - 1)) {
        cur[j] = Math.min(prev[j],Math.min(prev[j - 1], cur[j - 1]))+1;
      } else {
        cur[j] = prev[j - 1];
      }
    }
    prev = [...cur];
  }
  return prev[m];
}

let str = "geek",
  tar = "gesek";
console.log(method1(str, tar));
console.log(method2(str, tar));
