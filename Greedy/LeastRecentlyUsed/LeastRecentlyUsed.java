package Greedy.LeastRecentlyUsed;

import java.util.*;

public class LeastRecentlyUsed {
    public static int method1(int[] arr, int c){
        List<Integer> list = new LinkedList<>();
        int i, sum=0, n= arr.length;
        for(i=0;i<n;i++){
            int ind = list.indexOf(arr[i]);
            if(ind==-1){
                //System.out.println("line 14");
                if(list.size()==c){
                    list.remove(0);
                }
                list.add(arr[i]);
                sum++;
                
            }else{
                list.remove(ind);
                list.add(arr[i]);
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        int[] arr = new int[]{5, 0, 1, 3, 2, 4, 1, 0, 5};
        int c = 4;
        System.out.println(method1(arr, c));
    }
}
