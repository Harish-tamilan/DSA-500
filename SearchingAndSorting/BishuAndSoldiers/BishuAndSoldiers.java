package SearchingAndSorting.BishuAndSoldiers;

import java.util.*;

public class BishuAndSoldiers {

    public static int binarySearch(int[] arr, int n) {
        int l = 0, r = arr.length-1;
        int m = r + (r - l) / 2;
        while (l <= r) {
            m = l + (r - l) / 2;
            if (arr[m] > n) {
                r = m - 1;
            } else if (arr[m] < n) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return r;
    }

    public static int[] method1(int[] arr, int n) {
        int[] res = new int[2];
        int ind = binarySearch(arr, n);
        res[0] = ind+1;
        res[1] = 0;
        for(int i=0;i<=ind;i++){
            res[1] += arr[i];
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //int n = sc.nextInt();
        int i;
        int[] arr = new int[]{1, 2, 3, 4, 5, 6, 7};
        //int[] arr = new int[n];
        // for (i = 0; i < n; i++) {
        //     arr[i] = sc.nextInt();
        // }
        Arrays.sort(arr);
        int t = sc.nextInt();
        List<List<Integer>> list = new ArrayList<>();
        List<Integer> input = new ArrayList<>();
        for (i = 0; i < t; i++) {
            input.add(sc.nextInt());
        }
        for (i = 0; i < t; i++) {
            int[] res = method1(arr, input.get(i));
            List<Integer> li = new ArrayList<>();
            li.add(res[0]);
            li.add(res[1]);
            list.add(li);
        }
        System.out.println(list);
        //System.out.println(binarySearch(arr, 6));
    }
}
