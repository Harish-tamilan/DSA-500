export function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function partition(arr, l, r, arr2){
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

export function quickSort(arr, l, r, arr2){
    if(l<r){
        let pi = partition(arr,l,r,arr2);
        quickSort(arr,l,pi-1,arr2);
        quickSort(arr,pi+1,r,arr2);
    }
}
