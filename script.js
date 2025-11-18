// Variables globales pour le formulaire multi-étapes
let currentStep = 1;
const totalSteps = 4;

// Data structure for polo colors and images
const poloData = {
    'mackay': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PS2001U_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PS2001U_200_1_1000.jpg' },
            { code: '107', name: 'Moka', image: 'PS2001U_107_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'PS2001U_201_1_1000.jpg' },
            { code: '203', name: 'Gris Nuage', image: 'PS2001U_203_1_1000.jpg' },
            { code: '312', name: 'Jaune Beurre', image: 'PS2001U_312_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PS2001U_400_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'PS2001U_410_1_1000.jpg' },
            { code: '411', name: 'Grape', image: 'PS2001U_411_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'PS2001U_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'PS2001U_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'PS2001U_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'PS2001U_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'PS2001U_510_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'PS2001U_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'PS2001U_613_1_1000.jpg' },
            { code: '616', name: 'Vert Thé', image: 'PS2001U_616_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'mackay-woman': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PS200WW_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PS200WC_200_1_1000.jpg' },
            { code: '107', name: 'Moka', image: 'PS200WC_107_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'PS200WC_201_1_1000.jpg' },
            { code: '203', name: 'Gris Nuage', image: 'PS200WC_203_1_1000.jpg' },
            { code: '312', name: 'Jaune Beurre', image: 'PS200WC_312_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PS200WC_400_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'PS200WC_410_1_1000.jpg' },
            { code: '411', name: 'Grape', image: 'PS200WC_411_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'PS200WC_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'PS200WC_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'PS200WC_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'PS200WC_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'PS200WC_510_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'PS200WC_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'PS200WC_613_1_1000.jpg' },
            { code: '616', name: 'Vert Thé', image: 'PS200WC_616_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'mackay-kids': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PS200KW_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PS200KC_200_1_1000.jpg' },
            { code: '107', name: 'Moka', image: 'PS200KC_107_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'PS200KC_201_1_1000.jpg' },
            { code: '203', name: 'Gris Nuage', image: 'PS200KC_203_1_1000.jpg' },
            { code: '312', name: 'Jaune Beurre', image: 'PS200KC_312_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PS200KC_400_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'PS200KC_410_1_1000.jpg' },
            { code: '411', name: 'Grape', image: 'PS200KC_411_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'PS200KC_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'PS200KC_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'PS200KC_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'PS200KC_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'PS200KC_510_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'PS200KC_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'PS200KC_613_1_1000.jpg' },
            { code: '616', name: 'Vert Thé', image: 'PS200KC_616_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'hobart': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PL200UW_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PL200UC_200_1_1000.jpg' },
            { code: '107', name: 'Moka', image: 'PL200UC_107_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'PL200UC_201_1_1000.jpg' },
            { code: '203', name: 'Gris Nuage', image: 'PL200UC_203_1_1000.jpg' },
            { code: '312', name: 'Jaune Beurre', image: 'PL200UC_312_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PL200UC_400_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'PL200UC_410_1_1000.jpg' },
            { code: '411', name: 'Grape', image: 'PL200UC_411_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'PL200UC_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'PL200UC_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'PL200UC_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'PL200UC_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'PL200UC_510_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'PL200UC_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'PL200UC_613_1_1000.jpg' },
            { code: '616', name: 'Vert Thé', image: 'PL200UC_616_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'hobart-woman': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PL200WW_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PL200WC_200_1_1000.jpg' },
            { code: '107', name: 'Moka', image: 'PL200WC_107_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'PL200WC_201_1_1000.jpg' },
            { code: '203', name: 'Gris Nuage', image: 'PL200WC_203_1_1000.jpg' },
            { code: '312', name: 'Jaune Beurre', image: 'PL200WC_312_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PL200WC_400_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'PL200WC_410_1_1000.jpg' },
            { code: '411', name: 'Grape', image: 'PL200WC_411_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'PL200WC_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'PL200WC_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'PL200WC_502_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'PL200WC_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'PL200WC_510_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'PL200WC_602_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'PL200WC_613_1_1000.jpg' },
            { code: '616', name: 'Vert Thé', image: 'PL200WC_616_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'bogan': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PS160U_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PS160U_200_1_1000.jpg' },
            { code: '222', name: 'Gris Ultimate', image: 'PS160U_222_1_1000.jpg' },
            { code: '300', name: 'Jaune', image: 'PS160U_300_1_1000.jpg' },
            { code: '303', name: 'Orange Fluo', image: 'PS160U_303_1_1000.jpg' },
            { code: '304', name: 'Jaune Fluo', image: 'PS160U_304_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PS160U_400_1_1000.jpg' },
            { code: '417', name: 'Corail Fluo', image: 'PS160U_417_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'PS160U_512_1_1000.jpg' },
            { code: '610', name: 'Vert Fluo', image: 'PS160U_610_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'bogan-woman': {
        colors: [
            { code: '100', name: 'Blanc', image: 'PS160W_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'PS160W_200_1_1000.jpg' },
            { code: '222', name: 'Gris Ultimate', image: 'PS160W_222_1_1000.jpg' },
            { code: '300', name: 'Jaune', image: 'PS160W_300_1_1000.jpg' },
            { code: '303', name: 'Orange Fluo', image: 'PS160W_303_1_1000.jpg' },
            { code: '304', name: 'Jaune Fluo', image: 'PS160W_304_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'PS160W_400_1_1000.jpg' },
            { code: '417', name: 'Corail Fluo', image: 'PS160W_417_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'PS160W_512_1_1000.jpg' },
            { code: '610', name: 'Vert Fluo', image: 'PS160W_610_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'avalon': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK215WV_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK215CV_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'MK215CV_201_1_1000.jpg' },
            { code: '202', name: 'Gris Chiné', image: 'MK215CV_202_1_1000.jpg' },
            { code: '103', name: 'Sable', image: 'MK215CV_103_1_1000.jpg' },
            { code: '104', name: 'Marron', image: 'MK215CV_104_1_1000.jpg' },
            { code: '301', name: 'Orange', image: 'MK215CV_301_1_1000.jpg' },
            { code: '305', name: 'Or', image: 'MK215CV_305_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK215CV_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'MK215CV_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK215CV_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'MK215CV_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK215CV_502_1_1000.jpg' },
            { code: '505', name: 'Atoll', image: 'MK215CV_505_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'MK215CV_600_1_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'MK215CV_601_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'MK215CV_602_1_1000.jpg' },
            { code: '604', name: 'Lime', image: 'MK215CV_604_1_1000.jpg' },
            { code: '605', name: 'Vert Real', image: 'MK215CV_605_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'MK215CV_613_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'trinity': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK214WV_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK214CV_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'MK214CV_201_1_1000.jpg' },
            { code: '202', name: 'Gris Chiné', image: 'MK214CV_202_1_1000.jpg' },
            { code: '103', name: 'Sable', image: 'MK214CV_103_1_1000.jpg' },
            { code: '104', name: 'Marron', image: 'MK214CV_104_1_1000.jpg' },
            { code: '301', name: 'Orange', image: 'MK214CV_301_1_1000.jpg' },
            { code: '305', name: 'Or', image: 'MK214CV_305_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK214CV_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'MK214CV_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK214CV_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'MK214CV_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK214CV_502_1_1000.jpg' },
            { code: '505', name: 'Atoll', image: 'MK214CV_505_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'MK214CV_600_1_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'MK214CV_601_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'MK214CV_602_1_1000.jpg' },
            { code: '604', name: 'Lime', image: 'MK214CV_604_1_1000.jpg' },
            { code: '605', name: 'Vert Real', image: 'MK214CV_605_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'sterling': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK242WV_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK242CV_200_1_1000.jpg' },
            { code: '103', name: 'Sable', image: 'MK242CV_103_1_1000.jpg' },
            { code: '301', name: 'Orange', image: 'MK242CV_301_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK242CV_400_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK242CV_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'MK242CV_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK242CV_502_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'MK242CV_602_1_1000.jpg' },
            { code: '202', name: 'Gris Chiné', image: 'MK242CV_202_1_1000.jpg' }
        ],
        currentIndex: 0
    }
};

// Function to change color and image
function changeColor(productId, colorCode, colorName) {
    const product = poloData[productId];
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
    
    // Update image source
    const imageUrl = `https://pro.horseprint.fr/images/polos/${product.colors[colorIndex].image}`;
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

// Function to navigate colors with arrows
function navigateColor(productId, direction) {
    const product = poloData[productId];
    if (!product) return;

    let newIndex = product.currentIndex + direction;
    
    // Handle wraparound
    if (newIndex < 0) {
        newIndex = product.colors.length - 1;
    } else if (newIndex >= product.colors.length) {
        newIndex = 0;
    }

    const newColor = product.colors[newIndex];
    changeColor(productId, newColor.code, newColor.name);
}

// Protéger automatiquement toutes les occurrences de HorsePrint
window.addEventListener('load', function() {
    setTimeout(function() {
        // Trouver tous les éléments contenant HorsePrint
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.includes('HorsePrint')) {
                const parent = node.parentNode;
                if (!parent.classList.contains('notranslate')) {
                    // Remplacer le texte par une version protégée
                    const newHTML = node.textContent.replace(
                        /HorsePrint/g, 
                        '<span class="notranslate">HorsePrint</span>'
                    );
                    
                    if (newHTML !== node.textContent) {
                        parent.innerHTML = parent.innerHTML.replace(
                            node.textContent, 
                            newHTML
                        );
                    }
                }
            }
        }
    }, 2000); // Attendre que Google Translate se charge
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Empêcher le scroll du body quand le menu est ouvert
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Fermer le menu si on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        menu.classList.remove('active');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.25)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
        header.style.boxShadow = 'none';
    }
});

// Enhanced interactions
document.querySelectorAll('.product-slide, .contact-card, .level-card, .service-card, .advantage-card, .polo-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// =================== FORMULAIRE MULTI-ÉTAPES ===================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return; // Exit if no form found (polo page)
    
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressFill = document.getElementById('progressFill');
    const successMessage = document.getElementById('successMessage');

    // Fonction pour afficher une étape
    function showStep(step) {
        // Masquer toutes les étapes
        document.querySelectorAll('.form-step').forEach(s => {
            s.classList.remove('active');
        });

        // Afficher l'étape demandée
        const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        if (stepElement) {
            stepElement.classList.add('active');
        }

        // Mettre à jour les indicateurs de progression
        updateProgressIndicators(step);

        // Gérer l'affichage des boutons
        updateNavigationButtons(step);

        // Mettre à jour la barre de progression
        updateProgressBar(step);
    }

    // Fonction pour mettre à jour les indicateurs de progression
    function updateProgressIndicators(step) {
        document.querySelectorAll('.step').forEach((s, index) => {
            const stepNumber = index + 1;
            s.classList.remove('active', 'completed');
            
            if (stepNumber === step) {
                s.classList.add('active');
            } else if (stepNumber < step) {
                s.classList.add('completed');
            }
        });
    }

    // Fonction pour mettre à jour la barre de progression
    function updateProgressBar(step) {
        const percentage = (step / totalSteps) * 100;
        progressFill.style.width = percentage + '%';
    }

    // Fonction pour gérer l'affichage des boutons
    function updateNavigationButtons(step) {
        // Bouton précédent
        if (step === 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }

        // Boutons suivant et envoyer
        if (step === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    // Fonction de validation pour chaque étape
    function validateStep(step) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (field.type === 'checkbox') {
                // Pour les checkboxes required (comme les CGU)
                if (!field.checked) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            } else if (field.hasAttribute('multiple')) {
                // Pour les selects multiple
                if (field.selectedOptions.length === 0) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            } else {
                // Pour les autres champs
                if (!field.value.trim()) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            }
        });

        if (!isValid) {
            // Scroll vers le premier champ invalide
            const firstInvalidField = currentStepElement.querySelector('[required][style*="border-color: rgb(239, 68, 68)"]');
            if (firstInvalidField) {
                firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalidField.focus();
            }
        }

        return isValid;
    }

    // Fonction pour générer le récapitulatif
    function generateSummary() {
        const formData = new FormData(form);
        const summaryContainer = document.getElementById('formSummary');
        summaryContainer.innerHTML = '';

        // Informations de base
        const basicInfo = [
            { label: 'Société', value: formData.get('company') },
            { label: 'Nom', value: formData.get('name') },
            { label: 'Email', value: formData.get('email') },
            { label: 'Téléphone', value: formData.get('phone') || 'Non renseigné' }
        ];

        basicInfo.forEach(info => {
            if (info.value) {
                const div = document.createElement('div');
                div.className = 'summary-item';
                div.innerHTML = `<span class="summary-label">${info.label}:</span><span class="summary-value">${info.value}</span>`;
                summaryContainer.appendChild(div);
            }
        });

        // Informations projet
        const projectInfo = [
            { label: 'Type de projet', value: formData.get('project_type') },
            { label: 'Type d\'événement', value: formData.get('event_type') || 'Non spécifié' },
            { label: 'Budget estimé', value: formData.get('budget_range') || 'À définir' }
        ];

        projectInfo.forEach(info => {
            if (info.value && info.value !== '') {
                const div = document.createElement('div');
                div.className = 'summary-item';
                div.innerHTML = `<span class="summary-label">${info.label}:</span><span class="summary-value">${info.value}</span>`;
                summaryContainer.appendChild(div);
            }
        });

        // Niveaux de qualité sélectionnés
        const qualityLevels = Array.from(form.querySelector('#quality_levels').selectedOptions).map(o => o.text);
        if (qualityLevels.length > 0) {
            const div = document.createElement('div');
            div.className = 'summary-item';
            div.innerHTML = `<span class="summary-label">Niveaux de qualité:</span><span class="summary-value">${qualityLevels.join(', ')}</span>`;
            summaryContainer.appendChild(div);
        }

        // Produits sélectionnés
        const selectedProducts = Array.from(form.querySelectorAll('input[name="products[]"]:checked')).map(cb => {
            return cb.closest('.checkbox-item').querySelector('span:last-child').textContent;
        });
        if (selectedProducts.length > 0) {
            const div = document.createElement('div');
            div.className = 'summary-item';
            div.innerHTML = `<span class="summary-label">Produits souhaités:</span><span class="summary-value">${selectedProducts.join(', ')}</span>`;
            summaryContainer.appendChild(div);
        }
    }

    // Événement bouton suivant
    nextBtn.addEventListener('click', function() {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
                
                // Générer le récapitulatif à l'étape 4
                if (currentStep === 4) {
                    generateSummary();
                }
            }
        }
    });

    // Événement bouton précédent
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Validation en temps réel
    form.addEventListener('input', function(e) {
        if (e.target.hasAttribute('required')) {
            if (e.target.type === 'checkbox') {
                if (e.target.checked) {
                    e.target.style.borderColor = '';
                }
            } else if (e.target.hasAttribute('multiple')) {
                if (e.target.selectedOptions.length > 0) {
                    e.target.style.borderColor = '';
                }
            } else if (e.target.value.trim()) {
                e.target.style.borderColor = '';
            }
        }
    });

    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation finale
        if (!validateStep(currentStep)) {
            return;
        }

        // Afficher un loader
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Préparation de l\'email...';
        submitBtn.disabled = true;

        // Collecter toutes les données du formulaire
        const formData = new FormData(form);
        
        // Ajouter les valeurs multiples dans un format lisible
        const quantities = Array.from(form.querySelector('#quantities').selectedOptions).map(o => o.text);
        const qualityLevels = Array.from(form.querySelector('#quality_levels').selectedOptions).map(o => o.text);
        const selectedProducts = Array.from(form.querySelectorAll('input[name="products[]"]:checked')).map(cb => {
            return cb.closest('.checkbox-item').querySelector('span:last-child').textContent;
        });

        // Construire le contenu de l'email
        let emailBody = "=== DEMANDE DE DEVIS HORSEPRINT ===\n\n";
        
        emailBody += "INFORMATIONS DE CONTACT:\n";
        emailBody += `Société: ${formData.get('company') || 'Non renseigné'}\n`;
        emailBody += `Nom: ${formData.get('name') || 'Non renseigné'}\n`;
        emailBody += `Email: ${formData.get('email') || 'Non renseigné'}\n`;
        emailBody += `Téléphone: ${formData.get('phone') || 'Non renseigné'}\n`;
        emailBody += `Préférence contact: ${formData.get('contact_preference') || 'Non spécifié'}\n\n`;
        
        emailBody += "PROJET:\n";
        emailBody += `Type de projet: ${formData.get('project_type') || 'Non spécifié'}\n`;
        emailBody += `Type d'événement: ${formData.get('event_type') || 'Non spécifié'}\n`;
        emailBody += `Description: ${formData.get('description') || 'Non renseigné'}\n`;
        emailBody += `Délai souhaité: ${formData.get('deadline') || 'Non spécifié'}\n`;
        emailBody += `Date événement: ${formData.get('event_date') || 'Non spécifiée'}\n\n`;
        
        emailBody += "SPÉCIFICATIONS:\n";
        emailBody += `Quantités: ${quantities.length > 0 ? quantities.join(', ') : 'Non spécifié'}\n`;
        emailBody += `Niveaux de qualité: ${qualityLevels.length > 0 ? qualityLevels.join(', ') : 'Non spécifié'}\n`;
        emailBody += `Budget: ${formData.get('budget_range') || 'À définir'}\n`;
        emailBody += `Produits souhaités: ${selectedProducts.length > 0 ? selectedProducts.join(', ') : 'Non spécifié'}\n`;
        emailBody += `Exigences particulières: ${formData.get('special_requirements') || 'Aucune'}\n\n`;
        
        emailBody += "INFORMATIONS COMPLÉMENTAIRES:\n";
        emailBody += `Délai de réponse souhaité: ${formData.get('contact_timeframe') || 'Standard'}\n`;
        emailBody += `Informations supplémentaires: ${formData.get('additional_info') || 'Aucune'}\n`;
        emailBody += `Newsletter: ${formData.get('newsletter') === 'yes' ? 'Oui' : 'Non'}\n\n`;
        
        emailBody += "=== FIN DE LA DEMANDE ===";

        // Préparer le sujet et le contenu
        const subject = `Demande de devis HorsePrint - ${formData.get('company') || 'Nouveau client'}`;
        
        // Encoder pour URL
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(emailBody);
        
        // Créer le lien mailto
        const mailtoLink = `mailto:hello@horseprint.fr?subject=${encodedSubject}&body=${encodedBody}`;
        
        // Essayer d'ouvrir le client email
        try {
            window.location.href = mailtoLink;
            
            // Afficher le message de succès après un délai
            setTimeout(() => {
                document.querySelector('.contact-form-wrapper').style.display = 'none';
                successMessage.innerHTML = `
                    <h3>Email préparé !</h3>
                    <p>Votre client email devrait s'ouvrir avec le message pré-rempli.<br>
                    Si rien ne s'est passé, vous pouvez :</p>
                    <p><strong>1. Copier l'email :</strong> hello@horseprint.fr</p>
                    <p><strong>2. Coller le contenu ci-dessous dans votre email :</strong></p>
                    <textarea readonly style="width:100%; height:200px; margin:10px 0; padding:10px; border:1px solid #ccc; border-radius:5px;">${emailBody}</textarea>
                    <p><strong>3. Envoyer manuellement</strong></p>
                `;
                successMessage.style.display = 'block';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
            
        } catch (error) {
            console.error('Erreur mailto:', error);
            // Afficher directement les informations de secours
            document.querySelector('.contact-form-wrapper').style.display = 'none';
            successMessage.innerHTML = `
                <h3>Envoi par email manuel</h3>
                <p>Veuillez copier les informations ci-dessous et les envoyer à :</p>
                <p><strong>Email :</strong> hello@horseprint.fr</p>
                <p><strong>Sujet :</strong> ${subject}</p>
                <textarea readonly style="width:100%; height:200px; margin:10px 0; padding:10px; border:1px solid #ccc; border-radius:5px;">${emailBody}</textarea>
                <button onclick="this.previousElementSibling.select(); document.execCommand('copy'); alert('Contenu copié!');" style="padding:10px 20px; background:#002DFF; color:white; border:none; border-radius:5px; cursor:pointer;">Copier le contenu</button>
            `;
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // Améliorer l'UX des selects multiples
    const multiSelects = document.querySelectorAll('select[multiple]');
    multiSelects.forEach(select => {
        select.addEventListener('change', function() {
            const selectedCount = this.selectedOptions.length;
            if (selectedCount > 0) {
                this.style.borderColor = 'var(--primary)';
            }
        });
    });

    // Améliorer l'UX des checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentItem = this.closest('.checkbox-item');
            if (parentItem) {
                if (this.checked) {
                    parentItem.style.background = 'rgba(0, 45, 255, 0.1)';
                } else {
                    parentItem.style.background = 'rgba(255, 255, 255, 0.5)';
                }
            }
        });
    });

    // Initialiser l'affichage de la première étape
    showStep(1);
});

// Fonction pour afficher/masquer le widget
function toggleTranslate() {
    const content = document.getElementById('translateContent');
    const button = document.querySelector('.translate-toggle');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        button.innerHTML = '🌐 Traduire';
    } else {
        content.classList.add('show');
        button.innerHTML = '✕ Fermer';
    }
}

// Fonction pour les drapeaux personnalisés
function translateTo(lang) {
    // Mettre à jour les boutons
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Activer la traduction
    if (lang === 'fr') {
        // Retour au français
        window.location.reload();
    } else {
        // Déclencher la traduction Google
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
        }
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Charger la langue sauvegardée au démarrage
window.addEventListener('load', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== 'fr') {
        setTimeout(() => translateTo(savedLang), 1000);
    }
});

// Keyboard navigation for polo cards
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedCard = document.activeElement.closest('.polo-card');
        if (focusedCard) {
            const productId = focusedCard.getAttribute('data-product');
            const direction = e.key === 'ArrowLeft' ? -1 : 1;
            navigateColor(productId, direction);
            e.preventDefault();
        }
    }
});

// Make polo cards focusable for keyboard navigation
document.querySelectorAll('.polo-card').forEach(card => {
    card.setAttribute('tabindex', '0');
});

// =================== GOOGLE TRANSLATE AVEC PERSISTANCE ===================

// Initialisation Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,de,it,nl,pt,ru,zh,ar,ja',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
    
    // Restaurer la langue sauvegardée après initialisation
    setTimeout(function() {
        restoreSavedLanguage();
        setupLanguageMonitoring();
    }, 1000);
}

// Fonction pour sauvegarder et surveiller les changements de langue
function setupLanguageMonitoring() {
    // Observer les changements sur le body pour détecter les traductions
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                setTimeout(saveCurrentLanguage, 500);
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });

    // Observer aussi les changements dans le sélecteur Google Translate
    const checkForSelector = setInterval(function() {
        const selector = document.querySelector('.goog-te-combo');
        if (selector) {
            selector.addEventListener('change', function() {
                setTimeout(saveCurrentLanguage, 500);
            });
            clearInterval(checkForSelector);
        }
    }, 100);
}

// Fonction pour sauvegarder la langue actuelle
function saveCurrentLanguage() {
    const body = document.body;
    
    // Vérifier si la page est traduite
    if (body.classList.contains('translated-ltr') || body.classList.contains('translated-rtl')) {
        // Essayer de récupérer la langue depuis le sélecteur
        const selector = document.querySelector('.goog-te-combo');
        if (selector && selector.value && selector.value !== '') {
            const langCode = selector.value.split('|')[1] || selector.value;
            localStorage.setItem('gtranslate_language', langCode);
            console.log('Langue sauvegardée:', langCode);
        }
    } else {
        // Page en français
        localStorage.setItem('gtranslate_language', 'fr');
        console.log('Langue sauvegardée: fr (original)');
    }
}

// Fonction pour restaurer la langue sauvegardée
function restoreSavedLanguage() {
    const savedLang = localStorage.getItem('gtranslate_language');
    
    if (savedLang && savedLang !== 'fr') {
        console.log('Restauration de la langue:', savedLang);
        
        // Attendre que le sélecteur soit disponible
        const waitForSelector = setInterval(function() {
            const selector = document.querySelector('.goog-te-combo');
            if (selector) {
                // Déclencher la traduction
                selector.value = savedLang;
                selector.dispatchEvent(new Event('change'));
                clearInterval(waitForSelector);
            }
        }, 100);
        
        // Timeout de sécurité
        setTimeout(function() {
            clearInterval(waitForSelector);
        }, 5000);
    }
}

// Fonction pour changer manuellement de langue (pour vos boutons personnalisés)
function changeLanguage(langCode) {
    if (langCode === 'fr') {
        // Retour au français original
        window.location.reload();
        localStorage.setItem('gtranslate_language', 'fr');
    } else {
        // Traduction vers autre langue
        const selector = document.querySelector('.goog-te-combo');
        if (selector) {
            selector.value = langCode;
            selector.dispatchEvent(new Event('change'));
            localStorage.setItem('gtranslate_language', langCode);
        }
    }
}

// Mise à jour de la fonction toggleTranslate existante
function toggleTranslate() {
    const content = document.getElementById('translateContent');
    const button = document.querySelector('.translate-toggle');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        button.innerHTML = '🌐 Traduire';
    } else {
        content.classList.add('show');
        button.innerHTML = '✕ Fermer';
    }
}

// Mise à jour de la fonction translateTo pour la persistance
function translateTo(lang) {
    // Mettre à jour les boutons
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Changer la langue
    changeLanguage(lang);
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Charger le script Google Translate
    if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
    }
});

// Fonction pour protéger automatiquement HorsePrint partout
function protectHorsePrintText() {
    setTimeout(function() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    // Ignorer les nœuds déjà dans un élément notranslate
                    if (node.parentNode.closest('.notranslate')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    // Accepter seulement les nœuds contenant HorsePrint
                    if (node.textContent.includes('HorsePrint')) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                }
            },
            false
        );

        let node;
        const nodesToProcess = [];
        
        // Collecter tous les nœuds à traiter
        while (node = walker.nextNode()) {
            nodesToProcess.push(node);
        }
        
        // Traiter chaque nœud
        nodesToProcess.forEach(function(textNode) {
            const parent = textNode.parentNode;
            if (parent && !parent.classList.contains('notranslate')) {
                const text = textNode.textContent;
                if (text.includes('HorsePrint')) {
                    // Remplacer le texte par une version protégée
                    const newHTML = text.replace(
                        /HorsePrint( Pro)?/g, 
                        '<span class="notranslate">HorsePrint$1</span>'
                    );
                    
                    if (newHTML !== text) {
                        // Créer un élément temporaire pour parser le HTML
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newHTML;
                        
                        // Remplacer le nœud texte par les nouveaux éléments
                        const fragment = document.createDocumentFragment();
                        while (tempDiv.firstChild) {
                            fragment.appendChild(tempDiv.firstChild);
                        }
                        
                        parent.replaceChild(fragment, textNode);
                    }
                }
            }
        });
    }, 2000); // Délai pour que Google Translate se charge
}

