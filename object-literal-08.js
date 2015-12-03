// real	0m2.977s
// user	0m2.924s
// sys	0m0.039s

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
    h: i + 1, // 8
  }

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-08.js " + (Date.now() - t))
