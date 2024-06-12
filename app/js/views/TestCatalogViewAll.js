import * as Testemunho from "../models/TestemunhoModel.js";

function catalogView() {
  Testemunho.init();

  renderCatalog(Testemunho.getTestemunhos());

  // CLICAR NO BOTÃO FILTRAR
  /* document.getElementById("category").addEventListener("click", () => {
    renderCatalog(
      Testemunho.getTestemunhos(
        document.querySelector("#txtTitle").value,
        document.querySelector("#category").value
      )
    );
  }); */
}

// EXIBIR O CATÁLOGO DE Testemunhos HomePage
function renderCatalog(testemunhos = []) {
  let result = "";
  for (const testemunho of testemunhos) {
    result += generateCard(testemunho);
  }
  // Atribuição de todos os cards gerados ao elemento com id myCatalog
  document.getElementById("testeCatelog").innerHTML = result;

}

// GERAR CARTÃO COM todos os testemunhos
function generateCard(testemunho) {
  let result = ` 
  <div class="fl-item">
  <div class="img-box">
      <img src="${testemunho.image}" alt="">
      <div class="content">
          <p>${testemunho.type}</p>
          <a href="testemunho.html">${testemunho.name}</a>
      </div>
  </div>
</div> `;
  return result;
}

catalogView();
