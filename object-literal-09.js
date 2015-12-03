// real	0m31.033s
// user	0m30.687s
// sys	0m0.159s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

function f(){
  var o = {
    a: i + 1,
    b: i + 1,
    c: i + 1,
    d: i + 1,
    e: i + 1,
    f: i + 1,
    g: i + 1,
    h: i + 1,
    i: i + 1 // 9
  }

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-09.js " + (Date.now() - t))
