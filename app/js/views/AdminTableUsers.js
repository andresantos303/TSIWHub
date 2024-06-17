import * as User from "../models/UserModel.js";

function catalogView() {
  User.init();

  renderTableUsers(User.findUsers());
}

// EXIBIR todos os utilizadores na tabela
function renderTableUsers(users = []) {
  let result = "";
  for (const user of users) {
    result += generateTableUsers(user);
  }
  document.getElementById("tableUtilizadores").innerHTML = result;

  // Editar FALTA FAZER
  const btnsSeeMore = document.getElementsByClassName("btn-warning");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      Testemunho.setCurrentTestemunho(button.id);
      location.href = "testemunho.html";
    });
  }

  // Eliminar
  const btnsDelete = document.getElementsByClassName("userDel");
  for (const button of btnsDelete) {
    button.addEventListener("click", () => {
      const userid = button.id;
      User.removerUsers(userid);
      alert(`Utilzador com o id ${userid} eliminado`);
      location.reload();
    });
  }
}

// GERAR CARTÃO COM todos os utilizadores
function generateTableUsers(user) {
  let result = ` 
    <tr>
        <th scope="row">${user.id}</th>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td><img src="${user.image}" width="50"/></td>
        <td>${user.type}</td>
        <td><button type="button" id="${user.id}" class="btn btn-warning">Editar</button></td>
        <td><button type="button" id="${user.id}" class="btn btn-danger userDel">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
