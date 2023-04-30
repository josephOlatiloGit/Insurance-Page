let btn = document.querySelector(".toggle");
let icon = document.querySelector(".fa-bars");

btn.onclick = function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
};

const navLinks = document.getElementsByClassName("mobile-nav")[0];
console.log(navLinks);

btn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log(btn);
});
