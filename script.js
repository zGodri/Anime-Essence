const logo = document.querySelector('.logo img');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

logo.addEventListener('click', () => {
  sidebar.style.right = '0';
});

closeSidebar.addEventListener('click', () => {
  sidebar.style.right = '-250px';
});

document.getElementById('loginButton').addEventListener('click', function() {
  window.location.href = 'login.html';
});

document.getElementById('acessButton').addEventListener('click', function() {
  window.location.href = 'acessi.html';
});

function cadastrar() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  localStorage.setItem(username, password);
  localStorage.setItem('loggedInUser', username); 
  window.location.href = 'login.html';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (localStorage.getItem(username) === password) {
    localStorage.setItem('loggedInUser', username); 
    window.location.href = 'index.html';
  } else {
    alert('Nome de usuário ou senha incorretos.');
  }
}

document.getElementById('changeProfileButton').addEventListener('click', function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/png, image/jpeg'; 
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        const newProfileImage = reader.result;
        const logoImage = document.querySelector('.logo img');
        logoImage.src = newProfileImage;

        localStorage.setItem('profileImage', newProfileImage);
      }
      reader.readAsDataURL(file);
    }
  };
  input.click();
});

const storedProfileImage = localStorage.getItem('profileImage');
if (storedProfileImage) {
  const logoImage = document.querySelector('.logo img');
  logoImage.src = storedProfileImage;
}

const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
  const logo = document.querySelector('.logo');
  const usernameElement = document.createElement('div');
  usernameElement.textContent = loggedInUser;
  usernameElement.style.fontSize = '25px';
  logo.appendChild(usernameElement);
}
const animeItems = document.querySelectorAll('.anime-item');

animeItems.forEach(animeItem => {
  animeItem.addEventListener('click', () => {
    const animeId = animeItem.getAttribute('id');
    window.location.href = animeId + '.html';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const voiceBotButton = document.getElementById('voiceBotButton');
  const colorSchemeButtons = document.querySelectorAll('.color-scheme-button');

  voiceBotButton.addEventListener('click', () => {
      alert('Bot de Voz ativado!'); 
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const colorSchemeButtons = document.querySelectorAll('.color-scheme-button');

  function applyColorScheme(scheme) {
      const htmlElement = document.documentElement;
      if (scheme === 'dark-mode') {
          htmlElement.setAttribute('data-bs-theme', 'dark');
      } else {
          htmlElement.setAttribute('data-bs-theme', 'light');
      }
  }


  const savedScheme = localStorage.getItem('colorScheme');
  if (savedScheme) {
      applyColorScheme(savedScheme);
  }


  colorSchemeButtons.forEach(button => {
      button.addEventListener('click', function () {
          const scheme = this.getAttribute('data-scheme');
          applyColorScheme(scheme);
          localStorage.setItem('colorScheme', scheme);
      });
  });
});










let speechSynthesisUtterance = null;
let voiceBotEnabled = localStorage.getItem('voiceBotEnabled') === 'true';

if (voiceBotEnabled) {
    enableVoiceBot();
}

document.getElementById('voiceBotButton').addEventListener('click', function() {
    if (!voiceBotEnabled) {
        enableVoiceBot();
        localStorage.setItem('voiceBotEnabled', 'true');
    }
});

document.getElementById('voiceBotOffButton').addEventListener('click', function() {
    disableVoiceBot();
    localStorage.setItem('voiceBotEnabled', 'false');
});

function enableVoiceBot() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, button');
    textElements.forEach(element => {
        element.addEventListener('mouseover', startReadingText);
        element.addEventListener('mouseout', stopReading);
    });
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        const imageName = image.id || image.alt;
        image.addEventListener('mouseover', () => startReading(imageName));
        image.addEventListener('mouseout', stopReading);
    });
    voiceBotEnabled = true;
}

function disableVoiceBot() {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span, button');
    textElements.forEach(element => {
        element.removeEventListener('mouseover', startReadingText);
        element.removeEventListener('mouseout', stopReading);
    });
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.removeEventListener('mouseover', startReading);
        image.removeEventListener('mouseout', stopReading);
    });
    if (speechSynthesisUtterance !== null) {
        window.speechSynthesis.cancel();
        speechSynthesisUtterance = null;
    }
    voiceBotEnabled = false;
}

