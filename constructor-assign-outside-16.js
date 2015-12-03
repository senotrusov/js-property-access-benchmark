// real	0m7.465s
// user	0m7.372s
// sys	0m0.064s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

function F (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p){
}

function f(){
  var o = new F(i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i)

  o.a = i + 1
  o.b = i + 1
  o.c = i + 1
  o.d = i + 1
  o.e = i + 1
  o.f = i + 1
  o.g = i + 1
  o.h = i + 1
  o.i = i + 1
  o.j = i + 1
  o.k = i + 1
  o.l = i + 1
  o.m = i + 1
  o.n = i + 1
  o.o = i + 1
  o.p = i + 1 // 16

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.k + o.l + o.m + o.n + o.o + o.p
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("constructor-assign-outside-16.js " + (Date.now() - t))
