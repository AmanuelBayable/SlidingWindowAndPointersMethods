
//create a function that detects if a duplicate exist from several inputs using multiple pointers
//inputs [1,2,3,'a']
//output false no duplicate
//how
//take in all values of argument, sort them, after sorting them use two pointer to over the sorted array, if thier exist an instance 
//when the value of the pointers are equal, then return true(duplicate exist) else return false(does not exist), loop till you find a duplicate

function areThierDuplicatesMultiplePointers(...args) {
    var sorted = args.sort();
    console.log(sorted);
    var pointerA = 0;
    var pointerB = 1;
    while (pointerB <= sorted.length) {
        if (sorted[pointerA] === sorted[pointerB]) {
            console.log("dupliate");
            return true;
        }
        pointerA++;
        pointerB++;
    }
    console.log("No dupliate");
    return false;

}


//input
//[1,2,3,3,3,3]
//output
//3
//define
//create a function that takes in a sorted array for input, uses two pointers that go over the array, first array starts at point 0
//second array starts at point 1 ,the two compare thier values, if thier values are equal pointer B moves to the next value,
//if the values are diffrent meaning pointer b reaches a new value, pointer a is moved on point up and the value is replaced with pointer B value,
// when pointer b reaches the end we take the position of point a and add 1 to know how many unique values exist  
//how


function countUnqiueValuesTweakArray(arr) {
    //doSomething
    var pointerA = 0;
    var pointerB = 1;

    while (pointerB <= arr.length) {
        if (arr[pointerA] !== arr[pointerB]) {
            pointerA++;
            arr[pointerA] = arr[pointerB];
        }
        pointerB++;
    }
    return (pointerA);

}



function findSum(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === 0) {
            console.log(arr[right] + "won")
            return true;
        }
        if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
}
//findSum([-3, -2, 1, 2])

//countUnqiueValuesTweakArray([])

//areThierDuplicatesMultiplePointers(4, 2, 5, 'a', 'c', 'b' ,'a')

//write a function that determines the average of Pair from a given sorted array of numbers
//input [1,2,4,5,7,8],3.5
//output [2,5]
//define
// in order for 1=6,2=5,4=3,5=2,7=1
//how
//create two pointers leftPointer and rightPointer, multiply average value by 2, subtract that from leftPointer value,
//store the remainder, comapre remaidner with rightPointer value, if rightPointer value is higher, move pointer to left,repeat till
//you find remainder value or remainder value is greater than right value, if greater,move left to right, then calculater Remainder and compare again
//remainder and right pointer value

function averagePair(arr, avg) {
    var leftPointer = 0;
    var rightPointer = arr.length - 1;
    var reminder = avg * 2 - arr[leftPointer];


    while (leftPointer < rightPointer) {
        if (reminder === arr[rightPointer]) {
            console.log(arr[rightPointer] + " is working")
            return true
        }
        if (reminder < arr[rightPointer]) {
            rightPointer--;

        } else if (reminder > arr[rightPointer]) {
            leftPointer++;
            reminder = avg * 2 - arr[leftPointer];
        }
    }
    console.log("couldnt find a pair");
}

//averagePair([1, 2, 3], 2.5)

//wirte a program that takes in two strings, finds the second string in the first string without the orders changine
//input
//[sing][siingi]
//output true
//how
//create pointers for small value and assign them to the first two char, use two pointers in the bigger array and search with pointerA for firstValue, if you find first value 
//find second value using second pointer, once you found second value, 
//create smallPointerA for small array, assign them to the first char in small array
//create bigPointerA for big array, assign bigPointerA to look for smallPOinterA value (while length), if found move smallPointer and again (automated) 
// repeat to match bigPOinterA value to smallPointerA value. If smallPointerA


//define
//create a function that takes in an array of numbers and tells you how many unique characters thier are
//input
//[1,2,3,3,4]
//output
//4
//how
//assing two pointers next to each other that start from the left 
//compare pointer one value to pointer two value,
//if the values are the same, move second pointer one step to the right, and compare
//if values are the same repeat
//if values are diffirent add one to var counter, move pointer a to pointer b value and move pointer b to the right
//if value is the same move pointer , if value diff add to counter and move pointer a to pointer b location


