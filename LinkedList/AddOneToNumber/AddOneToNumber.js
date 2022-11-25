function addToNumber(node) {
  if (head.next == null) {
    head.data += 1;
    return head;
  }
  let ln = head;
  let t = head;
  while (t.next != null) {
    if (t.data != 9) {
      ln = t;
    }
    t = t.next;
  }
  if (t.data == 9) {
    t = ln;
    t.data += 1;
    t = t.next;
    while (t != null) {
      t.data = 0;
      t = t.next;
    }
  } else {
    t.data += 1;
  }
  return head;
}
