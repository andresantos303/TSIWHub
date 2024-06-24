import * as Testemunho from "../../models/TestemunhoModel.js";

function catalogView() {
  Testemunho.init();

  renderCatalog(Testemunho.getTestemunhos(localStorage.getItem("search"), localStorage.getItem("category")));

  // CLICAR NO BOTÃO FILTRAR
  document.getElementById("btn").addEventListener("click", () => {
    localStorage.setItem("search", document.getElementById("search").value);
    location.reload()
  });
  document.getElementById("category").addEventListener("change", () => {
    localStorage.setItem("category", document.getElementById("category").value);
    location.reload()
  });
}

// EXIBIR O CATÁLOGO DE Testemunhos HomePage
function renderCatalog(testemunhos = []) {
  let result = "";
  for (const testemunho of testemunhos) {
    result += generateCard(testemunho);
  }
  document.getElementById("testeCatelog").innerHTML = result;
  document.getElementById("category").value = localStorage.getItem("category")
  document.getElementById("search").value = localStorage.getItem("search")

  // Ver mais
  const btnsSeeMore = document.getElementsByClassName("viewMore");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "testemunho.html";
    });
  }

}

// GERAR CARTÃO COM todos os testemunhos
function generateCard(testemunho) {
  let result = ` 
  <div class="fl-item">
  <div class="img-box">
      <img src="${testemunho.image}" alt="">
      <div class="content">
          <p>${testemunho.type}</p>
          <a class="viewMore" id="${testemunho.id}">${testemunho.name}</a>
      </div>
  </div>
</div> `;
  return result;
}

catalogView();
