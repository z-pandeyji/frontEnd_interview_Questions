// Question:  Given two arrays, find the intersection(items occur in both arrays)
//1-  arrays are not sorted, and might have duplicates.
// 2- you can modify the arrays
//3-  you can return the items in any order, but without duplicates

function getIntersection(arr1, arr2) {
    // create a Set for arr1;
    let resultSet = new Set(arr1);
    // create a blank array for inserting the duplicates array
    let interSection = [];
    //loop through arr2 and checks the arr1 has the elements or not
    arr2.forEach(element => {
      if(resultSet.has(element) && !interSection.includes(element)) {
        interSection.push(element);
      }
    });
    return interSection;
    }