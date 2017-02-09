const assert = require('assert')
const exe = require('../index')
//tambah
assert.equal(exe.add(1,2),3)
assert.notEqual(exe.add(1,2),4)
assert.strictEqual(exe.add(1,2),3)
assert.equal(exe.add(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.add(),"isi parameternya")
//kurang
assert.equal(exe.substract(1,2),-1)
assert.notEqual(exe.substract(1,2),4)
assert.strictEqual(exe.substract(1,2),-1)
assert.equal(exe.substract(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.substract(),"isi parameternya")

//kali
assert.equal(exe.multiply(1,2),2)
assert.notEqual(exe.multiply(1,2),4)
assert.strictEqual(exe.multiply(1,2),2)
assert.equal(exe.multiply(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.multiply(),"isi parameternya")

//bagi
assert.equal(exe.divide(1,2),0.5)
assert.notEqual(exe.divide(1,2),4)
assert.strictEqual(exe.divide(1,2),0.5)
assert.equal(exe.divide(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.divide(),"isi parameternya")

//akar
assert.equal(exe.root(4,2),2)
assert.notEqual(exe.root(4,2),4)
assert.strictEqual(exe.root(4,2),2)
assert.equal(exe.root(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.root(),"isi parameternya")

//pangkat
assert.equal(exe.exponent(1,2),1)
assert.notEqual(exe.exponent(1,2),4)
assert.strictEqual(exe.exponent(1,2),1)
assert.equal(exe.exponent(1),"parmeternya kurang 1")//negative test case
assert.equal(exe.exponent(),"isi parameternya")
