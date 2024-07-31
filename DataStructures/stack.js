/* 
stack  - LIFO, sequential collection
abstract data type,  defined by behaviour, rather than a mathematical model
operations:

PUSH
POP
PEEK

usage :
Browser history tracking
UNDO
expression conversions - infix to postfix
call stack in JS runtime
*/

class Stack {
    constructor() {
        this.items = []
        this.count = 0 
   }

   push(ele){
       this.items.push(ele)
       this.count += 1
   }
   
   pop(ele) {
       const item = this.items[this.count]
       this.items.pop()
       this.count -= 1
       return item
   }

  peek(){
       return this.items[this.count]
  }
}


const stack = new Stack()
stack.push(1);

console.log(stack);
stack.pop()

console.log(stack);
