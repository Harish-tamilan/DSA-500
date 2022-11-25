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
}

function reverseIterative(head){
    let node = head, prev=null;
    while(node!=null){
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    return prev;
}

function reverseRecursive(right, pos, n){
    if(right==null)
        return null;
    reverseRecursive(right.next, pos+1, n);
    if(pos>Math.floor(n/2)){
        console.log('pos is ', pos);
        let temp = left.data;
        left.data = right.data;
        right.data = temp;
        left = left.next;
    }
}

let arr = [3,4,1,2];
let head = create(arr);
printList(head);
console.log("-------------------------------------------------------");
// let revHead = reverseIterative(head);
// printList(revHead);
let left = head;
reverseRecursive(head, 1, arr.length);
printList(head);