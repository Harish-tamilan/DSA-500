function method1(arr){
    let currentMax=0, element,i,j,n=arr.length,temp=0;
    for(i=0;i<n;i++){
        temp=1;
        for(j=i+1;j<n;j++){
            if(arr[i]==arr[j]){
                temp++;
            }
        }
        if(temp>currentMax){
            element = arr[i];
            currentMax = temp
        }
    };
    if(currentMax>n/2){
        return element;
    }
    return -1;
}

function method2(arr){
    arr.sort();
    let count=1,element=arr[0],i,n=arr.length,temp=1;
    // console.log('arr is ', arr);
    for(i=1;i<n;i++){
        if(arr[i]==arr[i-1]){
            temp++;
        }
        else{
            if(temp>=count){
                if(temp>n/2){
                    return arr[i-1];
                }
                count=temp;
                element=arr[i-1];
                temp=1;
            }else{
                temp=1;
            }
        }
    }
    if(temp>n/2)
        return arr[n-1];
    // console.log('count is ', count);
    // console.log('element is ', element);
    if(count>n/2){
        return element;
    }
    return -1;
}

function method3(arr){
    let n = arr.length;
    let map = new Map();
    for(let no of arr){
        if(map.has(no)){
            map.set(no, map.get(no)+1);
            if(map.get(no)>n/2){
                return no;
            }
        } else{
            map.set(no, 1);
        }
    }
    return -1;
}

function method4(arr){
    let val=arr[0],count=1,i,n=arr.length;
    for(i=1;i<n;i++){
        if(arr[i]==val){
            count++;
        }else{
            count--;
            if(count==0){
                val=arr[i];
                count=1;
            }
        }
    }
    let temp=0;
    for(let no of arr){
        if(no==val)
            temp++;
    }
    if(temp>n/2)
        return val;
    return -1;
}

let arr = [3,1,3,3,2];

// console.log(method1(arr));
// console.log(method2(arr));
console.log(method3(arr));
console.log(method4(arr));

