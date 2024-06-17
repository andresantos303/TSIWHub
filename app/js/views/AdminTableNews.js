import * as Noticia from "../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  renderTableNews(Noticia.getNoticias());
}

// EXIBIR todos os testemunhos na tabela
function renderTableNews(news = []) {
  let result = "";
  for (const noticia of news) {
    result += generateTableTestemunhos(noticia);
  }
  document.getElementById("tableNoticias").innerHTML = result;

  // Editar FALTA FAZER
  const btnsSeeMore = document.getElementsByClassName("btn-warning");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "testemunho.html";
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

// GERAR CARTÃO COM todos os testemunhos
function generateTableTestemunhos(testemunho) {
  let result = ` 
    <tr>
        <th scope="row">${testemunho.id}</th>
        <td>${testemunho.title}</td>
        <td>${testemunho.genre}</td>
        <td><img src="${testemunho.image}" alt="${testemunho.name}" width="50"/></td>
        <td>${testemunho.subTitle}</td>
        <td><div class="desc-scroll">${testemunho.desc}</div></td>
        <td><div class="desc-scroll">${testemunho.date}</div></td>
        <td><button type="button" id="${testemunho.id}" class="btn btn-warning">Editar</button></td>
        <td><button type="button" id="${testemunho.title}" class="btn btn-danger newsDel">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
