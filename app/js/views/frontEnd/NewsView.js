import * as Noticia from "../../models/NoticiaModel.js";

function noticiaView() {
  Noticia.init();

  const noticia = Noticia.getCurrentNews();
  document.getElementById("title").innerHTML = noticia.title;
  document.getElementById("genre").innerHTML = noticia.genre;
  document.getElementById("subtitle").innerHTML = noticia.subTitle;
  document.getElementById("desc").innerHTML = noticia.desc;
  document.getElementById("date").innerHTML = noticia.date;
  document.getElementById("image").src = noticia.image;
}

noticiaView();
