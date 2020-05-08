var mergeTwoLists = function(l1, l2) {
    const dummyHead = new ListNode();
    
    let currentNode = dummyHead;
    
    let pointer1 = l1;
    let pointer2 = l2;
    
    while (pointer1 !== null && pointer2 !== null) {
        if (pointer1.val < pointer2.val) {
            currentNode.next = pointer1;
            pointer1 = pointer1.next;
        } else {
            currentNode.next = pointer2;
            pointer2 = pointer2.next;
        }
        
        currentNode = currentNode.next;
    }
    
    while (pointer1 !== null) {
        currentNode.next = pointer1;
        pointer1 = pointer1.next;
        currentNode = currentNode.next;
    }
    
    while (pointer2 !== null) {
        currentNode.next = pointer2;
        pointer2 = pointer2.next;
        currentNode = currentNode.next;
    }
    
    return dummyHead.next;
}