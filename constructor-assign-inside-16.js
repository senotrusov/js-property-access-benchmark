// real	0m5.369s
// user	0m5.294s
// sys	0m0.051s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

function F (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p){
  this.a = i + 1
  this.b = i + 1
  this.c = i + 1
  this.d = i + 1
  this.e = i + 1
  this.f = i + 1
  this.g = i + 1
  this.h = i + 1
  this.i = i + 1
  this.j = i + 1
  this.k = i + 1
  this.l = i + 1
  this.m = i + 1
  this.n = i + 1
  this.o = i + 1
  this.p = i + 1 // 16
}

function f(){
  var o = new F(i, i, i, i, i, i, i, i, i, i, i, i, i, i, i, i)

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.k + o.l + o.m + o.n + o.o + o.p
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("constructor-assign-inside-16.js " + (Date.now() - t))
