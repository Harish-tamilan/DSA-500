function flipAtMostKZeroesToMaximizeOnes(arr: number[], m: number):number[]{
    let res:number[] = [];
    let left=0, right=0, temp=m, n=arr.length, l=0, r=0, max=0;
    while(right<n){
        if(arr[right]==0){
            temp--;
        }
        if(temp==-1){
            while(left<right && arr[left]==1){
                left++;
            }
            left++;
            temp++;
            right++;
        }else{
            right++;
        }
        if(right-left>max){
            max = right - left;
            l = left;
            r = right;
        }
    }
    while(left<right){
        if(arr[left]==0){
            res.push(left);
        }
        left++;
    }
    console.log('l : ', l, ', r : ', r);
    console.log('len : ', r-l);
    return res;
}
let arr2 = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1];
console.log(flipAtMostKZeroesToMaximizeOnes(arr2, 2));