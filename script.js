"use strict";


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   ARTICLE SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");

const articleCards =
    document.querySelectorAll(".article-card");

const noResults =
    document.getElementById("noResults");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchTerm =
                searchInput.value
                    .trim()
                    .toLowerCase();

            let visibleArticles = 0;


            articleCards.forEach(function (card) {

                const title =
                    card.dataset.title
                        ? card.dataset.title.toLowerCase()
                        : "";

                const category =
                    card.dataset.category
                        ? card.dataset.category.toLowerCase()
                        : "";

                const articleText =
                    card.textContent.toLowerCase();


                const matches =
                    title.includes(searchTerm) ||
                    category.includes(searchTerm) ||
                    articleText.includes(searchTerm);


                if (matches) {

                    card.style.display = "";

                    visibleArticles++;

                } else {

                    card.style.display = "none";

                }

            });


            if (noResults) {

                if (visibleArticles === 0) {

                    noResults.style.display = "block";

                } else {

                    noResults.style.display = "none";

                }

            }

        }
    );

}


/* =========================================
   NEWSLETTER FORM
========================================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("email");

const formMessage =
    document.getElementById("formMessage");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                emailInput.value.trim();


            if (!email) {

                formMessage.textContent =
                    "Please enter your email address.";

                return;

            }


            formMessage.textContent =
                "Thanks for subscribing to TruthDose Blogs!";

            newsletterForm.reset();

        }
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}