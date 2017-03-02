//PART 1
//step1 Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//var favMovies =["The Hangover","Stepbrothers","Old School", "Scarface", "Braveheart"];
//console.log(favMovies[1]);
//step2 Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//
//console.log(movies[0]);
//
//step3 Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//
//
//console.log(movies.join());
//movies.splice(2, 0, "The Patriot");
//console.log(movies.join());
//console.log(movies.length);
//step4 Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//
//delete movies[0];
//console.log(movies);
//step 5 Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//
//
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//movies[5] = "Con-Air";
//movies[6] = "The Departed";
//
//for (i = 0; i<= movies.length; i++){
//    console.log(movies[i]);
//};
//
//step 6 Now, use a for-in loop to iterate through the array and display each movie within the console window.
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//movies[5] = "Con-Air";
//movies[6] = "The Departed";
//
//for (var index in movies){
//    console.log(movies[index]);
//};
//step 7 Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//
//var movies = [];
//movies[0] = "The Hangover";
//movies[1] = "Stepbrothers";
//movies[2] = "Old School";
//movies[3] = "Scarface";
//movies[4] = "Braveheart";
//movies[5] = "Con-Air";
//movies[6] = "The Departed";
//
//for (var i in movies){
//    var y = movies.sort();
//};
//console.log(y);
//step 8 Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
// 
//Movies I like:   Movie 1  Movie 2  Movie 3 …   Movies I regret watching:   Movie 1  Movie 2  Movie 3
    //
    //var favMovies = [];
    //favMovies[0] = ["The Hangover", 1];
    //favMovies[1] = ["Stepbrothers", 2];
    //favMovies[2] = ["Old School", 3];
    //favMovies[3] = ["Scarface", 4];
    //favMovies[4] = ["Braveheart", 5];
    //favMovies[5] = ["Con-Air", 6];
    //favMovies[6] = ["The Departed", 7];
    //
    //
    //console.log("My Favorite Movies are: \n");
    //for (var i = 0; i < favMovies.length; i++){
    //     console.log( favMovies[i][1] + " " + favMovies[i][0]);
    //}
    //console.log("....\n")
    //console.log("My Favorite Movies are: \n");
    //var leastFavMovies = [["The Notebook", 1], ["Another movie", 2], ["Another least fav movie", 3]];
    //for (var i = 0; i < leastFavMovies.length; i++){
    //    console.log(leastFavMovies[i][1] + " " + leastFavMovies[i][0]);
    //};
    //
    //step 9 Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
    //
    //var favMovies = [];
    //favMovies[0] = "The Hangover";
    //favMovies[1] = "Stepbrothers";
    //favMovies[2] = "Old School";
    //favMovies[3] = "Scarface";
    //favMovies[4] = "Braveheart";
    //favMovies[5] = "Con-Air";
    //favMovies[6] = "The Departed";
    //
    //
    //var leastFavMovies = ["The Notebook", "Another movie", "Another least fav movie"];
    //
    //var movies = favMovies.concat(leastFavMovies);
    //
    //console.log(movies.sort().reverse());
    //
    //step 10 Return just the last item in the array and display it within the console window.
    //var favMovies = [];
    //favMovies[0] = "The Hangover";
    //favMovies[1] = "Stepbrothers";
    //favMovies[2] = "Old School";
    //favMovies[3] = "Scarface";
    //favMovies[4] = "Braveheart";
    //favMovies[5] = "Con-Air";
    //favMovies[6] = "The Departed";
    //
    //
    //var leastFavMovies = ["The Notebook", "Another movie", "Another least fav movie"];
    //
    //var movies = favMovies.concat(leastFavMovies).sort().reverse();
    //var lastElem = movies[movies.length -1];
    //
    //
    //console.log(lastElem);
    //step 11 Remove the previous method and this time return just the first item in the array and display it within the console window.
    //
    //var favMovies = [];
    //favMovies[0] = "The Hangover";
    //favMovies[1] = "Stepbrothers";
    //favMovies[2] = "Old School";
    //favMovies[3] = "Scarface";
    //favMovies[4] = "Braveheart";
    //favMovies[5] = "Con-Air";
    //favMovies[6] = "The Departed";
    //
    //
    //var leastFavMovies = ["The Notebook", "Another movie", "Another least fav movie"];
    //
    //var movies = favMovies.concat(leastFavMovies).sort().reverse();
    //var firstElem = movies[0];
    //
    //
    //console.log(firstElem);
