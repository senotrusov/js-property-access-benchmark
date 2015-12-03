// real	0m48.785s
// user	0m48.493s
// sys	0m0.154s

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
  i: i + 1,
  j: i + 1,
  k: i + 1,
  l: i + 1,
  m: i + 1,
  n: i + 1,
  o: i + 1,
  p: i + 1} // 16

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.k + o.l + o.m + o.n + o.o + o.p
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-16.js " + (Date.now() - t))
