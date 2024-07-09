document.addEventListener("DOMContentLoaded", function () {
  const carrossel = document.getElementById("imgContainer");
  const itensCarrossel = document.getElementsByClassName("item-Carrossel");
  let contador = 0;

  function moveCarrossel() {
    contador++;
    var primeiroItem = carrossel.children[contador];
    console.log(primeiroItem);
    var itemWidth = carrossel.children[contador].clientWidth;
    console.log(itemWidth);
    if ((carrossel.children[contador].clientWidth = 4)) {
      itemWidth = 400;
    }
    // Move carousel to show next item
    carrossel.style.transition = "transform 2s ease";
    carrossel.style.transform = `translateX(-${contador * itemWidth}px`;

    if (contador >= 4) {
      contador = 0;
      carrossel.style.transform = "translateX(0)";
    }
  }

  setInterval(moveCarrossel, 2500);
});
