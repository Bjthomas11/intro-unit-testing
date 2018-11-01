const expect = require("chai").expect;

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function(){
    it("should return fizz-buzz for multiples of 15", function(){
        [30].forEach(function(input){
            expect(fizzBuzzer(input)).to.be.equal("fizz-buzz");
        });
    });

    it("should produce error if input is not a number", function(){
        const badInputs = ["dog", false];
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});