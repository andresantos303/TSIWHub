import * as User from "../models/UserModel.js";

function userView() {
  User.init();

  const user = User.getUserLogged();
  document.getElementById("name").innerHTML = user.username;
  document.getElementById("type").innerHTML = user.type;
  document.getElementById("image").src = user.image;


  // Ver mais
  const btnsLogout = document.getElementById("logout");
  btnsLogout.addEventListener("click", () => {
      User.logout();
      location.href = "index.html";
    });
}

userView();
