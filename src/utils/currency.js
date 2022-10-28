export const currencyFormatter = value => {
  const val = value || 0;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(val);
};

export const currencyParser = value => {
  try {
    let val = value;

    const locale = 'pt-BR';

    // para quando o input é limpo
    if (typeof val === 'string' && !val.length) {
      val = '0.00';
    }

    // detectando e analisando entre vírgula e ponto
    const group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, ''); // .

    const decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, ''); // ,

    let reversedVal = val.replace(new RegExp(`\\${group}`, 'g'), '');

    //  => R$ 12.34,56 -> R$ 1234,56

    reversedVal = reversedVal.replace(new RegExp(`\\${decimal}`, 'g'), '.');
    //  => R$ 1234,56 -> R$ 1235.56

    // remove tudo menos numero e ponto(.)
    reversedVal = reversedVal.replace(/[^0-9.]/g, '');
    //  => R$ 1234.56 -> 1234.56

    // appending digits properly
    const digitsAfterDecimalCount = (reversedVal.split('.')[1] || []).length;

    const needsDigitsAppended = digitsAfterDecimalCount > 2;

    if (needsDigitsAppended) {
      reversedVal *= 10 ** (digitsAfterDecimalCount - 2); // expoente ex.: 10^3
    } else if (digitsAfterDecimalCount < 2) {
      reversedVal /= digitsAfterDecimalCount ? 10 : 100; // se o valor for com 1 decimal, então divide por 10
    } else {
      reversedVal *= 1;
    }

    return Number.isNaN(reversedVal) ? 0 : reversedVal;
  } catch (error) {
    // return console.error(error);
    return error;
  }
};
