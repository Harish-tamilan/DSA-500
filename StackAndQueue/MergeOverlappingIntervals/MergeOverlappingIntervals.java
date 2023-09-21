package StackAndQueue.MergeOverlappingIntervals;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Stack;

public class MergeOverlappingIntervals {
    public static int[][] mergeOverlappingIntervals(int[][] arr){
        Stack<int[]> stack = new Stack<>();
        Arrays.sort(arr, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                return o1[0]-o2[0];
            }
        });
        stack.push(arr[0]);
        int n = arr.length;
        for(int i=1;i<n;i++){
            int[] top = stack.peek();
            if(top[1]>=arr[i][0]){
                stack.pop();
                if(top[1]<arr[i][1]){
                    top[1] = arr[i][1];
                }
                stack.push(top);
            }else{
                stack.push(arr[i]);
            }
        }
        int[][] res = new int[stack.size()][2];
        int i = stack.size()-1;
        while(!stack.isEmpty()){
            int[] top = stack.pop();
            res[i] = top;
            i--;
        }
        return res;
    }
    public static void main(String[] args) {
        int[][] arr = {{1,3},{2,4},{6,8},{9,10}};
        int[][] res = mergeOverlappingIntervals(arr);
        for(int[] ar : res){
            System.out.println(ar[0]+":"+ar[1]);
        }
    }
}
