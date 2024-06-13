import * as Testemunho from "../models/TestemunhoModel.js";

function testemunhoView() {
  Testemunho.init();

  const testemunho = Testemunho.getCurrentTestemunho();
  console.log(testemunho)
  document.getElementById("name").innerHTML = testemunho.name;
  document.getElementById("type").innerHTML = testemunho.type;
  document.getElementById("subtitle").innerHTML = testemunho.subTitle;
  document.getElementById("desc").innerHTML = testemunho.desc;
  document.getElementById("image").src = testemunho.image;
}

testemunhoView();
