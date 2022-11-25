function detectLoop(head){
    if(head==null || head.next==null){
        return false;
    }
    let fast = head.next.next;
    let slow = head.next;
    while(slow!=null && fast!=null){
        if(slow==fast){
            return true;
        }
        slow = slow.next;
        if(fast.next==null){
            return false;
        }
        fast = fast.next.next;
    }
}