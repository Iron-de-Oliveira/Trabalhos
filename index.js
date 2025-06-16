console.log("js carregado")
// função para resetar os bonecos do form
function resetarBonecosFem() {
    document.getElementById("woman").style.boxShadow = ""
    document.getElementById("woman").style.color = ""
}
function resetarBonecosMAs() {
    document.getElementById("man").style.boxShadow = ""
    document.getElementById("man").style.color = ""
}
// funções para mostar os textos 
function text_info(){
    document.getElementById("receber_info").innerText = "Bem-vindo(a) à Sua Calculadora de IMC! Descobrir e monitorar seu Índice de Massa Corporal (IMC) é um passo importante para entender melhor sua saúde❤. Aqui você encontrará uma ferramenta simples e eficaz para calcular o seu IMC de forma rápida e precisa.😁"
};


function text_escala() {
    const texto =
       `Categorias do IMC para adultos (a partir de 20 anos)
        As categorias de IMC são as seguintes:

        - Abaixo do peso: IMC menor que 18,5
        - Peso saudável: IMC entre 18,5 e 24,9
        - Sobrepeso: IMC entre 25,0 e 29,9
        - Obesidade: IMC igual ou maior que 30,0
        - Obesidade Classe I: IMC entre 30,0 e 34,9
        - Obesidade Classe II: IMC entre 35,0 e 39,9
        - Obesidade Classe III (Obesidade Severa/Mórbida): IMC igual ou maior que 40,0`;

        
        const el = document.getElementById("receber_info");
        el.innerHTML = ""; // Limpa o conteúdo
        let i = 0;

        function digitar() {
            if (i < texto.length) {
                const char = texto.charAt(i);
                el.innerHTML += char === '\n' ? '<br>' : char;
                i++;
                setTimeout(digitar, 5); // velocidade (ms) entre cada caractere
            }
        }

        digitar();
};

function text_limit() {
    const texto = `Limitações do IMC ❗❗

    - Não diferencia massa muscular de gordura: Pessoas muito musculosas, podem ter um IMC elevado sem ter excesso de gordura corporal.
    - Não considera a distribuição de gordura: O IMC não indica onde a gordura está localizada no corpo.
    - Variações para diferentes grupos populacionais: As categorias de IMC podem não ser totalmente precisas para certas etnias ou para idosos, onde o peso saudável pode variar.
    - Não é adequado para crianças e adolescentes: Para crianças e adolescentes (2 a 19 anos).`;

    const el = document.getElementById("receber_info");
            el.innerHTML = ""; // Limpa o conteúdo
            let i = 0;

            function digitar() {
                if (i < texto.length) {
                    const char = texto.charAt(i);
                    el.innerHTML += char === '\n' ? '<br>' : char;
                    i++;
                    setTimeout(digitar, 5); // velocidade (ms) entre cada caractere
                }
            }

            digitar();


}

function text_cal() {
    const texto = `Como o IMC é calculado?📟

    O IMC é calculado dividindo o peso de uma pessoa em quilogramas pela altura em metros ao quadrado. A fórmula é:

    IMC = peso (kg) / (altura (m))²

    Por exemplo, se você pesa 70 kg e mede 1,70 m:
    IMC = 70 / (1,70 * 1,70) = 70 / 2,89 ≈ 24,22 kg/m²`;

    const el = document.getElementById("receber_info");
        el.innerHTML = ""; // Limpa o conteúdo
        let i = 0;

        function digitar() {
            if (i < texto.length) {
                const char = texto.charAt(i);
                el.innerHTML += char === '\n' ? '<br>' : char;
                i++;
                setTimeout(digitar, 5); // velocidade (ms) entre cada caractere
            }
        }

        digitar();

}

// animação de transição do form para calculadora//
function trasition01(){
    document.getElementById("form1").style.transform = ("translateX(600PX)");
    document.getElementById("form1").style.transition = ("ease-in 0.3s")
    document.getElementById("calculadora").style.display = ("flex");
    document.getElementById("visualizar_info").style.transform = ("translateX(-800PX)")
    document.getElementById("visualizar_info").style.transition = ("ease-in 0.3s")

    setTimeout(() => {
        document.getElementById("form1").style.display = "none"
    }, 300);

    setTimeout(() => {
        document.getElementById("visualizar_info").style.transform = ("translateX(0)")
    }, 500);

    setTimeout(() => {
        document.getElementById("calculadora").style.transition = ("ease-in 0.3s")
        document.getElementById("calculadora").style.transform = ("translateX(0)")
    }, 600);
}

function trasition02(){
    document.getElementById("visualizar_info").style.transition = ("ease-in 0.3s")
    document.getElementById("visualizar_info").style.transform = ("translateX(-900PX)")
    document.getElementById("calculadora").style.transform = ("translateX(600PX)");
    document.getElementById("calculadora").style.transition = ("ease-in 0.3s")
    document.getElementById("form1").style.display = ("flex");
    setTimeout(() => {
        document.getElementById("calculadora").style.display = "none"
    }, 300);

     setTimeout(() => {
        document.getElementById("visualizar_info").style.transform = ("translateX(0)")
    }, 500);

    setTimeout(() => {
        document.getElementById("form1").style.transition = ("ease-in 0.3s")
        document.getElementById("form1").style.transform = ("translateX(0)")
    }, 600);
}



// função que define as cores do bonecos no form
function cor_azul(){
    document.getElementById("man").style.boxShadow = "rgb(122, 213, 255)"
    document.getElementById("man").style.color = "rgb(122, 213, 255)"
}
function cor_rosa(){
    document.getElementById("woman").style.boxShadow = "rgb(255, 0, 255)"
    document.getElementById("woman").style.color = "rgb(255, 0, 255)"
}

