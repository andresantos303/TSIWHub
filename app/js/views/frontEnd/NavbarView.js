import * as User from "../../models/UserModel.js";

function navbarView() {
  User.init();

  // CONSTRUIR CONTEÚDO DA NAVBAR (VERIFICAR SE USER AUTENTICADO)
  let result = `
      <div class="container">
                <div id="site-header-inner">
                    <div class="header__logo">
                        <a href="index.html"><img style="width: 5em;" src="assets/images/logo/logo1.png" alt=""></a>
                    </div>
                    <nav id="main-nav" class="main-nav">
                        <ul id="menu-primary-menu" class="menu">
                            <li class="menu-item">
                                <a href="index.html#home">Ínicio</a>
                            </li>
                            <li class="menu-item">
                                <a href="index.html#sobre">Sobre o curso</a>
                            </li>
                            <li class="menu-item">
                                <a href="index.html#noticias">Notícias</a>
                            </li>
                            <li class="menu-item">
                                <a href="index.html#testemunhos">Testemunhos</a>
                            </li>
                            <li class="menu-item">
                                <a href="index.html#contactos">Contactos</a>
                            </li>
                        </ul>
                    </nav>            
  `;

  if (User.isLogged()) {
    result += `<a class="tf-button btn-effect" id="${User.getUserLogged().username}" href="perfil.html">
                        <span class="boder-fade"></span>
                        <span class="effect profile">Perfil</span>
                    </a>
                    <div class="mobile-button"><span></span></div>
                </div>
            </div>
                `;
  } else {
    result += `     
                    <a class="tf-button btn-effect" data-toggle="modal" data-target="#mdlRegister">
                        <span class="boder-fade"></span>
                        <span class="effect">Junte-se a nós</span>
                    </a>
                    <div class="mobile-button"><span></span></div>
                </div>
            </div>                
                `;
  }
  result += `</div>`;

  // INJETAR CONTEÚDO NA NAVBAR
  document.getElementById("header_main").innerHTML = result;

  // CLICAR NO BOTÃO DE REGISTAR
  document
    .querySelector("#frmRegister")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      // Gestão do formulário de Registo
      const registerUsername = document.getElementById("txtUsernameRegister");
      const registerPassword = document.getElementById("txtPasswordRegister");
      const registerPassword2 = document.getElementById("txtPasswordRegister2");
      try {
        if(registerUsername.value === "" || registerPassword2.value === "" || registerPassword.value === ""){
          throw Error("Todos os dados necessitam de ser preenchidos!");
        }
        if (registerPassword.value !== registerPassword2.value) {
          throw Error("As palavras-passe não coincidem");
        }
        User.add(registerUsername.value, registerPassword.value);
        displayMessage(
          "msgRegister",
          "Utilzador registado com sucesso!",
          "success"
        );
        setTimeout(() => {
          User.login(
            document.getElementById("txtUsernameRegister").value,
            document.getElementById("txtPasswordRegister").value
          );
          location.reload();
        }, 1000);
      } catch (e) {
        displayMessage("msgRegister", e.message, "danger");
      }
    });

  // CLICAR NO BOTÃO DE LOGIN
  document.querySelector("#frmLogin")?.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      if(document.getElementById("txtUsername").value === "" || document.getElementById("txtPassword").value === ""){
        throw Error("Todos os dados necessitam de ser preenchidos!");
      }
      User.login(
        document.getElementById("txtUsername").value,
        document.getElementById("txtPassword").value
      );
      displayMessage("msgLogin", "Utilizador entrou com sucesso", "success");
      
    } catch (e) {
      displayMessage("msgLogin", e.message, "danger");
    }
  });

  // CLICAR NO BOTÃO LOGOUT
  document.querySelector("#btnLogout")?.addEventListener("click", () => {
    User.logout();
    location.reload();
  });
}

function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

navbarView();
