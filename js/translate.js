// Fonction pour toggle le widget de traduction
function toggleTranslateWidget() {
    const dropdown = document.getElementById('translateDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Fermer le dropdown en cliquant à l'extérieur
document.addEventListener('click', function(event) {
    const widget = document.querySelector('.translate-widget-float');
    const dropdown = document.getElementById('translateDropdown');
    
    if (widget && dropdown && !widget.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
