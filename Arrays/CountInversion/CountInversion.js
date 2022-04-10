function merge(arr, l, m, r){
    var n1 = m - l + 1;
    var n2 = r - m;
    var left = new Array(n1); 
    var right = new Array(n2);
    for (var i = 0; i < n1; i++)
        left[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        right[j] = arr[m + 1 + j];
        var i = 0;
        var j = 0, count=0;
        var k = l;
    while(i<left.length && j<right.length){
        if(left[i]<=right[j]){
            arr[k++] = left[i++];
        }else{
            arr[k] = right[j];
            count += (m+1)-(l+i);
            j++;
            k++;
        }
    }
    while(i<left.length){
        arr[k++] = left[i++];
    }
    while(j<right.length){
        arr[k++] = right[j++];
    }
    return count;
}

function mergeSort(arr,l,r){
    let count=0;
    if(l<r){
        let m = parseInt((l+r)/2);
        count+=mergeSort(arr,l,m);
        count+=mergeSort(arr,m+1,r);
        count+=merge(arr,l,m,r);
    }
    return count;
}

function countInversion(arr){
    let count = 0, i, j, n = arr.length, temp;

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                count++;
            }
        }
    }
    return count;
}

let arr = [7,2,4,9,3,5];
console.log(countInversion(arr));
let arr2 = [7,2,4,9,3,5];
console.log(mergeSort(arr2,0,arr2.length-1));