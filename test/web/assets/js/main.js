function handleScroll() {
  const nav = document.querySelector('.c-navoverzicht_fixed-wrapper');
  if (window.scrollY > 100) {
      nav.style.backgroundColor = '#141414';
  } else {
      nav.style.backgroundColor = 'transparent';
  }
}

function showEpisodes(seasonId) {
  document.querySelectorAll('.episodes').forEach(div => {
      div.style.display = 'none';
  });
  if (seasonId) {
      document.getElementById(seasonId).style.display = 'block';
  }
}

function handleSearch() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
              window.location.href = `/search?query=${encodeURIComponent(query)}`;
          }
      }
  });
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


document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', handleScroll);
  handleSearch();
  renderGenreChart('genreChart');
  const defaultSeasonId = 'season-1';
  showEpisodes(defaultSeasonId);
});


// "welcome": "Unlimited Series, Movies and a lot more to watch",



// window.addEventListener('scroll', function() {
//     const nav = document.querySelector('.c-navoverzicht_fixed-wrapper');
//     if (window.scrollY > 100) {  
//       nav.style.backgroundColor = '#141414';  
//     } else {
//       nav.style.backgroundColor = 'transparent';  
//     }
// });

// function showEpisodes(seasonId) {
//   document.querySelectorAll('.episodes').forEach(div => {
//     div.style.display = 'none';
//   });
//   if (seasonId) {
//     document.getElementById(seasonId).style.display = 'block';
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const searchInput = document.getElementById('search-input');

//   searchInput.addEventListener('keypress', function (e) {
//       if (e.key === 'Enter') {
//         console.log('')
//           const query = searchInput.value.trim();
//           if (query) {
//               window.location.href = `/search?query=${encodeURIComponent(query)}`;
//           }
//       }
//   });
// });



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

// // Call the function after DOM is loaded
// document.addEventListener('DOMContentLoaded', function () {
//   renderGenreChart('genreChart');
//   const defaultSeasonId = 'season-1';   
//   showEpisodes(defaultSeasonId);
// });