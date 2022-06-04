function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, l, r, arr2){
    let i=l-1,j,pivot=arr[r];
    for(j=l;j<r;j++){
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
            swap(arr2,i,j);
        }
    }
    swap(arr,i+1,r);
    swap(arr2,i+1,r);
    return i+1;
}

function quickSort(arr, l, r, arr2){
    if(l<r){
        let pi = partition(arr,l,r,arr2);
        quickSort(arr,l,pi-1,arr2);
        quickSort(arr,pi+1,r,arr2);
    }
}

function method1(start, end){
    let i,j,temp,n=start.length;
    quickSort(start,0,start.length-1,end);
    // for(i=0;i<n;i++){
    //     for(j=i+1;j<n;j++){
    //         if(start[i]>start[j]){
    //             temp = start[i];
    //             start[i] = start[j];
    //             start[j] = temp;
    //             temp = end[i];
    //             end[i] = end[j];
    //             end[j] = temp;
    //         }
    //     }
    // }
    console.log(start);
    console.log(end);
    let st=start[0],en=end[0],count=1;
    for(i=1;i<n;i++){
        if(end[i]<en){
            en=end[i];
        }
        if(start[i]>en){
            console.log('i is ', i);
            en=end[i];
            count++;
        }
    }
    return count;
}

let start = [10, 12, 20];
let end = [20, 25, 30];
console.log(method1(start,end));
