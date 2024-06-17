import * as Testemunho from "../../models/TestemunhoModel.js";

function catalogView() {
  Testemunho.init();

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
  const btnsSeeMore = document.getElementsByClassName("editTest");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      console.log(button.id)
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "editTest.html";
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
        <td><button type="button" id="${testemunho.id}" class="btn btn-warning editTest">Editar</button></td>
        <td><button type="button" id="${testemunho.name}" class="btn btn-danger testDel">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
