// real	0m4.528s
// user	0m4.409s
// sys	0m0.073s

"use strict"

var t = Date.now()
var r = 0
var i = 0
var length = 10000000 * 10

function F (a, b, c, d, e, f, g, h, i, j){
  this.a = i + 1
  this.b = i + 1
  this.c = i + 1
  this.d = i + 1
  this.e = i + 1
  this.f = i + 1
  this.g = i + 1
  this.h = i + 1
  this.i = i + 1
  this.j = i + 1 // 10
}

function f(){
  var o = new F(i, i, i, i, i, i, i, i, i, i)
  o.x = i + 1
  o.y = i + 1 // +2

  r += o.a + o.b + o.c + o.d + o.e + o.f + o.g + o.h + o.i + o.j + o.x + o.y
}

for(; i < length; i++){
  f()
}

console.log(r)
console.log("constructor-assign-inside-10-and-outside-02.js " + (Date.now() - t))
