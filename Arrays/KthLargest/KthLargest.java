package Arrays.KthLargest;

import java.util.*;
import java.math.*;

public class KthLargest {

    //Using sorting in O(nlogn) time and O(1) space
    public static int kthLargest(int[] arr, int k){
        Arrays.sort(arr);
        return arr[arr.length-k];
    }

    //Using heaps in O(klogn) time and O(n) space
    public static int kthLargest2(int[] arr, int k){
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        for(int no:arr){
            queue.add(no);
            if(queue.size()>k){
                queue.remove();
            }
        }
        return queue.remove();
    }

    public static int partition(int[] arr, int l, int r){
        int pivot = arr[r],i=l,j=l,temp;
        for(j=l;j<r;j++){
            if(arr[j]>=pivot){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
            }
        }
        temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
        return i;
    }

    //Using quick select (based on quick sort ) in O(n) time average case and O(1) space
    public static int kthLargest3(int[] arr, int l, int r, int k) {
        
            int pi = partition(arr,l,r);
            // System.out.println("pi is "+pi);
            // for(int no:arr){
            //     System.out.print(no+" ");
            // }
            // System.out.println();
            if(pi+1>k){
                return kthLargest3(arr, l, pi-1, k);
            }
            else if(pi+1<k){
                return kthLargest3(arr, pi+1, r, k);
            }
            else{
                return arr[pi];
            }
        }
        
    
    public static void main(String[] args) {
        int[] arr = {5,3,4,1,2};
        int i=0;
        for(int no:arr)
            System.out.println(kthLargest3(arr,0,arr.length-1,++i));
    }
}
