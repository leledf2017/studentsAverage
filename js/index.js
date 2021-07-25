
const btnInter = () => {
    let name = document.querySelector('#name').value;
    
    let nota1 = parseFloat(document.querySelector('#n1').value);
    let nota2 = parseFloat(document.querySelector('#n2').value);
    let nota3 = parseFloat(document.querySelector('#n3').value);
    let nota4 = parseFloat(document.querySelector('#n4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let aprovado = `Calculando a Média final de <b>${name}</b><br><br>
    
    As notas obtidas foram: <mark>${nota1}</mark>, <mark>${nota2}</mark>, <mark>${nota3}</mark> e <mark>${nota4}</mark><br><br>
    
    A média final será <b><mark>${media}</mark></b><br><br>
    
    Parabéns, você foi <b>aprovado(a)</b>, continue trilhando o seu caminho de sucesso!<br>`

    let recuperacao = `Calculando a Média final de <b>${name}</b><br><br>
    
    As notas obtidas foram: <mark>${nota1}</mark>, <mark>${nota2}</mark>, <mark>${nota3}</mark> e <mark>${nota4}</mark><br><br>
    
    A média final será <b><mark>${media}</mark></b><br><br>
    
    Fique tranquilo(a), você não atingiu a pontuação mínima, mas ainda pode realizar a nossa avaliação de <b>Recuperação</b> e seguir com a sua caminhada.<br>`

    let reprovado = `Calculando a Média final de <b>${name}</b><br><br>
    
    As notas obtidas foram: <mark>${nota1}</mark>, <mark>${nota2}</mark>, <mark>${nota3}</mark> e <mark>${nota4}</mark><br><br>
    
    A média final será <b><mark>${media}</mark></b><br><br>
    
    Infelizmente você foi <b>Reprovado(a)</b>, precisará realizar uma dependência desta disciplina no ano subsequente.<br>`

    if(media >= 6){
        document.querySelector('#prgf').innerHTML = aprovado;
    }else{
        if(media >=4){
            document.querySelector('#prgf').innerHTML = recuperacao;
        }else{
            document.querySelector('#prgf').innerHTML = reprovado;
        }
    }

    
}
document.querySelector('#btn').addEventListener('click',btnInter);

