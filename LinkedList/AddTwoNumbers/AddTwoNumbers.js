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

function addTwoLists(first, second) {
  //your code here
  first = reverseIterative(first);
  second = reverseIterative(second);
  let sum = null;
  let carry = 0,
    newVal;
  let temp = 0;
  while (first != null || second != null || carry == 1) {
    temp = 0;
    if (first != null) {
      temp += first.data;
    }
    if (second != null) {
      temp += second.data;
    }
    temp += carry;
    carry = Math.floor(temp / 10);
    newVal = temp % 10;
    let node = new Node(newVal);
    node.next = sum;
    sum = node;
    if (first != null) {
      first = first.next;
    }
    if (second != null) {
      second = second.next;
    }
  }
  return sum;
}
