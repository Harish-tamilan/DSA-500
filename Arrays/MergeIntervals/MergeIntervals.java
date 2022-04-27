package Arrays.MergeIntervals;
import java.util.*;
public class MergeIntervals {

    public static int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, new Comparator<int[]>(){
            public int compare(int[] it, int[] it2){
                return it[0]-it2[0];
            }
        });
        List<int[]> list = new ArrayList<>();
        int st=intervals[0][0], end=intervals[0][1];
        int i,j,n=intervals.length;
        for(i=1;i<n;i++){
            if(intervals[i][0]<=end){
                end = Math.max(end, intervals[i][1]);
            }
            else{
                int[] temp = new int[2];
                temp[0] = st;
                temp[1] = end;
                list.add(temp);
                st = intervals[i][0];
                end = intervals[i][1];
            }
        }
        int[] temp = new int[2];
                temp[0] = st;
                temp[1] = end;
                list.add(temp);
        j=0;
        int[][] res = new int[list.size()][];
        for(int[] it: list){
            res[j++] = it;
        }
        System.out.println("list is "+ list);
        return res;
    }
    public static void main(String[] args) {
        
    }
}
