// Question:  Given a non-empty string, return the most frequently ocurring character. If there are multiple characters with same occurrance, return an array of them.



function count(str) {
    const charCount = {}
    for(let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let maxCount = 0;
    const result = [];
    
    for(let char in charCount) {
    if(charCount[char] > maxCount) {
      maxCount = charCount[char];
      result.length = 0;
      result.push(char);
    }
    else if (charCount[char] === maxCount) {
    result.push(char);
    }
    }
    
    return result.length === 1 ? result[0] : result;
    }


    // test case 
console.log(count('abbcccc'));      // Output: 'c'
console.log(count('abbcccddd'));   // Output: ['c', 'd']