// Preloader - Load critical assets before showing page
(function() {
    const preloader = document.getElementById('preloader');

    // Track loaded assets
    let fontsLoaded = false;
    let heroImageLoaded = false;

    // Check if all critical assets are loaded
    function checkAllAssetsLoaded() {
        if (fontsLoaded && heroImageLoaded) {
            // Add a small delay for better UX (minimum 800ms to see the preloader)
            setTimeout(() => {
                preloader.classList.add('fade-out');
                // Remove from DOM after fade out animation completes
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, 800);
        }
    }

    // Load hero image
    const heroImage = new Image();
    heroImage.onload = function() {
        heroImageLoaded = true;
        checkAllAssetsLoaded();
    };
    heroImage.onerror = function() {
        // If image fails to load, still hide preloader
        heroImageLoaded = true;
        checkAllAssetsLoaded();
    };
    heroImage.src = 'hero-main.webp';

    // Check if fonts are loaded
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() {
            fontsLoaded = true;
            checkAllAssetsLoaded();
        });
    } else {
        // Fallback if Font Loading API is not supported
        setTimeout(function() {
            fontsLoaded = true;
            checkAllAssetsLoaded();
        }, 1000);
    }

    // Fallback: Hide preloader after max 5 seconds regardless
    setTimeout(function() {
        if (!preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800);
        }
    }, 5000);
})();

// Wedding Countdown
// Set the wedding date (May 23, 2026 at 17:00)
const weddingDate = new Date("May 23, 2026 17:00:00").getTime();

