function method1(arr, k){
    let i,n=arr.length;
    for(i=0;i<n;i++){
        if(arr[i]==k){
            return i;
        }
    }
    return -1;
}

function method2(arr, k){
    let l=0,r=arr.length-1,m;
    while(l<=r){
        m=Math.floor(l+(r-l)/2);
        console.log('l : ',l,', m : ',m,', r : ', r);
        if(arr[l]<=arr[m] && arr[m]<=arr[r]){
            console.log('first if');
            if(arr[m]==k){
                return m;
            } else if(arr[m]>k){
                r=m-1;
            } else{
                l=m+1;
            }
        } else if(arr[l]<=arr[m] && arr[m]>=arr[r]){
            console.log('second if');
            if(arr[m]==k){
                return m;
            } else{
                if(k<arr[l]){
                    l=m+1;
                } else if(k>arr[m]){
                    l=m+1;
                } else{
                    r=m-1;
                }
            }
        } else if(arr[l]>=arr[m] && arr[m]<=arr[r]){
            console.log('third if');
            if(arr[m]==k){
                return m;
            } else{
                if(k>arr[r]){
                    r=m-1;
                } else if(arr[m]<k){
                    l=m+1;
                } else{
                    r=m-1;
                }
            }
        } else{
            console.log('fourth if');
            if(arr[m]==k){
                return m;
            } else if(arr[m]>k){
                l=m+1;
            } else{
                r=m-1;
            }
        }
    }
    return -1;
}

function findPivot(arr){
    let l=0,r=arr.length-1,m,n=arr.length;
    while(l<=r){
        m=Math.floor(l+(r-l)/2);
        if(m<n-1 && arr[m]>arr[m+1])
            return m;
        if(arr[m]>=arr[l]){
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return -1;
}

let arr = [4,5,6,7,0,1,2];
let val = 5;
// console.log(method1(arr,val));
// console.log(method2(arr,val));
console.log(findPivot(arr));