
// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==============================
// NAVBAR SHADOW ON SCROLL
// ==============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0, 0, 0, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ==============================
// CURRENT YEAR
// ==============================

const year = document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// ==============================
// PROJECT LINKS
// ==============================

document.querySelectorAll(".project-link").forEach((link) => {

    link.addEventListener("click", function () {

        console.log(
            "Opening project:",
            this.href
        );

    });

});


// ==============================
// CONTACT BUTTON
// ==============================

const contactButton =
    document.querySelector(".contact-button");

if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log("Contact button clicked");

    });

}

