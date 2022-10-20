// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento de aba
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab)
        showTabInfo(tab)

    });
});

function selectTab(tab) {
     //  passo 3 - quando o usuário clicar, desmarcar a aba selecionada
     const tabSelected = document.querySelector(".tab.selected");
     tabSelected.classList.remove("selected");

     // passo 4 - marcar a aba clicada como selecionado
     tab.classList.add("selected");
}

function showTabInfo(tab) {
    // passo 5 - esconder o conteúdo anterior
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    // passo 6 - mostrar o conteúdo selecionado
    const idTabInfoElement = `information-${tab.id}`

    const showedInfo = document.getElementById(idTabInfoElement)
    showedInfo.classList.add("selected")
}