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

let arr = [3,4,1,2,5];
let head = create(arr);
let node = head;
while(node!=null){
    console.log(node.data);
    node = node.next;
}

export {Node, create};