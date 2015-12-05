// real	0m2.678s
// user	0m2.640s
// sys	0m0.031s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

var F
eval("\
F = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p){\
  this.a = i + 1;\
  this.b = i + 1;\
  this.c = i + 1;\
  this.d = i + 1;\
  this.e = i + 1;\
  this.f = i + 1;\
  this.g = i + 1;\
  this.h = i + 1;\
  this.i = i + 1;\
  this.j = i + 1;\
  this.k = i + 1;\
  this.l = i + 1;\
  this.m = i + 1;\
  this.n = i + 1;\
  this.o = i + 1;\
  this.p = i + 1;\
  this.q = i + 1;\
  this.r = i + 1;\
  this.s = i + 1;\
  this.t = i + 1;\
  this.u = i + 1;\
  this.v = i + 1;\
  this.w = i + 1;\
  this.x = i + 1;\
  this.y = i + 1;\
  this.z = i + 1;\
  this.z27 = i + 1;\
  this.z28 = i + 1;\
  this.z29 = i + 1;\
  this.z30 = i + 1;\
  this.z31 = i + 1;\
  this.z32 = i + 1;\
}\
")

function f(){
  var o = new F(i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i)

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.k + o.l + o.m + o.n + o.o + o.p +
       o.q + o.r + o.s + o.t + o.u + o.v + o.w + o.x + o.y + o.z + o.z27 + o.z28 + o.z29 + o.z30 + o.z31 + o.z32
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("constructor-assign-inside-32-eval.js " + (Date.now() - t))
