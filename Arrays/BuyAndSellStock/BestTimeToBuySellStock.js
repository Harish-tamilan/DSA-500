function bestTimeToBuySellStock(arr){
    let i,j,max=0,n=arr.length, temp;
        for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                temp = arr[j]-arr[i];
                max = Math.max(temp, max);
            }
        }
        return max;
}

function maxProfit(arr){
    let i=0,j=1,max=0,n=arr.length;
        while(j<n){
            if(arr[j]<arr[i]){
                i=j;
            }
            else{
                max = Math.max(max, arr[j]-arr[i]);
            }
            j++;
        }
        return max;
}

let arr = [7,1,5,3,6,4];
console.log(maxProfit(arr));
console.log(bestTimeToBuySellStock(arr));
