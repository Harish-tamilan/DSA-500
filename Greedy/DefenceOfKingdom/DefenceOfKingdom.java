package Greedy.DefenceOfKingdom;

import java.util.*;

public class DefenceOfKingdom {

    public static int method1(int[] rows, int []cols, int r, int c){
        Arrays.sort(rows);
        Arrays.sort(cols);
        int mx = Integer.MIN_VALUE;
        int my = Integer.MIN_VALUE;
        for(int i=0;i<r-1;i++){
            mx = Math.max(mx, rows[i+1]-rows[i]-1);
            my = Math.max(my, cols[i+1]-cols[i]-1);
        }
        return mx*my;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t =  sc.nextInt();
        for(int i=0;i<t;i++){
            int r = sc.nextInt();
            int c = sc.nextInt();
            int n = sc.nextInt();
            int[] rows = new int[n+2];
            int[] cols = new int[n+2];
            rows[0] = 0;
            cols[0] = 0;
            for(int j=0;j<n;j++){
                rows[j] = sc.nextInt();
                cols[j] = sc.nextInt();
            }
            rows[n+1] = r;
            cols[n+1] = c;
            System.out.println(method1(rows, cols, n+2, n+2));
        }
    }
}
