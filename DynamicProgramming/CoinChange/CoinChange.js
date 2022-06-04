function method1(arr, n, m) {
  let tab = [];
  let i, j, v;
  for (i = 0; i < m; i++) {
    tab[i] = [];
  }
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      tab[i][j] = 0;
      v = j + 1;
      if (i == 0) {
        if (arr[i] == v) {
          tab[i][j] = 1;
        } else if (arr[i] > v) {
          //tab[i][j] = arr[i]-v>=0 && arr[i]-v<arr.length?tab[i][arr[i]-v-1]:0;
          let ind = arr[i] - v;
          if (tab[i][ind - 1]) {
            tab[i][j] = tab[i][ind - 1];
          } else {
            tab[i][j] = 0;
          }
        } else {
          //tab[i][j] = v-arr[i]>=0 && arr[i]-v<arr.length?tab[i][v-arr[i]-1]:0;
          let ind = v - arr[i];
          if (tab[i][ind - 1]) {
            tab[i][j] = tab[i][ind - 1];
          } else {
            tab[i][j] = 0;
          }
        }
      } else {
        if (arr[i] == v) {
          tab[i][j] = tab[i - 1][j] + 1;
        } else if (arr[i] > v) {
          tab[i][j] = tab[i - 1][j];
        } else {
          tab[i][j] = tab[i - 1][j] + tab[i][v - arr[i] - 1];
        }
      }
    }
  }
  // for(let ar of tab)
  //     console.log(ar);
  return tab[m - 1][n - 1];
  //console.log(tab);
}

function method2(arr, n, m) {
  let tab = new Array(n+1);
  tab.fill(0);
  tab[0] = 1;
  for(let i=0;i<m;i++){
      for(let j=arr[i];j<=n;j++){
          tab[j] += tab[j-arr[i]];
      }
      console.log(tab);
  }
  return tab[n];
}

let arr = [1, 2, 3];
console.log(method1(arr, 4, arr.length));
console.log(method2(arr, 4, arr.length));
