const LinkedList = require("./linkedList");

const main = () => {
  let SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  console.log(SLL);
  SLL.insertLast("Tauhida");
  SLL.remove("Husker");
  SLL.insertBefore("Test", "Helo");
  SLL.remove("Test");
  SLL.insertAfter("Test", "Apollo");
  SLL.remove("Test");
  SLL.insertAt('Test', 3)
  SLL.remove('Test')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')  

  // display the linked list
  const display = (LL) => {
    let currNode = LL.head
    while (currNode !== null) {
      console.log(currNode)
      currNode = currNode.next
    }
  }
  
  display(SLL)

  // return the size of the linked list
  const size = (LL) => {
    let currNode = LL.head
    let counter = 0
    while (currNode !== null){
      counter ++
      currNode = currNode.next
    }
    console.log("Size: " + counter)
    return counter
  }

  size(SLL)

  // finds if the list is empty or not (without size size() function)
  const isEmpty = (LL) => {
    let isEmpty = true
    if (LL.head) {
      isEmpty = false
    } 
    console.log("the list is empty: " + isEmpty)
    return isEmpty
  }

  isEmpty(SLL)

  // finds the node before the item you are looking for
  const findPrevious = (LL, item) => {
    let currNode = LL.head
    while (currNode !== null) {
      if (currNode.next.value === item) {
        console.log(`node before '${item}': ` + currNode.value)
        return currNode.value
      }
      currNode = currNode.next
    }
  }

  findPrevious(SLL, 'Helo')

  // return the last node in the linked list
  const findLast = (LL) => {
    let currNode = LL.head
    while (currNode !== null) {
      if (currNode.next === null) {
        console.log("last node: " + currNode.value)
        return currNode.value
      }
      currNode = currNode.next
    }
  }

  findLast(SLL)

  /* REVERSE A LIST 
  reverse a linked list with linear O(n) time complexity
  revsere the direction of a given singly linekd list (all pointers should point backwards)
  BONUS: solve using both recursive and iterative algorithms
  */

  const reverseListR = (LL) => {
    // start at the head
    let currNode = LL.head
    // this saves the previous node/value to point at
    let node = null
    // loops through list
    while (currNode !== null) { // [1, 2, 3]
      let tempNext = currNode.next // 2
      currNode.next = node // 1 -> null
      node = currNode // node value now 1
      currNode = tempNext // currNode now 2
    }
    LL.head = node // becomes the last item in the list
    console.log(LL)
  }

  reverseListR(SLL)

  const reverseListI = (LL) => {
    // if list is empty
    if (!LL.head) {
      return null
    }
    // base case
    // if 1 node in list 
    if (LL.head.next === null) {
      return LL.head
    }
    // general case
  }
  //unfinished
  reverseListI(SLL)

  // 3rd FROM THE END
  const thirdToLast = (LL) => {
    let currNode = LL.head
    while (currNode !== null) {
      if (currNode.next.next.next === null) {
        console.log('third to last node: ' + currNode.value)
        return currNode.value
      }
      currNode = currNode.next
    }
  }

  thirdToLast(SLL)

  // MIDDLE OF THE LIST
  // const middleOfList = (LL) => {
  //   let currNode = LL.head
  //   let counter = size(LL)
  //   let middle = Math.floor(counter/2)
  //   for (let i=0; i < middle; i++) {
  //     if (i === middle-1) {
  //       console.log(currNode.value)
  //       return currNode.value
  //     }
  //     currNode = currNode.next
  //   }
  // }

  const middleOfList = (LL) => {
    
  }

  middleOfList(SLL)

  // CYCLCE IN A LIST

  // SORTING A LIST
};

module.exports = main;
