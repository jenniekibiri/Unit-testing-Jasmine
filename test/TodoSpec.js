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

describe('Boolean operations',function(){
    it("should return true or false",function () {
       expect(expectexam.exampleoftrueFalse(7)).toBeTruthy(); 
       
    })

})
// example of inbuilt matchers
// toBe,toEqual
/**
 * custom matchers
 * you create custom matchers
 * but they have to be called before any spec in the suite is executed
*/
//a customer matcher to validate age
describe('This custom matcher example', function() {
   
   beforeEach(function() { 
      // We should add custom matched in beforeEach() function. 
      jasmine.addMatchers ({ 
         validateAge: function() { 
            return {    
               compare: function(actual,expected) {
                  var result = {}; 
                  result.pass = (actual >= 13 && actual  <= 19)
                  result.message = 'sorry u are not a teen ';
                  return result; 
               }   
            };   
         }    
      });    
   }); 
    
   it('Lets see whether u are teen or not', function() { 
      var myAge = 13; 
      expect(myAge).validateAge();         
   });   
    
   it('Lets see whether u are teen or not ', function() { 
      var yourAge = 18;
      expect(yourAge).validateAge();  
   });
});








