function removeLoop(head)
    {
        //your code here
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
                while(fast.next!=slow){
                    fast = fast.next;
                }
            }else{
                while(slow.next!=fast.next){
                    slow = slow.next;
                    fast = fast.next;
                }
            }
            fast.next = null;
        }
    }