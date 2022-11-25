package Graph.BFS;

import java.util.*;

public class BFS {
    public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
        // Code here
        ArrayList<Integer> list = new ArrayList<>();
        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] visited = new boolean[V];
        queue.add(0);
        visited[0] = true;
        list.add(0);
        while(queue.size()>0){
            int n = queue.poll();
            if(!visited[n]){
                list.add(n);
            }
            visited[n] = true;
            for(int no : adj.get(n)){
                if(!visited[no]){
                    queue.add(no);
                }
            }
        }
        return list;
    }

    public static void method(int[][] graph){
        int dist[][] = new int[graph.length][graph.length];
        int next[][] = new int[graph.length][graph.length];

        for (int i=0; i < graph.length; i++) {
            for (int j=0; j< graph[i].length; j++){
                dist[i][j] = graph[i][j];
                if (graph[i][j] != 99999 && i != j) {
                    next[i][j] = i;
                } else {
                    next[i][j] = -1;
                }
            }
        }

        for(int k=0; k < graph.length; k++){
            for(int i=0; i < graph.length; i++){
                for(int j=0; j < graph.length; j++){
                    if(dist[i][k] == 99999 || dist[k][j] == 99999) {
                        continue;
                    }
                    if(dist[i][j] > dist[i][k] + dist[k][j]){
                        dist[i][j] = dist[i][k] + dist[k][j];
                        next[i][j] = next[k][j];
                    }
                }
            }
        }
    }
    
    public static void main(String[] args) {
        
    }
}
