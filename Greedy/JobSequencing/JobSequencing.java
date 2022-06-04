package Greedy.JobSequencing;

import java.util.*;

class JobSequencing {
    static class Job {
        int deadline;
        int profit;
        int id;

        public Job(int id, int deadline, int profit) {
            this.deadline = deadline;
            this.id = id;
            this.profit = profit;
        }

        @Override
        public String toString() {
            return this.id + "-" + this.deadline + "-" + this.profit;
        }
    }

    public static int[] jobSequencing(Job[] arr) {
        int[] res = new int[2];
        PriorityQueue<Job> queue = new PriorityQueue<>((a, b) -> b.profit - a.profit);
        Arrays.sort(arr, (a, b) -> a.deadline - b.deadline);
        int i,steps;
        List<Job> list = new ArrayList<>();
        for(i=arr.length-1;i>=0;i--){
            if(i==0){
                steps = arr[i].deadline;
            }else{
                steps = arr[i].deadline - arr[i-1].deadline;
            }
            queue.add(arr[i]);
            while(steps>0 && queue.size()>0){
                Job j = queue.poll();
                list.add(j);
                steps--;
            }
        }
        int sum=0;
        for (Job j:list){
            sum  += j.profit;
        }
        res[0] = list.size();
        res[1] = sum;
        return res;
    }

    public static void main(String[] args) {
        Job[] arr = {
                new Job(1, 4, 20),
                new Job(2, 1, 10),
                new Job(3, 1, 40),
                new Job(4, 1, 30),
        };
        int[] res = jobSequencing(arr);
        System.out.println(res[0]+" "+res[1]);
    }
}