// ==========================================
// SCRIPT BODYWARMER & VESTES COMPLET
// Inclut : Soft Shell, Parkas, Polaires, K-ways, Bodywarmers
// ==========================================

const vestesData = {
    // SOFT SHELL RICHMOND
    'richmond': {
        colors: [
            { code: '200', name: 'Noir', image: 'SSZ280U_200_1_1000.jpg' },
            { code: '204', name: 'Gris Pierre', image: 'SSZ280U_204_1_1000.jpg' },
            { code: '413', name: 'Rouge Sunset', image: 'SSZ280U_413_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'SSZ280U_502_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'SSZ280U_512_1_1000.jpg' },
            { code: '615', name: 'Vert Mer', image: 'SSZ280U_615_1_1000.jpg' }
        ],
        currentIndex: 4  // Marine Profond par défaut
    },
    'richmond-woman': {
        colors: [
            { code: '200', name: 'Noir', image: 'SSZ280W_200_1_1000.jpg' },
            { code: '204', name: 'Gris Pierre', image: 'SSZ280W_204_1_1000.jpg' },
            { code: '413', name: 'Rouge Sunset', image: 'SSZ280W_413_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'SSZ280W_502_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'SSZ280W_512_1_1000.jpg' },
            { code: '615', name: 'Vert Mer', image: 'SSZ280W_615_1_1000.jpg' }
        ],
        currentIndex: 1  // Gris Pierre par défaut
    },
    'richmond-kids': {
        colors: [
            { code: '200', name: 'Noir', image: 'SSZ280K_200_1_1000.jpg' },
            { code: '204', name: 'Gris Pierre', image: 'SSZ280K_204_1_1000.jpg' },
            { code: '413', name: 'Rouge Sunset', image: 'SSZ280K_413_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'SSZ280K_502_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'SSZ280K_512_1_1000.jpg' },
            { code: '615', name: 'Vert Mer', image: 'SSZ280K_615_1_1000.jpg' }
        ],
        currentIndex: 3  // Bleu Royal par défaut
    },

    // VESTE MATELASSÉE GRAFTON
    'grafton': {
        colors: [
            { code: '200', name: 'Noir', image: 'JG300U_200_1_1000.jpg' },
            { code: '108', name: 'Bone', image: 'JG300U_108_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'JG300U_201_1_1000.jpg' },
            { code: '310', name: 'Orange Cuivre', image: 'JG300U_310_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'JG300U_403_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'JG300U_512_1_1000.jpg' },
            { code: '513', name: 'Bleu Pétrole', image: 'JG300U_513_1_1000.jpg' },
            { code: '514', name: 'Bleu Glacial', image: 'JG300U_514_1_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'JG300U_601_1_1000.jpg' }
        ],
        currentIndex: 5  // Marine Profond par défaut
    },

    // BODYWARMER MELTON
    'melton': {
        colors: [
            { code: '200', name: 'Noir', image: 'VG200U_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'VG200U_201_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'VG200U_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'VG200U_500_1_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'VG200U_601_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'VG200U_613_1_1000.jpg' }
        ],
        currentIndex: 5  // Sauge par défaut
    },

    // K-WAY STOCKTON
    'stockton': {
        colors: [
            { code: '100', name: 'Blanc', image: 'WZ60U_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'WZ60U_200_1_1000.jpg' },
            { code: '303', name: 'Orange Fluo', image: 'WZ60U_303_1_1000.jpg' },
            { code: '304', name: 'Jaune Fluo', image: 'WZ60U_304_1_1000.jpg' },
            { code: '408', name: 'Rose Fluo', image: 'WZ60U_408_1_1000.jpg' },
            { code: '412', name: 'Rouge Fluo', image: 'WZ60U_412_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'WZ60U_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'WZ60U_502_1_1000.jpg' },
            { code: '610', name: 'Vert Fluo', image: 'WZ60U_610_1_1000.jpg' }
        ],
        currentIndex: 3  // Jaune Fluo par défaut
    },
    'stockton-kids': {
        colors: [
            { code: '100', name: 'Blanc', image: 'WZ70K_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'WZ70K_200_1_1000.jpg' },
            { code: '303', name: 'Orange Fluo', image: 'WZ70K_303_1_1000.jpg' },
            { code: '304', name: 'Jaune Fluo', image: 'WZ70K_304_1_1000.jpg' },
            { code: '408', name: 'Rose Fluo', image: 'WZ70K_408_1_1000.jpg' },
            { code: '412', name: 'Rouge Fluo', image: 'WZ70K_412_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'WZ70K_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'WZ70K_502_1_1000.jpg' },
            { code: '610', name: 'Vert Fluo', image: 'WZ70K_610_1_1000.jpg' }
        ],
        currentIndex: 8  // Vert Fluo par défaut
    },

    // POLAIRES PERTH
    'perth': {
        colors: [
            { code: '200', name: 'Noir', image: 'MK610V_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'MK610V_201_1_1000.jpg' },
            { code: '309', name: 'Ivoire', image: 'MK610V_309_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK610V_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'MK610V_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK610V_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK610V_502_1_1000.jpg' },
            { code: '514', name: 'Bleu Glacial', image: 'MK610V_514_1_1000.jpg' },
            { code: '617', name: 'Vert Profond', image: 'MK610V_617_1_1000.jpg' }
        ],
        currentIndex: 7  // Bleu Glacial par défaut
    },
    'perth-woman': {
        colors: [
            { code: '200', name: 'Noir', image: 'FZ280W_200_1_1000.jpg' },
            { code: '201', name: 'Gris Foncé', image: 'FZ280W_201_1_1000.jpg' },
            { code: '309', name: 'Ivoire', image: 'FZ280W_309_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'FZ280W_400_1_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'FZ280W_403_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'FZ280W_500_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'FZ280W_502_1_1000.jpg' },
            { code: '514', name: 'Bleu Glacial', image: 'FZ280W_514_1_1000.jpg' },
            { code: '617', name: 'Vert Profond', image: 'FZ280W_617_1_1000.jpg' }
        ],
        currentIndex: 8  // Vert Profond par défaut
    },
    'perth-kids': {
        colors: [
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
        currentIndex: 4  // Bordeaux par défaut
    }
};

// Function to change colors for vestes (COPIE EXACTE DES POLOS/TSHIRTS)
function changeColorVestes(productId, colorCode, colorName) {
    const product = vestesData[productId];
    if (!product) return;

    // Find color index
    const colorIndex = product.colors.findIndex(color => color.code === colorCode);
    if (colorIndex === -1) return;

    // Update current index
    product.currentIndex = colorIndex;

    // Update UI
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (!card) return;

    const image = card.querySelector('.current-image');
    const colorIndicator = card.querySelector('.color-indicator');
    
    // Update image source (vestes folder)
    const imageUrl = `https://pro.horseprint.fr/images/vestes/${product.colors[colorIndex].image}`;
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

    // Add animation effect (same as polos/tshirts)
    image.style.transform = 'scale(0.95)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 200);
}

// Function to navigate colors with arrows for vestes (COPIE EXACTE DES POLOS/TSHIRTS)
function navigateColorVestes(productId, direction) {
    const product = vestesData[productId];
    if (!product) return;

    let newIndex = product.currentIndex + direction;
    
    // Handle wraparound
    if (newIndex < 0) {
        newIndex = product.colors.length - 1;
    } else if (newIndex >= product.colors.length) {
        newIndex = 0;
    }

    const newColor = product.colors[newIndex];
    changeColorVestes(productId, newColor.code, newColor.name);
}

// Check if we're on bodywarmer-vestes page and override the functions
if (document.querySelector('#bodywarmer-vestes') || 
    document.querySelector('[data-product*="richmond"]') || 
    document.querySelector('[data-product*="grafton"]') || 
    document.querySelector('[data-product*="melton"]') ||
    document.querySelector('[data-product*="stockton"]') ||
    document.querySelector('[data-product*="perth"]')) {
    
    console.log('🧥 Bodywarmer-vestes page detected - activating vestes functions');
    
    // Override global functions with vestes versions
    window.changeColor = changeColorVestes;
    window.navigateColor = navigateColorVestes;
    
    console.log('✅ Vestes functions active');
    console.log('📦 Vestes products:', Object.keys(vestesData));
} else {
    console.log('❌ No vestes products detected on this page');
}

// Log pour debugging
console.log('🧥 Vestes script loaded');
console.log('📊 Available products:', Object.keys(vestesData));
console.log('🎨 Available colors per product:');
Object.entries(vestesData).forEach(([product, data]) => {
    console.log(`  ${product}: ${data.colors.length} couleurs`);
});

// Display statistics
console.log('📈 Total products in vestes collection:', Object.keys(vestesData).length);
console.log('🎨 Total color combinations:', Object.values(vestesData).reduce((sum, product) => sum + product.colors.length, 0));