import * as User from "../../models/UserModel.js";

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
  const btnsSeeMore = document.getElementsByClassName("editUser");
  for (const button of btnsSeeMore) {
    button.addEventListener("click", () => {
      User.setUser(button.id);
      location.href = "editUser.html";
    });
  }

  // Eliminar
  const btnsDelete = document.getElementsByClassName("userDel");
  for (const button of btnsDelete) {
    button.addEventListener("click", () => {
      const username = button.id;
      User.removerUsers(username);
      alert(`Utilzador com o nome ${username} eliminado`);
      location.reload();
    });
  }

  // Logout
  const btnsLogout = document.getElementById("logout");
  btnsLogout.addEventListener("click", () => {
    User.logout();
    location.href = "index.html";
  });
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
        <td><button type="button" id="${user.id}" class="btn btn-warning editUser">Editar</button></td>
        <td><button type="button" id="${user.username}" class="btn btn-danger userDel">Eliminar</button></td>
    </tr>
  `;
  return result;
}


catalogView();
