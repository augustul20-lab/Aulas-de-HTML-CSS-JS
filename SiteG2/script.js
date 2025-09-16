// Objeto que armazena as notícias separadas por categoria
const noticias = {
  esporte: [
    {
      titulo: "Cruzeiro x Atlético-MG: quem mais trocou de técnico no século?",
      conteudo: "Raposa e Galo acumulam 13 treinadores em comum no atual século. Rivais nas quartas de final da Copa do Brasil, Cruzeiro e Atlético-MG trilharam caminhos diferentes na temporada. Mas com algo em comum: a troca de treinadores. Jorge Sampaoli chegou na última semana, substituindo Cuca; Leonardo Jardim no início da temporada para o lugar de Fernando Diniz. No século, o número de mudanças técnicas nos rivais é bem próxima.",
      imagem: "esporte.avif"
    }
  ],
  politica: [
    {
      titulo: "Julgamento de Bolsonaro, dia 4: como foi o voto de Fux para absolver o ex-presidente de todos os crimes; placar é de 2 x 1 pela condenação",
      conteudo: "O ministro Luiz Fux, da Primeira Turma do STF (Supremo Tribunal Federal), votou nesta quarta-feira (10), quarto dia do julgamento da trama golpista, para absolver o ex-presidente Jair Bolsonaro de todos os crimes. Em sessão que durou mais de 13 horas, Fux divergiu dos ministros Alexandre de Moraes (relator) e Flávio Dino, e o placar é de 2 x 1 pela condenação.",
      imagem: "politica.avif"
    }
  ],
  entretenimento: [
    {
      titulo: "O agente secreto no Oscar 2026'O Agente Secreto' ganha dois prêmios de melhor filme no 29º Festival de Cine de Lima",
      conteudo: "Mais uma vitória do cinema nacional! 'O Agente Secreto' de Kleber Mendonça Filho, recebeu, na noite desse sábado (16), dois prêmios no 29º Festival de Cine de Lima. O filme estrelado por Wagner Moura foi eleito Melhor Filme do Júri Oficial e Melhor Filme pela crítica internacional. 'O Agente Secreto' é um dos filmes na disputa para ser indicado pelo Brasil a disputar uma vaga no Oscar de Melhor Filme Internacional. 'O Agente Secreto' já tem lançamento confirmado em 94 países. O filme estreará em Nova York em 26 de novembro, seguido de um lançamento em Los Angeles em 5 de dezembro. A estreia nos cinemas de todo o Brasil acontece no dia 6 de novembro. ",
      imagem: "entretenimento.avif"
    }
  ],
  famosos: [
    {
      titulo: "Altas Horas grava especial com Caetano Veloso para celebrar seus 25 anos",
      conteudo: "Os 25 anos do Altas Horas vai ser especial. Para comemorar o aniversário do programa, a atração comandada por Serginho Groisman resolveu homenagear ninguém menos que Caetano Veloso, um dos maiores nomes da música brasileira. A exibição está prevista para outubro, mês do aniversário do Altas. O especial vai relembrar também histórias de bastidores e depoimentos emocionantes sobre a importância de Caetano para a nossa cultura.",
      imagem: "famosos.avif"
    }
  ]
};

// Lista de notícias que aparecem na página inicial
const noticiasIniciais = [
  {
    titulo: "Agente de segurança investigado no Ceará",
    conteudo: "Um agente de segurança pública do Crato, no Cariri cearense, foi alvo de uma operação Ministério Público, deflagrada nesta sexta-feira (12), por suspeita de continuar recebendo salário enquanto cursa medicina em uma universidade do Paraguai. A operação, nomeada de 'Clandestino', foi realizada por meio do Núcleo de Investigação Criminal (Nuinc). A ofensiva também apura a conduta de outro agente, que supostamente sabia da prática criminosa.",
    imagem: "medicina.png"
  },
  {
    titulo: "Trump propõe sanções à Rússia",
    conteudo: "O presidente dos Estados Unidos, Donald Trump, propôs neste sábado (13) aos países da Organização do Tratado do Atlântico Norte (Otan) impor um grande pacote de 'sanções severas' à Rússia. Ele disse que os EUA também estão dispostos a sancionar mais o governo de Vladimir Putin, mas impôs, como condição, que os países europeus do bloco deixem de comprar petróleo russo.",
    imagem: "donaldtrump.png"
  },
  {
    titulo: "Delegado Ruy Ferraz Fontes é executado a tiros no litoral de SP",
    conteudo: "Ruy Ferraz Fontes, ex-delegado-geral de São Paulo e secretário de Administração de Praia Grande, no litoral paulista, foi executado a tiros nesta segunda-feira (15), enquanto dirigia um carro na cidade. Segundo a Polícia Militar, homens desceram de outro veículo e atiraram contra o automóvel da vítima. Ruy Fontes foi delegado-geral de São Paulo entre 2019 e 2022 e atuou por mais de 40 anos na Polícia Civil. Teve papel central no combate ao crime organizado e foi pioneiro nas investigações sobre o PCC. Comandou divisões como DEIC, DENARC e Homicídios, além de dirigir o Decap.",
    imagem: "delegadoruy.png"
  }
];
// Referência ao elemento HTML onde as notícias serão exibidas
const container = document.getElementById("noticias");
// Referência ao botão de voltar para a página inicial
const botaoVoltar = document.getElementById("voltar");
// Função que renderiza uma lista de notícias na tela
function renderizarNoticias(lista) {
  container.innerHTML = "";
// Para cada notícia da lista, cria um bloco HTML e adiciona ao container
  lista.forEach(noticia => {
    const div = document.createElement("div");
    div.className = "noticia";
// Aplica a classe CSS para estilização
// Define o conteúdo HTML da notícia (imagem, título e texto)
    div.innerHTML = `
      <img src="imagens/${noticia.imagem}" alt="${noticia.titulo}" class="imagem-noticia">
      <h2>${noticia.titulo}</h2>
      <p>${noticia.conteudo}</p>
    `;
    container.appendChild(div); // Adiciona a notícia ao container
  });
}

// Função que exibe as notícias de uma categoria específica
function mostrarCategoria(categoria) {
  renderizarNoticias(noticias[categoria]); // Renderiza as notícias da categoria escolhida
  botaoVoltar.style.display = "inline-block"; // Mostra o botão de voltar

  // Remove a classe 'ativo' de todos os links do menu
  document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("ativo"));
  // Adiciona a classe 'ativo' ao link da categoria selecionada
  const linkAtivo = document.querySelector(`a[onclick="mostrarCategoria('${categoria}')"]`);
  if (linkAtivo) linkAtivo.classList.add("ativo");
}

// Função que exibe as notícias iniciais da página principal
function mostrarNoticiasIniciais() {
  renderizarNoticias(noticiasIniciais);// Renderiza as notícias iniciais
  botaoVoltar.style.display = "none"; // Esconde o botão de voltar
// Remove destaque de qualquer link de categoria
  document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("ativo"));
}

// Adiciona um evento ao botão de voltar para retornar à página inicial
botaoVoltar.addEventListener("click", mostrarNoticiasIniciais);
// Quando a página carrega, exibe as notícias iniciais automaticamente
window.onload = mostrarNoticiasIniciais;
