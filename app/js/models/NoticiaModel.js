let noticias = [];

// CARREGAR NOTICIAS DA LOCALSTORAGE
export function init() {
  if(localStorage.noticias) {
    const tempNews = JSON.parse(localStorage.noticias);
    for(let noticia of tempNews) {  
      noticias.push(new Noticia(noticia.title, noticia.genre, noticia.image, noticia.subTitle, noticia.desc, noticia.date));
    }
  } else {
    noticias = [];
  }
}

// ADICIONAR Noticia
export function add(title, genre, image, subTitle, desc, date) {
  if (noticias.some((noticia) => noticia.title === title)) {
    throw Error(`A Noticia com o título "${title}" já existe!`);
  } else {
    noticias.push(new Noticia(title, genre, image, subTitle, desc, date));
    localStorage.setItem("noticias", JSON.stringify(noticias));
  }
}

// REMOVER Noticia
export function removerNoticias(title) {
  noticias = noticias.filter((noticia) => noticia.title !== title);
  localStorage.setItem("noticias", JSON.stringify(noticias));
}

// OBTER A Noticia ATUAL (TODO O OBJETO)
export function getCurrentNews() {
  return noticias.find((noticia) => noticia.id == localStorage.getItem("noticia"));
}

// DEFINIR A Noticia ATUAL (AQUELA QUE SERÁ VISTA NO DETALHE DA Noticia)
export function setCurrentNews(id) {
  localStorage.setItem("noticia", id);
}

// OBTER Noticias (COM SUPORTE A FILTROS)
export function getNoticias(filterTitle = "", filterGenre = "") {
  let filteredNews = noticias.filter(
    (noticia) =>
      (filterTitle === "" || noticia.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
      (filterGenre === "" || noticia.genre === filterGenre)
  );

  return filteredNews.reverse();
}


function getNextId() {
  return noticias.length > 0 ? noticias.length + 1 : 1;
}

/**
 * Classe que modela uma noticia
 */
class Noticia {
  id = null;
  title = "";
  genre = "";
  image = "";
  subTitle = "";
  desc = "";
  date = "";

  constructor(title, genre, image, subTitle, desc, date) {
    this.id = getNextId();
    this.title = title;
    this.genre = genre;
    this.image = image;
    this.subTitle = subTitle;
    this.desc = desc;
    this.date = date;
  }

}
