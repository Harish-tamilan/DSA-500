package Greedy.PickingupChicks;

import java.util.*;

public class PickingupChicks {
    public static int method1(int n, int k, int b, int t, int[] speed, int[] pos){
        int count=0, swaps=0, possible=0;
        for(int i=n-1;i>=0;i--){
            int dist_needed = b-pos[i];
            int dist_reach = speed[i]*t;
            if(dist_reach>=dist_needed){
                possible++;
                swaps += count;
            }else{
                count++;
            }
            if(possible>=k)
                break;
        }
        if(possible<k) {
            return -1;
        }
        return swaps;
    }

    public static void main(String[] args){
       Scanner sc = new Scanner(System.in);
       int c = sc.nextInt();
       List<Integer> list = new ArrayList<>();
       for(int i=0;i<c;i++){
           int n = sc.nextInt();
           int k = sc.nextInt();
           int b = sc.nextInt();
           int t = sc.nextInt();
           int[] speed = new int[n];
           int[] pos = new int[n];
           for(int j=0;j<n;j++){
               pos[j] = sc.nextInt();
           }
           for(int j=0;j<n;j++) {
               speed[j] = sc.nextInt();
           }
           list.add(method1(n, k, b, t, speed, pos));
       }
       System.out.println(list);
    }
}
