/* an object is an unordered collection of key value pairs. 
The key must either be a string or symbol data type where as the value can be of any data type

To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.

An object is not an iterable, cant use it with a for loop

*/


const obj = {
    name : "shaurya",
    age : 28,
    "key-three": true,
    sayMyName: function() {
        console.log(this.name)
    }
}

obj.hobby = "travelling";
console.log(obj);
obj.sayMyName();
delete obj.hobby;

console.log(obj)
console.log(obj['age'])
console.log(obj['key-three'])

//console.log(obj.size())
// Object.keys() .values() .enteries()



/*
insert - O(1)
remove - O(1)
Access - O(1)
search - O(n)
Object.keys() .values() .enteries() - O(n)

*/
