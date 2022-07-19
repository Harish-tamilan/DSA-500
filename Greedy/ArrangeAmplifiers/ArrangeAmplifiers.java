package Greedy.ArrangeAmplifiers;

import java.util.*;

public class ArrangeAmplifiers {

    public static void method1(int[] arr){
        if(arr.length==2){
            if(arr[0] == 2 && arr[1] == 3 || arr[0]==3 && arr[1]==2){
                return;
            }
        }
        Arrays.sort(arr);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int c = sc.nextInt();
        for(int i=0;i<c;i++){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int j=0;j<n;j++){
                arr[j] = sc.nextInt();
            }
        }
    }
}
