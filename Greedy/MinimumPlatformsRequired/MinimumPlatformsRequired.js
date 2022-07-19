function method1(arrival, departure){
    arrival.sort();
    departure.sort();
    let count = 1,n = arrival.length, max=0;
    let i=1,j=0;
    while(i<n && j<n){
        if(arrival[i]<=departure[j]){
            count++;
            i++;
        } else{
            count--;
            j++;
        }
        max = Math.max(max, count);
    }
    return max
}

let arr = [900,945,955,1100,1500,1800];
let dep = [920,1200,1130,1150,1900,2000];

console.log(method1(arr, dep));
