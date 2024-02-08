// Question: Find the number which is not repeating in the array ?

function findSingle(arr) {
    const nonrepeat = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return Number(nonrepeat);
    // return nonrepeat[0];
  }