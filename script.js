const frm = document.querySelector("form");
const inLetra = document.getElementById("inLetra");
const palavraMascaradaDisplay = document.getElementById("palavraMascaradaDisplay");
const tentativasRestantesDisplay = document.getElementById("tentativasRestantesDisplay");
const letrasTentadasDisplay = document.getElementById("letrasTentadasDisplay");
const mensagemDisplay = document.getElementById("mensagem");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnAdivinhar = document.querySelector("input[type='submit']");

// Constantes para configurações do jogo
const NUM_TENTATIVAS_INICIAIS = 6;
const TEXTO_LETRAS_NENHUMA = 'Nenhuma!';

const frutas = [
    'ABACATE', 'ABACAXI', 'ACEROLA', 'AMEIXA', 'AMORA', 'AÇAÍ', 'BACABA', 'BACURI', 'BANANA', 'BIRIBÁ', 'BLUEBERRY', 'CACAU',     'CAJÁ', 'CAJU', 'CAQUI', 'CARAMBOLA', 'CEREJA', 'CIDRA', 'CIRIGUELA', 'COCO', 'CUPUAÇU', 'DAMASCO', 'DURIÃO', 'FIGO', 'FRAMBOESA', 'FRUTA-DO-CONDE', 'GRAVIOLA', 'GOIABA', 'GROSELHA', 'JABUTICABA', 'JACA', 'JAMBO', 'JAMELÃO', 'JENIPAPO', 'KIWI',
    'LARANJA', 'LICHIA', 'LIMÃO', 'LONGAN', 'MAÇÃ', 'MAMÃO', 'MANGA', 'MARACUJÁ', 'MELANCIA', 'MELÃO', 'MIRTILO', 'MORANGO', 'NECTARINA', 'NONI', 'PEQUI', 'PÊRA', 'PÊSSEGO', 'PHYSALIS', 'PITANGA', 'PITAYA', 'PUXURI', 'RAMBUTAN', 'ROMÃ', 'SAPOTI', 'SERIGUELA', 'SIRIGUELA', 'TAMARINDO', 'TANGERINA', 'TORANJA', 'UMBU', 'UVA', 'CAJUZINHO', 'CEREJA-DO-MATO', 'GRUMIXAMA', 'JATOBÁ', 'MURICI', 'PINHA'
];

let frutaSecreta = '';
let palavraMascarada = '';
let letrasTentadas = [];
let tentativasRestantes = NUM_TENTATIVAS_INICIAIS;
let jogoTerminado = false;

// Funções auxiliares
const escolherFrutaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * frutas.length);
    return frutas[indiceAleatorio];
};

const criarPalavraMascaradaInicial = (palavra) => {
    return '_'.repeat(palavra.length);
};

const resetInput = () => {
    inLetra.value = '';
    inLetra.focus();
};

const displayMessage = (mensagem, tipo = 'info') => {
    mensagemDisplay.innerText = mensagem;
    mensagemDisplay.classList.remove('message-success', 'message-error', 'message-info');
    mensagemDisplay.classList.add(`message-${tipo}`);
};

const atualizarDisplay = () => {
    palavraMascaradaDisplay.innerText = palavraMascarada.split('').join(' ');
    tentativasRestantesDisplay.innerText = tentativasRestantes;
    letrasTentadasDisplay.innerText = letrasTentadas.length > 0 ? letrasTentadas.join(', ') : TEXTO_LETRAS_NENHUMA;
};

const iniciarJogo = () => {
    frutaSecreta = escolherFrutaAleatoria();
    palavraMascarada = criarPalavraMascaradaInicial(frutaSecreta);
    letrasTentadas = [];
    tentativasRestantes = NUM_TENTATIVAS_INICIAIS;
    jogoTerminado = false;

    displayMessage(''); // Limpa a mensagem
    inLetra.disabled = false;
    btnAdivinhar.disabled = false;
    btnReiniciar.style.display = 'none';
    atualizarDisplay();
    resetInput();
    // console.log("Fruta Secreta (apenas para debug):", frutaSecreta); // Remover para apresentação final
};

// Event Listeners
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (jogoTerminado) {
        displayMessage('O jogo já terminou. Clique em "Reiniciar Jogo" para jogar novamente.', 'info');
        return;
    }

    const letraDigitada = inLetra.value.toUpperCase();

    // Validação da entrada: deve ser uma única letra do alfabeto (incluindo caracteres especiais do português)
    if (!letraDigitada.match(/[A-ZÇÃÕÀÁÉÍÓÚÜ]/) || letraDigitada.length !== 1) {
        displayMessage('Por favor, digite apenas UMA letra do alfabeto.', 'error');
        resetInput();
        return;
    }

    if (letrasTentadas.includes(letraDigitada)) {
        displayMessage(`Você já tentou a letra "${letraDigitada}". Tente outra!`, 'info');
        resetInput();
        return;
    }

    letrasTentadas.push(letraDigitada);
    displayMessage(''); // Limpa a mensagem anterior

    if (frutaSecreta.includes(letraDigitada)) {
        // Atualiza a palavra mascarada usando uma abordagem funcional (map)
        palavraMascarada = frutaSecreta
            .split('')
            .map((char, index) => (char === letraDigitada ? char : palavraMascarada[index]))
            .join('');

        if (palavraMascarada === frutaSecreta) {
            displayMessage(`🎉 Parabéns! Você adivinhou a fruta "${frutaSecreta}"! 🎉`, 'success');
            jogoTerminado = true;
            inLetra.disabled = true;
            btnAdivinhar.disabled = true;
            btnReiniciar.style.display = 'block';
        }

    } else {
        tentativasRestantes--;
        displayMessage(`❌ A letra "${letraDigitada}" NÃO está na fruta. ❌`, 'error');

        if (tentativasRestantes <= 0) {
            displayMessage(`😔 Fim de jogo! A fruta secreta era "${frutaSecreta}". 😔`, 'error');
            jogoTerminado = true;
            inLetra.disabled = true;
            btnAdivinhar.disabled = true;
            btnReiniciar.style.display = 'block';
        }
    }

    atualizarDisplay();
    resetInput();
});

btnReiniciar.addEventListener("click", iniciarJogo);
document.addEventListener("DOMContentLoaded", iniciarJogo); 