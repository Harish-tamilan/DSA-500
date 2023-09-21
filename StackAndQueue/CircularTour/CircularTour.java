package StackAndQueue.CircularTour;

import java.util.HashMap;
import java.util.HashSet;

public class CircularTour {

//    for(int no:petrol){
//        System.out.println(no+" ");
//    }
//    System.out.println();
//    for(int no:distance){
//        System.out.println(no+" ");
//    }
//    System.out.println();
    public static int circularTour(int[] petrol, int[] distance){
        int prevDistance=distance[0], prevPetrol=petrol[0], start = 0, end = 1, balance=0, n=petrol.length, count=0;
        while(end<n){
            balance += (prevPetrol-prevDistance);
            prevPetrol=petrol[end];
            prevDistance=distance[end];
            if(balance<0){
                start = end;
                balance=0;
            }
            end++;
            count++;
        }
        balance += (prevPetrol-prevDistance);
        if(balance<0){
            return -1;
        }
        for (int j = 0; j < start; j++) {
            balance += (petrol[j] - distance[j]);
            if (balance < 0) {
                return -1;
            }
        }
        return start;
    }

    public static void main(String[] args) {
        String petrolString =   "94 27 87 44 15 80 63 89 11 95 47 38 54 74 26 11 18 64";
        String distanceString = "31 75 94 54 75 14 78 76 20 33 18 36 92 44 29 92 19 37";
        String[] petrolArr = petrolString.split(" ");
        String[] distanceArr = distanceString.split(" ");
//        int[] petrol = new int[petrolArr.length];
//        int[] distance = new int[distanceArr.length];
//        for(int i=0;i<petrolArr.length;i++){
//            petrol[i] = Integer.parseInt(petrolArr[i]);
//            distance[i] = Integer.parseInt(distanceArr[i]);
//        }
        int[] petrol = {1, 2, 3, 4, 5};
        int[] distance = {5, 4, 3, 2, 1};
        System.out.println(circularTour(petrol, distance));
    }
}
