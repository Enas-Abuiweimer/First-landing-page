
// Name Validation
const submit = document.getElementById("submit");
const notify = document.getElementById("notification");
const nameCheck = document.getElementById("require");
const numberValidation = document.getElementById("number-validation");
const numberRequire = document.getElementById("number-required");

submit.addEventListener('click', function(event){
    event.preventDefault();
    const fullNameElement = document.getElementById("Full-name");
    const fullName = fullNameElement.value;
    const fullNameCharacters = fullName.split('');
    //check if the name has unacceptable letters
    for (let i = 0; i < fullNameCharacters.length; i++) {
        const character = fullNameCharacters[i];
        if (!/[a-zA-Z]/.test(character)) {
            console.log("Full name should contain only letters.");
            notify.classList.remove('hidden');
        }
        else{
            notify.classList.add('hidden');
        }
    };
   //check if the name is empty
    if(fullNameCharacters.length==0){
        nameCheck.classList.remove('required');
    }
    else{
        nameCheck.classList.add('required');
    }
    //Mobile Number validation
    const mobileNumber = document.getElementById("telephone-number");
    validateNumber = mobileNumber.value; 
    const mobileNumbercharacters = validateNumber.split('');
    for (let i = 0; i < mobileNumbercharacters.length; i++) {
    const character = mobileNumbercharacters[i];
    if (isNaN(parseInt(character))) {
        console.log("Mobile number should contain only numbers.");
        numberValidation.classList.remove('number-validation');

    }
    else {
        numberValidation.classList.add('number-validation');
    }
}

// check if the number is empty 
if(mobileNumbercharacters.length==0){
    numberRequire.classList.remove('number-required');
}
else {
    numberRequire.classList.add('number-required');
}
});




