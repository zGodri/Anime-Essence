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

function cadastrar() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  localStorage.setItem(username, password);
  localStorage.setItem('loggedInUser', username); // Armazena o nome de usuário logado
  window.location.href = 'login.html';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (localStorage.getItem(username) === password) {
    localStorage.setItem('loggedInUser', username); // Armazena o nome de usuário logado
    window.location.href = 'index.html';
  } else {
    alert('Nome de usuário ou senha incorretos.');
  }
}

document.getElementById('changeProfileButton').addEventListener('click', function() {
  // Abre um diálogo de seleção de arquivo para o usuário escolher a nova imagem de perfil
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/png, image/jpeg'; // Aceita apenas imagens PNG e JPEG
  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        const newProfileImage = reader.result;
        const logoImage = document.querySelector('.logo img');
        logoImage.src = newProfileImage;

        // Aqui você pode armazenar a nova imagem no banco de dados local
        // Por enquanto, vamos apenas armazenar o caminho da nova imagem em uma variável
        localStorage.setItem('profileImage', newProfileImage);
      }
      reader.readAsDataURL(file);
    }
  };
  input.click();
});

// Verifica se já existe uma imagem de perfil armazenada no banco de dados local
const storedProfileImage = localStorage.getItem('profileImage');
if (storedProfileImage) {
  const logoImage = document.querySelector('.logo img');
  logoImage.src = storedProfileImage;
}

// Obtém o nome de usuário logado e exibe ao lado da logo
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