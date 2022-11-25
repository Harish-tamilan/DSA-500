function intersectPoint(head1, head2) {
  let count1 = 0,
    count2 = 0;
  let node1 = head1,
    node2 = head2;
  while (node1 != null) {
    count1 += 1;
    node1 = node1.next;
  }
  while (node2 != null) {
    count2 += 1;
    node2 = node2.next;
  }
  if (count1 > count2) {
    (node1 = head1), (node2 = head2);
    while (count1 > count2) {
      node1 = node1.next;
      count1--;
    }
  } else {
    (node1 = head1), (node2 = head2);
    while (count2 > count1) {
      node2 = node2.next;
      count2--;
    }
  }
  while (node1 != node2) {
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1.data;
}
