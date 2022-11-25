class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

function create(arr){
    let head = new Node(arr[0],null);
    let prev=head;
    let n = arr.length;
    for(let i=1;i<n;i++){
        let node = new Node(arr[i], null);
        prev.next = node;
        prev=node;
    }
    return head;
}

function printList(head){
    while(head!=null){
        console.log(head.data);
        head = head.next;
    }
    console.log("------------------------------------------------");
}

function reverse(head, k){
    let node = head, prev=null;
    let count=0;
    while(count<k && node!=null){
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
        count++;
    }
    //console.log('head is ', head);
    return {
        cur:head,
        next:node,
        prev:prev
    }
}

function reverseInGroups(head, k){
    let newHead=null;
    let tail=null;
    while(head!=null){
        let obj = reverse(head, k);
        //printList(obj.prev);
        if(newHead!=null){
            tail.next = obj.prev;
        }
        if(newHead==null){
            newHead = obj.prev;
        }
        tail = obj.cur;
        head.next = obj.next;
        head = head.next;
    }
    return newHead;
}

let arr = [1,2,3,4,5];
let head = create(arr);
printList(head);
let newHead = reverseInGroups(head, 3);
printList(newHead);