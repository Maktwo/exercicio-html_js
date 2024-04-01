const form = document.getElementById('form-confirm');

formValid = false;

function numbervalid (ValB, ValA){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let ValA = parseFloat(document.getElementById('numero-a').value);
    let ValB = parseFloat(document.getElementById('numero-b').value);
    const messagesucess = 'formulario enviado com sucesso! Verificando: <b> Número A menor que o Número B!</B>';
    formValid = numbervalid(ValB, ValA);
    if (formValid){
        const containermessagesucess = document.querySelector('.success-message');
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'nenhum';

        numeroA.value = ' ';
        numeroB.value = ' ';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }    
})