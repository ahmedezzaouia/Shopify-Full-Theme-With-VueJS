$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });
    }
  });
});

// popup newsletter 

const overlay = document.querySelector(".popup-overlay");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
const signupButton = document.querySelector(".sign-up");

const openPopup = () => {
 
  // overlay.classList.add("active");
  // popup.classList.add("active");
  popup.style.opacity='1';
  popup.style.visibility='visible';
  overlay.style.opacity='0.6';
  overlay.style.visibility='visible';
};
const closePopup = () => {
  // overlay.classList.remove("active");
  // popup.classList.remove("active");
  popup.style.opacity='0';
  popup.style.visibility='hidden';
  overlay.style.opacity='0';
  overlay.style.visibility='hidden';
};

window.addEventListener("load", function () {
  console.log("hi page is loaded");
  openPopup();
});

overlay.addEventListener("click", () => {
  closePopup();
});
closeButton.addEventListener("click", () => {
  closePopup();
});

signupButton.addEventListener("click", () => {
  const frNameInput = document.getElementById("mce-FNAME");
  const emailInput = document.getElementById("mce-EMAIL");
  const birthdayInputs = document.querySelector(".birthday-inputs");
  console.dir(birthdayInputs);
  if (frNameInput.value.length === 0 && emailInput.value.length === 0) {
    frNameInput.style.border = "1.5px solid red";
    emailInput.style.border = "1.5px solid red";
    [...birthdayInputs.children].forEach((el) => {
      el.style.border = "1.5px solid red";
    });
  }
  if (frNameInput.value.length === 0) {
    frNameInput.style.border = "1.5px solid red";
  }
  if (emailInput.value.length === 0) {
    emailInput.style.border = "1.5px solid red";
  }
});
