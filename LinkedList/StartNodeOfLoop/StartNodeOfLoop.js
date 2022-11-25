function startNodeOfLoop(head){
    if(head==null || head.next==null){
        return;
    }
    let slow = head.next;
    let fast = head.next.next;
    while(fast && fast.next){
        if(slow==fast){
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    if(slow==fast){
        slow = head;
        if(slow==fast){
            while(fast!=slow){
                fast = fast.next;
            }
        }else{
            while(slow!=fast){
                slow = slow.next;
                fast = fast.next;
            }
        }
        return slow;
    }
}