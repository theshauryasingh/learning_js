/* 
queue  - FIFO, sequential collection
abstract data type,  defined by behaviour, rather than a mathematical model
operations:


ENQUEUE
DEQUEUE


usage :
printers
CPU task scheduling
CALLBACK QUEUE IN JS runtime

methods:
enqueue()
dequeue()
peek()
isEmpty()
size()
print()

*/


class Queue {
  constructor() {
    this.items = []
  }
  enqueue(ele){
    this.items.push(ele)
  }
  dequeue(ele){
    return this.items.shift()
  }
  isEmpty(){
    return this.items.length === 0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }
    return null
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}


//optimized implementation
class Queue {
  constructor() {
    this.items = []
    this.read = 0
    this.front = 0
  }
  enqueue(ele){
    this.items[this.rear] = ele
    this.rear++
  }
  dequeue(ele){
    const item = this.items[this.front] 
    delete this.items[this.front]
    return item
  }
  isEmpty(){
    return this.items.length === 0
  }
  peek(){
    if(!this.isEmpty()){
      return this.items[0]
    }
    return null
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString())
  }
}




const q = new Queue()
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(3)
q.enqueue(2)
console.log(q.size())
q.print()




