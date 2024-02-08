# FrontEnd Coding Interview Preparation

## JavaScript Questions

### Question 1: Create a function that return a *copy* that has all undefined replaced with null.

Description: One of the differences between null and undefined is how they are treated differently in JSON.stringify().
JSON.stringify({a: null})      // '{"a":null}'
JSON.stringify({a: undefined}) // '{}'

JSON.stringify([null])         // '[null]'
JSON.stringify([undefined])    // '[null]'

Solution: Check the UndefinedToNull.js File in the javascript Folder.

### Question 2: Creating a function convert the roman number into the integer numbers & vice-versa.

Description: subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.
Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1000

Solution: Check the RomanToNumber.js & NumberToRoman.js in javascript Folder.

### Question 3: Given two arrays, find the intersection(items occur in both arrays).

Description: Given two arrays, find the intersection(items occur in both arrays)
1- Arrays are not sorted, and might have duplicates.
2- You can modify the arrays
3- You can return the items in any order, but without duplicates

Solution: Check the arrayIntersection.js in javascript folder.

### Question 4: Compare 2 semver strings.

Description: 
compare('12.1.0', '12.0.9')
1, meaning first one is greater

compare('12.1.0', '12.1.2')
-1, meaning latter one is greater

compare('5.0.1', '5.0.1')
0, meaning they are equal.

Solution: Check the CompareSemVerString.js in javascript folder.

### Question 5: Find the number which is not repeating in the array.

Description: const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1

Solution: Check the findSingleNonRepeatNumberInArray.js in javascript folder.
...

Total JavaScript Questions Solved: 6

## CSS Questions

### Question 1: Center a div.

Description: Create a container with width and height and center a div.

Solution: Check the center_a_div.html in css folder. The solution is implemented using the flexbox.

### Question 1: fill out to width:100px, but stretch to fill the available space and shrink if not enough, then stack them if needed

Description: On Changing the width the layout should be responsive.

Solution: Check the flex1.html in css folder. The solution is implemented using the flexbox.