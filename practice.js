/* 1) Write an arrow function that will take 3 parameters, will multiply
   the parameters and will return the result.
 */

const mul = (a, b, c) => {
    const result = a * b * c;
    return result;
}
const finalResult = mul(5, 3, 6);
console.log(finalResult);



/*
   2) Write the following sentence in three lines and print the result:
    I am a web developer. I love to code. I love to eat biriyani.
*/

const makeSentence = `I am a web developer.
I love to code.
I love to eat biriyani`;
console.log(makeSentence);


/*
    3) Write an arrow function that will take 2 parameters: One parameter
    will come from you and the other parameter will be a default
    parameter. Add these two parameters and return the result.
*/

const add = (x, y = 0) => {
    const result = x + y;
    return result;
}
const sum = add(20);
console.log(sum);


/*
    Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
    name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result
*/

const arrayWithArrowFunction = () => {
    const addNewFriendsName = [];
    const friendsName = ['upoma', 'upo', 'upi', 'tahnu'];
    if (friendsName.length % 2 === 0) {
        addNewFriendsName.push('Tahnuma', 'afrin');
        return addNewFriendsName.length;
    } else {
        return friendsName;
    }
}
const friendsArray = arrayWithArrowFunction();
console.log(friendsArray);


/*
    Write an arrow function where it will do the following:
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements
*/

const avg = () => {
    const num = [];
    for (let i = 0; i < 10; i++) {
        num.push(Math.pow(i, 2));
    }
    const sum = num.reduce(function (a, b) { return a + b; }, 0);
    const average = sum / num.length;
    return average;
}
const numArray = avg();
console.log(numArray);


/*
    Write an arrow function where it will do the following:
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the
    result
*/

const maximumNumber = () => {
    const array1 = [3, 4, 5, 6, 7, 34, 56];
    const array2 = [45, 34, 45, 56, 67];
    const newArray = [...array1,...array2];
    const findMax = Math.max(...newArray);
    return findMax;
}
const getFinalResult = maximumNumber();
console.log(getFinalResult);