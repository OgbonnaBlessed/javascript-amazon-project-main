import { addToCart, cart, loadFromStorage } from "../../data/cart";

describe('test suite: addToCart', function() {
   it('adds an existing product to the cart', function() {
    
   });
   
   it('adds a new product to the cart', function() {
    spyOn(localStorage, 'getItem').and.callFake(function() {
        return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
   });
});