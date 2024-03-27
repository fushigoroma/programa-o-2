const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");

        }
       
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}const botoes = document.querySelectorAll(".contador");
const textos = document.querySelectorAll("2024-10-05T00:00:00");