//Programmatically retrieve the movies in your array that you do not like and
//    return their indices.Then, using those indices, programmatically add movies that you do like.
            //var favMovies = [];
            //favMovies[0] = "The Hangover";
            //favMovies[1] = "Stepbrothers";
            //favMovies[2] = "Old School";
            //favMovies[3] = "Scarface";
            //favMovies[4] = "Braveheart";
            //favMovies[5] = "Con-Air";
            //favMovies[6] = "The Departed";
            //
            //
            //var leastFavMovies = ["The Notebook", "Another movie", "Another least fav movie"];
            //
            //var movies = favMovies.concat(leastFavMovies).sort().reverse();
            //var dislikeMovies = [];
            //dislikeMovies[0] = movies.indexOf("The Notebook");
            //dislikeMovies[1] = movies.indexOf("Another Movie");
            //dislikeMovies[2] = movies.indexOf("Another least fav movie");
            //
            //
            //movies.splice(-1,  0,  "new movie1");
            //movies.splice(0,  1,  "new movie2");
            //movies.splice(9,  1,  "new movie3");
            //
            //console.log(movies);
            //Create two associative arrays called employee1 and employee2 respectively. Each array should have an employee id, name, title, department, and whether or not the employee is a current employee of the company.
            //Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
            //var employee1 = [];
            //employee1["id"] = 3456;
            //employee1["name"] = "Jon Kusak";
            //employee1["title"] = "Manager of Awesomeness";
            //employee1["Department"] = "Awesomeness";
            //employee1["currentEmployee"] = true;
            //
            //var employee2 = [];
            //employee2["id"] = 3386;
            //employee2["name"] = "Sarah Connery";
            //employee2["title"] = "The Lady";
            //employee2["Department"] = "Hotdog Investigation Unit";
            //employee2["currentEmployee"] = false;
            //
            //var Employees = [employee1 , employee2];
            //
            //console.log(Employees[1]["name"]);
            //Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
            //
            //
            //var employee1 = [];
            //employee1["id"] = 3456;
            //employee1["name"] = "Jon Kusak";
            //employee1["title"] = "Manager of Awesomeness";
            //employee1["Department"] = "Awesomeness";
            //employee1["currentEmployee"] = true;
            //
            //var employee2 = [];
            //employee2["id"] = 3386;
            //employee2["name"] = "Sarah Connery";
            //employee2["title"] = "The Lady";
            //employee2["Department"] = "Hotdog Investigation Unit";
            //employee2["currentEmployee"] = false;
            //
            //var Employees = [employee1 , employee2];
            //
            //for (var i = 0; i < Employees.length; i++){
            //    console.log(Employees[i]["name"]);
            //};
            //And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
            //
            //var employee1 = [];
            //employee1["id"] = 3456;
            //employee1["name"] = "Jon Kusak";
            //employee1["title"] = "Manager of Awesomeness";
            //employee1["Department"] = "Awesomeness";
            //employee1["currentEmployee"] = true;
            //
            //var employee2 = [];
            //employee2["id"] = 3386;
            //employee2["name"] = "Sarah Connery";
            //employee2["title"] = "The Lady";
            //employee2["Department"] = "Hotdog Investigation Unit";
            //employee2["currentEmployee"] = true;
            //
            //var employee3 = [];
            //employee3["id"] = 3387;
            //employee3["name"] = "Sean Connery";
            //employee3["title"] = "007";
            //employee3["Department"] = "MI6";
            //employee3["currentEmployee"] = false;
            //
            //
            //var Employees = [employee1 , employee2, employee3];
            //
            //console.log("Current employees: \n")
            //for (var i = 0; i < Employees.length; i++){
            //if(Employees[i]["currentEmployee"] === true){
            //    console.log(Employees[i]["name"]);
            //} else{
            //    console.log();
            //};
            //}
            //Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//             movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]]; 
//        Now, loop through the array and filter out and display only the movie names.You must use the filter() method and you’ ll need to filter out the names by their primitive data type.
//        //
        //var movies = [["The Departed", 1],["The Patriot", 2],["Braveheart", 3],["Waking Life", 4],["Spirited Away", 5]];
        //
        //var movieNames = movies.filter(function(item){
        //              return movies.valueOf("string") ;
        //              });
        //for (var i in movieNames){
        //console.log(movieNames[i][0]);
        //}
        //Practice with Functions (5 points)
        //Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
        //
        //function displayMessage(string){
        //    console.log(string);
        //};
        //
        //displayMessage("this is a string");
        //Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
        //
        //function calculate(x,y){
        //    return x % y;
        //}
        //calculate(2,5);
        //Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//          Employees:   ZAK  JESSICA  MARK  FRED  SALLY
        //
        //var employees =["zak", "jessica", "mark", "fred", "sally"];
        //
        //function showEmployee(name){
        //    for (var name in employees){
        //        console.log(employees[name].toUpperCase());
        //    }
        //}
        //
        //showEmployee(employees);
        //PART 2
          // rock paper scissors game
