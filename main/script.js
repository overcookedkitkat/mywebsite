const nav = document.getElementById("navbar");
const mobileNav = document.querySelector(".mobile-navigation");
const scroll = document.querySelector(".logo");
const email = document.getElementById("email");
const uname = document.getElementById("name");
const message = document.getElementById("message");
const errorMessage = document.querySelector('small');
const regexEmailPattern = "^[A-Za-z0-9._+\-]+@[A-Za-z0-9]+\.[a-z]{1,6}$"
const formSubmitButton = document.getElementById("formBtn");


// SCROLL TO TOP (ON LOGO CLICK)
scroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

// RESPONSIVE NAV BAR
mobileNav.addEventListener('click', () => {
    if (nav.getAttribute("data-visible") === "false") {
        nav.style.transform = "translateX(0%)";
        nav.setAttribute("data-visible", true);
    } else {
        nav.style.transform = "translateX(100%)";
        nav.setAttribute("data-visible", false);
    }
});

// FORM - VALIDATING EMAIL
function validate() {
    if (email.value !== '') {
        if (!email.value.match(regexEmailPattern)) {
            errorMessage.innerText = "Please enter a valid email address";
            errorMessage.style.visibility = "visible";
        } else {
            errorMessage.style.visibility = "hidden";
        }
    } else {
        errorMessage.style.visibility = "hidden";
    }
}

formSubmitButton.addEventListener('click', (event) => {
    const isValidEmail = email.value.match(regexEmailPattern);
    const isNameFilled = uname.value.trim() !== '';
    const isMessageFilled = message.value.trim() !== '';

    if (isValidEmail && isNameFilled && isMessageFilled) {
        formSubmitButton.innerHTML = "Shooting....";
    }
})

//FORM - VALIDATING FORM
// function validateForm() {
//     const isValidEmail = email.value.match(regexEmailPattern);
//     const isNameFilled = uname.value.trim() !== '';
//     const isMessageFilled = message.value.trim() !== '';

//     if (isValidEmail && isNameFilled && isMessageFilled) {
//         errorMessage.style.visibility = "hidden";
//         return true;
//     } else {
//         errorMessage.innerText = "Please enter a valid email address";
//         errorMessage.style.visibility = "visible";
//         return false;
//     }
// }

// FORM - GETTING DATA IN SPREADSHEET (IF validateForm() is satisfied)
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//         alert("Fill all inputs and make sure you enter a correct email");
//         errorMessage.style.visibility = "hidden";
//     }
//     else {
//             if (!validateForm()) {
//                 e.preventDefault();
//                 alert("Fill all inputs and make sure you enter a correct email");
//                 errorMessage.style.visibility = "hidden";
//             } 
//             else {        
//                 formSubmitButton.innerHTML = "Shooting...";
//                 fetch(form.action, {
//                     method: "POST",
//                     body: new FormData(document.getElementById("myForm"))
//                 }).then(
//                     response => response.json()
//                 ).then((html) => {
//                     alert("I will get in touch with you soon!")
//                     window.location.href = "success.html"
//                 });
//             }
//     }
// });
