function method1(arr){
    let r=arr.length, c=arr[0].length;
    let mat = new Array(r+1);
    let i,j,ans=0;
    for(let i=0;i<r;i++){
        mat[i] = new Array(c);
    }
    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            if(i==0 || j==0){
                mat[i][j]=arr[i][j];
            }else{
                if(arr[i][j]==1){
                    mat[i][j] = Math.min(Math.min(mat[i-1][j], mat[i][j-1]), mat[i-1][j-1])+1;
                }else{
                    mat[i][j] = 0;
                }
            }
            ans = Math.max(ans, mat[i][j]);
        }
    }
    return ans;
}

let arr = [ [ 1, 0, 1, 1, 0, 1, 0, 0, 1, 1] ];
console.log(method1(arr));
