(function () {
    "use strict";

    // ---------- Mobile Menu Toggle ----------
    const menuToggleBtn = document.getElementById("menuToggle");
    const navigationLinks = document.getElementById("navLinks");

    if (menuToggleBtn && navigationLinks) {
        menuToggleBtn.addEventListener("click", () => {
            navigationLinks.classList.toggle("show");
        });
    }

    // ---------- Portfolio Filtering ----------
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    const filterProjects = (category) => {
        projectCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            const shouldDisplay =
                category === "all" || cardCategory === category;

            card.style.display = shouldDisplay ? "block" : "none";
        });

        // Highlight active button
        filterButtons.forEach((button) => {
            button.classList.toggle(
                "active",
                button.dataset.filter === category
            );
        });
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const selectedCategory = event.currentTarget.dataset.filter;
            filterProjects(selectedCategory);
        });
    });

    // ---------- Close Mobile Menu on Link Click ----------
    if (navigationLinks) {
        const navAnchors = navigationLinks.querySelectorAll("a");

        navAnchors.forEach((anchor) => {
            anchor.addEventListener("click", () => {
                navigationLinks.classList.remove("show");
            });
        });
    }
})();