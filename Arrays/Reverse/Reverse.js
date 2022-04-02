
function reverse(arr){
    arr = arr.reverse();
}

function reverse2(arr){
    let i=0, j=arr.length-1, temp;
    while(i<=j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

let arr = [1,2,3,4,5];
//reverse(arr);
reverse2(arr);
console.log(arr);