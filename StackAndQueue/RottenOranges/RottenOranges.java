package StackAndQueue.RottenOranges;

import java.util.ArrayDeque;
import java.util.Queue;

public class RottenOranges {
    public static int rottenOranges(int[][] arr){
        Queue<Integer> queue = new ArrayDeque<>();
        queue.add(3);
        queue.add(1);
        queue.add(2);

        return -1;
    }
    public static void main(String[] args) {
        int[][] arr = {{0,1,2},{0,1,2},{2,1,1}};
        rottenOranges(arr);
    }
}
