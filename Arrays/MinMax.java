package Arrays;
import java.util.*;
public class MinMax {

    public static int[] minMax(int[] arr){
        int[] res = new int[2];
        Arrays.sort(arr);
        res[0] = arr[0];
        res[1] = arr[arr.length-1];
        return res;
    }

    public static int[] minMax2(int[] arr){
        int[] res = new int[2];
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        for(int no : arr){
            min = Math.min(min, no);
            max = Math.max(max, no);
        }
        res[0] = min;
        res[1] = max;
        return res;
    }

    public static void main(String[] args){
        int[] arr = {4,2,1,7,5,6};
        int[] res = minMax2(arr);
        System.out.println(res[0]+":"+res[1]);

    }
}
