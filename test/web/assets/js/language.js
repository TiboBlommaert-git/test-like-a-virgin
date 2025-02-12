document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "en", // Default language
        debug: true,
        resources: {
            nl: {
                translation: {
                    headline: "Onbeperkt series, films en nog veel meer kijken",
                    subheadline: "Vanaf €9,99. Je kunt altijd opzeggen.",
                    description: "Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen",
                    button: "Aan de slag",
                    login: "Inloggen",
                    trending: "Trending",
                    audioDescription: "Audiobeschrijving",
                    investorRelations: "Investeerdersrelaties",
                    legalNotices: "Juridische kennisgevingen",
                    adChoices: "Advertentievoorkeuren",
                    helpCenter: "Helpcentrum",
                    jobs: "Vacatures",
                    cookiePreferences: "Cookievoorkeuren",
                    giftCards: "Cadeaubonnen",
                    termsOfUse: "Gebruiksvoorwaarden",
                    corporateInfo: "Bedrijfsinformatie",
                    mediaCenter: "Mediacentrum",
                    privacy: "Privacy",
                    contact: "Contact",
                    copyright: "©2025 Tibo Blommaert, Inc."
                }
            },
            en: {
                translation: {
                    headline: "Unlimited movies, TV shows, and more",
                    subheadline: "Starting at €9.99. Cancel anytime.",
                    description: "Ready to watch? Enter your email to start or restart your membership",
                    button: "Get Started",
                    login: "Login",
                    trending: "Trending",
                    audioDescription: "Audio Description",
                    investorRelations: "Investor Relations",
                    legalNotices: "Legal Notices",
                    adChoices: "Ad Choices",
                    helpCenter: "Help Center",
                    jobs: "Jobs",
                    cookiePreferences: "Cookie Preferences",
                    giftCards: "Gift Cards",
                    termsOfUse: "Terms Of Use",
                    corporateInfo: "Corporate Information",
                    mediaCenter: "Media Center",
                    privacy: "Privacy",
                    contact: "Contact",
                    copyright: "©2025 Tibo Blommaert, Inc."
                }
            },
            de: {
                translation: {
                    headline: "Unbegrenzte Filme, Serien und mehr",
                    subheadline: "Ab €9,99. Jederzeit kündbar.",
                    description: "Bereit zum Anschauen? Gib deine E-Mail-Adresse ein, um dein Abonnement zu starten oder zu erneuern",
                    button: "Loslegen",
                    login: "Login",
                    trending: "Beliebt",
                    audioDescription: "Audiobeschreibung",
                    investorRelations: "Investor Relations",
                    legalNotices: "Rechtliche Hinweise",
                    adChoices: "Anzeigeneinstellungen",
                    helpCenter: "Hilfezentrum",
                    jobs: "Jobs",
                    cookiePreferences: "Cookie-Einstellungen",
                    giftCards: "Geschenkkarten",
                    termsOfUse: "Nutzungsbedingungen",
                    corporateInfo: "Unternehmensinformationen",
                    mediaCenter: "Medienzentrum",
                    privacy: "Datenschutz",
                    contact: "Kontakt",
                    copyright: "©2025 Tibo Blommaert, Inc."
                }
            }
        }
    }).then(() => {
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            element.innerHTML = i18next.t(key);
        });
    }

    const languageSwitcher = document.getElementById("languageSwitcher");

    if (languageSwitcher) {
        languageSwitcher.addEventListener("change", function () {
            i18next.changeLanguage(this.value).then(updateContent);
        });
    }
});
