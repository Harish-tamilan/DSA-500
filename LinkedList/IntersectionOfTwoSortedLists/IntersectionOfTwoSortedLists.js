function findIntersection(head1, head2) {
  //your code here
  let prev = null;
  let head = null;
  while (head1 != null && head2 != null) {
    if (head1.data == head2.data) {
      if (prev == null) {
        prev = new Node(head1.data);
        head = prev;
      } else {
        let node = new Node(head1.data);
        prev.next = node;
        prev = node;
      }
      head1 = head1.next;
      head2 = head2.next;
    } else if (head1.data > head2.data) {
      head2 = head2.next;
    } else {
      head1 = head1.next;
    }
  }
  return head;
}
