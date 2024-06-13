import * as Noticia from "../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  renderCatalog(Noticia.getNoticias());

  // CLICAR NO BOTÃO FILTRAR
  document.getElementById("btn").addEventListener("click", () => {
    renderCatalog(
      Noticia.getNoticias(
        document.getElementById("search").value,
        document.getElementById("category").value,
      )
    );
  });
}



// EXIBIR O CATÁLOGO DE Noticias
function renderCatalog(noticias = []) {
  let result = "";
  for (const noticia of noticias) {
    result += generateCard(noticia);
  }
  // Atribuição de todos os cards gerados ao elemento com id myCatalog
  document.querySelector("#myCatalog").innerHTML = result;

  // Ver mais
  const btnsSeeMore = document.getElementsByClassName("viewMore");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      console.log(button.id)
      Noticia.setCurrentNews(button.id);
      location.href = "noticia.html";
    });
  }
}

// GERAR CARTÃO COM A Noticia
function generateCard(noticia) {
  let result = ` 
  <div class="fl-item">
  <div class="img-box">
      <img src="${noticia.image}" alt="">
      <div class="content">
          <a id="${noticia.id}" class="viewMore">${noticia.title}</a>
      </div>
  </div>
</div> `;
  return result;
}

catalogView();
