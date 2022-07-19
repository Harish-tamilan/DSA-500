package Greedy.MinimumCostOfRopes;

import java.util.*;

public class MinimumCostOfRopes {

    public static int minimumCost(int[] arr){
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        for(int no : arr){
            queue.add(no);
        }
        System.out.println("queue is "+ queue);
        int sum=0;
        while(queue.size()!=0){
            int num = queue.poll();
            if(queue.size()==0){
                break;
            }
            int num2 = queue.poll();
            System.out.println("num is "+num+", num2 is "+num2);
            sum += num+num2;
            queue.add(num+num2);
            System.out.println("queue is "+queue);
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{4, 2, 7, 6, 9};
        System.out.println(minimumCost(arr));
    }
}
