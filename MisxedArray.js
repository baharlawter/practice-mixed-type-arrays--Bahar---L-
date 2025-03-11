// Tasks
// Task 1: Create the Profile. Write code to create a profile array containing the
// required elements. Fill the array with data for one fictional user profile. Remember
// to include all the elements (user name, age, subscription status, user’s location,
// user’s hobbies).

const profile=[ "Jack",30, true,"Las Vegas",["basketball","reading",'swimming']];


// Task 2: Access and Log Profile Details. Use console.log() to access and display
// the following:
// ● The user’s name.
// ● The second hobby from the hobbies array.
console.log("The user's name:", profile[0]);
console.log("The users hobby:", profile[4][1]);

// Task 3: Modify the Profile. Make the following updates:
// ● Update the user’s age to a new value.
// ● Add a new hobby to the hobbies array.

profile[1]=35;
profile[4].push("teaching");


// Task 4: Display the Updated Profile. Log the entire updated profile to verify the
// changes.
console.log("The updated profile:",profile);