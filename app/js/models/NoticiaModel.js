let noticias = [];

// CARREGAR NOTICIAS DA LOCALSTORAGE
export function init() {
  if(localStorage.noticias) {
    const tempNews = JSON.parse(localStorage.noticias);
    for(let noticia of tempNews) {
      noticias.push(new Noticia(noticia.title, noticia.genre, noticia.image, noticia.subTitle, noticia.desc, noticia.date, noticia.id));
    }
  } else {
    noticias = [];
  }
}

// ADICIONAR Noticia
export function add(title, genre, image, subTitle, desc, date, id) {
  if (noticias.some((noticia) => noticia.title === title)) {
    throw Error(`A Noticia com o título "${title}" já existe!`);
  } else {
    noticias.push(new Noticia(title, genre, image, subTitle, desc, date, id));
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
  return noticias.find((noticia) => noticia.title === localStorage.getItem("noticias"));
}

// ORDENAR Noticias
export function sortNews() {
  noticias.sort((a, b) => a.id.localeCompare(b.id));
  //localStorage.setItem("bands", JSON.stringify(bands));
}

// OBTER BANDAS (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function getNoticias(filterTitle = "", filterGenre = "", isSorted = false) {
  let filteredNews = noticias.filter(
    (noticia) =>
      (noticia.title.toLowerCase().includes(filterTitle.toLowerCase()) ||
        filterTitle === "") &&
      (noticia.genre == filterGenre || filterGenre === "")
  );

  filteredNews = isSorted
    ? filteredNews.sort((a, b) => a.title.localeCompare(b.title))
    : filteredNews;

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
