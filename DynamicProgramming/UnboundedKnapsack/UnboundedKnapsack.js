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

function knapsack(weights, values, w){
    let i,j,n=values.length;
    let mat = new Array(n+1);
    for(i=0;i<=n;i++){
        mat[i] = new Array(w+1);
        mat[i].fill(0);
    }
    //console.log(mat);
    for(i=0;i<=n;i++){
        for(j=0;j<=w;j++){
            if(i==0||j==0){
                mat[i][j]=0;
            }else if(weights[i-1]<=j){
                mat[i][j] = Math.max(mat[i][j-weights[i-1]]+values[i-1],mat[i-1][j]);
            }else{
                mat[i][j] = mat[i-1][j];
            }
        }
    }
    //console.log(mat);
    return mat[n][w];
}

let w = 3;
let values = [1, 1];
let weights = [2, 1];
//quickSort(weights, 0, weights.length-1, values);
console.log(knapsack(weights, values, w));
//console.log(knapsack2(weights, values, 4));