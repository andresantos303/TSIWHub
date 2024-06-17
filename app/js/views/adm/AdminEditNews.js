import * as Noticia from "../../models/NoticiaModel.js";

function catalogView() {
  Noticia.init();

  const noticia = Noticia.getCurrentNews();
  document.getElementById("noticiaID").value = noticia.id;
  document.getElementById("noticiaTitle").value = noticia.title;
  document.getElementById("noticiaSubtitulo").value = noticia.subTitle;
  document.getElementById("noticiaDescricao").value = noticia.desc;
  document.getElementById("noticiaDate").value = noticia.date;
  document.getElementById("noticiaImagem").value = noticia.image;


  document.querySelector("#editNewsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      Noticia.editNews(document.getElementById("noticiaID").value, {
        name: document.getElementById("noticiaTitle").value,
        type: document.getElementById("noticiaTipo").value,
        image: document.getElementById("noticiaImagem").value,
        subTitle: document.getElementById("noticiaSubtitulo").value,
        desc: document.getElementById("noticiaDescricao").value,
        date: document.getElementById("noticiaDate").value,
      });
      alert("Noticia editada com successo!");

      setTimeout(() => {
        location.href = "../admin.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

catalogView();
