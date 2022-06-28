
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementsById("agradecimento"));
    //alert("Obrigado por clicar")

}

function redirecionar(){
    //window.open("https://brasil.un.org/pt-br/sdgs");
    window.location.href = "https://unccelearn.org/?lang=pt_br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");

}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1,n2){
    return n1 + n2;
}
*/


/* start Função Validar Idade
______________________________________

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade =prompt("Qual sua idade");
console.log(validaIdade(idade));

End Função Validar Idade
_____________________________________*/


/* start Função Soma
______________________________________

function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

End Função Soma
______________________________________*/


/* start Date
_______________________________________

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

End Date
______________________________________*/






/* start estrutura for
________________________________________

var count;
for(count=0; count <=5; count++){
    alert(count);
};

End estrutura for 
_______________________________________*/






/* start Laço de Repetição(While)
__________________________________________

var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};

End Laço de Repetição
__________________________________________*/





/* start Condicional
___________________________________________


var idade = prompt("Qual sua idade: ");
var idade =18;
if (idade >=18){
    alert("maior de idade");
}else{
    alert("manor de idade");

};

End Condicional
__________________________________________*/