// Mise à jour de la fonction d'initialisation Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,de,it,nl,pt,ru,zh,ar,ja',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
    
    // Protéger HorsePrint avant et après l'initialisation
    protectHorsePrintText();
    
    // Restaurer la langue sauvegardée après initialisation
    setTimeout(function() {
        restoreSavedLanguage();
        setupLanguageMonitoring();
        // Protéger à nouveau après restauration de langue
        protectHorsePrintText();
    }, 1000);
}

// Observer les changements de traduction pour re-protéger si nécessaire
function setupLanguageMonitoring() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                setTimeout(function() {
                    saveCurrentLanguage();
                    // Re-protéger HorsePrint après chaque changement de langue
                    protectHorsePrintText();
                }, 500);
            }
        });
    });
    
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });

    const checkForSelector = setInterval(function() {
        const selector = document.querySelector('.goog-te-combo');
        if (selector) {
            selector.addEventListener('change', function() {
                setTimeout(function() {
                    saveCurrentLanguage();
                    protectHorsePrintText();
                }, 500);
            });
            clearInterval(checkForSelector);
        }
    }, 100);
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Protéger HorsePrint dès le chargement
    protectHorsePrintText();
    
    // Charger le script Google Translate
    if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
    }
});

// Fonction pour rediriger vers l'accueil au clic sur le logo
function goToHome() {
    window.location.href = 'index.html';
}

// Ajouter l'événement de clic sur le logo (sécurité supplémentaire)
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});