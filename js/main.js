var conteudo1 = document.getElementById("conteudo1");
var botaoCandidato = document.getElementById("candidato");
var botaoEmpresa = document.getElementById("empresa");

function mudarTexto(){
    botaoEmpresa.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #DAC3E8, 0 0 30px #DAC3E8, 0 0 40px #DAC3E8, 0 0 55px #DAC3E8, 0 0 75px #DAC3E8, 2px 2px 2px rgba(138, 91, 206, 0)";
    botaoCandidato.style.setProperty('text-shadow', 'initial');
    conteudo1.innerHTML = "Recebe candidatos adequados para as vagas abertas na sua empresa";
    conteudo2.innerHTML = "Faz seu perfil em 4 passos na nossa plataforma";
    conteudo3.innerHTML = "Vê todas as informações necessárias do seu futuro funcionário";
    conteudo4.innerHTML = "Pode entrar em contato com o candidato por meio da plataforma";
}

function mudarTexto2(){
    botaoCandidato.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #DAC3E8, 0 0 30px #DAC3E8, 0 0 40px #DAC3E8, 0 0 55px #DAC3E8, 0 0 75px #DAC3E8, 2px 2px 2px rgba(138, 91, 206, 0)";
    botaoEmpresa.style.setProperty('text-shadow', 'initial');
    conteudo1.innerHTML = "Recebe vagas de acordo com seu perfil";
    conteudo2.innerHTML = "Faz seu currículo completo pela nossa plataforma";
    conteudo3.innerHTML = "Se inscreve para uma vaga com apenas 1 clique";
    conteudo4.innerHTML = "Encontra as melhores empresas para você trabalhar";
}

function mudarPagina(){
    window.location.href = './registroEmpresa.html'
}

function mudarPagina2(){
    window.location.href = './registroCandidato.html'
}