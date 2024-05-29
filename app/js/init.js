import * as Band from "./models/BandModel.js";
import * as User from "./models/UserModel.js";

initdata();

function initdata() {
  // Notícias
  if (!localStorage.noticias) {
    const bands = [
      {
        title: "Dia da Esmad",
        genre: "Atividades",
        cover:
          "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/b/9/c/6/b9c663834bfaa66bfc81ab2ac754a628.jpg",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
        id: "1",
      },
      {
        name: "RadioHead",
        genre: "Pop-Rock",
        cover:
          "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg",
        desc: "Great songs!",
        music: "xxx",
      },
      {
        name: "James",
        genre: "Pop-Rock",
        cover:
          "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg",
        desc: "The 90's were amazing!",
        music: "xxx",
      },
      {
        name: "Metallica",
        genre: "Metal",
        cover:
          "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860",
        desc: "Too much metal for my head",
        music: "xxx",
      },
      {
        name: "Placebo",
        genre: "Pop-Rock",
        cover: "https://i.ytimg.com/vi/9aIYBSiAEDk/0.jpg",
        desc: "Brian Molko is a star!",
        music: "xxx",
      },
    ];
    bands.forEach((band) => {
      Band.add(
        band.name,
        band.genre,
        band.cover,
        band.desc,
        band.music,
        band.userId
      );
    });
  }

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        id: 1,
        username: "user1",
        password: "pass1",
      },
      {
        id: 2,
        username: "user2",
        password: "pass2",
      },
    ];
    users.forEach((user) => {
      User.add(user.username, user.password);
    });
  }
}
