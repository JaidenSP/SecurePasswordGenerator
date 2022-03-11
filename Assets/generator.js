
var btn = document.querySelector("#btn")

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ADCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "123456789";
var specialChar = "!@#$%^&*()_+-=;:<>?/";

//create function on button click
function startGenerating(length, lower, upper, num, special){

    //create a division counter variable
    var count = 0;
    var divLength = length / 4;
    var lowerArr = [];

    if (lower == 'yes'){

            count++;
            var arrFromLower = Array.from(lowerChar);

            for (i = 0; i < divLength; i++){
                lowerArr.push(arrFromLower[Math.floor(Math.random() * arrFromLower.length)]);

                console.log(lowerArr.join(""));
            }

            

        }
        
    }
    
    //each character type is it's own variable
    
    //find out what character type is included
    
    //if all character types are included length x 4
    //use the divided number and randomly find the amount of characters
    //then concact all variables together

    



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

//TODO :: Need to set length to array = to the users wants, find a way to include all slecected characters and ranomly join them into the string

//3/10/22 PLAN math.random the divisble length of string to the array'd variables then concatinate strings, iterate math.random until it has number of values correact
