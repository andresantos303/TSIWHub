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
      if(document.getElementById("noticiaTitle").value === "" || document.getElementById("noticiaTipo").value === "" || document.getElementById("noticiaImagem").value === "" || document.getElementById("noticiaSubtitulo").value === "" || document.getElementById("noticiaDescricao").value === "" || document.getElementById("noticiaDate").value === ""){
        throw Error("Todos os dados necessitam de ser preenchidos!");
      }
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
