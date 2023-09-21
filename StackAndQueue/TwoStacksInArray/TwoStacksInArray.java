package StackAndQueue.TwoStacksInArray;

class TwoStack {

    int size;
    int top1, top2;
    int arr[] = new int[100];

    TwoStack() {
        size = 100;
        top1 = -1;
        top2 = size;
    }
}

public class TwoStacksInArray
{
    //Function to push an integer into the stack1.
    static void push1(int x, TwoStack sq)
    {
        sq.top1++;
        sq.arr[sq.top1] = x;
    }

    //Function to push an integer into the stack2.
    static void push2(int x, TwoStack sq)
    {
        sq.top2--;
        sq.arr[sq.top2] = x;
    }

    //Function to remove an element from top of the stack1.
    static int pop1(TwoStack sq)
    {
        if(sq.top1==-1){
            return -1;
        }
        return sq.arr[sq.top1--];
    }

    //Function to remove an element from top of the stack2.
    static int pop2(TwoStack sq)
    {
        if(sq.top2==100){
            return -1;
        }
        return sq.arr[sq.top2++];
    }

    public static void main(String[] args) {
        TwoStack twoStack = new TwoStack();
        push1(2, twoStack);
        push1(3, twoStack);
        push2(4, twoStack);
        System.out.println(pop1(twoStack));
        System.out.println(pop2(twoStack));
        System.out.println(pop2(twoStack));
    }
}