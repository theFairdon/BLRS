document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menu = document.getElementById('menu');

    hamburgerMenu.addEventListener('click', function () {
        menu.classList.toggle('show');
        // Toggle aria-expanded attribute
        const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true' || false;
        hamburgerMenu.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!hamburgerMenu.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.remove('show');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
        }
    });
});
