package Greedy.Diehard;

import java.util.*;

public class Diehard {

    public static int method1(int a, int h) {
        int time = 0;
        while (true) {
            if (time % 2 == 0) {
                h += 3;
                a += 2;
            } else {
                if(a>10) {
                    h -= 5;
                    a -= 10;
                }
                else{
                    h -= 20;
                    a += 5;
                } 
            }
            if (a > 0 && h > 0) {
                time++;
            } else {
                break;
            }
        }
        return time;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        List<Integer> li = new ArrayList<>();
        for (int i = 0; i < t; i++) {
            int a = sc.nextInt();
            int h = sc.nextInt();
            li.add(method1(a, h));
        }
        System.out.println(li);
    }
}
