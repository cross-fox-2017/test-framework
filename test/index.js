const should = require('chai').should()
const exe = require('../index')
var add1 = exe.add(1,2)
var addEmpty = exe.add()
var addString = exe.add("1",2)
var sub1 = exe.substract(1,2)
var subEmpty = exe.substract()
var subString = exe.substract("1",2)
var mul1 = exe.multiply(1,2)
var mulEmpty = exe.multiply()
var mulString = exe.multiply("1","2")
var div1 = exe.divide(1,2)
var divEmpty = exe.divide()
var divString = exe.divide("1","2")
var root1 = exe.root(4,2)
var rootEmpty = exe.root()
var rootString = exe.root("1","2")
var exp1 = exe.exponent(1,2)
var expEmpty = exe.exponent()
var expString = exe.exponent("1","2")

describe('Test fungsi matematika', function() {
  describe('test fungsi pertambahan', function() {
    describe('test penjumlahan', function() {
      it('seharusnya mengembalikan nilai 3', function() {
        add1.should.equal(3)
      });
    });
    describe('test tipe data penjumlahan', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        add1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        addEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        addString.should.equal('parameter harus angka')
      });
    });
  });
  describe('test fungsi pengurangan', function() {
    describe('test pengurangan', function() {
      it('seharusnya mengembalikan nilai -1', function() {
        sub1.should.equal(-1)
      });
    });
    describe('test tipe data pengurangan', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        sub1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        subEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        subString.should.equal('parameter harus angka')
      });
    });
  });
  describe('test fungsi perkalian', function() {
    describe('test perkalian', function() {
      it('seharusnya mengembalikan nilai 2', function() {
        mul1.should.equal(2)
      });
    });
    describe('test tipe data perkalian', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        mul1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        mulEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        mulString.should.equal('parameter harus angka')
      });
    });
  });
  describe('test fungsi pembagian', function() {
    describe('test pembagian', function() {
      it('seharusnya mengembalikan nilai 0.5', function() {
        div1.should.equal(0.5)
      });
    });
    describe('test tipe data pembagian', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        div1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        divEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        divString.should.equal('parameter harus angka')
      });
    });
  });
  describe('test fungsi akar', function() {
    describe('test akar', function() {
      it('seharusnya mengembalikan nilai 2', function() {
        root1.should.equal(2)
      });
    });
    describe('test tipe data akar', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        root1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        rootEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        rootString.should.equal('parameter harus angka')
      });
    });
  });
  describe('test fungsi perpangkatan', function() {
    describe('test perpangkatan', function() {
      it('seharusnya mengembalikan nilai 1', function() {
        exp1.should.equal(1)
      });
    });
    describe('test tipe data perpangkatan', function() {
      it('seharusnya mengembalikan tipe data number', function() {
        exp1.should.be.a('number')
      });
    });
    describe('test parameter kosong', function() {
      it('seharusnya mengembalikan parameternya harus diisi', function() {
        expEmpty.should.equal('parameternya harus diisi')
      });
    });
    describe('test parameter bukan angka', function() {
      it('seharusnya mengembalikan parameter harus angka', function() {
        expString.should.equal('parameter harus angka')
      });
    });
  });
});
