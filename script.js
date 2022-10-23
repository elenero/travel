// Get the modal
const popupLogin = document.querySelector(".popup__login");
const signIn = document.querySelector(".popup__body")
const loginButton = document.querySelector(".button__login")
loginButton.onclick = function(){
 popupLogin.style.display = "block";
};

const closeLogin = document.getElementsByClassName("close__login")[0];
closeLogin.onclick = function() {
  popupLogin.style.display = "none";
  
}

const popupSignUp = document.querySelector(".popup-signup")
const signUp = document.querySelector(".popup-signup__body")
const signUpLink = document.querySelector(".popup__register-link")

signUpLink.onclick = function(){
     popupLogin.style.display = "none"
     popupSignUp.style.display = "block";
     
    }

    const closeSignup = document.getElementsByClassName("close__signup")[0];
    closeSignup.onclick = function() {
      popupSignUp.style.display = "none";
      
    }

const backToLogin = document.getElementById("popup-login");
backToLogin.onclick = function(){
  popupSignUp.style.display = "none";
  popupLogin.style.display = "block";
}
