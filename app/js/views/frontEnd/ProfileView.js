import * as User from "../../models/UserModel.js";

function userView() {
  User.init();

  const user = User.getUserLogged();
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

  document.getElementById("editUser").addEventListener("click", (event) => {
    event.preventDefault();
    try {
      User.editUser(user.id, {
        username: document.getElementById("name").value,
        type: document.getElementById("type").value,
        image: document.getElementById("image").value,
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
