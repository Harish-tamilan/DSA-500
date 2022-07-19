function method1(arr) {
  let zeroes = 0,
    positives = 0,
    negatives = 0,
    minNegative = Number.MAX_VALUE,
    maxNegative = -9999;
  for (let no of arr) {
    if (no < 0) {
      negatives++;
      if (no < minNegative) {
        minNegative = no;
      }
      if (no > maxNegative) {
        maxNegative = no;
      }
    } else if (no > 0) {
      positives++;
    } else {
      zeroes++;
    }
  }

  console.log("minNegative is ", minNegative);
  console.log("maxNegative is ", maxNegative);

  let product = 1;
  if (negatives % 2 == 0) {
    for (let no of arr) {
      if (no == 0) {
        continue;
      } else {
        product *= no;
      }
    }
  } else {
    if (positives == 0) {
      if (zeroes == 0) {
        return maxNegative;
      } else {
        return 0;
      }
    }
    let negIgnored = false;
    for (let no of arr) {
      if (no == 0) {
        continue;
      } else if (no == maxNegative && !negIgnored) {
        negIgnored = true;
        continue;
      } else {
        product *= no;
      }
    }
  }
  return product;
}

let arr = [-1, -1, -2, 4, 3];
console.log(method1(arr));
