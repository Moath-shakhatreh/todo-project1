var name= prompt("please inter your name");
var gender =prompt("what is yout gender ? ");
var userAge = prompt("please inter your age");

if (userAge <= 0 ){
    alert("you'r under the allowed age")
    };



let answer = confirm("Do you want to skip welcoming message ? ");
if(answer == false && gender == "male"){
    alert("Welcome Mr."+name) 
}
else if(answer == false && gender == "female"){
    alert("Welcome Ms."+name)
} else if (answer == false){
    alert("Welcome")
}

