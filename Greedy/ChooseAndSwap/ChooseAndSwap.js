function chooseAndSwap(text){
    let arr = new Array(26);
    arr.fill(-1);
    let i,len=text.length,ind,j;
    for(i=0;i<len;i++){
        let c = text[i];
        ind = c.charCodeAt()-'a'.charCodeAt();
        if(arr[ind]==-1){
            arr[ind] = i;
        }
    }
    let char,char2;
    let bool = false;
    
    for(i=0;i<len;i++){
        j=text[i].charCodeAt();
        while(j>=97){
            ind = j;
            if(arr[ind-97]>=-1 && arr[ind-97]>i){
                char = text[i];
                char2 = String.fromCharCode(ind);
                bool = true;
            }
            j--;
        }
        if(bool){
            break;
        }
    }
    console.log('char is ', char,', char2 is ', char2);
    for(i=0;i<len;i++){
        if(text[i]==char){
            text[i]=char2;
        }else if(text[i]==char2){
            text[i]=char;
        }
    }
    console.log(arr);
    console.log(text);
}

chooseAndSwap('ccab'.split(''));