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
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var politica = document.getElementById("politica");


    let valid = true;

    /******Firstname and Lastname******/
    //Condition for the firstname
    if(firstname.value == null || firstname.value == ""){
        setError(firstname, "You have to put your firstname!");
        valid = false; //There is an error, so I want "valid" to be false
    }else{
        //Regular expression
        let firstname_re = /^[a-zA-Z ]{2,30}$/;

        //To validate the regular expression
        if(!firstname_re.exec(firstname.value)){
            setError(firstname, "Firstname invalid");
            valid = false;
        }else{
            setSuccess(firstname);
        }
    }

    //Condition for the lastname
    if(lastname.value == null || lastname.value == ""){
        setError(lastname, "You have to put your lastname!");
        valid = false; //There is an error, so I want "valid" to be false
    }else{
        //Regular expression
        let lastname_re = /^[a-zA-Z ]{2,30}$/;

        //To validate the regular expression
        if(!lastname_re.exec(lastname.value)){
            setError(lastname, "Lastname invalid");
            valid = false;
        }else{
            setSuccess(lastname);
        }
    }

        /******Phone******/
        if(phone.value == null || phone.value == ""){
            setError(phone, "You have to put your phone!");
            valid = false; //There is an error, so I want "valid" to be false
        }else{
            //Regular expression
            let phone_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

            //To validate the regular expression
            if(!phone_re.exec(phone.value)){
                setError(phone, "Phone invalid");
                valid = false;
            }else{
                setSuccess(phone);
            }
        }

    /******Email******/
    if(email.value == null || email.value == ""){
        setError(email, "You have to put your email!");
        valid = false; //There is an error, so I want "valid" to be false
    }else{
        //Regular expression
        let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //To validate the regular expression
        if(!email_re.exec(email.value)){
            setError(email, "Email invalid");
            valid = false;
        }else{
            setSuccess(email);
        }
    }

    /******Privacity and politic******/
    if(!politica.checked) {
        setError(politica, "You have to accept the privacity.");
        valid = false;
    }else{
        setSuccess(politica);
    }

    if(valid == true) {
        return true;
    }else{
        return false;
    }
}


//Error message
function setError(input, message){
    const formItem = input.parentElement;
    const small = formItem.querySelector("small");
    formItem.className = "form-item error";
    small.innerText = message;
}

//If everything is correct
function setSuccess(input){
    const formItem = input.parentElement;
    formItem.className = "form-item success";
}