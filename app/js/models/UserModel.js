let users = [];

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  if (localStorage.users) {
    const tempUsers = JSON.parse(localStorage.users);
    for (let user of tempUsers) {
      users.push(new User(user.username, user.password, user.type, user.image));
    }
  } else {
    users = [];
  }
}

// ADICIONAR UTILIZADOR
export function add(username, password, type, image) {
  if (type == undefined) {
    type = "Aluno"
  }
  if (image == undefined) {
    image = "assets/images/data/image13.jpg"
  }
  if (users.some((user) => user.username === username)) {
    throw Error(`Um utilizador com o nome "${username}" já existe!`);
  } else {
    users.push(new User(username, password, type, image));
    localStorage.setItem("users", JSON.stringify(users));
  }
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  try {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user.username === "admin") {
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      setTimeout(() => {
        location.href = "admin.html";
      }, 1000);
    } else if (user) {
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.reload();
      }, 1000);
      return true;
    } else {
      throw Error("Invalid login!");
    }
  }catch (e) {
    throw Error("Username ou password incorretas!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

export function removerUsers(username) {
  users = users.filter((user) => user.username !== username);
  localStorage.setItem("users", JSON.stringify(users));
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

export function setUser(userId) {
  localStorage.setItem("user", userId);  
}

// OBTER o utilizador atual
export function getCurrentUser() {
  return users.find((user) => user.id == localStorage.getItem("user"));
}

export function findUsers() {
  return users;
}

// EDITAR utilizador
export function editUser(id, updatedData) {
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex === -1) {
    throw Error(`O utilizador com o ID "${id}" não existe!`);
  } else {
    const user = users[userIndex];
    user.username = updatedData.username;
    user.type = updatedData.type;
    user.image = updatedData.image;
    user.password = updatedData.password;
    localStorage.setItem("users", JSON.stringify(users));
    sessionStorage.setItem("loggedUser",JSON.stringify(user));
  }
}

function getNextId() {
  return users.length > 0 ? users.length + 1 : 1;
}

/**
 * CLASSE QUE MODELA UM UTILIZADOR NA APLICAÇÃO
 */
class User {
  id = null;
  username = "";
  password = "";
  type = "";
  image = "";

  constructor(username, password, type, image) {
    this.id = getNextId();
    this.username = username;
    this.password = password;
    this.type = type;
    this.image = image;
  }
}
