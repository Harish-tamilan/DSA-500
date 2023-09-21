package StackAndQueue.ReduntantParanthesis;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Stack;

public class ReduntantParanthesis {
    public static String reduntantParanthesis(String s){
        Stack<Character> stack = new Stack<>();
        Stack<Integer> countStack = new Stack<>();
        //System.out.println(s);
        int i, len = s.length();
        for(i=0;i<len;i++){
            if(s.charAt(i)=='(')
                break;
        }
        if(i>=len){
            return "0";
        }
        stack.push(s.charAt(i));
        countStack.push(0);
        for(i=i+1;i<len;i++){
            if(s.charAt(i)==')'){
                if(countStack.peek()<=1){
                    return "1";
                }
                countStack.pop();
                stack.pop();
            } else if(s.charAt(i)=='('){
                if(stack.size()>0){
                    int top = countStack.pop();
                    countStack.push(top+1);
                }
                stack.push(s.charAt(i));
                countStack.push(0);
            }else{
                if(stack.size()>0){
                    int top = countStack.pop();
                    countStack.push(top+1);
                }
            }
        }
        return "0";
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        List<String> res = new ArrayList<>();
        for(int i=0;i<n;i++){
            String s = sc.nextLine();
            res.add(reduntantParanthesis(s));
        }
        System.out.println(res);
    }
}
