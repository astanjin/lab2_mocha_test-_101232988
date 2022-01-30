var calc= require('../app/calculator.js')
var assert = require('assert')
var mocha = require('mocha')
var expect = require("chai").expect;


 describe("add(13,6) expected result 19", () => {
    it("add", () => {
      var a = calc.add(13,6);
      expect(a).to.equal(19);
    })
})

  describe("add", function() {

    it("add(13,6) expected result 22", function() {
      assert.equal(calc.add(13,6), 22);
    });
  
  });
  /////////////////////
   describe("sub(4, 2) expected result 2", () => {
    it("sub", () => {
      var b= calc.sub(4,2);
      expect(b).to.equal(2);
    })
})

  describe("sub", function() {

    it("sub(4,2) expected result 7", function() {
      assert.equal(calc.sub(4,2), 7);
    });
  
  });
  /////////////////////
     describe("div(8,8) expected result 1", () => {
    it("div", () => {
      var c= calc.div(8,8);
      expect(c).to.equal(1);
    })
})


  describe("div", function() {

    it("div(8,8) expected result 0", function() {
      assert.equal(calc.div(8, 8), 0);
    });
  
  });
  ////////////////////////////
       describe("mul(9,2) expected result 18", () => {
    it("div", () => {
      var d= calc.mul(9,2);
      expect(d).to.equal(18);
    })
})



  describe("mul", function() {

    it("mul(9,2) expected result 111", function() {
      assert.equal(calc.mul(9,2), 111);
    });
  
  });