package Greedy.RearrangeNoTwoAdjacent;

import java.util.*;

class Key {
    char ch;
    int count;

    public Key(char c, int co) {
        ch = c;
        count = co;
    }

    public String toString() {
        return ch + ":" + count;
    }
}

class KeyComparator implements Comparator<Key> {
    @Override
    public int compare(Key o1, Key o2) {
        // TODO Auto-generated method stub
        return o2.count - o1.count;
    }
}

public class RearrangeNoTwoAdjacent {

    public static String method1(String s) {
        String ans = "";
        int n = s.length();
        PriorityQueue<Key> queue = new PriorityQueue<>(new KeyComparator());
        int[] arr = new int[26];
        int i;
        for (i = 0; i < n; i++) {
            arr[s.charAt(i) - 'a'] += 1;
        }
        int max = 0;
        for (i = 0; i < 26; i++) {
            if (arr[i] > 0) {
                queue.add(new Key((char) ('a' + i), arr[i]));
                max = Math.max(max, arr[i]);
            }
        }
        System.out.println("queue is " + queue);
        if (max > (n + 1) / 2) {
            return "-1";
        }
        Key prev = new Key('#', -1);
        while (queue.size() > 0) {
            Key key = queue.poll();
            ans += key.ch;
            if (prev.count > 0) {
                queue.add(prev);
            }
            key.count -= 1;
            prev = key;
        }
        return ans.length() == s.length() ? ans : "-1";
    }

    public static String method2(String s) {
        int n = s.length();
        int[] arr = new int[26];
        int i, max = 0;
        char maxCh = 'a';
        String ans = "";
        for (i = 0; i < n; i++) {
            arr[s.charAt(i) - 'a'] += 1;
            if (arr[s.charAt(i) - 'a'] > max) {
                max = arr[s.charAt(i) - 'a'];
                //System.out.println("s.charAt(i) - a, "+ (s.charAt(i) - 'a'));
                maxCh = s.charAt(i);
            }
            ans += " ";
        }
        int ind = 0;
        if (max > (n + 1) / 2) {
            return "-1";
        }
        //System.out.println("max : "+max+", maxCh : "+maxCh);
        while (max > 0) {
            ans = ans.substring(0, ind) + maxCh + ans.substring(ind+1);
            ind += 2;
            max--;
        }
        arr[(int)maxCh - (int)'a'] = 0;
        for (i = 0; i < 26; i++) {
            char c = (char) ('a' + i);
            while (arr[i] > 0) {
                ind = ind >= n ? 1 : ind;
                ans = ans.substring(0, ind) + c + ans.substring(ind+1);
                ind += 2;
                arr[i]--;
            }
        }
        return ans.length()==s.length()?ans:"-1";
    }

    public static void main(String[] args) {
        String str = "kkk";
        System.out.println(method1(str));
        System.out.println(method2(str));
    }
}
