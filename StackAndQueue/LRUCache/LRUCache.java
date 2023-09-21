package StackAndQueue.LRUCache;

import java.util.*;

public class LRUCache {
    static HashMap<Integer, Integer> map;
    static List<Integer> list;
    static int cap;
    //Constructor for initializing the cache capacity with the given value.
    LRUCache(int cap)
    {
        //code here
        map = new LinkedHashMap<>();
        list = new LinkedList<>();
        this.cap = cap;
    }

    //Function to return value corresponding to the key.
    public static int get(int key)
    {
        // your code
        if(map.containsKey(key)) {
            int val = map.get(key);
            map.remove(key);
            map.put(key, val);
            return val;
        }
        return -1;
    }

    //Function for storing key-value pair.
    public static void set(int key, int value)
    {
        // your code here
        if(map.containsKey(key)){
            map.remove(key);
            map.put(key, value);
            return;
        }
        if(map.size() == cap){
            int k=map.entrySet().iterator().next().getKey();
            map.remove(k);
        }
        map.put(key, value);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cap = Integer.parseInt(sc.next());
        int q = Integer.parseInt(sc.next());
        List<Integer> res = new ArrayList<>();
        LRUCache lruCache = new LRUCache(cap);
        for(int i=0;i<q;i++){
            String s = sc.next();
            if(s.equals("SET")){
                int key = Integer.parseInt(sc.next());
                int value = Integer.parseInt(sc.next());
                set(key, value);
            }else{
                int key = Integer.parseInt(sc.next());
                res.add(get(key));
            }
        }
        System.out.println(res);
    }
}
/*
5 3
1 2 3 4 5
op - 3 2 1 4 5
 */