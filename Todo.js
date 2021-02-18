function helloWord(name){
return "welcome ann"
}
function addition(num1,num2){
    return num1+num2
}
function  multiply(num1,num2){
    return num1*num2
}
function stringConv(inputString){
    return inputString.toUpperCase()
}
 var expectexam = {  
   exampleoftrueFalse: function (num) {  
      if(num < 10)    
         return true;  
      else   
         return false;  
   },  
};

var Person = function() {}; 

Person.prototype.sayHelloWorld = function(dict) { 
   return dict.hello() + " " + dict.world(); 
}; 

var Dictionary = function() {}; 

Dictionary.prototype.hello = function() { 
   return "hello"; 
}; 

Dictionary.prototype.world = function() { 
   return "world"; 
}; 