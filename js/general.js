const toggleModeButton = document.getElementById("page-mode");

// array para semantica
const images = [
  {
    elemento: document.getElementById("post1"),
    imgDark: "./assets/img/posts/post1.png",
    imgLight: "./assets/img/posts/post1-light.png",
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
    imgDark: "./assets/icons/linkedin-light.svg",
    imgLight: "./assets/icons/linkedin.png",
  },
  {
    elemento: document.getElementById("github"),
    imgDark: "./assets/icons/github-light.svg",
    imgLight: "./assets/icons/github.svg",
  },
];

function toggleMode() {
  // se existir dark-mode ele remove, senão, adiciona.
  document.documentElement.classList.toggle("light-mode");
  // se conter a classe dark-mode, então está no modo escuro.
  const isLightMode = document.documentElement.classList.contains("light-mode");
  let imageModeSource = "";
  // altera imagem do botão para melhorar ux
  if (isLightMode) {
    imageModeSource = "./assets/icons/moon.svg";
  } else {
    imageModeSource = "./assets/icons/sun.svg";
  }
  // muda imagem
  toggleModeButton.querySelector("img").src = imageModeSource;
  // percorre array trocando a src da imagem dos posts
  images.forEach((image) => {
    if (image.elemento != null) {
      if (isLightMode) {
        image.elemento.src = image.imgLight;
      } else {
        image.elemento.src = image.imgDark;
      }
    }
  });
}
