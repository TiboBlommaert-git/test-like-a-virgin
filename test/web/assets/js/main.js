// function handleScroll() {
//   const nav = document.querySelector('.c-navoverzicht_fixed-wrapper');
//   if (window.scrollY > 100) {
//       nav.style.backgroundColor = '#141414';
//   } else {
//       nav.style.backgroundColor = 'transparent';
//   }
// }

// function showEpisodes(seasonId) {
//   document.querySelectorAll('.episodes').forEach(div => {
//       div.style.display = 'none';
//   });
//   if (seasonId) {
//       document.getElementById(seasonId).style.display = 'block';
//   }
// }

// function handleSearch() {
//   const searchInput = document.getElementById('search-input');
//   searchInput.addEventListener('keypress', function (e) {
//       if (e.key === 'Enter') {
//           const query = searchInput.value.trim();
//           if (query) {
//               window.location.href = `/search?query=${encodeURIComponent(query)}`;
//           }
//       }
//   });
// }

// function renderGenreChart(canvasId) {
//   const canvas = document.getElementById(canvasId);
//   if (!canvas) return;

//   const genreData = JSON.parse(canvas.getAttribute('data-genre-counts'));
//   const labels = genreData.map(item => item.genre);
//   const data = genreData.map(item => item.count);

//   const ctx = canvas.getContext('2d');
//   new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: labels,
//           datasets: [{
//               label: 'Entries per Genre',
//               data: data,
//               backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1
//           }]
//       },
//       options: {
//           responsive: true,
//           scales: {
//               y: { beginAtZero: true }
//           }
//       }
//   });
// }
// function changeLanguage(select) {
//     let currentPath = window.location.pathname;
//     let languagePrefixes = ["/nl", "/fr", "/de"];

//     for (let prefix of languagePrefixes) {
//         if (currentPath.startsWith(prefix + "/")) {
//             currentPath = currentPath.replace(prefix, "");
//             break;
//         }
//     }
//     let newUrl = select.value.replace(/\/$/, '') + currentPath;
//     window.location.href = newUrl;
// }

// document.addEventListener('DOMContentLoaded', function () {
//   window.addEventListener('scroll', handleScroll);
//   handleSearch();
//   renderGenreChart('genreChart');
//   const defaultSeasonId = 'season-1';
//   showEpisodes(defaultSeasonId);
//   changeLanguage(select);
// });

// function handleScroll() {
//   const nav = document.querySelector(".c-navoverzicht_fixed-wrapper");
//   if (window.scrollY > 100) {
//     nav.style.backgroundColor = "#141414";
//   } else {
//     nav.style.backgroundColor = "transparent";
//   }
// }

// function showEpisodes(seasonId) {
//   document.querySelectorAll(".episodes").forEach((div) => {
//     div.style.display = "none";
//   });
//   if (seasonId) {
//     document.getElementById(seasonId).style.display = "block";
//   }
// }

// function handleSearch() {
//   const searchInput = document.getElementById("search-input");
//   searchInput.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       const query = searchInput.value.trim();
//       if (query) {
//         window.location.href = `/search?query=${encodeURIComponent(query)}`;
//       }
//     }
//   });
// }

// function renderGenreChart(canvasId) {
//   const canvas = document.getElementById(canvasId);
//   if (!canvas) return;

//   const genreData = JSON.parse(canvas.getAttribute("data-genre-counts"));
//   const labels = genreData.map((item) => item.genre);
//   const data = genreData.map((item) => item.count);

//   const ctx = canvas.getContext("2d");
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "Entries per Genre",
//           data: data,
//           backgroundColor: "rgba(75, 192, 192, 0.6)",
//           borderColor: "rgba(75, 192, 192, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: { beginAtZero: true },
//       },
//     },
//   });
// }

// // Initialize i18next for translations
// document.addEventListener("DOMContentLoaded", function () {
//   if (!i18next.isInitialized) {
//     i18next
//       .init({
//         lng: document.documentElement.lang || "en", // Detect language from <html lang="">
//         debug: true,
//         resources: {
//           nl: {
//             translation: {
//               headline: "Onbeperkt series, films en nog veel meer kijken",
//               subheadline: "Vanaf €9,99. Je kunt altijd opzeggen.",
//               description:
//                 "Klaar om te kijken? Voer je e-mailadres in om je lidmaatschap te starten of te hernieuwen",
//               button: "Aan de slag",
//               login: "Inloggen",
//               trending: "Trending",
//               audioDescription: "Audiobeschrijving",
//               investorRelations: "Investeerdersrelaties",
//               legalNotices: "Juridische kennisgevingen",
//               adChoices: "Advertentievoorkeuren",
//               helpCenter: "Helpcentrum",
//               jobs: "Vacatures",
//               cookiePreferences: "Cookievoorkeuren",
//               giftCards: "Cadeaubonnen",
//               termsOfUse: "Gebruiksvoorwaarden",
//               corporateInfo: "Bedrijfsinformatie",
//               mediaCenter: "Mediacentrum",
//               privacy: "Privacy",
//               contact: "Contact",
//               copyright: "©2025 Tibo Blommaert, Inc.",
//             },
//           },
//           en: {
//             translation: {
//               headline: "Unlimited movies, TV shows, and more",
//               subheadline: "Starting at €9.99. Cancel anytime.",
//               description:
//                 "Ready to watch? Enter your email to start or restart your membership",
//               button: "Get Started",
//               login: "Login",
//               trending: "Trending",
//               audioDescription: "Audio Description",
//               investorRelations: "Investor Relations",
//               legalNotices: "Legal Notices",
//               adChoices: "Ad Choices",
//               helpCenter: "Help Center",
//               jobs: "Jobs",
//               cookiePreferences: "Cookie Preferences",
//               giftCards: "Gift Cards",
//               termsOfUse: "Terms Of Use",
//               corporateInfo: "Corporate Information",
//               mediaCenter: "Media Center",
//               privacy: "Privacy",
//               contact: "Contact",
//               copyright: "©2025 Tibo Blommaert, Inc.",
//             },
//           },
//           de: {
//             translation: {
//               headline: "Unbegrenzte Filme, Serien und mehr",
//               subheadline: "Ab €9,99. Jederzeit kündbar.",
//               description:
//                 "Bereit zum Anschauen? Gib deine E-Mail-Adresse ein, um dein Abonnement zu starten oder zu erneuern",
//               button: "Loslegen",
//               login: "Login",
//               trending: "Beliebt",
//               audioDescription: "Audiobeschreibung",
//               investorRelations: "Investor Relations",
//               legalNotices: "Rechtliche Hinweise",
//               adChoices: "Anzeigeneinstellungen",
//               helpCenter: "Hilfezentrum",
//               jobs: "Jobs",
//               cookiePreferences: "Cookie-Einstellungen",
//               giftCards: "Geschenkkarten",
//               termsOfUse: "Nutzungsbedingungen",
//               corporateInfo: "Unternehmensinformationen",
//               mediaCenter: "Medienzentrum",
//               privacy: "Datenschutz",
//               contact: "Kontakt",
//               copyright: "©2025 Tibo Blommaert, Inc.",
//             },
//           },
//         },
//       })
//       .then(() => {
//         updateContent();
//       });
//   }

