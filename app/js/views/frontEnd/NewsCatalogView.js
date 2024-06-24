import * as Noticia from "../../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  renderCatalog(Noticia.getNoticias(localStorage.getItem("search"),localStorage.getItem("category")));

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



// EXIBIR O CATÁLOGO DE Noticias
function renderCatalog(noticias = []) {
  let result = "";
  for (const noticia of noticias) {
    result += generateCard(noticia);
  }
  // Atribuição de todos os cards gerados ao elemento com id myCatalog
  document.querySelector("#myCatalog").innerHTML = result;
  document.getElementById("category").value = localStorage.getItem("category")
  document.getElementById("search").value = localStorage.getItem("search")

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
