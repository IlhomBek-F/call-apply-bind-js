var user = { name: "John Doe" };

var myName = function (n) {
  return n + this.name;
};

/* (functionname.call(objectname, functionarguments))    */
console.log(myName.call(user, "My name is ")); // result ===> My name is John Doe;

// ------------>>>>>>> ANOTHER EXAMPLE FOR CALL FUNCTION <<<<<<<------------\\

var number = { num: 2 };

var addNumber = function (a) {
  return this.num + a;
};

var cons = addNumber.call(number, 3);
console.log(cons); // result ===> 5;

// Apply function is the same like call function!

var nums = { num: 5 };

var arr = [1, 2, 3];

var addNum = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(addNum.apply(nums, arr)); // result ==> 11

// Bind function a little bit different;

var number = { num: 6 };

var addNumber = function (a, b, c) {
  return this.num + a + b + c;
};

var add = addNumber.bind(number);

var showAdd = add(4, 2, 3);

console.log(showAdd); // result ==> 15

// ------------>>>>>>> CALL APPLY BIND <<<<<<<------------\\

var object = { property: "Value" };

var funnctionName = function (arg1, arg2, arg3 /* and so on... */) {
  // return something...
};

// functionname.call(object, arg1,arg2,arg3) ==> Call function;

// functionname.apply(object, [arg1,arg2,arg3]) ==> Apply function;

/* 
var bound = functionname.bind(object);
bound(arg1,arg2,arg3) ==> Bind function
*/
