function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }
  const titulo = document.querySelector(".digitando");
  ativaLetra(titulo);
}

escrevendoLetra();

function menuMobol() {
  const ativaMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("header .navegacao");

  ativaMenu.addEventListener("click", () => {
    ativaMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("ativado");
  });
}
function sobreMim() {
  const divEducacao = document.querySelectorAll(".educacao_content div");
  const liEducacao = document.querySelectorAll(".educacao_content ul li");
  const divExperiencia = document.querySelectorAll(".experiencia_content div");
  const liExperiencia = document.querySelectorAll(".experiencia_content ul li");

  divEducacao[0].classList.add("ativo");
  divExperiencia[0].classList.add("ativo");
  liEducacao[0].classList.add("ativo");
  liExperiencia[0].classList.add("ativo");

  function slideShow(index) {
    divEducacao.forEach((div) => {
      div.classList.remove("ativo");
    });
    liEducacao.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    divEducacao[index].classList.add("ativo");
    liEducacao[index].classList.add("ativo");
  }

  function slideShow2(index) {
    divExperiencia.forEach((div) => {
      div.classList.remove("ativo");
    });
    liExperiencia.forEach((botao) => {
      botao.classList.remove("ativo");
    });
    divExperiencia[index].classList.add("ativo");
    liExperiencia[index].classList.add("ativo");
  }

  liEducacao.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  liExperiencia.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}

sobreMim();

const listaAll = document.querySelectorAll(".projeto_armazenamento ul li");
const botaoGeral = document.querySelectorAll(".projects_models ul li");
const botaoAll = document.querySelectorAll(".projects_models .all");

function removeClick(index) {
  botaoGeral.forEach((item) => {
    item.classList.remove("ativo");
  });
  botaoGeral[index].classList.add("ativo");
}

botaoGeral.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeClick(index);
  });
});

botaoGeral.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currentButton = e.target;
    if (currentButton.classList.contains("all")) {
      showList(listaAll);
    }
  });
});
