/* Submit function is called in quiz1.html (line 99) When the user will press the submit button*/ 
function submit(){ 
    var c=0;/*initialization of the counter for the correct answers */ 
    /* each variable below is initialized with 1 of 4 values that are given in the quiz1.html(in every div section), based on the preference of the user*/ 
    /* each variable can get values {a,b,c,d}*/
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var flag=false; /* initialization of flag with false value. In case the user has answered one of the six questions that we have in quiz1.html
    the message with his score and the repeat button should be displayed*/

    /* In every if's first case that we see is the correct answer of the corresponding question, so the counter should be increased by 1
        else if the user has chosen a wrong answer our flag variable gets the true value */
    if (q1=="c"){ 
        c++;
    }else if(q1=="b" || q1=="a" || q1=="d")
    {
        flag = true;
    }

    if (q2=="d"){
        c++;
    }else if(q2=="a" || q2=="c" || q2=="b")
    {
        flag = true;
    }

    if (q3=="c"){
        c++;
    }
    else if(q3=="a" || q3=="b" || q3=="d")
    {
        flag = true;
    }

    if (q4=="a")
    {
        c++;
    }
    else if(q4=="d" || q4=="b" || q4=="c")
    {
        flag = true;
    }
    
    if (q5=="d"){
        c++;
    }
    else if(q5=="a" || q5=="b" || q5=="c")
    {
        flag = true;
    }
    if (q6=="b"){
        c++;
    }
    else if(q6=="a" || q6=="d" || q6=="c")
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
   
 