package Arrays.MinimumCost;

//Minimum cost required to reach the destination
public class MinimumCost {

    public static int minimumCost(int[] arr){
        int i=0, cash=arr[0], bags=1, maxIndex=-1,n=arr.length;

        if(arr[0]==0)
            return -1;
        
        if(arr.length==1)
            return 0;
        
        for(i=1;i<n;i++){
            if(i==arr.length-1)
                return bags;
            maxIndex = Math.max(maxIndex, arr[i]+i);
            cash--;
            if(cash==0){
                if(i>maxIndex)
                    return -1;
                bags++;
                cash = maxIndex-i;
            }
        }
        return i;
    }

    public static int minimumJumps(int[] arr){
        int steps=arr[0], jumps=1, maxIndex=-1,i,n=arr.length;
        if(arr[0]==0)
            return -1;
        for(i=1;i<n;i++){
            if(i==arr.length-1){
                return jumps;
            }
            maxIndex = Math.max(maxIndex, arr[i]+i);
            steps--;
            if(steps==0){
                if(i>maxIndex)
                    return -1;
                jumps++;
                steps = maxIndex-i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        
        int[] arr = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9};
        System.out.println(minCost(arr,1,0,arr.length));
        System.out.println(minimumCost(arr));
    }
}
