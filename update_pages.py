#!/usr/bin/env python3
"""
Script pour ajouter les optimisations SEO et conversion à toutes les pages HTML
"""

import os
import re

# Numéro WhatsApp
WHATSAPP_NUMBER = "33766244009"

# Code du bouton WhatsApp
WHATSAPP_BUTTON = f'''
<!-- Bouton WhatsApp Flottant -->
<a href="https://wa.me/{WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20HorsePrint%20Pro"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Contactez-nous sur WhatsApp"
   title="Contactez-nous sur WhatsApp">
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.835.745 5.498 2.044 7.805L.07 31.312l7.735-2.028A15.905 15.905 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z" fill="#25D366"/>
        <path d="M25.5 22.7c-.3.85-1.75 1.55-2.85 1.7-.75.1-1.75.15-5.05-1.1-4.2-1.6-6.9-5.9-7.1-6.15-.2-.25-1.7-2.25-1.7-4.3s1.1-3.05 1.5-3.45c.35-.35.85-.5 1.15-.5.25 0 .5 0 .7.05.25.05.55-.05.85.65.3.75 1.05 2.55 1.15 2.75.1.2.15.4.05.65-.1.25-.2.35-.35.55-.2.2-.35.35-.55.55-.15.2-.35.4-.15.75.2.35.9 1.5 1.95 2.45 1.35 1.2 2.45 1.6 2.85 1.75.35.15.55.1.75-.1.2-.2.85-.95 1.05-1.3.2-.35.45-.3.75-.15.3.15 1.95.95 2.3 1.1.35.15.6.25.7.35.1.15.1.75-.2 1.55z" fill="#fff"/>
    </svg>
    <span class="whatsapp-pulse"></span>
</a>
'''

# CSS à ajouter dans le head
CSS_LINKS = '''<link rel="stylesheet" href="css/footer-whatsapp.css">
<link rel="stylesheet" href="css/conversion.css">'''

# Sections à ajouter avant le footer
SECTIONS_BEFORE_FOOTER = '''
    <!-- Section Badges de Confiance -->
    <section class="trust-section">
        <div class="container">
            <h2 class="section-title">Pourquoi choisir HorsePrint Pro ?</h2>
            <div class="trust-grid">
                <div class="trust-item">
                    <div class="trust-icon">✓</div>
                    <h4>Devis gratuit 24h</h4>
                    <p>Réponse rapide et personnalisée à votre demande</p>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">⚡</div>
                    <h4>Production Europe</h4>
                    <p>Qualité garantie et délais maîtrisés</p>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🎨</div>
                    <h4>Design sur-mesure</h4>
                    <p>Création personnalisée selon vos besoins</p>
                </div>
                <div class="trust-item">
                    <div class="trust-icon">🏆</div>
                    <h4>Qualité premium</h4>
                    <p>Matériaux haut de gamme et finitions soignées</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Preuves Sociales (Statistiques) -->
    <section class="social-proof">
        <div class="container">
            <h2 class="section-title">Ils nous font confiance</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <span class="stat-number">15+</span>
                    <span class="stat-label">Années d'expérience</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">1000+</span>
                    <span class="stat-label">Clients professionnels</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">50k+</span>
                    <span class="stat-label">Produits personnalisés</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">100%</span>
                    <span class="stat-label">Made in Europe</span>
                </div>
            </div>
        </div>
    </section>
'''

# Footer enrichi (à lire depuis le fichier)
with open('includes/footer.html', 'r', encoding='utf-8') as f:
    NEW_FOOTER = f.read()

def process_html_file(filepath):
    """Traite un fichier HTML"""
    print(f"Traitement de {filepath}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Ajouter les CSS si pas déjà présents
    if 'footer-whatsapp.css' not in content:
        # Trouver </head> et insérer avant
        content = content.replace('</head>', f'{CSS_LINKS}\n</head>')

    # 2. Ajouter le bouton WhatsApp après translate-widget si pas déjà présent
    if 'whatsapp-float' not in content:
        # Trouver la fin du translate-widget
        if '</div>\n</div>' in content and 'translate-widget' in content:
            # Trouver la fermeture du translate-widget
            pattern = r'(</div>\n</div>\s*<!-- [^>]*translate[^>]*>)'
            if re.search(pattern, content):
                content = re.sub(pattern, r'\1\n' + WHATSAPP_BUTTON, content, count=1)
            else:
                # Sinon chercher juste après translate-widget
                content = content.replace('</div>\n</div>', f'</div>\n</div>\n{WHATSAPP_BUTTON}', 1)

    # 3. Ajouter les sections avant le footer si pas déjà présentes
    if 'trust-section' not in content:
        # Trouver le footer
        footer_patterns = [
            r'(\s*<!-- Footer -->)',
            r'(\s*<footer)',
        ]
        for pattern in footer_patterns:
            if re.search(pattern, content):
                content = re.sub(pattern, SECTIONS_BEFORE_FOOTER + r'\n\1', content, count=1)
                break

    # 4. Remplacer l'ancien footer par le nouveau
    # Trouver le footer actuel (simple)
    old_footer_pattern = r'<footer>.*?</footer>'
    if re.search(old_footer_pattern, content, re.DOTALL):
        # Si le footer est simple, le remplacer
        if 'footer-main' not in content:  # Si pas déjà le nouveau footer
            content = re.sub(old_footer_pattern, NEW_FOOTER, content, flags=re.DOTALL)

    # Écrire le fichier modifié
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✅ {filepath} mis à jour")

# Liste des fichiers à traiter
html_files = [
    'polos.html',
    'tshirts.html',
    'sweats.html',
    'bodywarmer-vestes.html',
    'bonnets-casquettes.html',
    'mailing.html',
    'CLIB2025.html'
]

# Traiter tous les fichiers
for filepath in html_files:
    if os.path.exists(filepath):
        try:
            process_html_file(filepath)
        except Exception as e:
            print(f"❌ Erreur sur {filepath}: {e}")
    else:
        print(f"⚠️  Fichier non trouvé: {filepath}")

print("\n✅ Tous les fichiers ont été traités !")
