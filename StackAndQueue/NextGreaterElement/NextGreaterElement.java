package StackAndQueue.NextGreaterElement;

import java.util.Arrays;
import java.util.Stack;

public class NextGreaterElement {

    public static long[] nextGreaterElement(long[] arr, int n){
        Stack<Integer> stack = new Stack<>();
        long[] res = new long[n];
        Arrays.fill(res, -1);
        stack.push(0);
        for(int i=1;i<n;i++){
            if(arr[i]>arr[stack.peek()]){
                while(!stack.isEmpty() && arr[stack.peek()]<arr[i]){
                    int ind = stack.pop();
                    res[ind] = arr[i];
                }
            }
            stack.push(i);
        }
        return res;
    }

    public static void main(String[] args) {
        long[] arr = {6, 8, 0, 1, 3};
        long[] res = nextGreaterElement(arr, arr.length);
        for(long l : res){
            System.out.print(l+" ");
        }
    }
}
