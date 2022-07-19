package SearchingAndSorting.AggressiveCows;

import java.util.*;

public class AggressiveCows {

    public static boolean canFit(int[] arr, int d, int c) {
        System.out.println("Inside canFit, d is "+d+", c is "+c);
        int l = 0, n = arr.length;
        c--;
        for (int j = 1; j < n; j++) {
            if (arr[j] - arr[l] >= d) {
                c--;
                l = j;
            }
            if (c == 0) {
                return true;
            }
        }
        if (c == 0)
            return true;
        return false;
    }

    public static int aggressiveCows(int[] arr, int c) {
        Arrays.sort(arr);
        int n = arr.length;
        int l = arr[0];
        int r = arr[n - 1];
        int m = l + (r - l) / 2;
        while (l <= r) {
            m = l + (r - l) / 2;
            boolean bool = canFit(arr, m, c);
            System.out.println("bool is "+bool);
            if (bool) {
                l = m+1;
            } else {
                r = m-1;
            }
        }
        return r;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        List<Integer> list = new ArrayList<>();
        int n, c;
        for (int i = 0; i < t; i++) {
            n = sc.nextInt();
            c = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) {
                arr[j] = sc.nextInt();
            }
            list.add(aggressiveCows(arr, c));
        }
        System.out.println(list);
    }
}
