function method1(arr){
    let i, n=arr.length,max=0, min=arr[0];
    let profit = new Array(n);
    //console.log(profit.length);
    profit.fill(0);
    max = arr[n-1];
    for(i=n-2;i>=0;i--){
        max = Math.max(max, arr[i]);
        profit[i] = Math.max(profit[i+1], max-arr[i]);
    }
    //console.log(profit);
    for(i=1;i<n;i++){
        min = Math.min(min, arr[i]);
        profit[i] = Math.max(profit[i-1], profit[i]+(arr[i]-min));
    }
    //console.log('profit is ', profit);
    return profit[n-1];
}

function method2(arr){
    let first_buy = -9999, first_sell = 0, second_buy = -9999, second_sell = 0;
    for(let no of arr){
        first_buy = Math.max(first_buy, -no);
        first_sell = Math.max(first_sell, first_buy+no);
        second_buy = Math.max(second_buy, first_sell-no);
        second_sell = Math.max(second_sell, second_buy+no);
       //console.log(first_buy+","+first_sell+","+second_buy+","+second_sell);
    }
    return second_sell;
}

let arr = [10, 22, 5, 75, 65, 80];
console.log(method1(arr));
console.log(method2(arr));
console.log(method1(arr));
