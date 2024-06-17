let noticias = [];

// CARREGAR NOTICIAS DA LOCALSTORAGE
export function init() {
  if (localStorage.noticias) {
    const tempNews = JSON.parse(localStorage.noticias);
    for (let noticia of tempNews) {
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

// EDITAR Noticia
export function editNews(id, updatedData) {
  if (noticias.find((noticia) => noticia.id == id) == -1) {
    throw Error(`A testemunho com o ID "${id}" não existe!`);
  } else {
    noticias[id-1].title = updatedData.title || noticias[id-1].title;
    noticias[id-1].genre = updatedData.genre || noticias[id-1].genre;
    noticias[id-1].image = updatedData.image || noticias[id-1].image;
    noticias[id-1].subTitle = updatedData.subTitle || noticias[id-1].subTitle;
    noticias[id-1].desc = updatedData.desc || noticias[id-1].desc;
    noticias[id-1].date = updatedData.date || noticias[id-1].date;
    
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
  let filteredNews = noticias
  filteredNews = noticias.filter(
    (noticia) =>
      (filterGenre === "" || noticia.genre === filterGenre) &&
      (filterTitle === "" || noticia.title.toLowerCase().includes(filterTitle.toLowerCase()))
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
