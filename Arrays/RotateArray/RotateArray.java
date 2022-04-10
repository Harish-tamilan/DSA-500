package Arrays.RotateArray;

public class RotateArray {
    
    //O(n^2) time and O(1) space
    public static void rotate(int[] arr, int k){
        int i,j,temp,n=arr.length,temp2;
        for(i=0;i<k;i++){
            temp = arr[n-1];
            for(j=n-1;j>0;j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
    }

    public static void rotate2(int[] arr, int k){
        int i,n=arr.length,j=0;
        int[] arr2  = new int[n];
        i=n-(k%n);
        System.out.println("i is "+i);
        while(i<n){
            arr2[j++] = arr[i];
            i++;
        }
        i=0;
        while(i<n-(k%n)){
            arr2[j++] = arr[i];
            i++;
        }
        i=0;
        for(int no:arr2){
            arr[i++] = no;
        }
    }

    public static void reverse(int[] arr, int i, int j){
        int temp;
        while(i<=j){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    public static void rotate3(int[] arr, int k){
        int i=0,n=arr.length,j=n-1;
        reverse(arr, i, j);
        i=0;j=k-1;
        reverse(arr, i, j);
        i=k;j=n-1;
        reverse(arr, i, j);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
       // rotate2(arr, 3);
        for(int no:arr){
            System.out.print(no+" ");
        }
        System.out.println();
        rotate3(arr, 4);
        for(int no:arr){
            System.out.print(no+" ");
        }
    }
}
