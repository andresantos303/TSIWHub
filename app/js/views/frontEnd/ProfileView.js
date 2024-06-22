import * as User from "../../models/UserModel.js";

function userView() {

  const user = User.getUserLogged();
  const tipo = user.type;
  document.getElementById("name").value = user.username;
  document.getElementById("password").value = user.password;
  document.getElementById("type").innerHTML += user.type;
  document.getElementById("image").src = user.image;
  document.getElementById("imageEdit").value = user.image;

  // Logout
  const btnsLogout = document.getElementById("logout");
  btnsLogout.addEventListener("click", () => {
    User.logout();
    location.href = "index.html";
  });

  document.querySelector("#editUser").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      if(document.getElementById("password").value === "" || document.getElementById("name").value === "" || document.getElementById("imageEdit").value === "" || document.getElementById("type").value === ""){
        throw Error("Todos os dados necessitam de ser preenchidos!");
      }
      User.editUser(user.id, {
        username: document.getElementById("name").value,
        type: tipo,
        image: document.getElementById("imageEdit").value,
        password: document.getElementById("password").value,
      });
      alert("Utilizador editado com successo!");

      setTimeout(() => {
        location.href = "../perfil.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

userView();
