import * as Testemunho from "../models/TestemunhoModel.js";

function catalogView() {
  Testemunho.init();

  renderCatalog(Testemunho.getTestemunhos());
}

// EXIBIR O CATÁLOGO DE Testemunhos HomePage
function renderCatalog(testemunhos = []) {
  let result = "";
  for (const testemunho of testemunhos) {
    result += generateCard(testemunho);
  }
  // Atribuição de todos os cards gerados ao elemento
  document.getElementById("testeCatelog").innerHTML = result;

}



// GERAR CARTÃO COM o Testemunho
function generateCard(testemunho) {
  let result = ` 
  <div class="swiper-slide">
    <div class="team-box">
        <div class="image">
            <img src="${testemunho.image}" alt="">
        </div>
        <div class="content">
            <div class="h8">${testemunho.name}</div>
            <p>${testemunho.type}</p>
        </div>
    </div>
</div>`;
  return result;
}

catalogView();
