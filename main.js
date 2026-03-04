/* =========================
   SCROLL REVEAL
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* =========================
       TYPING ANIMATION
    ========================= */

    const typingElement = document.getElementById("typing");

    if (typingElement) {
        const text = "Where Curiosity Meets Code";
        let i = 0;

        function type() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 70);
            }
        }

        type();
    }

});