function toggleMenu(menuId) {
    const menus = document.querySelectorAll(".dropdown");

    menus.forEach(menu => {
        if (menu.id === menuId) {
            menu.classList.toggle("show");
        } else {
            menu.classList.remove("show");
        }
    });
}

document.addEventListener("click", function(event) {
    if (!event.target.closest(".nav-item")) {
        document.querySelectorAll(".dropdown").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});