//   function updateContent() {
//     document.querySelectorAll("[data-i18n]").forEach((element) => {
//       const key = element.getAttribute("data-i18n");
//       element.innerHTML = i18next.t(key);
//     });
//   }

//   function changeLanguage(select) {
//     let currentPath = window.location.pathname;
//     let languagePrefixes = ["/nl", "/fr", "/de", "/en"];

//     // Remove existing language prefix
//     for (let prefix of languagePrefixes) {
//       if (currentPath.startsWith(prefix + "/")) {
//         currentPath = currentPath.replace(prefix, "");
//         break;
//       }
//     }

//     // Update URL
//     let newUrl = select.value.replace(/\/$/, "") + currentPath;
//     window.location.href = newUrl;

//     // Update content dynamically
//     i18next.changeLanguage(select.dataset.lang).then(updateContent);
//   }

//   const languageSwitcher = document.getElementById("languageSwitcher");

//   if (languageSwitcher) {
//     languageSwitcher.addEventListener("change", function () {
//       changeLanguage(this);
//     });
//   }

//   window.addEventListener("scroll", handleScroll);
//   handleSearch();
//   renderGenreChart("genreChart");
//   const defaultSeasonId = "season-1";
//   showEpisodes(defaultSeasonId);
// });


function handleScroll() {
    const nav = document.querySelector('.c-navoverzicht_fixed-wrapper');
    if (nav) {
        nav.style.backgroundColor = window.scrollY > 100 ? '#141414' : 'transparent';
    }
}

function showEpisodes(seasonId) {
    const episodes = document.querySelectorAll('.episodes');
    if (!episodes) return; // Prevent error if episodes are not loaded yet

    episodes.forEach(div => {
        div.style.display = 'none';
    });
    const season = document.getElementById(seasonId);
    if (season) {
        season.style.display = 'block';
    }
}

function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `/search?query=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

function renderGenreChart(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const genreData = JSON.parse(canvas.getAttribute('data-genre-counts'));
    const labels = genreData.map(item => item.genre);
    const data = genreData.map(item => item.count);

    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Entries per Genre',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if i18next is already initialized
    if (!i18next.isInitialized) {
        i18next.init({
            lng: document.documentElement.lang || "en",
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
                        copyright: "©2025 Tibo Blommaert, Inc.",
                        titleOverzicht: "#8 in TV series vandaag",
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
                        copyright: "©2025 Tibo Blommaert, Inc.",
                        titleOverzicht: "#8 in TV Shows today",
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
                        copyright: "©2025 Tibo Blommaert, Inc.",
                        titleOverzicht: "#8 in TV Shows Heute",

                    }
                }
            }
        }).then(() => updateContent());
    }

    function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            element.innerHTML = i18next.t(key);
        });
    }

    function changeLanguage(select) {
        let currentPath = window.location.pathname;
        let languagePrefixes = ["/nl", "/fr", "/de", "/en"];

        // Remove existing language prefix
        for (let prefix of languagePrefixes) {
            if (currentPath.startsWith(prefix + "/")) {
                currentPath = currentPath.replace(prefix, "");
                break;
            }
        }

        // Update URL
        let newUrl = select.value.replace(/\/$/, '') + currentPath;
        window.location.href = newUrl;

        // Change language dynamically in i18next
        i18next.changeLanguage(select.dataset.lang).then(updateContent);
    }

    const languageSwitcher = document.getElementById("languageSwitcher");
    if (languageSwitcher) {
        languageSwitcher.addEventListener("change", function () {
            changeLanguage(this);
        });
    }

    // Other event listeners
    window.addEventListener('scroll', handleScroll);
    handleSearch();
    renderGenreChart('genreChart');

    // Ensure episodes are shown only when they exist
    setTimeout(() => {
        const defaultSeasonId = 'season-1';
        showEpisodes(defaultSeasonId);
    }, 100); // Small delay to let DOM load
});
