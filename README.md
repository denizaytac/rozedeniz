# Roza & Deniz - Hochzeitswebseite

Eine moderne, dreisprachige Hochzeitswebseite im "Sex and the City"-Stil.

## Features

- **Dreisprachig**: Deutsch, Türkisch und Zazaki
- **Responsive Design**: Funktioniert auf allen Geräten
- **Modernes Design**: Eleganter, minimalistischer Stil ohne Kitsch
- **Sektionen**:
  - Hero mit Foto
  - Persönliche Nachricht
  - Zeitplan (17:00 - 01:30 Uhr)
  - FAQ-Bereich

## Installation & Nutzung

### Lokale Vorschau

Einfach die `index.html` Datei in einem Browser öffnen.

### Eigenes Foto hinzufügen

1. Fügt euer Hochzeitsfoto in den Projektordner ein (z.B. `wedding-photo.jpg`)
2. Öffnet `index.html` und ersetzt die Zeile 26-28:

```html
<!-- VORHER -->
<div class="hero-image-placeholder">
    <div class="placeholder-text">Ihr Foto hier</div>
</div>

<!-- NACHHER -->
<div class="hero-image-placeholder">
    <img src="wedding-photo.jpg" alt="Roza & Deniz">
</div>
```

### Hosting

Die Website kann auf verschiedenen Plattformen gehostet werden:

- **GitHub Pages**: Kostenlos und einfach
- **Netlify**: Drag & Drop Upload
- **Vercel**: Automatische Deployments

## Anpassungen

### Texte ändern

Alle Übersetzungen befinden sich in `script.js` im `translations` Objekt.

### Farben anpassen

Die Farbpalette ist in `style.css` in den CSS-Variablen definiert:

```css
:root {
    --primary-color: #d4a5a5;    /* Rosa/Blush */
    --accent-color: #8b7e74;     /* Taupe */
    --text-dark: #2c2c2c;        /* Dunkelgrau */
    --text-light: #6b6b6b;       /* Hellgrau */
    --bg-light: #faf8f6;         /* Cremeweiß */
}
```

### Zeitplan anpassen

Bearbeitet die Timeline-Items in `index.html` (Zeilen 47-68).

### FAQ anpassen

Bearbeitet die FAQ-Items in `index.html` und die entsprechenden Übersetzungen in `script.js`.

## Technologie

- Vanilla HTML/CSS/JavaScript
- Google Fonts (Playfair Display & Montserrat)
- Keine externen Dependencies
- Funktioniert ohne Build-Prozess

## Hochzeitsinformationen

- **Datum**: 23.05.2026
- **Location**: Rohrmeisterei, Schwerte
- **Start**: 17:00 Uhr (Sektempfang)
- **Ende**: 01:30 Uhr (Letzter Song)

---

Mit Liebe erstellt für Roza & Deniz ♡
