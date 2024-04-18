const form = document.getElementById('form-sorteio');
let numeroA = document.getElementById('numero-A');
let numeroB = document.getElementById('numero-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = Number(numeroA.value);
    const valorB = Number(numeroB.value);
    const mensagemSucesso = `Parabéns, o número: <b>${numeroB.value}</b> é maior que o: <b>${numeroA.value}</b>, você está participando do sorteio!`;

    if(valorB > valorA) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 

    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
});

console.log(form);