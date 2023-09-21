package StackAndQueue.CelebrityProblem;

public class CelebrityProblem {
    public static int celebrity(int[][] arr, int n){
        int  i, j, celeb=-1, celebCount=0;
        for(i=0;i<n;i++){
            int count=0;
            for(j=0;j<n;j++){
                if(i==j){
                    continue;
                }
                if(arr[j][i]==1)
                    count++;
            }
            if(count==n-1){
                celebCount++;
                celeb=i;
            }
        }
        return celebCount==1?celeb:-1;
    }
    public static void main(String[] args) {
        int[][] arr = {
                {0, 1, 1, 0},
                {0, 0, 0, 1},
                {1, 1, 0, 1},
                {1, 1, 1, 0}
        };
        System.out.print(celebrity(arr, arr.length));
    }
}

/*
0 1 1 0 0 0 0 1 1 1 0 1 1 1 1 0
{
    {0, 1, 1, 0},
    {0, 0, 0, 1},
    {1, 1, 0, 1},
    {1, 1, 1, 0}
}
 */