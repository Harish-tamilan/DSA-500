package Arrays.CountInversion;

import java.util.*;

public class CountInversion {

    public static int countInversion(int[] arr) {

        int count = 0, i, j, n = arr.length, temp;

        for (i = 0; i < n; i++) {
            for (j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    count++;
                }
            }
        }
        return count;
    }

    public static int merge(int[] arr, int l, int m, int r) {
        int count = 0;
        int[] left = Arrays.copyOfRange(arr, l, m + 1);
        int[] right = Arrays.copyOfRange(arr, m + 1, r + 1);
        int i = 0, j = 0, k = l;
        //System.out.println("l is "+l+", m is "+m+", r is "+r);
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i];
                i++;
            } else {
                count += (m + 1) - (l + i);
                arr[k++] = right[j];
                j++;
            }
        }
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        while (j < right.length) {
            arr[k++] = right[j++];
        }
       // System.out.println("count is "+ count);
        return count;
    }

    public static int countInversion2(int[] arr, int l, int r) {
        int count=0;
        if (l < r) {
            int m = (l+r) / 2;
            count += countInversion2(arr, l, m);
            count += countInversion2(arr, m + 1, r);
            count += merge(arr, l, m, r);
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = { -1, 6, 3, 4, 7, 4  };
        //System.out.println(countInversion(arr));
        System.out.println(countInversion2(arr, 0, arr.length - 1));
        for(int no:arr)
            System.out.print(no+" ");
    }
}
