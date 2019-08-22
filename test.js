let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7];
let n = a.length / 3;

let len = a.length;
let out = [];
let i = 0,
    size;

size = Math.floor(len / n)
console.log(size)
while(i < len){
    // console.log(i)
    // console.log(i += size)
    out.push(a.slice(i, i += size))
}

console.log(out);