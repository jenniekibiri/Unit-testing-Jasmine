describe("should print console statements", function(){
  
    it('console log " welcome user" ',function(){

        expect(helloWord()).toBe("welcome ann");
    })
})

describe('arithmetic test',function(){
    it("addition it should return the summation of two numbers",function () {
        expect(addition(2,2)).toEqual(4)
    })

})
