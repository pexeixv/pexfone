function emailValidation(){
    var email = document.querySelector('#email');
    var emailId = document.querySelector('#email').value;
    const pattern = /\S+@\S+\.\S+/;
    if (emailId.match(pattern)){
        email.style.color = 'green';
    }else{
        email.style.color = 'red';
    }   
}

function nameValidation(){
    var name = document.querySelector('#name').value;
    var nameField = document.querySelector('#name');
    const pattern = /^[a-z ,.'-]+$/i;
    if (name.match(pattern)){
        nameField.style.color = 'green';
    }else{
        nameField.style.color = 'red';
    }
}

function copy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("E-mail address has been copied to clipboard.");
    return false;
}