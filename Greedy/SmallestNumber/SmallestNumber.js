function method1(s, d) {
  if (s == 0) {
    if (d == 1) console.log("Smallest number is 0");
    else console.log("Not possible");
    return;
  }

  if (s > 9 * d) {
    console.log("Not possible");
    return;
  }
  let str = "";
  s -= 1;
  while (d > 1 && s > 0) {
    if (s >= 9) {
      str = 9+str;
      s -= 9;
    } else {
      str = s+str;
      s = 0;
    }
    d--;
  }
  if(d>1){
      while(d>1){
          str = 0+str;
          d--;
      }
  }
  let num = s + 1;
  str = num+str;
  return str;
}

let s = 6,
  d = 6;
console.log(method1(s, d));
