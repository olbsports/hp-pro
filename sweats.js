// sweats.js - JavaScript spécifique à la page sweats

// Configuration des produits sweats (4 principaux)
const sweatsData = {
    'perth-kids': {
        colors: [
            { code: '100', name: 'Blanc', image: 'FZ280K_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'FZ280K_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'FZ280K_201_1_1000.jpg' },
            { code: '309', name: 'Ivoire', image: 'FZ280K_309_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'FZ280K_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'FZ280K_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'FZ280K_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'FZ280K_502_1_1000.jpg' },
            { code: '514', name: 'Bleu Glacial', image: 'FZ280K_514_1_1000.jpg' },
            { code: '617', name: 'Vert Profond', image: 'FZ280K_617_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'sidney': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK605V_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK605V_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'MK605V_201_1_1000.jpg' },
            { code: '202', name: 'Gris Chiné', image: 'MK605V_202_1_1000.jpg' },
            { code: '301', name: 'Orange', image: 'MK605V_301_1_1000.jpg' },
            { code: '309', name: 'Ivoire', image: 'MK605V_309_1_1000.jpg' },
            { code: '311', name: 'Jaune Été', image: 'MK605V_311_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK605V_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'MK605V_403_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'MK605V_410_1_1000.jpg' },
            { code: '415', name: 'Crimson', image: 'MK605V_415_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK605V_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK605V_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'MK605V_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'MK605V_510_1_1000.jpg' },
            { code: '531', name: 'Prune Foncé', image: 'MK605V_531_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'MK605V_600_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'MK605V_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'MK605V_613_1_1000.jpg' },
            { code: '614', name: 'Sarcelle', image: 'MK605V_614_1_1000.jpg' },
            { code: '110', name: 'Latte', image: 'MK605V_110_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'byron': {
        colors: [
            { code: '100', name: 'Blanc', image: 'SF270U_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'SF270U_200_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'SF270U_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'SF270U_502_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'SF270U_400_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'SF270U_600_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'SF270U_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'SF270U_613_1_1000.jpg' },
            { code: '614', name: 'Sarcelle', image: 'SF270U_614_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'cooper': {
        colors: [
            { code: '100', name: 'Blanc', image: 'SZ270U_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'SZ270U_200_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'SZ270U_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'SZ270U_502_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'SZ270U_400_1_1000.jpg' },
            { code: '415', name: 'Crimson', image: 'SZ270U_415_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'SZ270U_600_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'SZ270U_613_1_1000.jpg' }
        ],
        currentIndex: 0
    }
};

// Function to change color and image for Sweats (COPIE EXACTE DES POLOS/TSHIRTS)
function changeColorSweat(productId, colorCode, colorName) {
    const product = sweatsData[productId];
    if (!product) return;

    // Find the color index
    const colorIndex = product.colors.findIndex(color => color.code === colorCode);
    if (colorIndex === -1) return;

    // Update current index
    product.currentIndex = colorIndex;

    // Get the card and update image
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (!card) return;

    const image = card.querySelector('.current-image');
    const colorIndicator = card.querySelector('.color-indicator');
    
    // Update image source (Sweats folder)
    const imageUrl = `images/sweats/${product.colors[colorIndex].image}`;
    image.src = imageUrl;
    image.alt = `${productId.toUpperCase()} - ${colorName}`;

    // Update color indicator
    colorIndicator.textContent = colorName;

    // Update selected color swatch
    const colorSwatches = card.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.classList.remove('selected');
        if (swatch.getAttribute('data-color-code') === colorCode) {
            swatch.classList.add('selected');
        }
    });

    // Add animation effect
    image.style.transform = 'scale(0.95)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 200);
}

// Function to navigate colors with arrows for Sweats (COPIE EXACTE DES POLOS)
function navigateColorSweat(productId, direction) {
    const product = sweatsData[productId];
    if (!product) return;

    let newIndex = product.currentIndex + direction;
    
    // Handle wraparound
    if (newIndex < 0) {
        newIndex = product.colors.length - 1;
    } else if (newIndex >= product.colors.length) {
        newIndex = 0;
    }

    const newColor = product.colors[newIndex];
    changeColorSweat(productId, newColor.code, newColor.name);
}

// Initialisation des index de couleur au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser tous les produits avec la première couleur (blanc - 100)
    Object.keys(sweatsData).forEach(productId => {
        // Pas besoin de currentColorIndex séparé, on utilise product.currentIndex
        console.log(`Initialized ${productId} with first color`);
    });

    // Check if we're on Sweats page and override the functions
    console.log('🔍 Checking for sweats page...');
    console.log('Section #sweats exists:', !!document.querySelector('#sweats'));
    console.log('Perth products found:', document.querySelectorAll('[data-product*="perth"]').length);
    console.log('Sidney products found:', document.querySelectorAll('[data-product*="sidney"]').length);
    console.log('Byron products found:', document.querySelectorAll('[data-product*="byron"]').length);
    console.log('Avalon products found:', document.querySelectorAll('[data-product*="avalon"]').length);
    console.log('Cooper products found:', document.querySelectorAll('[data-product*="cooper"]').length);

    if (document.querySelector('#sweats') || 
        document.querySelector('[data-product*="perth"]') || 
        document.querySelector('[data-product*="sidney"]') || 
        document.querySelector('[data-product*="byron"]') || 
        document.querySelector('[data-product*="avalon"]') || 
        document.querySelector('[data-product*="cooper"]')) {
        
        console.log('🎯 Sweats page detected - activating sweat functions');
        
        // Override global functions with sweat versions
        window.changeColor = changeColorSweat;
        window.navigateColor = navigateColorSweat;
        
        console.log('✅ Sweat functions active');
        console.log('📦 Sweat products:', Object.keys(sweatsData));
        
        // Test one product
        console.log('🧪 Testing avalon product data:', sweatsData['avalon']);
    } else {
        console.log('❌ No Sweats detected on this page');
    }

    // Animation d'apparition progressive des cartes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observer toutes les cartes de sweats
    document.querySelectorAll('.polo-card').forEach(card => {
        observer.observe(card);
    });

    // Gestion des erreurs de chargement d'images
    document.querySelectorAll('.current-image').forEach(img => {
        img.addEventListener('error', function() {
            // Image de fallback si l'image n'existe pas
            this.src = 'images/sweats/default.jpg';
        });
    });

    // Préchargement des images au survol pour une meilleure UX
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('mouseenter', function() {
            const productCard = this.closest('.polo-card');
            const imageElement = productCard.querySelector('.current-image');
            const productId = imageElement.id.replace('-image', '');
            const colorCode = this.dataset.colorCode;
            
            // Précharger l'image
            const preloadImg = new Image();
            preloadImg.src = `images/sweats/${productId}_${colorCode}.jpg`;
        });
    });

    // Navigation au clavier pour l'accessibilité
    document.addEventListener('keydown', function(e) {
        if (e.target.classList.contains('color-swatch')) {
            let nextSwatch = null;
            
            switch(e.key) {
                case 'ArrowRight':
                    nextSwatch = e.target.nextElementSibling;
                    break;
                case 'ArrowLeft':
                    nextSwatch = e.target.previousElementSibling;
                    break;
                case 'Enter':
                case ' ':
                    e.target.click();
                    e.preventDefault();
                    return;
            }
            
            if (nextSwatch && nextSwatch.classList.contains('color-swatch')) {
                nextSwatch.focus();
                e.preventDefault();
            }
        }
    });

    // Rendre les swatches focusables
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.setAttribute('tabindex', '0');
        swatch.setAttribute('role', 'button');
        swatch.setAttribute('aria-label', `Choisir la couleur ${swatch.dataset.color}`);
    });
});

// Export pour utilisation dans d'autres scripts si nécessaire
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sweatsData,
        changeColorSweat,
        navigateColorSweat
    };
}