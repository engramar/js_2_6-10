#Prevent Object Mutation
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

#Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
  "use strict";
  return new Date();
};

#Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

#Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line


#Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