//var userChoice = window.prompt("Welcome to my rock, paper, scissors game! Choose one and battle against the computer and try to out wit him. Ready?!?! Rock...Paper...Scissors...SHOOT!").toLowerCase();
//
//
//var computerChoice = Math.random();
//
//if (computerChoice <= 1 && computerChoice >= .7) {
//    computerChoice = "rock";
//}
//else if (computerChoice >= .4 && computerChoice <= .6) {
//    computerChoice = "scissors";
//}
//else {
//    computerChoice = "paper";
//};
//
//window.alert("You chose " + userChoice)
//window.alert("The computer chose: " + computerChoice);
//
//var compare = function (uChoice, cChoice) {
//    if (uChoice == cChoice) {
//        return "It's a tie!";
//    }
//    if (uChoice === "rock") {
//        if (cChoice === "scissors") {
//            return "You win!";
//        }
//        else {
//            return "The computer wins, you lose!";
//        }
//    }
//    if (uChoice === "paper") {
//        if (cChoice === "rock") {
//            return "Congrats! you win!";
//        }
//        else {
//            if (choice2 === "scissors") {
//                return "The computer wins! You Lose!!!!";
//            }
//        }
//    };
//    if (uChoice === "scissors") {
//        if (cChoice === "rock") {
//            return "The computer chose rock and wins! You lost with scissors";
//        }
//        else {
//            if (cChoice === "paper") {
//                return "Congrats! you win, the computer loses with paper";
//            }
//        }
//    }
//};
//
//var results = compare(userChoice, computerChoice);
//window.alert(results);

//          
//calculator part
//
//var number1 = parseInt(window.prompt("Pick a number."));
//var number2 = parseInt(window.prompt("Pick another number."));
//var operation = window.prompt("What operation would you like to perform? (add, subtract, multiply, divide)");
//
//
//
//function calculate(number1, number2, operation){
//    
//   
//    
//switch(operation){
//        case "add":
//        alert(number1 + number2);
//        break;
//        case "subtract":
//        alert(number1 - number2);
//        break;
//        case "multiply":
//        alert(number1 * number2);
//        break;
//        case "divide":
//        alert(number1 / number2);
//        default:
//            alert("enter what I told you to!");
//    };
//};
//
//calculate(number1, number2, operation);
//
//
//death by javascript!
//1.   
//var string = window.prompt("Type one word and I will sort it out for you!");
//
//    function Sort(string){
//        string = string.split('').sort().join('');
//        return string;
//}
//
//window.alert(Sort(string));
//
//2.
//var string = window.prompt("Type a phrase in lowercase and let me fix it up for you.");
//
//
//function titleCase(str) {
//   var splitStr = str.toLowerCase().split(' ');
//   for (var i = 0; i < splitStr.length; i++) {
//
//       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//   }
// 
//   return splitStr.join(' '); 
//}
//
//window.alert(titleCase(string));
//
//3.
//var string = window.prompt("Type something in and let me search for the vowels.")
//
//function getVowels(str) {
//  var m = str.match(/[aeiou]/gi);
//  return m === null ? 0 : m.length;
//}
//
//window.alert(getVowels(string));
//
//4.
//var string = window.alert("Let's make you a password!");
//
//function numberGen(number){
//    var password = '';
//    var value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//    var length = 8;
//      for (var i = 0, v = value.length; i < length; ++i) {
//        password += value.charAt(Math.floor(Math.random() * v));
//    }
//    return password;
//    
//}
//
//window.alert(numberGen(string));
//
//5.
//
//var countries = ["Uruguay", "United Arab Emirates","The Dominican Republic"]
//
//var longestNameSize = 0;
//var longestName = '';
//
//function longestCountryName(str){
//   for (var i = 0; i < countries.length; i++){
//       if (countries[i].length > longestNameSize){
//           longestNameSize = countries[i].length;
//           longestName = countries[i];
//       }
//   }
//    console.log(longestName);
//}
//longestCountryName();

          
          