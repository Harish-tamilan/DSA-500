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
    console.log(mat);
    for(i=0;i<=n;i++){
        for(j=0;j<=w;j++){
            if(i==0||j==0){
                mat[i][j]=0;
            }else if(weights[i-1]<=j){
                mat[i][j] = Math.max(mat[i-1][j-weights[i-1]]+values[i-1],mat[i-1][j]);
            }else{
                mat[i][j] = mat[i-1][j];
            }
        }
    }
    console.log(mat);
    return mat[n][w];
}

function knapsack2(weights, values, w){
    let i,j,n=values.length;
    let mat = new Array(2);
    mat[0] = new Array(w+1);
    mat[1] = new Array(w+1);
    for(i=0;i<=n;i++){
        for(j=0;j<=w;j++){
            if(i==0||j==0){
                mat[i%2][j]=0;
            }else if(weights[i-1]<=j){
                mat[i%2][j] = Math.max(mat[(i-1)%2][j-weights[i-1]]+values[i-1],mat[(i-1)%2][j]);
            }else{
                mat[i%2][j] = mat[(i-1)%2][j];
            }
        }
    }
    //console.log(mat);
    return mat[1][w];
}

function knapsack3(weights, values, w){
    let i,j,n=values.length;
    let mat = new Array(2);
    mat[0] = new Array(w+1);
    for(i=0;i<=n;i++){
        for(j=w;j>=w;j--){
            if(i==0||j==0){
                mat[i]=0;
            }else if(weights[i-1]<=j){
                mat[j] = Math.max(mat[j-weights[i-1]]+values[i-1],mat[j-1]);
            }else{
                mat[j] = mat[j-1];
            }
        }
    }
    //console.log(mat);
    return mat[1][w];
}

let weights = [4,5,1];
let values = [1,2,3];
quickSort(weights, 0, weights.length-1, values);
console.log(knapsack(weights, values, 4));
console.log(knapsack2(weights, values, 4));
console.log(knapsack3(weights, values, 4));
// console.log(weights);
// console.log(values);