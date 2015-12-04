// node --allow-natives-syntax enforce-fast-properties.js

"use strict"

var o = {}
o.p1 = 1
o.p2 = 1
o.p3 = 1
delete o.p2

console.log(%HasFastProperties(o))

var F = function () {}
F.prototype = o

console.log(%HasFastProperties(o))

delete F.prototype.p3

console.log(%HasFastProperties(o))
