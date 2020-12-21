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