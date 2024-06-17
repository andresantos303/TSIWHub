import * as Testemunho from "../../models/TestemunhoModel.js";

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
  document.getElementById("testeCatelog").innerHTML = result;

  // Ver mais
  const btnsSeeMore = document.getElementsByClassName("viewMoreT");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "testemunho.html";
    });
  }
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
            <a id="${testemunho.id}" class="h8 viewMoreT">${testemunho.name}</a>
            <p>${testemunho.type}</p>
        </div>
    </div>
</div>`;
  return result;
}

catalogView();
