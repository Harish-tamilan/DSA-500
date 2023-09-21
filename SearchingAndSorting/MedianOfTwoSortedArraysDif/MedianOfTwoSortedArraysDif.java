package SearchingAndSorting.MedianOfTwoSortedArraysDif;

public class MedianOfTwoSortedArraysDif {
    public static double medianOfTwoSortedArraysDif(int[] arr, int[] arr2){
        if(arr.length>arr2.length){
            return medianOfTwoSortedArraysDif(arr2, arr);
        }
        int n = arr.length, n2 = arr2.length;
        int l=0, r=n;
        while(l<=r){
            int firstMid = (l+r)/2;
            int secondMid = ((n+n2+1)/2)-firstMid;
            int minFirst = (firstMid>0)?arr[firstMid-1]:Integer.MIN_VALUE;
            int maxFirst = (firstMid<n)?arr[firstMid]:Integer.MAX_VALUE;
            int minSecond = (secondMid>0)?arr2[secondMid-1]:Integer.MIN_VALUE;
            int maxSecond = (secondMid<n2)?arr2[secondMid]:Integer.MAX_VALUE;
            if(maxSecond>=minFirst && maxFirst>=minSecond){
                if((n+n2)%2!=0){
                    return Math.max(minFirst, minSecond);
                } else{
                    return (Math.min(maxFirst, maxSecond)+Math.max(minFirst, minSecond))/2.0;
                }
            } else if(minFirst>maxSecond){
                r = firstMid-1;
            } else{
                l = firstMid+1;
            }
        }
        return 0;
    }

    public static void main(String[] args) {
//        int[] arr = {2, 3, 5, 8};
//        int[] arr2 = {10, 12, 14, 16, 18, 20};
        int[] arr = {1,2};
        int[] arr2 = {3,4};
        System.out.println(medianOfTwoSortedArraysDif(arr, arr2));
    }
}