function startReadingText(event) {
    const textToRead = event.target.innerText;
    if (speechSynthesisUtterance === null || speechSynthesisUtterance.text !== textToRead) {
        speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
        speechSynthesisUtterance.lang = 'pt-BR';
        window.speechSynthesis.speak(speechSynthesisUtterance);
    }
}

function startReading(textToRead) {
    if (speechSynthesisUtterance === null || speechSynthesisUtterance.text !== textToRead) {
        speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
        speechSynthesisUtterance.lang = 'pt-BR';
        window.speechSynthesis.speak(speechSynthesisUtterance);
    }
}

function stopReading() {
    if (speechSynthesisUtterance !== null) {
        window.speechSynthesis.cancel();
        speechSynthesisUtterance = null;
    }
}





document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.manga-item').forEach(item => {
      item.addEventListener('click', () => {
          const title = item.getAttribute('data-title');
          const altText = item.getAttribute('data-alt');
          const imgSrc = item.getAttribute('data-img-src');

          const mangaPage = `
              <!DOCTYPE html>
              <html lang="pt-BR" data-bs-theme="dark">
              <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>${title}</title>
                  <link rel="stylesheet" href="/css/style-manga.css" />
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
              </head>
              <body>
                  <header>
                      <nav>
                          <span class="h2">AnimeEssence</span>
                          <div class="meio">
                              <div class="search">
                                  <input type="text" placeholder="Procurar" />
                                  <button><i class="fa fa-search"></i> Procurar</button>
                              </div>
                              <ul class="nav-links">
                                  <li><a href="/index.html">Anime</a></li>
                                  <li><a href="/pagm.html">Mangá</a></li>
                                  <li><a href="#">Recentes</a></li>
                                  <li><a href="#">Categoria</a></li>
                                  <li><a href="#">Favoritos</a></li>
                                  <li><a href="#">Suporte</a></li>
                              </ul>
                          </div>
                          <div class="logo">
                              <img src="./images/pika.jpg" alt="Logo AnimeEssence" />
                          </div>
                      </nav>
                  </header>
                  <main>
                      <section class="mais-assistidos">
                          <div class="book-info">
                              <img src="${imgSrc}" alt="${title}" class="book-cover" />
                              <div class="book-details">
                                  <h2>${title}</h2>
                                  <p class="synopsis">${altText}</p>
                              </div>
                          </div>
                          <h2>Capítulos</h2>
                          <ul class="chapter-list">
                              <li><a href="#">Capítulo 01</a></li>
                              <li><a href="#">Capítulo 02</a></li>
                              <li><a href="#">Capítulo 03</a></li>
                              <li><a href="#">Capítulo 04</a></li>
                              <li><a href="#">Capítulo 05</a></li>
                              <li><a href="#">Capítulo 06</a></li>
                              <li><a href="#">Capítulo 07</a></li>
                              <li><a href="#">Capítulo 08</a></li>
                              <li><a href="#">Capítulo 09</a></li>
                          </ul>
                      </section>
                      <div id="sidebar" class="sidebar">
                          <button id="closeSidebar" class="close-sidebar">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                              </svg>
                          </button>
                          <ul class="sidebar-options">
                              <li><button class="sidebar-option" id="loginButton">Login</button></li>
                              <li><button class="sidebar-option" id="changeProfileButton">Alterar Foto de Perfil</button></li>
                              <li><button class="sidebar-option" id="acessButton">Acessibilidade</button></li>
                          </ul>
                      </div>
                  </main>
              </body>
              </html>
          `;

          const newWindow = window.open();
          newWindow.document.write(mangaPage);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.manga-item').forEach(item => {
      item.addEventListener('click', () => {
          const title = item.getAttribute('data-title');
          const altText = item.getAttribute('data-alt');
          const imgSrc = item.getAttribute('data-img-src');

          
          console.log('Title:', title);
          console.log('Alt Text:', altText);
          console.log('Image Src:', imgSrc);

         
          window.location.href = `manga.html?title=${encodeURIComponent(title)}&alt=${encodeURIComponent(altText)}&img=${encodeURIComponent(imgSrc)}`;
      });
  });
});