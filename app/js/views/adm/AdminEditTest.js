import * as Testemunho from "../../models/TestemunhoModel.js";

function catalogView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();
  document.getElementById("testemunhoID").value = testemunho.id;
  document.getElementById("testemunhoNome").value = testemunho.name;
  document.getElementById("testemunhoSubtitulo").value = testemunho.subTitle;
  document.getElementById("testemunhoDescricao").value = testemunho.desc;
  document.getElementById("testemunhoImagem").value = testemunho.image;

  document.querySelector("#editTestemunhoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      if(document.getElementById("testemunhoNome").value === "" || document.getElementById("testemunhoTipo").value === "" || document.getElementById("testemunhoImagem").value === "" || document.getElementById("testemunhoSubtitulo").value === "" || document.getElementById("testemunhoDescricao").value === ""){
        throw Error("Todos os dados necessitam de ser preenchidos!");
      }
      Testemunho.editTestemunho(document.getElementById("testemunhoID").value, {
        name: document.getElementById("testemunhoNome").value,
        type: document.getElementById("testemunhoTipo").value,
        image: document.getElementById("testemunhoImagem").value,
        subTitle: document.getElementById("testemunhoSubtitulo").value,
        desc: document.getElementById("testemunhoDescricao").value,
      });
      alert("Testemunho editado com successo!");

      setTimeout(() => {
        location.href = "../admin.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

catalogView();
