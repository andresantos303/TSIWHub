let testemunhos = [];

// CARREGAR testemunhos DA LOCALSTORAGE
export function init() {
  if(localStorage.testemunhos) {
    const tempNews = JSON.parse(localStorage.testemunhos);
    for(let testemunho of tempNews) {
      testemunhos.push(new Testemunho(testemunho.name, testemunho.type, testemunho.image, testemunho.subTitle, testemunho.desc, testemunho.id));
    }
  } else {
    testemunhos = [];
  }
}

// ADICIONAR testemunho
export function add(name, type, image, subTitle, desc) {
  if (testemunhos.some((testemunho) => testemunho.name === name)) {
    throw Error(`A testemunho com o nome "${title}" já existe!`);
  } else {
    testemunhos.push(new Testemunho(name, type, image, subTitle, desc));
    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
  }
}


// EDITAR testemunho
export function editTestemunho(id, updatedData) {
  if (testemunhos.find((testemunho) => testemunho.id == id) == -1) {
    throw Error(`A testemunho com o ID "${id}" não existe!`);
  } else {
    testemunhos[id-1].name = updatedData.name || testemunhos[id-1].name;
    testemunhos[id-1].type = updatedData.type || testemunhos[id-1].type;
    testemunhos[id-1].image = updatedData.image || testemunhos[id-1].image;
    testemunhos[id-1].subTitle = updatedData.subTitle || testemunhos[id-1].subTitle;
    testemunhos[id-1].desc = updatedData.desc || testemunhos[id-1].desc;

    localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
  }
}

// REMOVER testemunho
export function removertestemunhos(name) {
  testemunhos = testemunhos.filter((testemunho) => testemunho.name !== name);
  localStorage.setItem("testemunhos", JSON.stringify(testemunhos));
}

// OBTER A testemunho ATUAL (TODO O OBJETO)
export function getCurrentTestemunho() {
  return testemunhos.find((testemunho) => testemunho.id == localStorage.getItem("testemunho"));
}

// DEFINIR A testemunho ATUAL (AQUELA QUE SERÁ VISTA NO DETALHE DA Noticia)
export function setCurrentTestemunho(id) {
  localStorage.setItem("testemunho", id);
}

// OBTER Testemunhos (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function getTestemunhos(filterName = "", filterType = "", isSorted = false) {
  let filteredTest = testemunhos.filter(
    (testemunho) =>
      (testemunho.name.toLowerCase().includes(filterName.toLowerCase()) || filterName === "") &&
      (testemunho.genre === filterType || filterType === "")
  );

  filteredTest = isSorted
    ? filteredTest.sort((a, b) => a.title.localeCompare(b.name))
    : filteredTest;

  return filteredTest.reverse();
}


function getNextId() {
  return testemunhos.length > 0 ? testemunhos.length + 1 : 1;
}


/* Classe que modela um testemunho */
 
class Testemunho {
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
