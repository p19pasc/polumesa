/* Submit function is called in qap.html (line 70) When the user will press the submit button*/ 
function submit(){ 
    const sum = [0,0,0,0,0,0,0,0,0]; /* initialize an array with zeros. It will contain 0 in case user did not fill in the gap (k[i]) correctly or 1 
    in case user fill the gap (k[i]) correctly */
    
    var k = document.getElementsByName("input"); /* document.getElementsByName will get the strings which are given from the user in the gaps
    in gap.html as they have name="input" all of them. Variable k becomes an array with each cell having the given string from each gap.  */

    /* In every if's first case that we see is the correct string that the user should put in the corresponding gap(gap.html), so the k[i] cell becomes 1
    else if the string is not correct it remains 0. In each case ✔ or X is being displayed on the screen next to the box that the user write the
    words*/
    if (k[0].value == "υποπρογράμματος")
    {
        sum[0] = 1;
        check0.innerHTML = "<text class=button>" + "✔" + "</text>";
    }else
    {   
        sum[0] = 0;
        check0.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[1].value == "συνάρτηση")
    {
        sum[1] = 1;
        check1.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {   
        sum[1] = 0;
        check1.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[2].value == "οποιαδήποτε")
    {
        sum[2] = 1;
        check2.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[2] = 0;
        check2.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[3].value == "πρόγραμμα")
    {
        sum[3] = 1;
        check3.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[3] = 0;
        check3.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[4].value == "τυπώσουν")
    {
        sum[4] = 1;
        check4.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[4] = 0;
        check4.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    
    if (k[5].value == "μεταφέρουν")
    {
        sum[5] = 1;
        check5.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[5] = 0;
        check5.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[6].value == "περιορισμένη")
    {
        sum[6] = 1;
        check6.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[6] = 0;
        check6.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[7].value == "κάλεσε")
    {
        sum[7] = 1;
        check7.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[7] = 0;
        check7.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    if (k[8].value == "τέλος")
    {
        sum[8] = 1;
        check8.innerHTML = "<text class=button>" + "✔" + "</text>";
    }
    else
    {
        sum[8] = 0;
        check8.innerHTML = "<text class=button>" + "✖" + "</text>";
    }

    /* end variable is used to calculate the score by doing sum all the values of each cell of the sum array*/
    let end = 0;
    for(let i=0; i < sum.length;i++) 
    {
        end+=sum[i];
    }

    /* If user did not fill in the gap all the words correctly it displays his score and a repeat button to reload the page
    else if user fill in the gap all the words correctly a message will be printed */
    if (end != 9) 
    {
        message.innerHTML = "Συμπλήρωσες σωστά " + `${end}` + " απαντήσεις."; /* message for the score*/       
        disappear.innerHTML = ""; /* disappear submit button */
        reload.innerHTML = "<div id=center><button class=submitbutton id=button onclick=repeat()>Repeat</button></div>";/* submit button
        is being replaced from a Repeat button pressed, then function repeat() is called and reloads the page*/
    }
    else
    {
        message.innerHTML = "Συγχαρητήρια! Συμπλήρωσες σωστά όλα τα κενά."
    }
}

/* function to reload the page */
function repeat()
{
    location.reload();
}
