// real	0m4.057s
// user	0m3.967s
// sys	0m0.057s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

function F (a, b, c, d, e, f, g, h, i, j){
}

function f(){
  var o = new F(i, i, i, i, i, i, i, i, i, i)

  o.a = i + 1
  o.b = i + 1
  o.c = i + 1
  o.d = i + 1
  o.e = i + 1
  o.f = i + 1
  o.g = i + 1
  o.h = i + 1
  o.i = i + 1
  o.j = i + 1 // 10

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("constructor-assign-outside-10.js " + (Date.now() - t))
