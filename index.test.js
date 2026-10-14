const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calcularRanking } = require('./index');

test('preserva faixas por vitórias e calcula saldo de derrotas', () => {
    const casos = [[0,'Ferro'],[9,'Ferro'],[10,'Bronze'],[20,'Bronze'],[21,'Prata'],[50,'Prata'],
        [51,'Ouro'],[80,'Ouro'],[81,'Diamante'],[90,'Diamante'],[91,'Lendário'],[100,'Lendário'],[101,'Imortal']];
    for (const [vitorias,nivel] of casos) {
        assert.equal(calcularRanking(vitorias, 2), `O Herói tem saldo de ${vitorias - 2} está no nível de ${nivel}`);
    }
});
test('rejeita valores inválidos em ambas as entradas', () => {
    for (const valor of [-1, NaN, Infinity, 2.5, '10', Number.MAX_SAFE_INTEGER + 1]) {
        assert.throws(() => calcularRanking(valor, 0), RangeError);
        assert.throws(() => calcularRanking(10, valor), RangeError);
    }
});
