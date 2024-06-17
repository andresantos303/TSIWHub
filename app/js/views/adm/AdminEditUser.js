import * as User from "../../models/UserModel.js";

function catalogView() {
  User.init();

  const utilizador = User.getCurrentUser();
  document.getElementById("userID").value = utilizador.id;
  document.getElementById("userNome").value = utilizador.username;
  document.getElementById("userPassword").value = utilizador.password;
  document.getElementById("userImagem").value = utilizador.image;


  document.querySelector("#editUserForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      User.editUser(document.getElementById("userID").value, {
        username: document.getElementById("userNome").value,
        type: document.getElementById("userTipo").value,
        image: document.getElementById("userImagem").value,
        password: document.getElementById("userPassword").value,
      });
      alert("Utilizador editado com successo!");

      setTimeout(() => {
        location.href = "../admin.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

catalogView();
