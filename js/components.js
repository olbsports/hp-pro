/**
 * HORSEPRINT PRO - Dynamic Components Loader
 * Charge automatiquement le header et footer sur toutes les pages
 */

(function() {
    'use strict';

    // Configuration
    const COMPONENTS_CONFIG = {
        header: {
            placeholder: 'header-placeholder',
            file: 'includes/header.html'
        },
        footer: {
            placeholder: 'footer-placeholder',
            file: 'includes/footer.html'
        }
    };

    /**
     * Charge un composant HTML et l'insère dans le placeholder
     */
    async function loadComponent(componentName, config) {
        try {
            const response = await fetch(config.file);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();

            const placeholder = document.getElementById(config.placeholder);
            if (placeholder) {
                placeholder.innerHTML = html;
                console.log(`✓ ${componentName} loaded successfully`);
                return true;
            } else {
                console.warn(`⚠ Placeholder #${config.placeholder} not found for ${componentName}`);
                return false;
            }
        } catch (error) {
            console.error(`✗ Error loading ${componentName}:`, error);
            return false;
        }
    }

    /**
     * Initialise tous les composants
     */
    async function initializeComponents() {
        console.log('🚀 Initializing HorsePrint Pro components...');

        // Charger header et footer en parallèle
        const results = await Promise.all([
            loadComponent('header', COMPONENTS_CONFIG.header),
            loadComponent('footer', COMPONENTS_CONFIG.footer)
        ]);

        // Vérifier si au moins un composant a été chargé
        if (results.some(r => r === true)) {
            console.log('✓ Components initialization complete');

            // Trigger event pour indiquer que les composants sont chargés
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
        }
    }

    // Initialiser dès que le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeComponents);
    } else {
        initializeComponents();
    }

})();
