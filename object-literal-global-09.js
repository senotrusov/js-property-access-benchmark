// real	0m1.757s
// user	0m1.713s
// sys	0m0.032s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

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

function f(){

  o.a = i + 1
  o.b = i + 1
  o.c = i + 1
  o.d = i + 1
  o.e = i + 1
  o.f = i + 1
  o.g = i + 1
  o.h = i + 1
  o.i = i + 1 // 9

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-global-09.js " + (Date.now() - t))
