const toggleModeButton = document.getElementById("page-mode");

// array para semantica
const images = [
  {
    elemento: document.getElementById("post1"),
    imgLight: "./assets/img/posts/post1-light.png",
    imgDark: "./assets/img/posts/post1.png",
  },
  {
    elemento: document.getElementById("post2"),
    imgLight: "./assets/img/posts/post2-light.png",
    imgDark: "./assets/img/posts/post2.png",
  },
  {
    elemento: document.getElementById("post3"),
    imgLight: "./assets/img/posts/post3-light.png",
    imgDark: "./assets/img/posts/post3.png",
  },
  {
    elemento: document.getElementById("linkedin"),
    imgLight: "./assets/icons/linkedin.png",
    imgDark: "./assets/icons/linkedin-light.svg",
  },
  {
    elemento: document.getElementById("github"),
    imgLight: "./assets/icons/github.svg",
    imgDark: "./assets/icons/github-light.svg",
  },
];

function toggleMode() {
  // se existir dark-mode ele remove, senão, adiciona.
  document.documentElement.classList.toggle("dark-mode");
  // se conter a classe dark-mode, então está no modo escuro.
  const isDarkMode = document.documentElement.classList.contains("dark-mode");
  let imageModeSource = "";
  // altera imagem do botão para melhorar ux
  if (isDarkMode) {
    localStorage.setItem("current-mode", "dark");
    imageModeSource = "./assets/icons/sun.svg";
  } else {
    localStorage.setItem("current-mode", "light");
    imageModeSource = "./assets/icons/moon.svg";
  }
  // muda imagem
  toggleModeButton.querySelector("img").src = imageModeSource;
  // percorre array trocando a src da imagem dos posts
  images.forEach((image) => {
    if (image.elemento != null) {
      if (isDarkMode) {
        image.elemento.src = image.imgDark;
      } else {
        image.elemento.src = image.imgLight;
      }
    }
  });
}
