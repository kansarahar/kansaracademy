let navItems = document.querySelectorAll('.nav-item');
for (let navItem of navItems) {
    navItem.addEventListener('click', () => {
        window.location.pathname = navItem.id;
    });
}

