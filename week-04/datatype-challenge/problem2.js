// Problem 4
function removeDuplicate(arr){
    return Array.from(new Set(arr))
}
console.log(removeDuplicate([1, 2, 3, 3, 4, 1]))

let a = new Set()

a.add("ss")
a.add("ss")
a.delete("ss")
a.has("ss")
// a.size("ss")

console.log(a)

// problem 5
    // [2, 7, 11, 15], target = 9`

function returnIndex(arr, target){
    let indexes = [];
    arr.reduce((accu, current, index)=>{
    let isTarget = accu + current
    if(isTarget == target){
        indexes.push(index-1)
        indexes.push(index)
        }
        return current
    
    })
    return indexes
}

let mp = new Map()
mp.set("jj", "kk")
console.log(mp)

console.log(returnIndex([2, 7, 11, 15], 9))