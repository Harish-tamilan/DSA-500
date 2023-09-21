package StackAndQueue.NQueueArray;

import java.util.*;

public class NQueueArray {
    static class Queue{
        int size;
        int[] arr;
        int[] next;
        int[] top;
        int[] rear;
        int free;
        public Queue(int size, int k){
            this.size = size;
            arr = new int[size];
            next = new int[size];
            top = new int[k];
            rear = new int[k];
            free = 0;
            Arrays.fill(next, -1);
            next[size-1] = -1;
            Arrays.fill(top, -1);
            Arrays.fill(rear, -1);
        }
    }

    public boolean enqueue(int x, int qno){
        int ind = queue.free;
        if(queue.free==queue.size){
            return false;
        }
        if(queue.top[qno-1]==-1){
            queue.top[qno-1] = ind;
            queue.rear[qno-1] = ind;
        }else{
            queue.next[queue.rear[qno-1]] = ind;
            queue.rear[qno-1] = ind;
        }
        queue.arr[ind] = x;
        queue.free++;
        return true;
    }

    public int dequeue(int qno){
//        System.out.println("line 40");
        if(queue.top[qno-1]==-1){
            return -1;
        }
        int top = queue.top[qno-1];
        queue.top[qno-1] = queue.next[top];
        return queue.arr[top];
    }

    Queue queue;
    public static void main(String[] args) {
        NQueueArray nQueueArray = new NQueueArray();
        int n, size, queries;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        size = sc.nextInt();
        queries = sc.nextInt();
        nQueueArray.queue = new Queue(size, n);
        List<Object> res = new ArrayList<>();
        for(int i=0;i<queries;i++){
            int op = sc.nextInt();
            if(op==1){
                int x = sc.nextInt();
                int qno = sc.nextInt();
                res.add(nQueueArray.enqueue(x, qno));
            } else{
                int qno = sc.nextInt();
                res.add(nQueueArray.dequeue(qno));
            }
        }
//        System.out.println("Queue Top");
//        for(int no : nQueueArray.queue.top){
//            System.out.print(no + " ");
//        }
//        System.out.println();
//        System.out.println("Queue Next ");
//        for(int no : nQueueArray.queue.next){
//            System.out.print(no + " ");
//        }
        System.out.println(res);
    }
}
/*
3 10 23
1 11 1
1 51 2
1 26 3
1 16 2
1 5 3
1 7 2
1 9 2
1 20 3
1 40 1
1 98 3
1 100 1
2 2
2 3
2 1
2 1
2 1
2 2
2 3
2 3
2 3
2 2
2 3
2 2
 */