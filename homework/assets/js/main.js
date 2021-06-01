const input = document.querySelector(`.my-input`);
const button = document.querySelector('.my-custom-button');
const errorText = document.querySelector('.firstname-error');
const input1 = document.querySelector(`.my-input1`);
const errorText1 = document.querySelector('.lastname-error');
const input2 = document.querySelector(`.my-input2`);
const errorText2 = document.querySelector('.email-error');
const input3 = document.querySelector(`.my-input3`);
const errorText3 = document.querySelector('.password-error');


button.onclick = function () {
    if (input.value.length<3 || input.value.length>50) {
        errorText.classList.remove('d-none');
    }
    else if (input1.value.length<3 || input1.value.length>50) {
        errorText1.classList.remove('d-none');  
    } 
    else if (input2.value.length<3 || input2.value.length>100 || !input2.value.includes("@")) {
        errorText2.classList.remove('d-none');  
    }
    else if (!input3.value) {
        errorText3.classList.remove('d-none');  
    }
    else {
        errorText.classList.add('d-none');
        alert('you have successfully submitted this form');
        var firstName = input.value;
        sessionStorage.setItem("firstname", firstName);
        var lastname = input1.value;
        sessionStorage.setItem("lastname", lastname);
        input.value = '';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        window.location.href = 'home.htm';
    }
}

