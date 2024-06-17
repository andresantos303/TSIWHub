import * as Noticia from "../../models/NoticiaModel.js";

function addNewsView() {
  Noticia.init();

  document.querySelector("#addNewsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      Noticia.add(
        document.getElementById("noticiaTitle").value,
        document.getElementById("noticiaTipo").value,
        document.getElementById("noticiaImagem").value,
        document.getElementById("noticiaSubtitulo").value,
        document.getElementById("noticiaDescricao").value,
        document.getElementById("noticiaDate").value,
      );
      alert("Noticia adicionada com sucesso!");

      setTimeout(() => {
        location.href = "../admin.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

addNewsView();
