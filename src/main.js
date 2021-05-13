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
};

module.exports = main;
