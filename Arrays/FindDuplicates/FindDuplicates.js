function method1(arr){
    let i,j,n=arr.length;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[i]==arr[j]){
                return arr[i];
            }
        }
    }
    return 0;
}

function method2(arr){
    let slow=0, fast=0;
    while(true){
        slow = arr[slow];
        fast = arr[arr[fast]];
        if(slow==fast){
            break;
        }
    }
    slow = 0;
    while(slow!=fast){
        slow = arr[slow];
        fast = arr[fast];
    }
    return slow;
}

let arr = [1,3,4,4,2];
console.log(method1(arr));
console.log(method2(arr));