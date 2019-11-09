console.log("Lesson 18");
let a = +prompt("Please, enter the first number", " ");
let b = +prompt("Please, enter the second number", " ");

let sum = (a + b);
alert( sum.toFixed(2) );


function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


alert( sum() ); 
alert( sum(1) ); 
alert( sum(1, 2) ); 
alert( sum(1, 2, 3) );
alert( sum(1, 2, 3, 4) ); 



function getWeekDay(date) {
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days[date.getDay()];
  }  

    let date = new Date(2010, 0, 4);

     alert( getWeekDay(date) ); 