function countUniqueValues(arr) {
    var pointerA = 0
    var pointerB = 1;
    var counter = 1;
    while (pointerB + 1 <= arr.length) {
        if (arr[pointerA] === arr[pointerB]) {
            pointerB++;
        } else if (arr[pointerA] !== arr[pointerB]) {
            pointerA = pointerB;
            counter++;
            pointerB++
        }
    }
    console.log(counter);
}

//countUniqueValues([1,1,1,1,2])

function subSequence(small, big) {
    //doSomething
    smallArray = small.split("");
    bigArray = big.split("");
    console.log(smallArray);
    console.log(bigArray);
    var smallPointer = 0;
    var bigPointer = 0;

    while (bigPointer < (bigArray.length)) {
        if (smallArray[smallPointer] === bigArray[bigPointer]) {
            console.log("found " + smallArray[smallPointer])
            smallPointer++;
        }
        bigPointer++;
        console.log("looking for " + smallArray[smallPointer])

        if (smallArray[smallArray - 1] === bigArray[bigPointer]) {
            console.log("found everything");
            return true;
        }
    }
    console.log("couldnt find " + smallArray[smallPointer])

}

//subSequence("car", "cstar")

//write a function that get the hgihest sum of x numbers, x being an input, from the array of numbers also inoutted
//input
//([100,200,300,10,20,1000,1000,10],3)

//output [20,1000,1000]
//how  
//lets create a one pointer max evaluoatr

function maxSubArraySum(arr, x) {
    //doSomething
    var max = 0
    var tempSum = 0;
    var maxSum = 0;
    var mover = 0;
    console.log(x + "is x")
    console.log(arr.length + "is length")
    console.log(arr.slice(mover, x + mover));

    while ((mover + x) <= arr.length) {
        tempSum = arr.slice(mover, x + mover).reduce((a, b) => a + b, 0);
        console.log(tempSum)
        if (max < tempSum) {
            max = tempSum
        }
        mover++;
    }
    console.log(max + " this is max");
    return max;
}

//maxSubArraySum([100,200,300,400], 2)

//write a function that takes in an array of integers and a number , then finds the minimum subarray that would yield a result equal or
//greater than the number inputted

//input
// [1,2,3,3],8
//output
// [2,3,3]
//how
//windowSize changes after going over all the values at the current windowSize
function minSubArrayLen(arr, num) {
    //doSomething
    var windowStart = 0;
    var windowLength = 1;

    while (windowStart + windowLength <= arr.length) {
        if (num <= (arr.slice(windowStart, windowLength + windowStart).reduce((a, b) => a + b, 0))) {
            return (windowLength);
        }

        if ((windowStart + windowLength) === arr.length) {
            windowLength++
            windowStart = 0;
        }
        windowStart++;
    }
    if (arr.reduce((a, b) => a + b, 0) < num) {
        return 0;
    }
}

//minSubArrayLen([1, 2, 3, 6, 11, 13, 17], 47)


//write a function that returns the longest string that doesnt repeat a char
//input rithmschool
//output 7
//how
//window

//
//
//reucrsion

//write a function that prints fizz for multiple of 3 and buzz for multiple of 5 and fizzbuzz for multiples of 15 from that numbers 1-100

//input
//15
//output
//3fizz
//5buzz
//9fizz
//10buzz
//12fizz
//15fizzbuzz

//how

//run a forloop with x going to desired limit and for every x if x is divisible by 3 and not div by 5 print fizz
//if divide by 5 and not by 3 print buzz
//if divid by both 5 and  print fizzbuzz

function fizzbuzz(num) {
    var x = 0;
    while ( x <= num) {
        if (x % 3 === 0 && x % 5 !== 0) {
            console.log(x + " is a fizz")
        } else if (x % 5 === 0 && x % 3 !== 0) {
            console.log(x + " is a buzz")
        } else if (x % 5 === 0 && x % 3 === 0) {
            console.log(x + " is a fizzbuzz")
        }
        x++
    }
}

fizzbuzz(100)