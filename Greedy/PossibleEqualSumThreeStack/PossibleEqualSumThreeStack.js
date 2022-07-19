function method1(stack1, stack2, stack3){
    let sum1=0, sum2=0, sum3=0;
    let n1=stack1.length,n2=stack2.length,n3=stack3.length;
    for(let no of stack1){
        sum1 += no;
    }
    for(let no of stack2){
        sum2 += no;
    }
    for(let no of stack3){
        sum3 += no;
    }
    let ind1=0,ind2=0,ind3=0;
    while(ind1<n1 && ind2<n2 && ind3<n3){
        if(sum1==sum2==sum3){
            //console.log('ind1 : ', ind1, ', ind2 : ', ind2,', ind3 : ', ind3);
            return sum1;
        }
        if(sum1>sum2){
            if(sum1>sum3){
                sum1-=stack1[ind1];
                ind1++;
            }else{
                sum3-=stack3[ind3];
                ind3++;
            }
        }else{
            if(sum2>sum3){
                sum2-=stack2[ind2];
                ind2++;
            }else{
                sum3-=stack3[ind3];
                ind3++;
            }
        }
    }
    return 0;
}

let stack1 = [ 3, 10 ];
let stack2 = [ 4, 5 ];
let stack3 = [ 2, 1 ];
console.log(method1(stack1, stack2, stack3));