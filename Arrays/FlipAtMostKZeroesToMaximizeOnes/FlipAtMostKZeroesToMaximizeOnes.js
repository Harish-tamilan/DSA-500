function maximized_one(arr, n, m) {
  // Left array
  var left = Array(n).fill(0);

  // Right array
  var right = Array(n).fill(0);

  // Array will contain zeroes position
  var zero_pos = new Array();

  // Stores count
  var count = 0;
  var previous_index_of_zero = -1;
  for (var i = 0; i < n; i++) {
    if (arr[i] != 0) {
      count++;
    } else {
      left[i] = count;
      zero_pos.push(i);
      if (previous_index_of_zero != i && previous_index_of_zero != -1) {
        right[previous_index_of_zero] = count;
      }
      count = 0;
      // To keep track of the previous index of zeroes
      previous_index_of_zero = i;
    }
  }
  right[previous_index_of_zero] = count;

  console.log(left);
  console.log(right);

  var max_one = -1;
  var result_index = Array();
  var i = 0;

  while (i <= zero_pos.length - m) {
    var temp = 0;
    var index = Array();

    for (var c = 0; c < m; c++) {
      temp += left[zero_pos[i + c]] + right[zero_pos[i + c]] + 1;

      // Index is updated
      index.push(zero_pos[i + c]);
    }

    // Decrement temp by m-1 because when we are
    // calculating temp we are adding 1 in it. So, in
    // order to get exact count of 1. This decrement is
    // applicable only when value of m is greater than 1
    temp = temp - (m - 1);

    // Updating max value when we get the new max temp
    // and result_index as well
    if (temp > max_one) {
      max_one = temp;
      result_index = index;
    }
    i += 1;
  }

  return result_index;
}

// Driver program
var arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
var m = 2;
var n = arr.length;
console.log("Index of zeroes that are flipped: [");
var result_index = maximized_one(arr, n, m);
for (var i = 0; i < result_index.length; i++) {
  console.log(result_index[i] + " ");
}
console.log("]");

// This code is contributed by gauravrajput1
