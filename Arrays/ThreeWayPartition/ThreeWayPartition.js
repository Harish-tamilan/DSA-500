function method1(arr,low,high){
    let start=0, end=arr.length-1,temp,i;
    for(i=0;i<=end;){
        if(arr[i]<low){
            temp = arr[i];
            arr[i] = arr[start];
            arr[start] = temp;
            start++;
            i++;
        }
        else if(arr[i]>high){
            temp = arr[i];
            arr[i] = arr[end];
            arr[end] = temp;
            end--;
        }else{
            i++;
        }
    }
}


let arr = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
let low=10, high=20;
method1(arr, low, high);
console.log(arr);