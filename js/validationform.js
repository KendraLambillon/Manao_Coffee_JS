let sendButton = document.querySelector("#send");
let myForm = document.querySelector("#form");

sendButton.addEventListener("click", (e)=>{
    e.preventDefault(); //Desactivate the submit event

    //Validation of the form
    correct = validation();

    if(correct == true) {
        myForm.submit();
    }
})

function validation() {
    var firstname = document.getElementById("firstname").value;

    if(firstname == null || firstname == ""){
        alert("You have to put an input!");
        return false; //There is an error, so I want "correct" to be false
    }

    let name_re = /^[a-zA-Z ]{2,30}$/ //Regular expression
    //To validate the regular expression
    if(!name_re.exec(firstname)){
        alert("Firstname invalid");
        return false;
    }
    return true; //If there is no error and the user has put an input
}