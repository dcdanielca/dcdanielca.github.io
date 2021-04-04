window.onload = function(){
    AOS.init()
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate(){
    document.getElementsByClassName('error-name')[0].classList.add('d-none');
    document.getElementsByClassName('error-email')[0].classList.add('d-none');
    document.getElementsByClassName('error-message')[0].classList.add('d-none');

    let error = false;
    if( document.contactForm._name.value.trim() == "") {
        document.getElementsByClassName('error-name')[0].classList.remove('d-none');
        error = true;
    }
    let email = document.contactForm._replyto.value.trim();
    if(email == "" || ! validateEmail(email)) {
        document.getElementsByClassName('error-email')[0].classList.remove('d-none');
        error = true;
    }
    if( document.contactForm._message.value.trim() == "") {
        document.getElementsByClassName('error-message')[0].classList.remove('d-none');
        error = true;
    }
    return !error;
}