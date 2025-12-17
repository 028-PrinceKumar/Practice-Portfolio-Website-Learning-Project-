document.getElementById("home").addEventListener("click", function () {
    document.getElementById("home-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("resume").addEventListener("click", function () {
    document.getElementById("resume-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("achivement").addEventListener("click", function () {
    document.getElementById("achievements-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("skills").addEventListener("click", function () {
    document.getElementById("skill-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("project").addEventListener("click", function () {
    document.getElementById("project-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact").addEventListener("click", function () {
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
});


let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    let slides = document.querySelectorAll(".slide");

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(s => s.style.display = "none");
    slides[slideIndex].style.display = "block";
}

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});
