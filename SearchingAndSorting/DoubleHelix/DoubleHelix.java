package SearchingAndSorting.DoubleHelix;

import java.util.*;

public class DoubleHelix {

    public static int method1(int[] arr, int[] arr2) {
        int n = arr.length, m = arr2.length;
        int i = 0, j = 0, sum = 0, sum2 = 0, res = 0;
        while (i < n && j < m) {
            if (arr[i] < arr2[j]) {
                sum += arr[i++];
            } else if (arr[i] > arr2[j]) {
                sum2 += arr2[j++];
            } else {
                res += Math.max(sum, sum2) + arr[i];
                i++;
                j++;
                sum = 0;
                sum2 = 0;
            }
        }
        while (i < n) {
            sum += arr[i++];
        }
        while (j < m) {
            sum2 += arr2[j++];
        }
        res += Math.max(sum, sum2);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int c = sc.nextInt();
        int i, j;
        List<Integer> list = new ArrayList<>();
        for (i = 0; i < c; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (j = 0; j < n; j++) {
                arr[j] = sc.nextInt();
            }
            int m = sc.nextInt();
            int[] arr2 = new int[m];
            for (j = 0; j < m; j++) {
                arr2[j] = sc.nextInt();
            }
            list.add(method1(arr, arr2));
        }
        System.out.println(list);
    }
}
