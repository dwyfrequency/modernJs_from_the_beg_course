const btn = document.querySelector(".btn"), 
  email = document.querySelector("#email"),
  log = console.log,
  name = document.querySelector("#name"),
  phone = document.querySelector("#phone"),
  zipcode = document.querySelector("#zip");

// form blur event 
name.addEventListener("blur", validateName);
zipcode.addEventListener("blur", validateZipCode);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);

function validateValue(selector, re) {
  log({selector, re});
  if (re.test(selector.value)) {
    selector.classList.remove("is-invalid");
  } else {
    selector.classList.add("is-invalid");
  }
}

// validate name input
function validateName() {
  const re = /^[A-Za-z]{2,10}$/; // name with 2 to 10 letters
  validateValue(name, re);
}
// validate zip input
function validateZipCode() {
  const re = /^\d{5}(\-\d{4})?$/; // standard zip with the option of a trailing dash and four digits
  validateValue(zipcode, re);
}

// validate email input
function validateEmail() {
  const re = /^[A-Za-z0-9_\-\.]+@([A-Za-z0-9])+\.[a-z]{2,5}/; 
  validateValue(email, re);
}
// validate phone input
function validatePhone() {
  const re = /^\(?\d{3}\)?[\s\.\-]?\d{3}[\s\.\-]?\d{4}$/; // optional () at the beginning and optional delimiters
  validateValue(phone, re);
}


