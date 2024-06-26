const forms = document.querySelector(".needs-validation");
const userNameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");

userNameElement.addEventListener("blur", validateUsername);
passwordElement.addEventListener("blur", validatePassword);

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

const reSpaces = /^\S*$/;
const re6 = /^\S{6,}$/;
const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateUsername(e) {
  if (reSpaces.test(userNameElement.value) && re6.test(userNameElement.value)) {
    userNameElement.classList.remove("is-invalid");
    userNameElement.classList.add("is-valid");
    return true;
  } else {
    userNameElement.classList.remove("is-valid");
    userNameElement.classList.add("is-invalid");
    return false;
  }
}

function validatePassword() {
  if (
    rePassword.test(passwordElement.value) &&
    reSpaces.test(passwordElement.value)
  ) {
    passwordElement.classList.remove("is-invalid");
    passwordElement.classList.add("is-valid");
    return true;
  } else {
    passwordElement.classList.add("is-invalid");
    passwordElement.classList.remove("is-valid");
    return false;
  }
}

forms.addEventListener("submit", (e) => {
  if (!forms.checkValidity() || !validateUsername() || !validatePassword()) {
    e.preventDefault();
  } else {
    e.preventDefault();
    let isCheckUserName = userLocal.some(
      (user) => user.userName === userNameElement.value
    );
    let isCheckPassword = userLocal.some(
      (user) => user.password === passwordElement.value
    );
    if (isCheckPassword && isCheckUserName) {
      alert("Logged in Succesfully!");
    } else {
      alert("Login Unsuccessful");
    }
  }
});