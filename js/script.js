let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}



/* Get the current year in your website */
const yearElement = document.querySelector('#year');

function displayYear() {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear;
}

// Call the function to display the current year
displayYear();