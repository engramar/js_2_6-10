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



#Set Default Parameters for Your Functions
#Use the Rest Parameter with Function Parameters
