import * as Noticia from "./models/NoticiaModel.js";
import * as User from "./models/UserModel.js";

initdata();

function initdata() {
  // Notícias
  if (!localStorage.noticias) {
    const noticias = [
      {
        title: "Dia da Esmad 1",
        genre: "Atividades",
        image:"assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
      },
      {
        title: "Dia da Esmad 2",
        genre: "Atividades",
        image:"assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
      },
      {
        title: "Dia da Esmad 3",
        genre: "Atividades",
        image:"assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
      },
      {
        title: "Dia da Esmad 4",
        genre: "Atividades",
        image:"assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
      },
      {
        title: "Dia da Esmad 5",
        genre: "Atividades",
        image:"assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        likes: "0",
      },
    ];
    noticias.forEach((noticia) => {
      Noticia.add(
        noticia.title,
        noticia.genre,
        noticia.image,
        noticia.subTitle,
        noticia.desc,
        noticia.likes,
      );
    });
  }

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        id: 1,
        username: "AndreSantos",
        email: "40210109@esmad.ipp.pt",
        password: "andresantos",
      },
      {
        id: 2,
        username: "filipeMoco",
        email: "40210116@esmad.ipp.pt",
        password: "filipemoco",
      },
    ];
    users.forEach((user) => {
      User.add(user.username, user.email, user.password);
    });
  }
}
