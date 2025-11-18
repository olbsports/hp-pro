// ==========================================
// SCRIPT T-SHIRTS (copie exacte de la logique polos)
// ==========================================

const tshirtData = {
    'coast': {
        colors: [
            { code: '100', name: 'Blanc', image: 'TSN165UW_100_1_1000.jpg' },
            { code: '109', name: 'Crème', image: 'TSN165UC_109_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'TSN165UC_200_1_1000.jpg' },
            { code: '221', name: 'Gris Brumeux', image: 'TSN165UC_221_1_1000.jpg' },
            { code: '416', name: 'Flamingo', image: 'TSN165UC_416_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'TSN165UC_512_1_1000.jpg' },
            { code: '519', name: 'Aqua', image: 'TSN165UC_519_1_1000.jpg' },
            { code: '522', name: 'Bleu Arctique', image: 'TSN165UC_522_1_1000.jpg' },
            { code: '619', name: 'Aloé', image: 'TSN165UC_619_1_1000.jpg' },
            { code: '618', name: 'Vert Chasseur', image: 'TSN165UC_618_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'coast-woman': {
        colors: [
            { code: '100', name: 'Blanc', image: 'TSN165WW_100_1_1000.jpg' },
            { code: '109', name: 'Crème', image: 'TSN165WC_109_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'TSN165WC_200_1_1000.jpg' },
            { code: '221', name: 'Gris Brumeux', image: 'TSN165WC_221_1_1000.jpg' },
            { code: '416', name: 'Flamingo', image: 'TSN165WC_416_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'TSN165WC_512_1_1000.jpg' },
            { code: '519', name: 'Aqua', image: 'TSN165WC_519_1_1000.jpg' },
            { code: '522', name: 'Bleu Arctique', image: 'TSN165WC_522_1_1000.jpg' },
            { code: '619', name: 'Aloé', image: 'TSN165WC_619_1_1000.jpg' },
            { code: '618', name: 'Vert Chasseur', image: 'TSN165WC_618_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'coast-kids': {
        colors: [
            { code: '100', name: 'Blanc', image: 'TSN165KW_100_1_1000.jpg' },
            { code: '109', name: 'Crème', image: 'TSN165KC_109_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'TSN165KC_200_1_1000.jpg' },
            { code: '221', name: 'Gris Brumeux', image: 'TSN165KC_221_1_1000.jpg' },
            { code: '416', name: 'Flamingo', image: 'TSN165KC_416_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'TSN165KC_512_1_1000.jpg' },
            { code: '519', name: 'Aqua', image: 'TSN165KC_519_1_1000.jpg' },
            { code: '522', name: 'Bleu Arctique', image: 'TSN165KC_522_1_1000.jpg' },
            { code: '619', name: 'Aloé', image: 'TSN165KC_619_1_1000.jpg' },
            { code: '618', name: 'Vert Chasseur', image: 'TSN165KC_618_1_1000.jpg' }
        ],
        currentIndex: 0
    },
    'palm': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK023WV_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK023CV_200_1_1000.webp' },
            { code: '203', name: 'Gris Foncé', image: 'MK023CV_201_1_1000.webp' },
            { code: '210', name: 'Gris Chiné', image: 'MK023CV_202_1_1000.webp' },
            { code: '300', name: 'Jaune', image: 'MK023CV_300_1_1000.webp' },
            { code: '301', name: 'Orange', image: 'MK023CV_301_1_1000.webp' },
            { code: '305', name: 'Or', image: 'MK023CV_305_1_1000.webp' },
            { code: '313', name: 'Pêche', image: 'MK023CV_313_1_1000.webp' },
            { code: '400', name: 'Rouge', image: 'MK023CV_400_1_1000.webp' },
            { code: '403', name: 'Bordeaux', image: 'MK023CV_403_1_1000.webp' },
            { code: '406', name: 'Fuchsia', image: 'MK023CV_406_1_1000.webp' },
            { code: '410', name: 'Rose Pâle', image: 'MK023CV_410_1_1000.webp' },
            { code: '414', name: 'Corail Frais', image: 'MK023CV_414_1_1000.webp' },
            { code: '501', name: 'Bleu Ciel', image: 'MK023CV_501_1_1000.webp' },
            { code: '502', name: 'Bleu Royal', image: 'MK023CV_502_1_1000.webp' },
            { code: '505', name: 'Atoll', image: 'MK023CV_505_1_1000.webp' },
            { code: '509', name: 'Bleu Fog', image: 'MK023CV_509_1_1000.webp' },
            { code: '510', name: 'Bleu Denim', image: 'MK023CV_510_1_1000.webp' },
            { code: '511', name: 'Violet', image: 'MK023CV_511_1_1000.webp' },
            { code: '512', name: 'Marine Profond', image: 'MK023CV_512_1_1000.webp' },
            { code: '515', name: 'Turquoise Riche', image: 'MK023CV_515_1_1000.webp' },
            { code: '530', name: 'Lilas', image: 'MK023CV_530_1_1000.webp' },
            { code: '600', name: 'Vert Kelly', image: 'MK023CV_600_1_1000.webp' },
            { code: '601', name: 'Vert Kaki', image: 'MK023CV_601_1_1000.webp' },
            { code: '602', name: 'Vert Bouteille', image: 'MK023CV_602_1_1000.webp' },
            { code: '604', name: 'Lime', image: 'MK023CV_604_1_1000.webp' },
            { code: '613', name: 'Sauge', image: 'MK023CV_613_1_1000.webp' }
        ],
        currentIndex: 0
    },
    'palm-woman': {
        colors: [
            { code: '100', name: 'Blanc', image: 'TS190WW_100_2_1000.jpg' },
            { code: '200', name: 'Noir', image: 'TS190WC_200_2_1000.jpg' },
            { code: '203', name: 'Gris Foncé', image: 'TS190WC_201_2_1000.jpg' },
            { code: '210', name: 'Gris Chiné', image: 'TS190WC_202_2_1000.jpg' },
            { code: '300', name: 'Jaune', image: 'TS190WC_300_2_1000.jpg' },
            { code: '301', name: 'Orange', image: 'TS190WC_301_2_1000.jpg' },
            { code: '305', name: 'Or', image: 'TS190WC_305_2_1000.jpg' },
            { code: '313', name: 'Pêche', image: 'TS190WC_313_2_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'TS190WC_400_2_1000.jpg' },
            { code: '403', name: 'Bordeaux', image: 'TS190WC_403_2_1000.jpg' },
            { code: '406', name: 'Fuchsia', image: 'TS190WC_406_2_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'TS190WC_410_2_1000.jpg' },
            { code: '414', name: 'Corail Frais', image: 'TS190WC_414_2_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'TS190WC_501_2_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'TS190WC_502_2_1000.jpg' },
            { code: '505', name: 'Atoll', image: 'TS190WC_505_2_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'TS190WC_509_2_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'TS190WC_510_2_1000.jpg' },
            { code: '511', name: 'Violet', image: 'TS190WC_511_2_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'TS190WC_512_2_1000.jpg' },
            { code: '515', name: 'Turquoise Riche', image: 'TS190WC_515_2_1000.jpg' },
            { code: '530', name: 'Lilas', image: 'TS190WC_530_2_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'TS190WC_600_2_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'TS190WC_601_2_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'TS190WC_602_2_1000.jpg' },
            { code: '604', name: 'Lime', image: 'TS190WC_604_2_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'TS190WC_613_2_1000.jpg' }
        ],
        currentIndex: 0
    },
    'palm-kids': {
        colors: [
            { code: '200', name: 'Noir', image: 'TS190KC_200_1_1000.webp' },
            { code: '203', name: 'Gris Foncé', image: 'TS190KC_201_1_1000.webp' },
            { code: '210', name: 'Gris Chiné', image: 'TS190KC_202_1_1000.webp' },
            { code: '300', name: 'Jaune', image: 'TS190KC_300_1_1000.webp' },
            { code: '301', name: 'Orange', image: 'TS190KC_301_1_1000.webp' },
            { code: '305', name: 'Or', image: 'TS190KC_305_1_1000.webp' },
            { code: '313', name: 'Pêche', image: 'TS190KC_313_1_1000.webp' },
            { code: '400', name: 'Rouge', image: 'TS190KC_400_1_1000.webp' },
            { code: '403', name: 'Bordeaux', image: 'TS190KC_403_1_1000.webp' },
            { code: '406', name: 'Fuchsia', image: 'TS190KC_406_1_1000.webp' },
            { code: '410', name: 'Rose Pâle', image: 'TS190KC_410_1_1000.webp' },
            { code: '414', name: 'Corail Frais', image: 'TS190KC_414_1_1000.webp' },
            { code: '501', name: 'Bleu Ciel', image: 'TS190KC_501_1_1000.webp' },
            { code: '502', name: 'Bleu Royal', image: 'TS190KC_502_1_1000.webp' },
            { code: '505', name: 'Atoll', image: 'TS190KC_505_1_1000.webp' },
            { code: '509', name: 'Bleu Fog', image: 'TS190KC_509_1_1000.webp' },
            { code: '510', name: 'Bleu Denim', image: 'TS190KC_510_1_1000.webp' },
            { code: '511', name: 'Violet', image: 'TS190KC_511_1_1000.webp' },
            { code: '512', name: 'Marine Profond', image: 'TS190KC_512_1_1000.webp' },
            { code: '515', name: 'Turquoise Riche', image: 'TS190KC_515_1_1000.webp' },
            { code: '530', name: 'Lilas', image: 'TS190KC_530_1_1000.webp' },
            { code: '600', name: 'Vert Kelly', image: 'TS190KC_600_1_1000.webp' },
            { code: '601', name: 'Vert Kaki', image: 'TS190KC_601_1_1000.webp' },
            { code: '602', name: 'Vert Bouteille', image: 'TS190KC_602_1_1000.webp' },
            { code: '604', name: 'Lime', image: 'TS190KC_604_1_1000.webp' },
            { code: '613', name: 'Sauge', image: 'TS190KC_613_1_1000.webp' }
        ],
        currentIndex: 0
    },
    'melbourne': {
        colors: [
            { code: '100', name: 'Blanc', image: 'MK022WV_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'MK022CV_200_1_1000.jpg' },
            { code: '203', name: 'Gris Foncé', image: 'MK022CV_201_1_1000.jpg' },
            { code: '210', name: 'Gris Chiné', image: 'MK022CV_202_1_1000.jpg' },
            { code: '300', name: 'Jaune', image: 'MK022CV_300_1_1000.jpg' },
            { code: '301', name: 'Orange', image: 'MK022CV_301_1_1000.jpg' },
            { code: '305', name: 'Or', image: 'MK022CV_305_1_1000.jpg' },
            { code: '313', name: 'Pêche', image: 'MK022CV_313_1_1000.jpg' },
            { code: '400', name: 'Rouge', image: 'MK022CV_400_1_1000.jpg' },
            { code: '406', name: 'Fuchsia', image: 'MK022CV_406_1_1000.jpg' },
            { code: '410', name: 'Rose Pâle', image: 'MK022CV_410_1_1000.jpg' },
            { code: '414', name: 'Corail Frais', image: 'MK022CV_414_1_1000.jpg' },
            { code: '500', name: 'Marine', image: 'MK022CV_500_1_1000.jpg' },
            { code: '501', name: 'Bleu Ciel', image: 'MK022CV_501_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'MK022CV_502_1_1000.jpg' },
            { code: '505', name: 'Atoll', image: 'MK022CV_505_1_1000.jpg' },
            { code: '509', name: 'Bleu Fog', image: 'MK022CV_509_1_1000.jpg' },
            { code: '510', name: 'Bleu Denim', image: 'MK022CV_510_1_1000.jpg' },
            { code: '511', name: 'Violet', image: 'MK022CV_511_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'MK022CV_512_1_1000.jpg' },
            { code: '515', name: 'Turquoise Riche', image: 'MK022CV_515_1_1000.jpg' },
            { code: '530', name: 'Lilas', image: 'MK022CV_530_1_1000.jpg' },
            { code: '600', name: 'Vert Kelly', image: 'MK022CV_600_1_1000.jpg' },
            { code: '601', name: 'Vert Kaki', image: 'MK022CV_601_1_1000.jpg' },
            { code: '602', name: 'Vert Bouteille', image: 'MK022CV_602_1_1000.jpg' },
            { code: '604', name: 'Lime', image: 'MK022CV_604_1_1000.jpg' },
            { code: '605', name: 'Vert Real', image: 'MK022CV_605_1_1000.jpg' },
            { code: '613', name: 'Sauge', image: 'MK022CV_613_1_1000.jpg' }
        ],
        currentIndex: 0
    },
'paradise': {
    colors: [
        { code: '100', name: 'Blanc', image: 'MK156WV_100_1_1000.jpg' },
        { code: '200', name: 'Noir', image: 'MK156CV_200_1_1000.jpg' },
        { code: '201', name: 'Gris Foncé', image: 'MK156CV_201_1_1000.jpg' },
        { code: '202', name: 'Gris Chiné', image: 'MK156CV_202_1_1000.jpg' },
        { code: '400', name: 'Rouge', image: 'MK156CV_400_1_1000.jpg' },
        { code: '500', name: 'Marine', image: 'MK156CV_500_1_1000.jpg' },
        { code: '502', name: 'Bleu Royal', image: 'MK156CV_502_1_1000.jpg' },
        { code: '600', name: 'Vert Kelly', image: 'MK156CV_600_1_1000.jpg' }
    ],
    currentIndex: 0
},
    'derby': {
        colors: [
            { code: '100', name: 'Blanc', image: 'TS151UW_100_1_1000.jpg' },
            { code: '200', name: 'Noir', image: 'TS151UC_200_1_1000.jpg' },
            { code: '303', name: 'Orange Fluo', image: 'TS151UC_303_1_1000.jpg' },
            { code: '304', name: 'Jaune Fluo', image: 'TS151UC_304_1_1000.jpg' },
            { code: '408', name: 'Rose Fluo', image: 'TS151UC_408_1_1000.jpg' },
            { code: '412', name: 'Rouge Fluo', image: 'TS151UC_412_1_1000.jpg' },
            { code: '502', name: 'Bleu Royal', image: 'TS151UC_502_1_1000.jpg' },
            { code: '505', name: 'Atoll', image: 'TS151UC_505_1_1000.jpg' },
            { code: '512', name: 'Marine Profond', image: 'TS151UC_512_1_1000.jpg' },
            { code: '610', name: 'Vert Fluo', image: 'TS151UC_610_1_1000.jpg' }
        ],
        currentIndex: 0
    }
};

// Function to change color and image for T-shirts (COPIE EXACTE DES POLOS)
function changeColorTshirt(productId, colorCode, colorName) {
    const product = tshirtData[productId];
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
    
    // Update image source (T-shirts folder instead of polos)
    const imageUrl = `https://pro.horseprint.fr/images/tshirts/${product.colors[colorIndex].image}`;
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

    // Add animation effect (same as polos)
    image.style.transform = 'scale(0.95)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 200);
}

// Function to navigate colors with arrows for T-shirts (COPIE EXACTE DES POLOS)
function navigateColorTshirt(productId, direction) {
    const product = tshirtData[productId];
    if (!product) return;

    let newIndex = product.currentIndex + direction;
    
    // Handle wraparound
    if (newIndex < 0) {
        newIndex = product.colors.length - 1;
    } else if (newIndex >= product.colors.length) {
        newIndex = 0;
    }

    const newColor = product.colors[newIndex];
    changeColorTshirt(productId, newColor.code, newColor.name);
}

// Check if we're on T-shirts page and override the functions
if (document.querySelector('#tshirts') || 
    document.querySelector('[data-product*="coast"]') || 
    document.querySelector('[data-product*="palm"]') || 
    document.querySelector('[data-product*="melbourne"]') || 
    document.querySelector('[data-product*="derby"]')) {
    
    console.log('🎯 T-shirts page detected - activating T-shirt functions');
    
    // Override global functions with T-shirt versions
    window.changeColor = changeColorTshirt;
    window.navigateColor = navigateColorTshirt;
    
    console.log('✅ T-shirt functions active');
    console.log('📦 T-shirt products:', Object.keys(tshirtData));
} else {
    console.log('❌ No T-shirts detected on this page');
}