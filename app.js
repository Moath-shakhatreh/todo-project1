function askingQuestion (){
    let livingInjordan = prompt("do you live in jordan ?");
    if (livingInjordan=="")
    {
    livingInjordan="invalid";
    };
    let background = prompt("do you have any information about programming");
    if(background==""){
        background="invalid";
    };
    let loveProgramming = prompt("do you love programming ?");
    if(loveProgramming==""){
        loveProgramming="invalid";
    };
    let answers = [livingInjordan,background,loveProgramming];
        for (let i=0; i<answers.length; i++ ){
            console.log(answers[i])
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

        

var name= prompt("please inter your name");
var gender = prompt("what is yout gender ? ");
var userAge = prompt("please inter your age");

if (userAge <= 0 ){
    alert("you'r under the allowed age")
    };

askingQuestion ();    

welcomingMessage();



    
    


