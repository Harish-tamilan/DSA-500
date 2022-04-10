//Traditional permutation method, O(n*n!) time and O(n) time
function permutation(ques, ans, list=[]){
    if(ques.length==0){
        list.push(ans);
    }
    for(let i=0;i<ques.length;i++){
        let c = ques.charAt(i);
        permutation(ques.substring(0,i)+ques.substring(i+1), ans+c,list);
    }
    return list;
}

//Two pointer approach, O(n) time and O(1) space
function nextPermutation(arr){
    let n=arr.length, i=n-2, ind=0, ind2=n-1;
    while(i>=0){
        if(arr[i]<arr[i+1]){
            ind = i;
            break;
        }
        i--;
    }
    i=n-1;
    while(i>ind){
        if(arr[i]>arr[ind]){
            ind2 = i;
            break;
        }
        i--;
    }
    if(ind==0 && ind2==n-1){
        while(ind<=ind2){
            swap(ind, ind2, arr);
            ind++;
            ind2--;
        }
    }
    else{
        swap(ind, ind2, arr);
        ind++;
        while(ind<=ind2){
            swap(ind, ind2, arr);
            ind++;
            ind2--;
        }
    }
}

function swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


let ques ="321";
let list = permutation(ques, "", []);
list.sort();
console.log(list);
let ind = list.indexOf(ques);
if(ind==list.length-1){
    console.log(ques.split('').sort().join(''));
}else{
    console.log(list[ind+1]);
}