// função para enviar o genero
let genero = null;
function genero_feminino(){
    if(genero === null){
    genero = "feminino";
    console.log("genero add", genero)
    
    } else{ if(genero === "masculino"){
        genero = "feminino";
        console.log("genero add", genero)
    }}   
}

function genero_masculino(){
    if (genero === null){
    genero = "masculino";
    console.log("genero add", genero)
    } else {if (genero === "feminino"){
        genero = "masculino";
        console.log("genero add", genero)
    }}
}

// função para enviar os dados via localStorage
function coletar_dados(){

    const nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;

    localStorage.setItem("genero", genero)
    localStorage.setItem("nome", nome)
    localStorage.setItem("altura", altura)
}

// // // // // //// // // // //// 
//         calculadora         // 
// // // // // //// // // ///////
function exibir_dados() {
    let nome = localStorage.getItem("nome");
    let altura = localStorage.getItem("altura");
    let genero = localStorage.getItem("genero");

    document.getElementById("user_nome").innerHTML = `Olá ${nome}`;
    document.getElementById("user_altura").innerHTML = `Sua altura: ${altura}M`;

    if (genero === "masculino") {
        document.getElementById("span_icon").innerHTML = `man`;
        document.getElementById("vermelho").innerHTML = `man`;
        document.getElementById("laranja").innerHTML = `man`;
        document.getElementById("verde").innerHTML = `man`;
        document.getElementById("roxo").innerHTML = `man`;
    }
    if(genero === "feminino"){
        document.getElementById("span_icon").innerHTML = `woman`;
        document.getElementById("vermelho").innerHTML = `woman`;
        document.getElementById("laranja").innerHTML = `woman`;
        document.getElementById("verde").innerHTML = `woman`;
        document.getElementById("roxo").innerHTML = `woman`;
    }
}

function calculo_imc(altura, peso){
    return peso / (altura * altura);
}

function resetarBonecos() {
    const bonecos = ["roxo", "verde", "laranja", "vermelho"];
    const textos = ["abaixo", "normal", "acima", "obeso"];

    bonecos.forEach(id => {
        const el = document.getElementById(id);
        el.style.filter = "";
        el.style.color = "";
    });

    textos.forEach(id => {
        const el = document.getElementById(id);
        el.innerText = "";
        el.style.color = "";
    });
}

function reload(){
    window.location.reload()
}

console.log(calculo_imc())


function resultado_IMC(imc){
    return{
        // img roxa
    abaixo: imc < 18.5 ? "Abaixo do peso" : "",cor01: "#9900ff", 
    satura01:imc < 18.5 ? "saturate(200%) drop-shadow(0px 0px 5px #9900ff)" : "", 
        // img verde
    normal: imc >= 18.5 && imc <= 24.99 ? "Peso saudável" : "", cor02: "#00ff1a", 
    satura02: imc >= 18.5 && imc <= 24.99 ?"saturate(100%) drop-shadow(0px 0px 5px #00ff1a)" : "", 
        // img laranja
    acima: imc >= 25 && imc <= 29.9 ? "Acima do peso" : "", cor03:"orange", 
    satura03:imc >= 25 && imc <= 29.9 ? "saturate(100%) drop-shadow(0px 0px 5px #ff8000)" : "",
        // img vermelha
    obeso: imc >= 30 ? "Obesidade" : "", cor04: "red", 
    satura04: imc >= 30 ? "saturate(100%) drop-shadow(0px 0px 5px #ff0000)" : "",
    }
}

document.getElementById("calculadora").addEventListener("submit", function(event){
    event.preventDefault();
    resetarBonecos(); 

    let peso = document.getElementById("peso").value;
    console.log(peso)
    let altura = localStorage.getItem("altura")
  
     // Trocar vírgula por ponto (caso usuário use vírgula)
    altura = altura ? altura.replace(",", ".") : "";
    peso = peso ? peso.replace(",", ".") : "";

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // Verifica se valores são válidos
    if (isNaN(altura) || isNaN(peso)) {
        alert("Altura ou peso inválidos. Verifique os dados.");
        return;
    }

    var imc = calculo_imc(altura, peso);
    var resultado = resultado_IMC(imc);

    document.getElementById("peso01").innerHTML = imc.toFixed(2);
    if (imc < 18.5) {
        document.getElementById("roxo").style.filter = resultado.satura01;
        document.getElementById("roxo").style.color = resultado.cor01;
        document.getElementById("abaixo").style.color = resultado.cor01;
        document.getElementById("abaixo").innerText = resultado.abaixo;
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("verde").style.filter = resultado.satura02;
        document.getElementById("verde").style.color = resultado.cor02;
        document.getElementById("normal").style.color = resultado.cor02;
        document.getElementById("normal").innerText = resultado.normal;
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("laranja").style.filter = resultado.satura03;
        document.getElementById("laranja").style.color = resultado.cor03;
        document.getElementById("acima").style.color = resultado.cor03;
        document.getElementById("acima").innerText = resultado.acima;
    } else if (imc >= 30) {
        document.getElementById("vermelho").style.filter = resultado.satura04;
        document.getElementById("vermelho").style.color = resultado.cor04;    
        document.getElementById("obeso").style.color = resultado.cor04;
        document.getElementById("obeso").innerText = resultado.obeso;
    } else {
        console.log("Erro: IMC inválido");
    }

    return false;
});

window.onload = exibir_dados;
window.onload = text_info;
