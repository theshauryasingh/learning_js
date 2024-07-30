/*
unique vlaues

mix of data types

iterable

do not maintain insertion order

dynamically sized


set vs array : 
    array            set
duplicate        - Duplicate
insertion order  -  no 
slow search/delete - fast


*/


const set = new Set([1,2,3])

set.add(4)
set.add(6)

for(const item of set) {
    console.log(item)
}

console.log(set.size)
set.delete(3)
console.log(set.size)
console.log(set.has(3))



