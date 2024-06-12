let testemunhos = [];

// CARREGAR testemunhos DA LOCALSTORAGE
export function init() {
  if(localStorage.testemunhos) {
    const tempNews = JSON.parse(localStorage.testemunhos);
    for(let testemunho of tempNews) {
      testemunhos.push(new testemunho(testemunho.name, testemunho.type, testemunho.image, testemunho.subTitle, testemunho.desc, testemunho.id));
    }
  } else {
    testemunhos = [];
  }
}

// ADICIONAR testemunho
export function add(name, type, image, subTitle, desc, id) {
  if (testemunhos.some((testemunho) => testemunho.name === name)) {
    throw Error(`A testemunho com o nome "${title}" já existe!`);
  } else {
    testemunhos.push(new testemunho(name, type, image, subTitle, desc, id));
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
  }
}

// REMOVER testemunho
export function removertestemunhos(name) {
  testemunhos = testemunhos.filter((testemunho) => testemunho.name !== name);
  localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
}

// OBTER A testemunho ATUAL (TODO O OBJETO)
export function getCurrentNews() {
  return testemunhos.find((testemunho) => testemunho.name === localStorage.getItem("testemunhos"));
}

// OBTER BANDAS (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function gettestemunhos(filterTitle = "", filterGenre = "", isSorted = false) {
  let filteredNews = testemunhos.filter(
    (testemunho) =>
      (testemunho.title.toLowerCase().includes(filterTitle.toLowerCase()) ||
        filterTitle === "") &&
      (testemunho.genre == filterGenre || filterGenre === "")
  );

  filteredNews = isSorted
    ? filteredNews.sort((a, b) => a.title.localeCompare(b.title))
    : filteredNews;

  return filteredNews.reverse();
}

function getNextId() {
  return testemunhos.length > 0 ? testemunhos.length + 1 : 1;
}


/* Classe que modela um testemunho */
 
class testemunho {
  id = null;
  name = "";
  type = "";
  image = "";
  subTitle = "";
  desc = "";

  constructor(name, type, image, subTitle, desc) {
    this.id = getNextId();
    this.name = name;
    this.type = type;
    this.image = image;
    this.subTitle = subTitle;
    this.desc = desc;
  }

}