function updateCountdown() {
    // Get current time
    const now = new Date().getTime();

    // Calculate time difference
    const timeRemaining = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the DOM elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.innerHTML = days >= 0 ? days : 0;
    if (hoursElement) hoursElement.innerHTML = hours >= 0 ? hours : 0;
    if (minutesElement) minutesElement.innerHTML = minutes >= 0 ? minutes : 0;
    if (secondsElement) secondsElement.innerHTML = seconds >= 0 ? seconds : 0;

    // If countdown is finished, display a message
    if (timeRemaining < 0) {
        const countdownSection = document.querySelector('.countdown-timer');
        if (countdownSection) {
            countdownSection.innerHTML = '<div class="countdown-finished">Der große Tag ist da! 🎉</div>';
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();

// Translation data
const translations = {
    de: {
        'hero.date': 'Samstag, 23.05.2026',
        'hero.location': 'Rohrmeisterei, Schwerte',
        'hero.addToCalendar': 'Zum Kalender hinzufügen',
        'countdown.title': 'Countdown bis zur Hochzeit',
        'countdown.days': 'Tage',
        'countdown.hours': 'Stunden',
        'countdown.minutes': 'Minuten',
        'countdown.seconds': 'Sekunden',
        'message.content': `
            <p>Liebe Familie, liebe Alle,</p>
            <p>es ist so weit – wir heiraten! Wir freuen uns riesig, diesen besonderen Tag mit euch zu teilen.</p>
            <p>Deshalb laden wir euch von Herzen ein, mit uns einen wundervollen Tag zu verbringen und gemeinsame neue Erinnerungen zu schaffen.</p>
            <p>Wir können es kaum erwarten, mit euch anzustoßen und kräftig das Tanzbein zu schwingen!</p>
            <p>In Liebe,<br><span class="signature">Roze & Deniz</span></p>
        `,

        'gallery.title': 'Momente unserer Trauung',
        'rsvp.title': 'Rückmeldung',
        'rsvp.text': 'Wir freuen uns über eure Rückmeldungen bis spätestens Ende Februar. Gerne per Mail, WhatsApp, Telefon oder Brieftaube.',
        'rsvp.button': 'Per Mail',
        'rsvp.whatsapp': 'Per WhatsApp',
        'timeline.title': 'Programmablauf',
        'timeline.reception': 'Sektempfang',
        'timeline.placeholder': 'Informationen folgen',
        'timeline.ceremony': 'Trauung',
        'timeline.dinner': 'Dinner',
        'timeline.cake': 'Anschnitt der Torte',
        'timeline.party': 'Party & Tanz',
        'timeline.end': 'Letzter Song',
        'faq.title': 'Häufige Fragen',
        'faq.q1': 'Gibt es einen Dresscode?',
        'faq.a1': 'Kommt so, wie ihr euch wohlfühlt! Wir freuen uns natürlich, wenn ihr euch ein bisschen schick macht, aber das Wichtigste ist, dass wir gemeinsam einen wundervollen Tag verbringen.',
        'faq.q2': 'Bis wann müssen wir zu oder absagen ?',
        'faq.a2': 'Bitte sagt uns bis spätestens Ende Februar ab oder zu. Wenn wir bis dahin keine Zusage erhalten, gehen wir davon aus, dass ihr leider nicht kommen könnt.',
        'faq.q3': 'Fotos von der Hochzeit ?',
        'faq.a3': 'Ein Fotograf wird die wichtigsten Momente des Tages festhalten. Die Fotos werden nach der Hochzeit auf dieser Website zu sehen sein.<br><br>Teilt gerne schon während oder nach der Feier alle eure Handyfotos über eine gemeinsamen Link mit uns. Den QR-Code dazu findet ihr auf Tischkarten bei der Feier.',
        'faq.q4': 'Übernachtungsmöglichkeit',
        'faq.a4': 'Falls ihr Übernachtungsmöglichkeiten benötigt, haben wir eine kleine Liste mit verschiedenen Hotels rausgesucht. Wir freuen uns über eure Rückmeldung.',
        'faq.q5': 'Gibt es Parkmöglichkeiten?',
        'faq.a5': 'Ja, es gibt Parkplätze direkt vor der Location. Diese sind für euch bereits reserviert und bezahlt.',
        'faq.q6': 'Darf ich jemanden mitbringen?',
        'faq.a6': 'Wir freuen uns auf euch! Wir haben leider nur eine begrenzte Anzahl an Gästeplätzen, sodass wir keine Kapazitäten für weitere haben. Ich hoffe ihr versteht das und könnt den Abend trotzdem mit uns genießen.',
        'anfahrt.title': 'Anfahrt',
        'anfahrt.address': 'Rohrmeisterei Schwerte<br>Ruhrstraße 20, 58239 Schwerte',
        'anfahrt.navigate': 'Navigation starten',
        'accommodation.title': 'Übernachtung & Taxi',
        'accommodation.hotels.title': 'Hotelempfehlungen',
        'accommodation.hotels.intro': 'Für eure Übernachtung empfehlen wir folgende Hotels in der Nähe:',
        'accommodation.hotel1.name': 'Hotel Reichshof',
        'accommodation.hotel1.address': 'Bahnhofstr. 32, 58239 Schwerte',
        'accommodation.hotel2.name': 'Breer\'s Hotel',
        'accommodation.hotel2.address': 'Reichshofstr. 104, 58239 Schwerte',
        'accommodation.hotel3.name': 'Hotel Menzebach - Olympia',
        'accommodation.hotel3.address': 'Ostenstr. 23, 58239 Schwerte',
        'accommodation.phone': 'Telefon:',
        'accommodation.taxi.title': 'Taxi-Dienste',
        'accommodation.taxi.intro': 'Für eure Fahrt zur Location oder zurück zum Hotel stehen euch folgende Taxi-Dienste zur Verfügung:'
    },
    tr: {
        'hero.date': 'Cumartesi, 23.05.2026',
        'hero.location': 'Rohrmeisterei, Schwerte',
        'hero.addToCalendar': 'Takvime Ekle',
        'countdown.title': 'Düğüne Geri Sayım',
        'countdown.days': 'Gün',
        'countdown.hours': 'Saat',
        'countdown.minutes': 'Dakika',
        'countdown.seconds': 'Saniye',
        'message.content': `
            <p>Sevgili Ailemiz ve Dostlarımız,</p>
            <p>O gün geldi çattı – evleniyoruz! Bu özel günü sizlerle paylaşacağımız için büyük mutluluk duyuyoruz.</p>
            <p>Bu mutlu günümüzde sizleri, bizimle harika bir gün geçirmeye ve birlikte yeni anılar biriktirmeye yürekten davet ediyoruz.</p>
            <p>Sizlerle kadeh kaldırmak ve doyasıya dans etmek için sabırsızlanıyoruz!</p>
            <p>Sevgiyle,<br><span class="signature">Roze & Deniz</span></p>
        `,

        'gallery.title': 'Nikahımızdan Anlar',
        'rsvp.title': 'Bize Haber Verin!',
        'rsvp.text': 'En geç Şubat sonuna kadar geri bildirimlerinizi bekliyoruz. E-posta, WhatsApp, telefon veya posta güvercini ile ulaşabilirsiniz.',
        'rsvp.button': 'E-Posta Üzerinden',
        'rsvp.whatsapp': 'WhatsApp Üzerinden',
        'timeline.title': 'Program Akışı',
        'timeline.reception': 'Şampanya İkramı',
        'timeline.placeholder': 'Bilgiler takip edecek',
        'timeline.ceremony': 'Nikah Töreni',
        'timeline.dinner': 'Akşam Yemeği',
        'timeline.cake': 'Pasta Kesimi',
        'timeline.party': 'Parti & Dans',
        'timeline.end': 'Son Şarkı',
        'faq.title': 'Sıkça Sorulan Sorular',
        'faq.q1': 'Bir kıyafet kodu var mı?',
        'faq.a1': 'Kendinizi rahat hissettiğiniz şekilde gelin! Biraz şık giyinirseniz tabii ki mutlu oluruz, ama en önemlisi birlikte harika bir gün geçirmek.',
        'faq.q2': 'Ne zamana kadar katılıp katılamayacağımızı bildirmeliyiz?',
        'faq.a2': 'Lütfen en geç Şubat ayı sonuna kadar bize katılıp katılamayacağınızı bildirin. Bu tarihe kadar bir onay alamazsak, maalesef gelemeyeceğinizi varsayacağız.',
        'faq.q3': 'Düğün fotoğrafları?',
        'faq.a3': 'Bir fotoğrafçı günün en önemli anlarını ölümsüzleştirecek. Fotoğraflar düğünden sonra bu web sitesinde yayınlanacaktır. Kutlama sırasında veya sonrasında tüm cep telefonu fotoğraflarınızı ortak bir bağlantı üzerinden bizimle paylaşmaktan çekinmeyin. QR kodunu kutlamadaki masa kartlarında bulabilirsiniz.',
        'faq.q4': 'Konaklama imkanı',
        'faq.a4': 'Konaklama imkanına ihtiyacınız olursa, sizin için farklı otellerden oluşan küçük bir liste hazırladık. Lütfen bize bildirin.',
        'faq.q5': 'Otopark imkanı var mı?',
        'faq.a5': 'Evet, mekanın önünde otopark bulunmaktadır. Bunlar sizin için zaten rezerve edilmiş ve ödenmiştir.',
        'faq.q6': 'Birini yanımda getirebilir miyim?',
        'faq.a6': 'Sizi ağırlamaktan mutluluk duyarız! Maalesef sınırlı sayıda misafir yerimiz var, bu nedenle ek misafirler için kapasitemiz yok. Umarım bunu anlar ve yine de akşamın tadını bizimle çıkarabilirsiniz.',
        'anfahrt.title': 'Yol Tarifi',
        'anfahrt.address': 'Rohrmeisterei Schwerte<br>Ruhrstraße 20, 58239 Schwerte',
        'anfahrt.navigate': 'Navigasyonu Başlat',
        'accommodation.title': 'Konaklama & Taksi',
        'accommodation.hotels.title': 'Otel Önerileri',
        'accommodation.hotels.intro': 'Konaklamanız için yakındaki şu otelleri öneriyoruz:',
        'accommodation.hotel1.name': 'Hotel Reichshof',
        'accommodation.hotel1.address': 'Bahnhofstr. 32, 58239 Schwerte',
        'accommodation.hotel2.name': 'Breer\'s Hotel',
        'accommodation.hotel2.address': 'Reichshofstr. 104, 58239 Schwerte',
        'accommodation.hotel3.name': 'Hotel Menzebach - Olympia',
        'accommodation.hotel3.address': 'Ostenstr. 23, 58239 Schwerte',
        'accommodation.phone': 'Telefon:',
        'accommodation.taxi.title': 'Taksi Hizmetleri',
        'accommodation.taxi.intro': 'Mekana veya otele dönüş için aşağıdaki taksi hizmetlerinden yararlanabilirsiniz:'
    }
};

// Current language
let currentLang = 'de';

// Available languages
const availableLanguages = ['de', 'tr', 'za'];

// Get language from URL path (e.g., /de, /tr, /za)
function getLanguageFromURL() {
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(de|tr|za)\/?$/i);
    if (langMatch) {
        return langMatch[1].toLowerCase();
    }
    return null;
}

// Update URL to reflect current language
function updateURL(lang) {
    const newPath = '/' + lang;
    if (window.location.pathname !== newPath) {
        window.history.replaceState({ lang: lang }, '', newPath);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set up language switcher
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Priority: URL > localStorage > default (de)
    const urlLang = getLanguageFromURL();
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = urlLang || savedLang || 'de';

    switchLanguage(initialLang);

    // Update active button
    document.querySelector(`[data-lang="${initialLang}"]`).classList.add('active');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') !== initialLang) {
            btn.classList.remove('active');
        }
    });

    // Set up FAQ accordion
    initializeFAQAccordion();
});

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update URL to reflect current language
    updateURL(lang);

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            // Check if it contains HTML
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// FAQ Accordion functionality
function initializeFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Toggle the clicked item
            faqItem.classList.toggle('active');

            // Update icon
            const icon = this.querySelector('.faq-icon');
            if (icon) {
                icon.textContent = isActive ? '+' : '−';
            }
        });
    });
}

// Parallax Effect for Hero Background
function initParallax() {
    const heroBackground = document.querySelector('.hero-background');
    const hero = document.querySelector('.hero');

    if (!heroBackground || !hero) return;

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        // Only apply parallax while hero is visible
        if (scrolled < heroHeight) {
            // Move background slower than scroll (0.5 = half speed)
            const yPos = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${yPos}px) scale(1.01)`;
        }

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });

    // Initial call
    updateParallax();
}

// Initialize parallax on page load
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
});

// Smooth scroll for any future navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation - IntersectionObserver
function initScrollReveal() {
    // Create IntersectionObserver with 10% threshold
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add 'visible' class when element enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after element becomes visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to observe
    const elementsToObserve = document.querySelectorAll('.timeline-item, .faq-item, .section-title');

    // Add fade-element class and observe each element
    elementsToObserve.forEach(element => {
        element.classList.add('fade-element');
        observer.observe(element);
    });
}

// Initialize Scroll Reveal on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
});
