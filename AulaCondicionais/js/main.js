function soma(n1,n2){
    return n1 + n2;
}


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
