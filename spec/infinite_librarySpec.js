describe("Infinite library", function(){
    var infLib = require('../infinite_library.js');
    it("0th book is length 0, 1st is length 1", function(){
        expect(infLib.bookLength(0)).toEqual(0);
        expect(infLib.bookLength(1)).toEqual(1);
    });

    it("96th book is length 2", function(){
        expect(infLib.bookLength(96)).toEqual(2);
    });

    it("finds firstBookLengthN of 2 is 96", function(){
        expect(infLib.firstBookLengthN(2)).toEqual(96);
    });

    it("generates book 96 and it is two mezmorizing spaces", function(){
        expect(infLib.generateBook(96)).toEqual("  ");
    });

    it("can generate a book over 9 characters long", function(){
    });

    it("gets the correct index for a book comprised of two spaces", function(){
        expect(infLib.getIndex("  ")).toEqual(96);
    })

});

