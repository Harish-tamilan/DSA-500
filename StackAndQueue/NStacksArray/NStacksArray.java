package StackAndQueue.NStacksArray;

import java.util.*;

public class NStacksArray {
    static Stack stack;
    static class Stack{
        int[] arr;
        int[] next;
        int[] top;
        int free;
        public Stack(int k, int n){
            next = new int[n];
            top = new int[k];
            arr = new int[n];
            Arrays.fill(arr, -1);
            Arrays.fill(top, -1);
            for(int i=0;i<n;i++){
                next[i] = i+1;
            }
            next[n-1] = -1;
            free = 0;
        }
    }

    public static boolean push(int ele, int no){
        if(stack.free==-1) {
            return false;
        }
        int ind = stack.free;
        stack.arr[ind] = ele;
        stack.free = stack.next[ind];
        stack.next[ind] = stack.top[no-1];
        stack.top[no-1] = ind;
        return true;
    }

    public static int pop(int no){
        if(stack.top[no-1]==-1){
            return -1;
        }
        int ind = stack.top[no-1];
        int res = stack.arr[ind];
        stack.top[no-1] = stack.next[ind];
        stack.next[ind] = stack.free;
        stack.free = ind;
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), size = sc.nextInt(), q = sc.nextInt();
        stack = new Stack(n, size);
        List<Object> list = new ArrayList<>();
        for(int i=0;i<q;i++){
            int op = sc.nextInt();
            if(op==1){
                int ele = sc.nextInt();
                int k = sc.nextInt();
                list.add(push(ele, k));
            } else if(op==2){
                int k = sc.nextInt();
                list.add(pop(k));
            }
        }
        System.out.println(list);
    }
}
/*
3 6 10
2 2
1 8 2
1 1 2
1 25 2
1 41 3
1 20 2
1 17 2
2 2
2 2
2 2
 */

/*
M[][] = {{0 1 0},
         {0 0 0},
         {0 1 0}}

 */