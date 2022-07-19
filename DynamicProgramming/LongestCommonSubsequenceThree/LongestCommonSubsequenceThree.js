function method1(str, str2, str3, i, j, k, map) {
  if (i < 0 || j < 0 || k < 0) {
    return 0;
  }
  if (map.get(i + ":" + j + ":" + k)) {
    //console.log("line 6");
    return map.get(i + ":" + j + ":" + k);
  }
//   console.log("i : ", i, ", j : ", j, ", k : ", k);
//   console.log("map is ", map);
  if (str[i] == str2[j] && str2[j] == str3[k]) {
    let num = method1(str, str2, str3, i - 1, j - 1, k - 1, map) + 1;
    map.set(i + ":" + j + ":" + k, num);
    return num;
  }
  let num = Math.max(
    Math.max(
      method1(str, str2, str3, i - 1, j, k, map),
      method1(str, str2, str3, i, j - 1, k, map)
    ),
    method1(str, str2, str3, i, j, k - 1, map)
  );
  map.set(i + ":" + j + ":" + k, num);
  return num;
}

let str = "abcd";
let str2 = "efgh";
let str3 = "ijkl";
console.log(
  method1(
    str.split(""),
    str2.split(""),
    str3.split(""),
    str.length - 1,
    str2.length - 1,
    str3.length - 1,
    new Map()
  )
);
