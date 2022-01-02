/* Submit function is called in quiz1.html (line 99) When the user will press the submit button*/ 
function submit(){ 
    var c=0;/*initialization of the counter for the correct answers */ 
    /* each variable below is initialized with 1 of 4 values that are given in the quiz1.html(in every div section), based on the preference of the user*/ 
    /* each variable can get values {a,b,c,d}*/
    var answer1=document.quiz.question1.value;
    var answer2=document.quiz.question2.value;
    var answer3=document.quiz.question3.value;
    var answer4=document.quiz.question4.value;
    var answer5=document.quiz.question5.value;
    var answer6=document.quiz.question6.value;
    var flag=false; /* initialization of flag with false value. In case the user has answered one of the six questions that we have in quiz1.html
    the message with his score and the repeat button should be displayed*/

    /* In every if's first case that we see is the correct answer of the corresponding question, so the counter should be increased by 1
        else if the user has chosen a wrong answer our flag variable gets the true value */
    if (answer1=="c"){ 
        c++;
    }else if(answer1=="b" || answer1=="a" || answer1=="d")
    {
        flag = true;
    }

    if (answer2=="d"){
        c++;
    }else if(answer2=="a" || answer2=="c" || answer2=="b")
    {
        flag = true;
    }

    if (answer3=="c"){
        c++;
    }
    else if(answer3=="a" || answer3=="b" || answer3=="d")
    {
        flag = true;
    }

    if (answer4=="a")
    {
        c++;
    }
    else if(answer4=="d" || answer4=="b" || answer4=="c")
    {
        flag = true;
    }
    
    if (answer5=="d"){
        c++;
    }
    else if(answer5=="a" || answer5=="b" || answer5=="c")
    {
        flag = true;
    }
    if (q6=="b"){
        c++;
    }
    else if(answer6=="a" || answer6=="d" || answer6=="c")
    {
        flag = true;
    }
   
    if(flag == true || c!=0){ /* If user has chosen at least one answer in one question or he has at least 1 correct answer*/ 
        message.innerHTML = "Σωστές απαντήσεις: " + `${c}` + "/6"; /* message for the score*/
        disappear.innerHTML = ""; /* disappear submit button */
        reload.innerHTML = "<div id=center><button class=submit id=button onclick=repeat()>Repeat</button></div>"; /* submit button
        is being replaced from a Repeat button when pressed, then function repeat() is called and reloads the page*/
    }
}
    
function repeat() /* function to reload the page */
{      
    location.reload();
}
   
 