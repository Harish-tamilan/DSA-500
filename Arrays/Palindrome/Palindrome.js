function palindrome(str){
    let i=0,n=str.length,j=n-1;
    while(i<j){
        if(str.charAt(i).toLowerCase()!=str.charAt(j).toLowerCase())
            return false;
        i++;
        j--;
    }
    return true;
}

let str = "Malayalam"
console.log(palindrome(str));