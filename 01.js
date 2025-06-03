/* 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
    if (mes == 2) {
        if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
            return dia <= 29;
        } else {
            return dia <= 28;
        }
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        return dia <= 30;
    } else {
        return dia <= 31;
    }
}   

console.log(ehDataValida(29, 2, 2000));