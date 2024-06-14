import * as Noticia from "./models/NoticiaModel.js";
import * as User from "./models/UserModel.js";
import * as Testemunho from "./models/TestemunhoModel.js";

initdata();

function initdata() {
  // Notícias
  if (!localStorage.noticias) {
    const noticias = [
      {
        title: "Regulamento Geral Sobre Proteção de Dados",
        genre: "Atividades",
        image: "assets/images/data/image10.jpg",
        subTitle: "A Licenciatura em Tecnologias e Sistemas de Informação para a Web recebe Jorge Pinto Leite para um seminário sobre proteção de dados.",
        desc: "No dia 8 de abril de 2024, pelas 11h00, realiza-se o seminário 'Regulamento Geral sobre Proteção de Dados', com o orador convidado Jorge Pinto Leite, Professor do Instituto Superior de Engenharia do Porto (ISEP) e Encarregado de Proteção de Dados do P.PORTO. Neste seminário pretende-se sensibilizar os estudantes para a correta utilização e armazenamento de dados no desenvolvimento de aplicações, sobretudo os de natureza pessoal e institucional. A sessão decorre no anfiteatro B301, no âmbito da UC de Projeto II da Licenciatura em Tecnologias e Sistemas de Informação para a Web. Jorge Pinto Leite é Professor Adjunto do Departamento de Engenharia Informática (DEI) do Instituto Superior de Engenharia do Porto (ISEP), Encarregado de Proteção de Dados do P.PORTO desde 22 de maio de 2018, responsável de várias unidades curriculares da Licenciatura e Mestrado no DEI e no Departamento de Física do ISEP. É Coordenador do Centro de Estudos de Segurança e Privacidade do DEI, centro de serviços nas áreas de segurança e privacidade. É detentor do Título de Especialista em Engenharia Informática desde 2014, tendo prestado prova sob os temas de administração de sistemas e segurança.",
        date: "26 Março 2024"
      },
      {
        title: "Candidaturas aos mestrados",
        genre: "Atividades",
        image: "assets/images/data/image6.jpg",
        subTitle: "As candidaturas à 1.ª fase dos cursos de mestrado da Escola Superior de Media Artes e Design iniciam a 22 de abril.",
        desc: "Os cursos de mestrado lecionados na Escola Superior de Media Artes e Design asseguram uma especialização de natureza profissional, desenvolvendo competências  e qualificações profissionais nos domínios do cinema, fotografia, multimédia e design. São a opção ideal para aqueles que desejam prosseguir um percurso académico com potencial diferenciador, ancorado numa formação de excelência. MESTRADOS Cinema e Fotografia   — Especialização em Fotografia   — Especialização em Cinema de Ficção   — Especialização em Cinema Documental e Experimental Design — Especialização em Design Gráfico — Especialização em Design de Produto Media Digitais Interativos Candidaturas 1.ª fase de 22 de abril a 17 de maio de 2024  2.ª fase de 24 de junho a 5 de julho de 2024 3.ª fase de 5 a 23 de agosto de 2024 ",
        date: "04 Abril 2024",
      },
      {
        title: "Memórias em Liberdade",
        genre: "Atividades",
        image: "assets/images/data/image8.jpg",
        subTitle: "Espetáculo integrado nas Comemorações dos 50 Anos do 25 de Abril, promovido pela Câmara Municipal de Vila do Conde.",
        desc: "No próximo dia 24 de abril, pelas 22h00, os Paços do Concelho de Vila do Conde serão palco do espetáculo Memórias em Liberdade: 50 Olhares sobre o 25 de Abril em Vídeo Mapping. Este evento é realizado pelos estudantes da Licenciatura em Multimédia, com o apoio de docentes, e está integrado nas comemorações dos 50 anos do 25 de Abril promovidas pela Câmara Municipal de Vila do Conde. O 'Memórias em Liberdade' é uma homenagem visual aos 50 anos da Revolução dos Cravos. Utilizando a técnica de vídeo mapping, os estudantes retratam momentos significativos do 25 de Abril, proporcionando uma experiência imersiva aos espectadores. Este projeto reflete o compromisso da Escola Superior de Media Artes e Design com a educação e a cultura, e contribui para as celebrações deste marco histórico tão importante para Portugal. Todos estão convidados a participar nesta celebração da liberdade e da criatividade.",
        date: "22 Abril 2024"
      },
      {
        title: "5TH Internacional Computer Programming Education Conference",
        genre: "Atividades",
        image: "assets/images/data/image9.png",
        subTitle: "A 5.ª edição da International Computer Programming Education Conference vai realizar-se nos dias 27 e 28 de junho de 2024.",
        desc: "A ICPEC |  International Computer Programming Education Conference é uma conferência científica internacional que terá lugar no ISCTE - Instituto Universitário de Lisboa, nos dias 27 e 28 de junho de 2024. Mário Pinto e Ricardo Queirós, docentes do Departamento de Informática da ESMAD, fazem parte do Steering Committee. Esta conferência pretende ser um espaço de partilha entre docentes e investigadores para discutir temas que promovam novas metodologias, boas práticas, tendências, técnicas e ferramentas para melhorar o processo de ensino-aprendizagem, em particular em áreas relacionadas com a programação de computadores A chamada de submissão de artigos foi estendida até 5 de maio. Todos os artigos aceites serão publicados em acesso aberto na OASIcs e com indexação na SCOPUS e DBLP. Alguns tópicos de interesse da ICPEC: Computer programming environments, tools, and services Computing programmes, curricula, and courses Innovative use of technologies Computer programming languages, analytics and standardization",
        date: "26 Abril 2024",
      },
      {
        title: "Candidaturas às Pós-Graduações",
        genre: "Atividades",
        image: "assets/images/data/image7.jpg",
        subTitle: "Candidaturas aos cursos de pós-graduação da Escola Superior de Media Artes e Design.",
        desc: "Os cursos de pós-graduação lecionados na Escola Superior de Media Artes e Design abarcam uma grande diversidade de áreas, constituindo a opção ideal para aqueles que desejam prosseguir um percurso académico com potencial diferenciador, ancorado numa formação de excelência. PÓS-GRADUAÇÃO  Design de Interiores e Espaços Web Design Candidaturas 1.ª fase de 13 de maio a 9 de junho de 2024  2.ª fase de 4 a 14 de julho de 2024 3.ª fase de 26 de agosto a 11 de setembro de 2024 ",
        date: "26 Abril 2024",
      },
      {
        title: "Formação gratuita em VR e impressão 3D",
        genre: "Atividades",
        image: "assets/images/data/image3.jpg",
        subTitle: "Vagas limitadas! 5 participantes serão selecionados para uma viagem à Turquia com direito a bolsa de mobilidade e subsistência.",
        desc: "Prepare-se para uma incrível jornada de aprendizagem! De 13 a 16 de maio de 2024, participe na formação em Realidade Virtual e Impressão 3D, online, através do Zoom. Durante quatro dias intensivos, terá a oportunidade de explorar os conceitos essenciais destas tecnologias inovadoras. Não perca esta oportunidade de expandir os seus conhecimentos e se aventurar no mundo da Realidade Virtual e da Impressão 3D. Inscreva-se agora em vrp4youth.org e garanta o seu lugar!  Ao concluir o curso, receberá um certificado de participação. Inscrições  Esta formação encontra-se inserida no âmbito do Projeto VRP4YOUTH, no qual o principal objetivo é fornecer competências em RV e impressão 3D a jovens desempregados que não podem adquirir competências relacionadas com as tecnologias da nova geração nos processos de educação formal, e adquirir a capacidade de usar estas duas tecnologias de uma forma integrada nos processos de design e produção.",
        date: "30 Abril 2024",
      },
      {
        title: "Dia da Esmad",
        genre: "Atividades",
        image: "assets/images/data/image.png",
        subTitle: "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.",
        desc: "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto 14h30 | Receção dos Convidados 14h45 | Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda)  15h15 | Sessão de Abertura Presidente da ESMAD | Olívia Marques da Silva Presidente da AE ESMAD | Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim | Luís Diamantino Vereador da Câmara Municipal de Vila do Conde | Paulo Vasques Vice-Presidente do Politécnico do Porto | António Marques 16h00 | Entrega de Diploma do Mérito Académico 16h05 | Apresentações Virtuais de Media Artes e Design  16h45 | Encerramento da Sessão",
        date: "24 Maio 2024",
      },
      {
        title: "Project Rooms",
        genre: "Projetos",
        image: "assets/images/data/image5.png",
        subTitle: "Felícia Oliveira, alumni do Mestrado em Cinema e Fotografia, é a artista em destaque na segunda edição dos Project Rooms.",
        desc: "No próximo dia 4 de junho de 2024, a Ci.CLO  Plataforma de Fotografia apresenta os 6 artistas emergentes seleccionados pelas 6 escolas de arte parceiras da Bienal Fotografia do Porto para integrar os Project Rooms em 2024. A iniciativa terá lugar no Batalha Centro de Cinema, pelas 18h00. ARTISTAS: Ânia Pais (Faculdade de Belas Artes da Universidade de Lisboa) Elisa Vieira (Escola Superior Artística do Porto) Felícia Oliveira (Escola Superior de Media Artes e Design do Politécnico do Porto) Luísa Fernandes (Escola das Artes Católica Porto) Rodrigo Machado da Encarnação (Faculdade de Arquitectura da Universidade do Porto) Willian Ferreira (Faculdade de Belas Artes da Universidade do Porto) Esta apresentação assinala o início da segunda edição dos Project Rooms, que têm como intenção apoiar a produção de um portefólio sobre os projetos de final de curso, para ser apresentado a profissionais das artes e público geral. Os artistas emergentes seleccionados terão a oportunidade de discutir a produção e a apresentação do seu portefólio com três profissionais no campo das artes visuais — Vera Carmo, curadora independente, e os diretores artísticos da Bienal'23 Fotografia do Porto, Jayne Dyer e Virgílio Ferreira.",
        date: "31 Maio 2024",
      },
      {
        title: "INNOVATION DAY DA PORTO DESIGN FACTORY",
        genre: "Atividades",
        image: "assets/images/data/image2.png",
        subTitle: "A Porto Design Factory dinamiza o Innovation Day, que terá lugar no PORTIC.",
        desc: "O Innovation Day da Porto Design Factory é já no dia 6 de junho, a partir das 14h00, no PORTIC - Porto Innovation Center. Será uma oportunidade para assistir a palestras sobre inovação, testemunho de alumnus e para conhecer em detalhe a Pós-Graduação Internacional em Inovação Sistémica (GTI). Confirmadas as intervenções de Jeremy Hugh Aston, especialista em Design Industrial, André Oliveira, Technology Team Lead na TUI, e Rafael Ferreira, co-fundador e CTO na miio Electric. Participa e habilita-te a ganhar o Golden Ticket, acesso direto à Pós-graduação GTI com propina grátis. PROGRAMA 14h15 | Abertura Nuno Lopes Gama, Diretor Executivo do PORTIC 14h30 | Workshop Catapult your Idea 15h00 | Caso de Inovação miio Rafael Ferreira, CTO & Co-fundador do miio 15h30 | Co-criação internacional Design Produto Jeremy Aston, Especialista em Design Industrial 16h00 | Apresentação do GTI José Reis & Dirk Loyens | Coordenação da Porto Design Factory 17h00 | A minha experiência no GTI André Oliveira, Technology Team Lead, TUI Ricardo Alves, Gestor de Negócio Online, MC SONAE 18h00 | Encerramento e Sunset António Marques, Vice-Presidente do Politécnico do Porto",
        date: "03 Junho 2024",
      },
    ];
    noticias.forEach((noticia) => {
      Noticia.add(
        noticia.title,
        noticia.genre,
        noticia.image,
        noticia.subTitle,
        noticia.desc,
        noticia.date,
      );
    });
  }

  if (!localStorage.testemunhos) {
    const testemunhos = [
      {
        name: "Gonçalo Ribeiro",
        type: "Ex aluno/a",
        image: "assets/images/data/image4.jpg",
        subTitle: "Gonçalo Ribeiro, aluno da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na Natixis.",
        desc: "Gonçalo Ribeiro, aluno da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Junior Developer, na Natixis. Como Junior Developer, na Natixis, dedica-se ao desenvolvimento full stack em múltiplos projetos na área de Seguros — do Ramo Não Vida — associados ao Grupo BPCE, o segundo maior grupo bancário de França. Paralelamente, frequenta o Mestrado em Engenharia Informática, no ISEP. Conheceu a Natixis durante o evento Plug-in da ESMAD, depois, em março de 2022, começou um estágio curricular em automação de testes de software, e mais tarde avançou para um estágio profissional como Developer Intern. Esta experiência culminou na sua atual posição de Junior Developer, assumida em novembro de 2023. Gonçalo define que 'todo este percurso tem sido extremamente enriquecedor e desafiante, contribuindo significativamente para o meu crescimento pessoal e profissional'. Segundo o próprio 'a Licenciatura em Tecnologias e Sistemas de Informação para a Web revelou-se fundamental, proporcionando-me uma formação sólida e criativa no desenvolvimento de software, com ênfase especial em aplicações web e mobile. Os projetos práticos, e em particular o desafio de desenvolver aplicações com gamificação para o concurso GamifyIt, organizado pela ESMAD, permitiram-me não só aplicar conhecimentos teóricos em cenários reais, como também inovar e criar soluções criativas. A interação constante com um corpo docente experiente e dedicado, juntamente com o trabalho em equipa, enriqueceu enormemente a minha experiência'.",
      },
      {
        name: "Inês Reis",
        type: "Aluno/a de mestrado",
        image: "assets/images/data/image11.jpg",
        subTitle: "Inês Reis, aluna da Licenciatura em Tecnologias e Sistemas de Informação para a Web, frequenta atualmente o Mestrado em Sistemas e Media Interativos.",
        desc: "Citando a Inês 'digo, de coração cheio, que os três anos na licenciatura foram transformadores'. Inicialmente sem rumo, descobriu a sua paixão: o Design da Experiência do Utilizador e de Interfaces. 'A licenciatura, elogiada por muitos conhecidos pelas suas competências abrangentes, proporcionou-me não apenas formação profissional, mas também experiências académicas que nunca vou esquecer'. Inês fez o seu estágio na Kendir Studios, onde desempenhou o papel de Gestora de Projetos e UX Designer. Da altura do estágio, destaca a criação do recurso educativo digital Fibonacci e o Número de Ouro, premiado pela Direção-Geral de Educação. Realça, igualmente, as pilotagens em escolas de diversos concelhos, desde Vila Nova de Gaia a Sintra, para o Recurso Educativo Digital de 'Sustentabilidade', onde teve a oportunidade de estudar várias turmas de diferentes anos, desde o 7.º ao 9.º ano. Finalizou o estágio com o que, segundo a própria, foi a sua maior conquista até aos dias de hoje: pela primeira vez, na história do curso, obteve 20 valores no estágio. Inês Reis integrará a equipa da MOG Technologies, como Gestora de Projetos de Inovação, o que dará seguimento ao seu percurso profissional.",
      },    
      {
        name: "Nuno Costa",
        type: "Ex aluno/a",
        image: "assets/images/data/image12.jpg",
        subTitle: "Nuno Costa, aluno da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na MOG Technologies.",
        desc: "Nuno Costa, alumnus da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Assistente Convidado na Escola Superior de Media Artes e Design e como Software Developer na MOG Technologies. Durante a frequência do curso, em conjunto com dois colegas, conquistou o 1.º lugar no concurso internacional de programação I Juezlti Contest of EU Code Week. A jornada do Nuno na MOG teve início num evento organizado pela ESMAD, o Plug-in, que tem como objetivo promover uma ligação mais estreita entre os estudantes e as empresas. Durante o seu estágio na empresa, desenvolveu um projeto no ramo da educação, colaborando com parceiros de diferentes países europeus. Após a conclusão do estágio, Nuno foi convidado a integrar uma equipa de desenvolvimento da empresa onde estagiou. “Ingressar em TSIW preparou-me para os desafios do mundo profissional. Os diferentes projetos de grupo e o foco nas tecnologias mais recentes proporcionaram-me uma base sólida de conhecimentos e habilidades práticas, como o trabalho de equipa e resolução de problemas.” Como Assistente Convidado, compartilha o seu conhecimento na mesma instituição onde se formou, contribuindo para a formação de futuros profissionais na área.",
      },
      {
        name: "Professor Gonçalo",
        type: "Professor",
        image: "assets/images/data/image13.jpg",
        subTitle: "Gonçalo Ribeiro, aluno da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente na Natixis.",
        desc: "Gonçalo Ribeiro, aluno da Licenciatura em Tecnologias e Sistemas de Informação para a Web, trabalha atualmente como Junior Developer, na Natixis. Como Junior Developer, na Natixis, dedica-se ao desenvolvimento full stack em múltiplos projetos na área de Seguros — do Ramo Não Vida — associados ao Grupo BPCE, o segundo maior grupo bancário de França. Paralelamente, frequenta o Mestrado em Engenharia Informática, no ISEP. Conheceu a Natixis durante o evento Plug-in da ESMAD, depois, em março de 2022, começou um estágio curricular em automação de testes de software, e mais tarde avançou para um estágio profissional como Developer Intern. Esta experiência culminou na sua atual posição de Junior Developer, assumida em novembro de 2023. Gonçalo define que 'todo este percurso tem sido extremamente enriquecedor e desafiante, contribuindo significativamente para o meu crescimento pessoal e profissional'. Segundo o próprio 'a Licenciatura em Tecnologias e Sistemas de Informação para a Web revelou-se fundamental, proporcionando-me uma formação sólida e criativa no desenvolvimento de software, com ênfase especial em aplicações web e mobile. Os projetos práticos, e em particular o desafio de desenvolver aplicações com gamificação para o concurso GamifyIt, organizado pela ESMAD, permitiram-me não só aplicar conhecimentos teóricos em cenários reais, como também inovar e criar soluções criativas. A interação constante com um corpo docente experiente e dedicado, juntamente com o trabalho em equipa, enriqueceu enormemente a minha experiência'.",
      },
      
    ];
    testemunhos.forEach((testemunho) => {
      Testemunho.add(
        testemunho.name,
        testemunho.type,
        testemunho.image,
        testemunho.subTitle,
        testemunho.desc,
      );
    });
  }

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        id: 1,
        username: "user",
        password: "esmad",
        role:"client",
      },
      {
        id: 2,
        username: "admin",
        password: "esmad",
        role:"admin",
      },
    ];
    users.forEach((user) => {
      User.add(user.username, user.password, user.role);
    });
  }
}
