package Greedy.WineTradingGergovia;

import java.util.*;

public class WineTradingGergovia {
    public static int wineTrading(int[] arr){
        int sum=0;
        int sell=0, buy=0;
        int n = arr.length;
        while(true){
            while(sell<n && arr[sell]>=0){
                sell++;
            }
            while(buy<n && arr[buy]<=0){
                buy++;
            }
            if(sell==n || buy==n){
                break;
            }
            int sold = Math.min(-arr[sell], arr[buy]);
            sum += Math.abs(sell-buy)*sold;
            arr[buy] -= sold;
            arr[sell] += sold;
        }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i;
        List<Integer> list = new ArrayList<>();
        while(true){
            int n = sc.nextInt();
            if(n==0){
                break;
            }
            int[] arr = new int[n];
            for(i=0;i<n;i++){
                arr[i] = sc.nextInt();
            }
            list.add(wineTrading(arr));
        }
        System.out.println(list);
    }
}
