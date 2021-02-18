describe("should print console statements", function(){
  
    it('console log " welcome user" ',function(){

        expect(helloWord()).toBe("welcome ann");
    })
})

describe('arithmetic test',function(){
    it("addition it should return the summation of two numbers",function () {
        expect(addition(2,2)).toEqual(4)
    })
it("it should multiply two number",function(){
    expect(multiply(9,9)).toBe(81)
})
})
describe('String operations',function(){
    it("should convert a string to uppercase",function () {
        console.log(stringConv('hello'))

        expect(stringConv('hello my name is jenny')).toEqual('HELLO MY NAME IS JENNY')
    })

})