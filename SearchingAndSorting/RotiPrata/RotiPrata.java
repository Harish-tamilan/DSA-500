package SearchingAndSorting.RotiPrata;

import java.util.*;

public class RotiPrata {

    public static boolean isPossible(int[] arr, int t, int r){
        int num=0;
        int time=0;
        int next=arr[0], n=arr.length;
        for(int i=0;i<n;i++){
            time=0;
            next=arr[i];
            while(time+next<=t){
                time += next;
                next += arr[i];
                num++;
                if(num>=r){
                    return true;
                }
            }
        }
        return false;
    }
    
    public static int method1(int[] arr, int num){
        int n=arr.length;
        int l=0;
        int r = arr[n-1]*num*(num+1)/2;
        int ans=-1;
        while(l<=r){
            int m = l+(r-l)/2;
            if(isPossible(arr, m, num)){
                r=m-1;
                ans=m;
            }else{
                l=m+1;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int c = sc.nextInt();
        int i,j;
        List<Integer> list = new ArrayList<>();
        for(i=0;i<c;i++){
            int t = sc.nextInt();
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(j=0;j<n;j++){
                arr[j] = sc.nextInt();
            }
            list.add(method1(arr, t));
        }
        System.out.println(list);
    }
}
