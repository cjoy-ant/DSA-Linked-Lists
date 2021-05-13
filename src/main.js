const LinkedList = require("./linkedList")

const main = () => {
  let SLL = new LinkedList()

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  console.log(SLL)
  SLL.insertLast('Tauhida')
  SLL.remove('Husker')
}

module.exports = main