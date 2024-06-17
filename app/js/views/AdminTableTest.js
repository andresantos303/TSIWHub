import * as Testemunho from "../models/TestemunhoModel.js";
import * as Noticia from "../models/NoticiaModel.js";
import * as User from "../models/UserModel.js";

function catalogView() {
  Testemunho.init();
  Noticia.init();
  User.init();

  renderTableTestemunho(Testemunho.getTestemunhos());
}

// EXIBIR todos os testemunhos na tabela
function renderTableTestemunho(testemunhos = []) {
  let result = "";
  for (const testemunho of testemunhos) {
    result += generateTableTestemunhos(testemunho);
  }
  document.getElementById("tableTestemunho").innerHTML = result;

  // Editar FALTA FAZER
  const btnsSeeMore = document.getElementsByClassName("btn-warning");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "testemunho.html";
    });
  }

  // Eliminar
  const btnsDelete = document.getElementsByClassName("testDel");
  for (const button of btnsDelete) {
    button.addEventListener("click", () => {
      const testemunhoName = button.id;
      Testemunho.removertestemunhos(testemunhoName);
      alert(`Testemunho com o nome ${testemunhoName} eliminado`);
      location.reload();
    });
  }
}

// GERAR CARTÃO COM todos os testemunhos
function generateTableTestemunhos(testemunho) {
  let result = ` 
    <tr>
        <th scope="row">${testemunho.id}</th>
        <td>${testemunho.name}</td>
        <td>${testemunho.type}</td>
        <td><img src="${testemunho.image}" alt="${testemunho.name}" width="50"/></td>
        <td>${testemunho.subTitle}</td>
        <td><div class="desc-scroll">${testemunho.desc}</div></td>
        <td><button type="button" id="${testemunho.id}" class="btn btn-warning testDel">Editar</button></td>
        <td><button type="button" id="${testemunho.name}" class="btn btn-danger">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
