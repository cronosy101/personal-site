// ✅ --- ANIMATIES ---
document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll(
    '.circle, .circle2, .circle3, .circle4, .circle5'
  );
  const fadeElement = document.getElementById('intro');
  const delay = 500;

  circles.forEach(function (circle, index) {
    circle.classList.add('starting-color');
    setTimeout(function () {
      circle.classList.add('color-change');
    }, delay + index * 500);
  });

  setTimeout(function () {
    fadeElement.classList.add('fade');
  }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
  const myCornerElement = document.querySelector('.mycorner');
  setTimeout(function () {
    myCornerElement.style.visibility = 'visible';
    myCornerElement.style.animationName = 'slideToLeft';
  }, 1000);
});

// ✅ --- PROJECTEN LADEN UIT JSON ---
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  if (!container) return; // alleen uitvoeren op pagina's met projecten

  // Optioneel: tijdelijke tekst terwijl de data laadt
  container.innerHTML = `<p class="text-center text-light">Loading projects...</p>`;

  fetch('../data/projects.json')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load projects.json');
      return res.json();
    })
    .then((projects) => {
      const html = projects
        .map((project) => {
          const descriptions = project.description
            .map((text) => `<p class="text-primary">${text}</p>`)
            .join('');

          return `
            <div class="col-md-6 mb-5">
              <div class="row">
                <div class="col">
                  <a href="${project.url}" target="_blank">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid">
                  </a>
                </div>
                <div class="col hrchange">
                  <hr class="mt-0" style="width: 90%;">
                  <a class="text-light p-1" href="${project.url}" target="_blank">
                    <h3>${project.title}</h3>
                    ${descriptions}
                  </a>
                </div>
              </div>
            </div>`;
        })
        .join('');

      container.innerHTML = html;
    })
    .catch((err) => {
      console.error('Error loading projects:', err);
      container.innerHTML = `<p class="text-danger text-center">Failed to load projects.</p>`;
    });
});
