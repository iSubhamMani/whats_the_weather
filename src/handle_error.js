export function showError(){
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.style.display = "block";
}

export function removeError(){
    const errorMsg = document.querySelector('.error-msg');
    errorMsg.style.display = "none";
}