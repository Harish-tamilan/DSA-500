function method1(assm, time, entry, exit) {
    let n = assm[0].length;
    let t1 = new Array(n);
    let t2 = new Array(n);
    t1[0] = assm[0][0]+entry[0];
    t2[0] = assm[1][0]+entry[1];

    for(i=1;i<n;i++){
        t1[i] = Math.min(t1[i-1]+assm[0][i], t2[i-1]+assm[0][i]+time[1][i]);
        t2[i] = Math.min(t2[i-1]+assm[1][i], t1[i-1]+assm[1][i]+time[0][i]);
    }
    return Math.min(t1[n-1]+exit[0], t2[n-1]+exit[1]);
}

let a = [
  [4, 5, 3, 2],
  [2, 10, 1, 4],
];
let t = [
  [0, 7, 4, 5],
  [0, 9, 2, 8],
];
let e = [10, 12],
  x = [18, 7];

console.log(method1(a, t, e, x));