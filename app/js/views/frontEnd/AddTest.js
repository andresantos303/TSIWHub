import * as Testemunho from "../../models/TestemunhoModel.js";

function addNewsView() {
  Testemunho.init();

  document.querySelector("#addTestForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      Testemunho.add(
        document.getElementById("txtnameTest").value,
        document.getElementById("txtTypeTest").value,
        document.getElementById("txtImageTest").value,
        document.getElementById("txtSubtitleTeste").value,
        document.getElementById("txtDescTest").value,
      );
      alert("Testemunho adicionado com sucesso!");

      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

addNewsView();
