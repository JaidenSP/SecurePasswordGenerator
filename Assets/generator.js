var btn = document.querySelector("#btn")

//create function on button click
function startGenerating(length, lower, upper, num, special){

    console.log(length,lower,upper,num,special);
}


// on button click display prompts
btn.addEventListener('click', function(){

    // select length
    length = prompt("Please select the length of your password between 8 and 128");

    if (length < 8 || length > 128){
        alert("Please select a correct length");
    }
    else {

        lower = prompt("Would you like to include lower case? (Please type yes/no)").toLowerCase();

        if (lower === "no" || lower === "yes"){

           upper = prompt("Would you like to include upper case?").toLowerCase();

           if(upper == "no" || lower === "yes"){

           num = prompt("Would you like to include numbers?").toLowerCase();
             
           if(num == "no" || lower === "yes"){

               special = prompt("Would you like to inlcude special characters?").toLowerCase()

               startGenerating(length, lower, upper, num, special);
           }
           }
    }
}

})

