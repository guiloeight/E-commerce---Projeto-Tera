
console.log("Olá mundo!")
// Conectar informações do botão desenvolvido no arquivo HTML

let botao = document.getElementById("botao-topo")
// Função nativa do windows chamada onscroll ao scrollar, armazena a função chamada scrollFunction(), que define quando o botão deve aparecer
window.onscroll = function scrollFunction () {
  // Se, a quantidade de pixels percorridos na tela for igual à condição passada entre parentêses, então:
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    // mostrar o botão
    botao.style.display = "block";
    // senão,
  } else {
    // não mostrar o botão 
    botao.style.display = "none";
  }
}

// Quando a pessoa clicar em voltar para o topo, executar esta função
function voltarParaTopo () {
    document.documentElement.scrollTop = 0;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}