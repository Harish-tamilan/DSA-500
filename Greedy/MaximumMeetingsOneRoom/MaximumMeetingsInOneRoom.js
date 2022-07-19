function swap(arr, i, j) {
  let temp;
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function partition(arr, l, r, arr2, pos) {
  let pivot = r;
  let i, j;
  for (i = l - 1, j = l; j < r; j++) {
    if (arr[j] < arr[pivot]) {
      i++;
      swap(arr, i, j);
      swap(arr2, i, j);
      swap(pos, i, j);
    }
  }
  swap(arr, i+1, pivot);
  swap(arr2, i+1, pivot);
  swap(pos, i+1, pivot);
  return i+1;
}

function quickSort(arr, l, r, arr2, pos){
    if(l<r){
        let pi = partition(arr, l, r, arr2, pos);
        quickSort(arr, l, pi-1, arr2, pos);
        quickSort(arr, pi+1, r, arr2, pos);
    }
}

function method1(start, end){
    let n = start.length;
    let pos = new Array(n);
    for(i=0;i<n;i++){
        pos[i] = i+1;
    }
    quickSort(start, 0, start.length-1, end, pos);
    console.log(start);
    console.log(end);
    let count = 1;
    let en = end[0], st=start[0];
    let res = [pos[0]];
    for(i=1;i<n;i++){
        if(end[i]<en){
            en = end[i];
            res[res.length-1] = pos[i];
        }else{
            if(start[i]>en){
                count++;
                en = end[i];
                st = start[i];
                res.push(pos[i]);
            }
        }
        //console.log(count+":"+en);
    }
    return res;
}


let start = [75250, 50074, 43659, 8931, 11273, 27545, 50879, 77924];
let end = [112960, 114515, 81825, 93424, 54316, 35533, 73383, 160252];
//quickSort(start, 0, start.length-1, end);
console.log(method1(start, end));

