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
};

module.exports = main;
