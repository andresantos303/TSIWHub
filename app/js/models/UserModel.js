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
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user.username === "admin") {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    location.href = "adm/admin.html";
  } else if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  } else {
    throw Error("Invalid login!");
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}

export function findUser(userId) {
  console.log(users, userId);
  return users.find((user) => user.id == userId);
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
