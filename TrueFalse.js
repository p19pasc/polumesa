/* Submit function is called in TrueFalse.html (line 97) When the user will press the submit button*/ 
function submit(){
    var result=-1; //a variable to force the user to put "Σ" or "Λ" in the two boxes and to save his score
    var k = document.getElementsByName("input");/* document.getElementsByName will get the strings which are given from the user in the two gaps
    in TrueFalse.html as they have name="input" both of them. Variable k becomes an array with each cell having the given string from each gap.  */

    /* In the code below we examine the 4 cases we would have as there are two boxes in html code */
    if (k[0].value == "Σ" && k[1].value == "Σ")
    {
        result=2; // if the user fills in the gaps correctly the score becomes 2
    }
    else if(k[0].value =="Σ" && k[1].value == "Λ")
    {
        result=1;  // if the user fills in the first gap correctly the score becomes 1
    }
    else if (k[0].value == "Λ" && k[1].value == "Λ")
    {
        result=0; // if the user dont fill any of the gaps correctly the score becomes 0
    }
    else if(k[0].value == "Λ" && k[1].value == "Σ")
    {
        result=1; // if the user fills in the second gap correctly the score becomes 1 
    }

    /* If the user has filled in the gaps then a message to show the score is printed and a repeat button appears to reload the page */
    if(result!=-1){ 
        message.innerHTML = "Σωστές " + `${result}` + "/2"; /* message for the score*/
        disappear.innerHTML = ""; /* disappear submit button */
        reload.innerHTML = "<div id=center><button class=submit id=button onclick=repeat()>Repeat</button></div>"; /* submit button
        is being replaced from a Repeat button when pressed, then function repeat() is called and reloads the page */
    }
}
/* function to reload the page */
function repeat()
{
    location.reload();
}

    