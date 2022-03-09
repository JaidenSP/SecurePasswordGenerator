var btn = document.querySelector("#btn")

//create function on button click
function startGenerating(length, lower, upper, num, special){

    console.log(length)
}
// on button click display prompts
btn.addEventListener('click', function(){
    // select length
    length = prompt("Please select the length of your password between 8 and 128");

    if (length < 8 || length > 128){
        length;
    }
    else {
        lower = prompt("Would you like to include lower case? (Please type yes/no)").toLowerCase();
        startGenerating(length);

        if (lower === "no"){
           console.log(lower);
           upper = prompt("Would you like to include upper case?").toLowerCase();
        }
        else {
            upper = prompt("Would you like to include upper case?").toLowerCase();
        }
    }
    // select what characters to include
    // store the values into variables
})

