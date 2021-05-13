function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  // loops through nodes
  while (current !== null) {
    // decalres a newNode variable to keep track as it loops through
      let newNode = current;
      // loops through nodes, excluding the last node
      while (newNode.next !== null) {
        // if the newNode is equal to the head
          if (newNode.next.value === current.value) {
            // it sets the next node as the next following node
              newNode.next = newNode.next.next;
          }
          // otherwise, the newNode is set as the next node
          else {
              newNode = newNode.next;
          }
      }
      current = current.next;
  }
}

// TIME COMPLEXITY: Polynomial O(n^2)