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
  p: i + 1, // 16
  q: i + 1,
  r: i + 1,
  s: i + 1,
  t: i + 1,
  u: i + 1,
  v: i + 1,
  w: i + 1,
  x: i + 1,
  y: i + 1,
  z: i + 1,
  z27: i + 1,
  z28: i + 1,
  z29: i + 1,
  z30: i + 1,
  z31: i + 1,
  z32: i + 1
  }

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.k + o.l + o.m + o.n + o.o + o.p +
       o.q + o.r + o.s + o.t + o.u + o.v + o.w + o.x + o.y + o.z + o.z27 + o.z28 + o.z29 + o.z30 + o.z31 + o.z32
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("object-literal-32.js " + (Date.now() - t))
