import * as Noticia from "../../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  renderTableNews(Noticia.getNoticias());
}

// EXIBIR todos os testemunhos na tabela
function renderTableNews(news = []) {
  let result = "";
  for (const noticia of news) {
    result += generateTableNews(noticia);
  }
  document.getElementById("tableNoticias").innerHTML = result;

  // Editar FALTA FAZER
  const btnsSeeMore = document.getElementsByClassName("editNews");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Noticia.setCurrentNews(button.id);
      location.href = "editNews.html";
    });
  }

  //Adionar notícia
  const btnsAdd = document.getElementsByClassName("addNews");
  for (const button of btnsAdd) {
    button.addEventListener("click", () => {
      Noticia.setCurrentNews(button.id);
      location.href = "addNews.html";
    });
  }

  // Eliminar
  const btnsDelete = document.getElementsByClassName("newsDel");
  for (const button of btnsDelete) {
    button.addEventListener("click", () => {
      const newsTitle = button.id;
      Noticia.removerNoticias(newsTitle);
      alert(`A noticia o nome ${newsTitle} foi eliminado`);
      location.reload();
    });
  }
}

// GERAR CARTÃO COM todos as noticias
function generateTableNews(noticia) {
  let result = ` 
    <tr>
        <th scope="row">${noticia.id}</th>
        <td>${noticia.title}</td>
        <td>${noticia.genre}</td>
        <td>${noticia.date}</td>
        <td><img src="${noticia.image}" alt="${noticia.name}" width="50"/></td>
        <td>${noticia.subTitle}</td>
        <td><div class="desc-scroll">${noticia.desc}</div></td>
        <td><button type="button" id="${noticia.id}" class="btn btn-warning editNews">Editar</button></td>
        <td><button type="button" id="${noticia.title}" class="btn btn-danger newsDel">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
