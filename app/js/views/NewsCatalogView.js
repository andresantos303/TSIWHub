import * as Noticia from "../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  renderCatalog(Noticia.getNoticias());

  // CLICAR NO BOTÃO FILTRAR
  document.getElementById("category").addEventListener("click", () => {
    renderCatalog(
      Noticia.getNoticias(
        document.querySelector("#txtTitle").value,
        document.querySelector("#category").value
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

}

// GERAR CARTÃO COM A Noticia
function generateCard(noticia) {
  let result = ` 
  <div class="fl-item">
  <div class="img-box">
      <img src="${noticia.image}" alt="">
      <div class="content">
          <a href="noticias.html">${noticia.title}</a>
      </div>
  </div>
</div> `;
  return result;
}

catalogView();
