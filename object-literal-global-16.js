// real	0m2.568s
// user	0m2.530s
// sys	0m0.031s

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
  i: i + 1, // 9
  j: i + 1,
  k: i + 1,
  l: i + 1,
  m: i + 1,
  n: i + 1,
  o: i + 1,
  p: i + 1 // 16
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
  o.j = i + 1
  o.k = i + 1
  o.l = i + 1
  o.m = i + 1
  o.n = i + 1
  o.o = i + 1
  o.p = i + 1 // 16

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-global-16.js " + (Date.now() - t))
