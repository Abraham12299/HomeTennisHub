function openMenu() {
    document.getElementById("menuPopup").classList.add("open");
}

function closeMenu() {
    document.getElementById("menuPopup").classList.remove("open");
}

// Add event listener to close the menu when clicking outside of it
window.addEventListener('click', function(event) {
    const menuPopup = document.getElementById("menuPopup");
    if (event.target == menuPopup) {
        closeMenu();
    }
});
