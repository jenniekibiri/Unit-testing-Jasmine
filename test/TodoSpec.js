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



describe("Different Methods of Expect Block",function () { 
   it("Example of  toBeCloseTo()", function () { 
      expect(12.34).toBeCloseTo(12.3,1);
   });
}); 


//spies
describe("Example Of jasmine Spy using spyOn()", function() { 
  
   it('uses the dictionary to say "hello world"', function() { 
      var dictionary = new Dictionary; 
      var person = new Person; 
		
      spyOn(dictionary, "hello");  // replace hello function with a spy 
      spyOn(dictionary, "world");  // replace world function with another spy 
		
      person.sayHelloWorld(dictionary);
      expect(dictionary.hello).toHaveBeenCalled();  
      // not possible without first spy 
  
      expect(dictionary.world).toHaveBeenCalled();  
      // not possible withoutsecond spy 
   }); 
});

//spyon 
//callthrough- call the actual function
//return value - make the spied function return a fixed function
//call fake -- not only does it return a value but also allow to replace the function
// https://scriptverse.academy/ 
