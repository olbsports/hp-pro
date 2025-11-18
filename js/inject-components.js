/**
 * Injection dynamique du header et footer HorsePrint Pro
 * Charge includes/header.html et includes/footer.html dans toutes les pages
 */

(function() {
    'use strict';

    // Déterminer le chemin relatif vers includes/ selon la profondeur de la page
    function getIncludesPath() {
        const path = window.location.pathname;
        const depth = path.split('/').filter(p => p && p.indexOf('.html') === -1).length;

        // Si on est dans /blog/ ou un sous-dossier, remonter d'un niveau
        if (path.includes('/blog/')) {
            return '../includes/';
        }
        // Sinon, on est à la racine
        return 'includes/';
    }

    const includesPath = getIncludesPath();

    // Fonction pour charger un fichier HTML
    async function loadHTML(url, targetId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = html;
                return true;
            }
            return false;
        } catch (error) {
            console.error(`Erreur de chargement ${url}:`, error);
            return false;
        }
    }

    // Charger header et footer quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    async function init() {
        // Charger header et footer en parallèle
        await Promise.all([
            loadHTML(includesPath + 'header.html', 'header-placeholder'),
            loadHTML(includesPath + 'footer.html', 'footer-placeholder')
        ]);

        // Initialiser les fonctionnalités après chargement
        initializeComponents();
    }

    function initializeComponents() {
        // Mobile menu toggle
        window.toggleMobileMenu = function() {
            const menu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (menu) {
                menu.classList.toggle('active');
            }
            if (toggle) {
                toggle.classList.toggle('active');
            }
        };

        // Go to home
        window.goToHome = function() {
            window.location.href = getHomePath();
        };

        // Translate widget toggle
        window.toggleTranslate = function() {
            const content = document.getElementById('translateContent');
            if (content) {
                content.classList.toggle('active');
            }
        };

        // Google Translate initialization
        window.googleTranslateElementInit = function() {
            if (typeof google !== 'undefined' && google.translate) {
                new google.translate.TranslateElement({
                    pageLanguage: 'fr',
                    includedLanguages: 'en,es,de,it,nl,fr',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
            }
        };

        // Translate to specific language
        window.translateTo = function(lang) {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event('change'));
            }
        };

        // Fermer le menu mobile si on clique en dehors
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');

            if (menu && menu.classList.contains('active') &&
                !menu.contains(event.target) &&
                !toggle.contains(event.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
    }

    // Helper pour obtenir le chemin vers la page d'accueil
    function getHomePath() {
        const path = window.location.pathname;
        if (path.includes('/blog/')) {
            return '../index.html';
        }
        return 'index.html';
    }
})();
