// ===========================================================
// BONNETS & CASQUETTES - Color Management System
// Système de gestion des couleurs pour bonnets et casquettes
// ===========================================================

console.log('🧢 Bonnets & Casquettes JS loading...');

// Data structure for bonnets & casquettes products
const bonnetsData = {
    rap: {
        name: "CHAMPION",
        currentIndex: 0,
        colors: [
            { code: "502", name: "Bleu Royal", image: "MCT600V_502_1_1000.jpg" },
            { code: "400", name: "Rouge", image: "MCT600V_400_1_1000.jpg" },
            { code: "200", name: "Noir", image: "MCT600V_200_1_1000.jpg" },
            { code: "1212", name: "Rouge/Noir", image: "MCT600V_1212_1_1000.jpg" },
            { code: "604", name: "Vert Lime", image: "MCT600V_604_1_1000.jpg" }
        ]
    },
    team: {
        name: "CLASSIC",
        currentIndex: 0,
        colors: [
            { code: "806", name: "Rouge/Blanc", image: "MCT200V_806_1_1000.jpg" },
            { code: "805", name: "Bleu Royal/Blanc", image: "MCT200V_805_1_1000.jpg" },
            { code: "802", name: "Noir/Blanc", image: "MCT200V_802_1_1000.jpg" },
            { code: "1609", name: "Marine/Blanc", image: "MCT200V_1609_1_1000.jpg" },
            { code: "1402", name: "Atoll/Blanc", image: "MCT200V_1402_1_1000.jpg" },
            { code: "1136", name: "Blanc/Marine", image: "MCT200V_1136_1_1000.jpg" }
        ]
    },
    top: {
        name: "ESSENTIAL",
        currentIndex: 0,
        colors: [
            { code: "100", name: "Blanc", image: "MCT300V_100_1_1000.jpg" },
            { code: "200", name: "Noir", image: "MCT300V_200_1_1000.jpg" },
            { code: "301", name: "Orange", image: "MCT300V_301_1_1000.jpg" },
            { code: "400", name: "Rouge", image: "MCT300V_400_1_1000.jpg" },
            { code: "500", name: "Marine", image: "MCT300V_500_1_1000.jpg" },
            { code: "501", name: "Bleu Ciel", image: "MCT300V_501_1_1000.jpg" },
            { code: "502", name: "Bleu Royal", image: "MCT300V_502_1_1000.jpg" },
            { code: "505", name: "Atoll", image: "MCT300V_505_1_1000.jpg" }
        ]
    },
    perth: {
        name: "WINTER",
        currentIndex: 0,
        colors: [
            { code: "00", name: "Blanc", image: "204001_00_1_1000.jpg" },
            { code: "03", name: "Gris Clair", image: "204001_03_1_1000.jpg" },
            { code: "07", name: "Gris Foncé", image: "204001_07_1_1000.jpg" },
            { code: "08", name: "Noir", image: "204001_08_1_1000.jpg" },
            { code: "12", name: "Marine", image: "204001_12_1_1000.jpg" },
            { code: "61", name: "Rouge", image: "204001_61_1_1000.jpg" }
        ]
    }
};

// Function to change color for bonnets & casquettes
function changeColorBonnet(productId, colorCode, colorName) {
    console.log(`🎨 Changing ${productId} to color ${colorCode} (${colorName})`);
    
    const product = bonnetsData[productId];
    if (!product) return;

    // Update current index
    const colorIndex = product.colors.findIndex(color => color.code === colorCode);
    if (colorIndex !== -1) {
        product.currentIndex = colorIndex;
    }

    // Update UI
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (!card) return;

    const image = card.querySelector('.current-image');
    const colorIndicator = card.querySelector('.color-indicator');
    
    // Determine folder based on product type
    let folder = 'casquettes';
    if (productId === 'perth') {
        folder = 'bonnets';
    }
    
    // Update image source
    const imageUrl = `https://pro.horseprint.fr/images/${folder}/${product.colors[colorIndex].image}`;
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

// Function to navigate colors with arrows for bonnets & casquettes
function navigateColorBonnet(productId, direction) {
    const product = bonnetsData[productId];
    if (!product) return;

    let newIndex = product.currentIndex + direction;
    
    // Handle wraparound
    if (newIndex < 0) {
        newIndex = product.colors.length - 1;
    } else if (newIndex >= product.colors.length) {
        newIndex = 0;
    }

    const newColor = product.colors[newIndex];
    changeColorBonnet(productId, newColor.code, newColor.name);
}

// Check if we're on bonnets-casquettes page and override the functions
if (document.querySelector('#bonnets-casquettes') || 
    document.querySelector('[data-product*="rap"]') || 
    document.querySelector('[data-product*="team"]') || 
    document.querySelector('[data-product*="top"]') || 
    document.querySelector('[data-product*="perth"]')) {
    
    console.log('🎯 Bonnets & Casquettes page detected - activating bonnet functions');
    
    // Override global functions with bonnet versions
    window.changeColor = changeColorBonnet;
    window.navigateColor = navigateColorBonnet;
    
    console.log('✅ Bonnet functions active');
    console.log('📦 Bonnet products:', Object.keys(bonnetsData));
} else {
    console.log('❌ No bonnets & casquettes detected on this page');
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Bonnets & Casquettes page loaded');
    
    // Hide loading screen
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }, 1500);

    // Initialize fade-in animations
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

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Add stagger effect to product cards
    const productCards = document.querySelectorAll('.polo-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    console.log('🎉 Bonnets & Casquettes animations initialized');
});

// Add loading states for better UX
function addLoadingState(element) {
    element.style.opacity = '0.7';
    element.style.pointerEvents = 'none';
}

function removeLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Enhanced color change with loading states
const originalChangeColor = window.changeColor;
window.changeColor = function(productId, colorCode, colorName) {
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (card) {
        const image = card.querySelector('.current-image');
        addLoadingState(image);
        
        // Call original function
        originalChangeColor(productId, colorCode, colorName);
        
        // Remove loading state after image loads
        setTimeout(() => {
            removeLoadingState(image);
        }, 300);
    }
};

console.log('🧢 Bonnets & Casquettes JS loaded successfully!');