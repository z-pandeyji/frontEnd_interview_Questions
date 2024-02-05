//Question: Create a function that return a *copy* that has all undefined replaced with null.

function undefinedToNull(obj) {
    //checking obj params is undefined or not.
    if(obj === undefined) {
      return null;
    }
    // checking type of params
      if (typeof obj !== 'object' || obj === null) {
          return obj;
      }
      // checking the obj is array or not, If obj is array then map() creates new array. 
      //Then I used the recursive call to the function. 
       if (Array.isArray(obj)) {
          return obj.map(item => undefinedToNull(item));
      }
      // Object.keys creates an array of all the property names(key) of the Param(Obj),
      // reduce() function used to transform the object.
      //acc[key] = obj[key] === undefined ? null : undefinedToNull(obj[key]);: For each key in the object:
      // If the value of this key in obj is undefined (obj[key] === undefined), set the value of this key in the accumulator object acc to null.
      // If it's not undefined, apply the function undefinedToNull() to this value and set the result as the new value for this key in acc.
      // return acc;: After processing all keys, return the accumulator object acc. This is your new object with undefined values replaced with null.
     return Object.keys(obj).reduce((acc, key) => {
          acc[key] = obj[key] === undefined ? null : undefinedToNull(obj[key]);
          return acc;
      }, {});
  }