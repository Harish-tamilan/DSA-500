function removeDuplicates(head) {
  //your code here
  let set = new Set();
  let node = head;
  while (node != null) {
    if (node.next == null) {
      node = node.next;
    } else {
      set.add(node.data);
      if (set.has(node.next.data)) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
  }
  return head;
}
