describe("Cartesian", function(){
    var cart = require('../src/cartesian.js');
    it("can get the first product of ['a','b'], ['x','y']", function(){
        expect(cart.cartesianN([['a', 'b'], ['x','y']], 0)).toEqual(['a', 'x']);
    });

    it("can get the final product of ['a','b'], ['x','y']", function(){
        expect(cart.cartesianN([['a', 'b'], ['x','y']], 3)).toEqual(['b', 'y']);
    });

    it("can repeat a simple set", function(){
        expect(cart.cartesianN_repeatSameSet(['a', 'b'], 3, 1))
            .toEqual(['a', 'a', 'b']);
    });
});
