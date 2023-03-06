'use strict';
var name= prompt("please inter your name");
var gender = prompt("what is yout gender ? ");
var userAge = prompt("please inter your age");

function checkAge (){
    if (userAge <= 0 ){
        alert("you'r under the allowed age")
        };
    }

    let answers =[];

function askQuestions (arr){
    let livingInjordan = prompt("do you live in jordan ?");
    let background = prompt("do you have any information about programming");
    let loveProgramming = prompt("do you love programming ?");
    arr.push(livingInjordan,background,loveProgramming);
    
    }

function check(arr){
        for (let i=0; i<arr.length; i++ ){
           if (arr[i]==""){
            arr[i]="invalid";
           }
    }
}
 

function showingInConsole(arr){
    for (let i=0; i<arr.length; i++ ){
        console.log(arr[i])
}
}

    function welcomingMessage (){
        let answer = confirm("Do you want to skip welcoming message ? ");
    
        if(answer == false && gender == "male"){
            alert("Welcome Mr."+name) 
        }
        else if(answer == false && gender == "female"){
            alert("Welcome Ms."+name)
        } else if (answer == false){
            alert("Welcome")
        };
        }


checkAge();
askQuestions(answers); 
check(answers); 
showingInConsole(answers);  
welcomingMessage();




    
    


