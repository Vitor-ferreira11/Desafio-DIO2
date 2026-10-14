function calcularRanking(vitorias, derrotas) {
    if (![vitorias, derrotas].every(valor => Number.isSafeInteger(valor) && valor >= 0)) {
        throw new RangeError('Vitórias e derrotas devem ser inteiros não negativos.');
    }
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Definindo o nível com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibindo a mensagem final
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

if (require.main === module) {
    const rl = require('node:readline').createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
        rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
            try {
                if (![vitorias, derrotas].every(entrada => /^\d+$/.test(entrada.trim()))) {
                    throw new Error('Vitórias e derrotas devem ser inteiros não negativos.');
                }
                console.log(calcularRanking(Number(vitorias), Number(derrotas)));
            } catch (error) {
                console.error(error.message);
                process.exitCode = 1;
            } finally { rl.close(); }
        });
    });
}
module.exports = { calcularRanking };
