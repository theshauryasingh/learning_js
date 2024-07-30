/* 
unordered colleciton of key-value pairs
can be of any data type
key to retrieve the value
iterable

object                       map
unordered               ordered
keys:string, symbol     keys:any data type
has a prototype, may    does not contain any key by default
contain defauly keys
not iterable            Iterable
size :need to count     size property
storedata;functionality only store data
 */


const map = new Map([['a', 1], ['b', 2]])
map.set('c',3)

console.log(map.has('a'))
for (const [k,v] of map) {
    console.log(`${k}: ${v}`)
}

map.delete('b')
console.log(map)
console.log(map.size)
