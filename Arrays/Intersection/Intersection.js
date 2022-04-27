function intersection(arr, arr2){
        let list = []
        let i=0,j=0,n=arr.length,n2=arr2.length;
        while(i<n&&j<n2){
            while(i<n-1 && arr[i]==arr[i+1]){
                i++;
            }
            while(j<n2-1 && arr2[j]==arr2[j+1]){
                j++;
            }
            if(arr[i]==arr2[j]){
                list.push(arr[i]);
                i++;
                j++;
            }
            else if(arr[i]>arr2[j]){
                j++;
            }
            else{
                i++;
            }
        }
        return list;
}

let arr = [4,4,5,9];
let arr2 = [4,4,8,8,9];

console.log(intersection(arr, arr2));