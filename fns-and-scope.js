//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name1) {
    if (name1 === "Tyler") {
      return true;
    } else {
      return false;
    }
  }

  // var testName = name;
  // var isTrue = isTyler(testName);
  // alert("Name was " + testName + ": " + isTrue);
  // console.log("Name was: " + testName + ": " + isTrue);
  //


//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  // function getName() {
  //   var retName = prompt("What is your name? ");
  //   return retName;
  // }
  // var userName = getName()
  // alert("Name was " + userNameuserName);
  // console.log("Name was " + userName);


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    alert("Welcome " + userName);
  }

  // welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //  Argument is passed to the function call.
  //  Parameter is the name of the variable in the function declaration


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //  falsey values are:  NaN, "", undefined, null, 0, false

  //  if(falsey) {}





//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  // function myName(){
  //   return "Tom";
  // }




//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = function (){
    return "Tom";
  }


//Now alert the result of invoking newMyName

  // alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  var outerFn = function (){
    return "Tom T";
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.

  var test = innerFn;
  alert(test);
