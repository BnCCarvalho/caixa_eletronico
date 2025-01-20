const cedulasDisponiveis = [100, 50, 10];
let saldoAtual = gerarSaldoAleatorio();

function gerarSaldoAleatorio() {
    return Math.floor(Math.random() * 100001); // Gera um saldo aleatório entre R$ 0 e R$ 100.000
}

function formatarNumeroComSeparadores(numero) {
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
}

function atualizarSaldo() {
    document.getElementById('saldo-atual').innerText = `Saldo Atual: ${formatarNumeroComSeparadores(saldoAtual)}`;
}

function atualizarMensagemCedulas() {
    const mensagem = `Cédulas disponíveis: ${cedulasDisponiveis.map(c => `R$ ${c}`).join(', ')}`;
    document.getElementById('cedulas-disponiveis').innerText = mensagem;
}

function calcularCedulas() {
    var valor = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(valor) || valor < Math.min(...cedulasDisponiveis) || valor % Math.min(...cedulasDisponiveis) !== 0) {
        resultado.innerHTML = `Por favor, insira um valor válido, considerando multiplos da menor cédula disponível: (mínimo ${Math.min(...cedulasDisponiveis)}).`;
        return;
    }

    if (valor > saldoAtual) {
        resultado.innerHTML = 'Saldo insuficiente.';
        return;
    }

    let cedulas = {};
    let valorInicial = valor;

    for (let cedula of cedulasDisponiveis) {
        cedulas[cedula] = Math.floor(valor / cedula);
        valor = valor % cedula;
    }

    saldoAtual -= valorInicial;
    atualizarSaldo();

    resultado.innerHTML = Object.keys(cedulas).map(cedula => `<p>Cédulas de ${cedula}: ${cedulas[cedula]}</p>`).join('');
}

// Atualizar o saldo e a mensagem de cédulas disponíveis ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizarSaldo();
    atualizarMensagemCedulas();
});